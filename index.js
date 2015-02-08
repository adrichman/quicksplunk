var noop = function(){};
// underscore = document.createElement('script');
// underscore.src = "//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.7.0/underscore-min.js";
// document.body.appendChild(underscore);
var checkUnderscore = function(next){

    function wait(){
      setTimeout(checkUnderscore.bind(null, next), 500);
    };

    if (_ && _.each){
        var el = document.querySelector('[data-view="views/shared/searchbar/input/SearchField"]');

        if (el && el.children[1]){
          next(el);
        } else {
          wait();
        }

    } else {
        wait();
    }
};

var Templates = {
    containerTemplate: function(options){
        var container;

        container               = document.createElement('div');
        container.id            = options.id;
        container.style.display = 'none';

        return container;
    },

    listTemplate: function(options){
        var list;

        list            = document.createElement('select');
        list.size       = options.size;
        list.multiple   = options.multiple;

        list.classList.add('choice-list');

        return list;
    },

    listOptionTemplate: function(options){
        var listOption;

        listOption           = document.createElement('option');
        listOption.value     = options.choice;
        listOption.innerText = options.choice;

        if (options.selected) {
            listOption.selected = options.selected;
        }

        return listOption;
    },

    cssStringTemplate: function(){
        return ([
            "#choice-list-container {",
            "  display:none;",
            "  width:100%;",
            "}",
            ".choice-list {",
            "  width: 100%;",
            "  position: relative;",
            "  background-color: white;",
            "  font-size: 1.1rem;",
            "}"
        ].join('\n'));
    }
};

var matcher = new RegExp(/[a-zA-Z\-\_\|]+/);

var InputKeyEventHandlers = {
    _inputMethods: [
        'assignScanOptions',
        'cleanAndScan',
        'assignBackspace',
        'assignPreviousAndCurrentWords',
        'assignSuggestedWords',
        'handleView'
    ],

    // assign backspace
    assignBackspace: function(){
        this.AC.backspace = 0;
    },

    // assign scan text options
    assignScanOptions: function(){
        this.AC.scanTextOptions = { str: null, addLastWord: false };
    },

    // clean & scan
    cleanAndScan: function(){
        this.AC.scanText(this.AC.scanTextOptions);
        this.AC.cleanStatement();
    },

    // assign previous & current word
    assignPreviousAndCurrentWords: function(){
        var i = this.AC.currentStatement.length - 1;
        var selectionRange   = (this.AC.selectionEl.selectionEnd - this.AC.selectionEl.selectionStart) || this.AC.selectionEl.selectionStart;

        this.AC.getCurrentStatementLengths();

        if (i < 0 && !selectionRange) {
            this.AC.currentWord  = "";
            this.AC.previousWord = "";
            return;
        }

        while(i < 0){

            if (i === 0 && selectionRange <= this.AC.currentStatementLengths[i]) {
                this.AC.currentWord = this.AC.currentStatement[i];
                this.AC.previousWord = this.AC.currentStatement[i+1];
                return;
            }

            if (selectionRange > this.AC.currentStatementLengths[i]){

                this.AC.currentWord = this.AC.currentStatement[i+1] || this.AC.currentWord || "";

                while (!modifiers[this.AC.currentStatement[i].toLowerCase()] && i > -1){
                    i--;
                }

                this.AC.previousWord = this.AC.currentStatement[i];
                i = 0;
            }

            i--;
        }

    },

    // assign suggested words
    assignSuggestedWords: function(e){
        this.AC.suggestedWords.clearArray();

        if (this.AC.currentWord){
            _.each(modifiers[this.AC.currentWord.toLowerCase()], function(modifier){
                this.AC.suggestedWords.push(modifier);
            }, this);
        }

        if (this.AC.previousWord && modifiers[this.AC.previousWord.toLowerCase()]){
            _.each(modifiers[this.AC.previousWord.toLowerCase()], function(modifier){
                this.AC.suggestedWords.push(modifier);
            }, this);
        }

    },

    handleView: function(){
        console.log('handle view:', this.AC);
        if (!this.AC.currentWord.length || !this.AC.suggestedWords.length) {
            this.AC.choiceListContainerEl.style.display = 'none';
        }
    },

    handleEvent: function(e, ch){
        var eventArgs = arguments;
        console.log('InputEventHandler args:', eventArgs);

        _.each(this._inputMethods, function(method){
            this[method].apply(this, eventArgs);
        }, this);
    }

}


var AutoCompleter = function(options){
    this.trie                      = new Trie();
    this.lastCursor                = 0;
    this.backspace                 = 0;
    this.suggestedWords            = [];
    this.currentStatement          = [];
    this.currentStatementLengths   = [];
    this.currentWord               = "";
    this.previousWord              = "";
    this.parentEl                  = options.el;
    this.targetEl                  = options.el.children[1];
    this.selectionEl               = options.el.children[0];
    this.choiceListContainerEl     = null;

    this.keyCodeDict = {
        "86":   "Paste",
        "8":    "Backspace",
        "32":   "Space",
        "37":   "Arrows",
        "38":   "Arrows",
        "39":   "Arrows",
        "40":   "ArrowDown",
        "220":  "Pipe"
    };

    for (var i = 65; i < 91; i++) {
        this.keyCodeDict[i] = "Varchar";
    }

    this.trie.addWords(options.terms);
};

AutoCompleter.prototype.scanText = function(options){
    var addLastWord = options.addLastWord,
        str         = options.str;

    this.currentStatement = this.targetEl.innerText.split(' ');

    if (str) this.currentStatement.push(str);

    if (addLastWord) {
        this.trie.addWords(this.currentStatement);
    } else {
        this.trie.addWords(this.currentStatement.slice(0, -1));
    }
};


AutoCompleter.prototype.getCurrentWord = function(val){
    var getLen   = function(){ return this.currentStatement.length - 1 }.bind(this);
    var nextWord = this.currentStatement[getLen()] || "";
    var newWord;

    if (val){
        val = this.matches(val) ? val : "";

        if (!this.currentWord.length) {
            newWord = (val).match(matcher)
            if (newWord) {
                newWord = newWord[0];
                this.currentStatement.push(newWord);
            }

        } else {
            newWord = (nextWord + val).match(matcher);
            if (newWord){
                newWord = newWord[0];
                this.currentStatement[getLen()] = newWord;
            }
        }

    } else {
        this.currentStatement[getLen()] = nextWord.substr(0, nextWord.length-1);
    }

    return this.currentStatement[getLen()] || "";
};

AutoCompleter.prototype.getCurrentStatementLengths = function(){
    var totalLength = 0;

    this.currentStatementLengths.clearArray();

    _.each(this.currentStatement, function(word){
        totalLength += word.length + 1;
        this.currentStatementLengths.push(totalLength);
    }, this);

    return this.currentStatementLengths;
};

AutoCompleter.prototype.getCursorWordBounds = function(newWordLength){
    var word = { start: 0, selectionEnd: 0, end: 0 };
    var i    = this.currentStatement.length - 1;

    this.getCurrentStatementLengths();

    this.lastCursor = this.lastCursor || this.selectionEl.selectionStart;

    word.selectionEnd = this.lastCursor;

    if (i===0){
        if (this.previousWord) {
            word.start        = this.previousWord.length + 1;
            word.selectionEnd = this.previousWord.length + 1;
        }
        word.end = word.start + newWordLength;
        return word;
    }

    while (i > -1){
        if (this.lastCursor >= this.currentStatementLengths[i]){
            word.start = this.currentStatementLengths[i];

            if (word.start + newWordLength > word.start + this.currentWord.length){
                word.selectionEnd = word.start + this.currentWord.length;
            } else {
                word.selectionEnd = word.start + newWordLength || (this.currentStatementLengths[i+1] - 1) || word.start;
            }

            word.end = word.start + newWordLength;
            return word;
        }

        i--;
    }

    return word;
}

AutoCompleter.prototype.stealFocus = function(e){
    this.choiceListContainerEl.children[0].focus();
};

AutoCompleter.prototype.cleanStatement = function(){
    this.currentStatement = _.filter(this.currentStatement, function(term){
        term.trim();
        term = _.filter(term.split(''), function(c){
            return this.matches(c);
        }, this).join('');

        return term;
    }, this);
};

AutoCompleter.prototype.addChoices = function(choices){
    var list      = this.choiceListContainerEl.children[0],
        size      = 0;

    list.innerHTML = "";

    _.each(choices, function(choice, idx) {
        console.log(choice, idx)
        selected = idx === 0 ? 'selected' : false;
        list.appendChild(Templates.listOptionTemplate({ choice: choice, selected: selected }));
        size++;
    }, this);

    this.choiceListContainerEl.size = size;
};

AutoCompleter.prototype.matches = function(str){
    return matcher.test(str);
};

AutoCompleter.prototype.attachStyles = function(){
    var style = document.createElement('style');

    style.innerHTML = Templates.cssStringTemplate();

    document.head.appendChild(style);
};

AutoCompleter.prototype.makeChoiceList = function(options){
    var parentEl  = options.el;

    this.choiceListEl          = Templates.listTemplate({ multiple: true, size: 3 });
    this.choiceListContainerEl = Templates.containerTemplate({ id: 'choice-list-container' });

    parentEl.appendChild(this.choiceListContainerEl);
    this.choiceListContainerEl.appendChild(this.choiceListEl);
};

AutoCompleter.prototype.assignHandler = function(options, keyCode, shiftKey){
    var key = this.keyCodeDict[keyCode];

    if (!key) return;

    if (key === 'Pipe' && !shiftKey) return;

    if (options.not  && key === options.not)  return;
    if (options.only && key !== options.only) return;

    if (options.only){
        key = options.only;
    }

    handlerString = "in" + key;

    return this.keyEventHandlers[ handlerString ];
};

AutoCompleter.prototype.handleSelectionElKeyEvents = function(options, e){
    var ch = String.fromCharCode(e.keyCode).toLowerCase() || "";
    var handler;

    if (e.repeat) return true;

    this.lastCursor = this.selectionEl.selectionStart;

    handler = this.assignHandler.call(this, options, e.keyCode, e.shiftKey);

    if ( !this.matches(ch) && (e.metaKey || !handler) ) return;

    handler && handler.handleEvent(e, ch);

    this.addChoices(this.suggestedWords);

    console.log('previousWord:',     this.previousWord);
    console.log('currentWord:',      this.currentWord);
    console.log('currentStatement:', this.currentStatement);
    console.log('suggested:',        this.suggestedWords);
    console.log('event:', e);

    if (this.choiceListContainerEl.style.display === 'none' &&
        this.choiceListContainerEl.children[0] &&
        !this.backspace && this.suggestedWords.length) {

        this.choiceListContainerEl.contentEditable  = true;
        this.choiceListContainerEl.style.display    = 'inline-block';
    }

};

AutoCompleter.prototype.handleChoiceListContainerElEvents = function(e){
    // up and down arrow keys
    if (e.keyCode === 40 || e.keyCode === 38 || (e.keyCode >= 65 && e.keyCode <= 90) ) return;

    if (e.keyCode === 9 || e.keyCode === 13) {
        // tab
        if (e.srcElement.value){
            var value = e.srcElement.value;
            var event = document.createEvent('TextEvent');
            var word  = this.getCursorWordBounds(value.length);

            this.currentWord = value.trim();

            console.log('wordstart:', word.start);
            event.initTextEvent('textInput', true, true, null, value);

            this.selectionEl.setSelectionRange(word.start, word.selectionEnd);
            this.selectionEl.dispatchEvent(event); // fire the event on the the textarea
            this.selectionEl.setSelectionRange(word.end, word.end);
        }

    }

    console.log(e, this)
    this.selectionEl.focus();
    this.choiceListContainerEl.style.display = 'none';
    e.preventDefault();

};

AutoCompleter.prototype.registerListeners = function(){
    this.selectionEl.onkeydown           = this.handleSelectionElKeyEvents.bind(this, { not : 'Backspace' });
    this.selectionEl.onkeyup             = this.handleSelectionElKeyEvents.bind(this, { only: 'Backspace' });
    this.choiceListContainerEl.onkeydown = this.handleChoiceListContainerElEvents.bind(this);
};

AutoCompleter.prototype.initializeKeyEventHandlers = function(){
    var keyEventHandlers = {};

    this.keyEventHandlers             = keyEventHandlers;
    this.keyEventHandlers.inArrows    = Object.create(InputKeyEventHandlers, { AC: { value: this }, name: { value: 'inArrows'    } });
    this.keyEventHandlers.inArrowDown = Object.create(InputKeyEventHandlers, { AC: { value: this }, name: { value: 'inArrowDown' } });
    this.keyEventHandlers.inBackspace = Object.create(InputKeyEventHandlers, { AC: { value: this }, name: { value: 'inBackspace' } });
    this.keyEventHandlers.inPaste     = Object.create(InputKeyEventHandlers, { AC: { value: this }, name: { value: 'inPaste'     } });
    this.keyEventHandlers.inPipe      = Object.create(InputKeyEventHandlers, { AC: { value: this }, name: { value: 'inPipe'      } });
    this.keyEventHandlers.inSpace     = Object.create(InputKeyEventHandlers, { AC: { value: this }, name: { value: 'inSpace'     } });
    this.keyEventHandlers.inVarchar   = Object.create(InputKeyEventHandlers, { AC: { value: this }, name: { value: 'inVarchar'   } });

    this.keyEventHandlers.inArrowDown.handleEvent = function(e){
        e.preventDefault();
        if (this.AC.choiceListContainerEl.style.display !== 'inline-block') {
            return;
        }

        if (e.metaKey || e.shiftKey || e.altKey) return;

        setTimeout(
            this.AC.stealFocus.bind(this.AC, 50)
        );
        return;
    };

    this.keyEventHandlers.inBackspace.assignBackspace = function(e){
        var selectionRange = this.AC.selectionEl.selectionEnd - this.AC.selectionEl.selectionStart;
        this.AC.backspace += ( selectionRange || 1);
    };

    this.keyEventHandlers.inBackspace.assignScanOptions = function(e){
        this.AC.scanTextOptions = { str: null, addLastWord: false };
    };

    this.keyEventHandlers.inSpace.assignScanOptions = function(e){
        this.AC.scanTextOptions = { str: null, addLastWord: true };
    };

    this.keyEventHandlers.inSpace.assignPreviousAndCurrentWords = function(e, ch){
        if (this.AC.currentStatement.length && this.AC.currentStatement[this.AC.currentStatement.length-1]){
            this.AC.previousWord = this.AC.currentStatement[this.AC.currentStatement.length-1];
        } else {
            this.AC.previousWord = this.AC.currentWord;
        }

        this.AC.currentWord = "";
    };

    this.keyEventHandlers.inSpace.assignSuggestedWords = function(e){
        if (!this.AC.currentWord){
            this.AC.suggestedWords.clearArray();
        }

        if (this.AC.previousWord && modifiers[this.AC.previousWord.toLowerCase()]){
            _.each(modifiers[this.AC.previousWord.toLowerCase()], function(modifier){
                this.AC.suggestedWords.push(modifier);
            }, this);

            this.AC.suggestedWords.sort();
        }
    };

    this.keyEventHandlers.inSpace.handleView = function(e){
        console.log('INSPACE HANDLE VIEW', this);
        // this.prototype.constructor.handleView(e);
        if (this.AC.choiceListContainerEl.style.display != 'none'){
            this.AC.choiceListContainerEl.style.display = 'none';
        }
    };

    this.keyEventHandlers.inPaste.assignPreviousAndCurrentWords = function(e, ch){
        if (e.metaKey){
            var last = this.AC.currentStatement.length-1;
            this.AC.currentWord = this.AC.currentStatement[last];
        }
    };

    this.keyEventHandlers.inPipe.assignScanOptions = function(e){
        this.AC.scanTextOptions = { str: null, addLastWord: false };
    };

    this.keyEventHandlers.inPipe.assignPreviousAndCurrentWords = function(e, ch){
        this.AC.currentWord  = "";
        this.AC.previousWord = "";
    };

    this.keyEventHandlers.inVarchar.assignPreviousAndCurrentWords = function(e, ch){
        console.log('inVarchar.assignPreviousAndCurrentWords args:', arguments);
        this.AC.currentWord = this.AC.getCurrentWord(ch);
    };

    this.keyEventHandlers.inVarchar.assignSuggestedWords = function(e){
        if (this.AC.currentWord){
            this.AC.suggestedWords = this.AC.trie.getWords(this.AC.currentWord.trim());
        } else {
            this.AC.suggestedWords.clearArray();
        }
        keyEventHandlers.inSpace.assignSuggestedWords.call(this, e);

    };
};

AutoCompleter.prototype.initialize = function(options){
    console.log('init');

    this.initializeKeyEventHandlers();
    this.attachStyles();
    this.makeChoiceList({ el: this.parentEl });
    this.registerListeners();
};

document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        checkUnderscore(function(el){
            console.log('complete')
            window.autoComplete = new AutoCompleter({ el : el, terms: splunkTerms });
            window.autoComplete.initialize();
        });
    }
};
