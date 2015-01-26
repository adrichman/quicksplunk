var noop = function(){ return 0; };
underscore = document.createElement('script');
underscore.src = "//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.7.0/underscore-min.js";
document.body.appendChild(underscore);


var checkUnderscore = function(next){
    if (_.each){
        next();
    } else {
        setTimeout(checkUnderscore.bind(null, next), 500);
    }
}

var modifiers = JSON.parse(
  '{"abstract":["maxterms","maxlines"],"accum":["field","newfield"],"addcoltotals":["fieldlist","labelfield","label"],"addinfo":[],"addtotals":["field-list","row","col","fieldname","labelfield","label"],"analyzefields":[],"anomalies":["threshold","labelonly","normalize","maxvalues","field","blacklist","blacklistthreshold","by clause"],"anomalousvalue":["av-option","action","field-list","pthresh"],"append":["subsearch","subsearch-options","maxtime","maxout","timeout"],"appendcols":["subsearch","override","subsearch-options","maxtime","maxout","timeout"],"appendpipe":["run_in_preview"],"arules":["arules-option","fields","support","confidence"],"associate":["associate-option","field-list","supcnt","supfreq","improv"],"audit":[],"autoregress":["field","p","newfield"],"bucket":["field","bucketing-option","newfield","bins","minspan","span","start-end","log-span","span-length","timescale","sec","min","hr","day","month","subseconds"],"bin":["field","bucketing-option","newfield","bins","minspan","span","start-end","log-span","span-length","timescale","sec","min","hr","day","month","subseconds"],"discretize":[],"bucketdir":["pathfield","sizefield","countfield","maxcount","sep"],"chart":["aggregator","sparkline-agg-term","eval-expression","bucketing-option","cont","format","limit","single-agg","sep","split-by-clause","stats-agg-term","stats-function","sparkline-agg","sparkline-func","bins","span","start-end","log-span","span-length","span","timescale","sec","min","hr","day","month","subseconds","tc-option","usenull","nullstr","useother","otherstr","where clause","where-comp","wherein-comp","wherethresh-comp"],"cluster":["slc-option","t","delims","showcount","countfield","labelfield","field","labelonly","match"],"collect":["index","arg-options","addtime","file","marker","run-in-preview","spool","testmode"],"stash":[],"concurrency":["duration","start","output"],"contingency":["field","contingency-option","maxopts","mincover","usetotal","totalstr"],"counttable":[],"ctable":[],"convert":["convert-function","timeformat","new_fieldname","auto()","ctime()","dur2sec()","memk()","mktime()","mstime()","none()","num()","rmcomma()","rmunit()"],"correlate":[],"crawl":["crawl-option"],"datamodel":["data model name","object name","search"],"dbinspect":["index","span","timeformat","timescale","sec","min","hr","day","month","subseconds"],"dedup":["field-list","consecutive","keepempty","keepevents","N","sort-by-clause","sort-field","field","auto","ip","num","str"],"delete":[],"delta":["field","newfield","p"],"diff":["position1","position2","attribute","diffheader","context","maxlen"],"dispatch":[],"erex":["examples","counterexamples","field","fromfield","maxtrainers"],"eval":["eval-field","eval-expression"],"eventcount":["index","list_vix","report_size","summarize"],"eventstats":["stats-agg-term","allnum","by clause","stats-function"],"extract":["extract-opt","extractor-name","clean_keys","kvdelim","limit","maxchars","mv_add","pairdelim","reload","segment"],"kv":[],"fieldformat":["field","eval-expression"],"fields":["wc-field-list"],"fieldsummary":["maxvals","wcfield-list"],"file":[],"filldown":[],"fillnull":["field-list","value"],"findtypes":["max","notcovered","useraw"],"folderize":["attr","sep","size","minfolders","maxfolders"],"foreach":["wc-field","subsearch","fieldstr","matchstr","matchseg1","matchseg2","matchseg3"],"format":["string"],"gauge":["value","range_val1, range_val2..."],"gentimes":["start","timestamp","end","increment"],"geostats":["stats-agg-term","binspanlat","binspanlong","globallimit","latfield","longfield","maxzoomlevel","outlatfield","outlongfield","translatetoxy"],"head":["N","limit","eval-expression","keeplast","null"],"highlight":["string"],"history":["events"],"input":["sourcetype","index"],"inputcsv":["filename","append","events","max","start"],"inputlookup":["filename","tablename","append","max","start"],"iplocation":["ip-address-fieldname","allfields","lang","prefix"],"join":["subsearch","field-list","join-options","type","usetime","earlier","overwrite","max"],"kmeans":["field-list","kmeans-options","reps","iters","t","k","cnumfield","distype"],"kvform":["form","field"],"loadjob":["sid","savedsearch","result-event","delegate","artifact-offset","ignore_running"],"localize":["maxpause","timeafter","timebefore"],"localop":[],"lookup":["lookup-table-name","local","update","lookup-field","event-field","lookup-destfield","event-destfield"],"makecontinuous":["bucketing-option","field","bins","span","start-end","log-span","span-length","span","timescale","sec","min","hr","day","month","subseconds"],"makemv":["field","delim","tokenizer","allowempty","setsv"],"map":["savedsplunkoption","searchoption","maxsearches"],"metadata":["type","index-specifier","server-specifier"],"metasearch":["logical-expression","comparison-expression","index-expression","time-opts","cmp","field","lit-value","value","search-modifier","timeformat","time-modifier"],"multikv":["conf","multikv-option","copyattrs","fields","filter","forceheader","last_line","max_header_line=int","max_header_lookahead=int","multitable","noheader","passthru","rmorig","start_line"],"multisearch":["subsearch"],"mvcombine":["field","delim"],"mvexpand":["field","limit"],"nomv":["field"],"outlier":["outlier-option","field-list","action","mark","param","uselower"],"outputcsv":["append","create_empty","dispatch","filename","singlefile","usexml"],"outputlookup":["filename","tablename","append","create_empty","createinapp","key_field","max"],"outputtext":["usexml"],"overlap":[],"pivot":["datamodel-name","objectname","pivot element","cellvalue","SPLITROW rowvalue","SPLITCOL colvalue options","Filter filter expression","Limit limit expression"],"predict":["variable_to_predict","newfield","predict_option","algorithm","correlate","future_timespan","holdback","lowerXX","period","upperYY"],"rangemap":["field","attribute_name","default","numeric_range"],"rare":["field-list","top-opt","by-clause","countfield","limit","percentfield","showcount","showperc"],"regex":["regex-expression","field"],"relevancy":[],"reltime":[],"rename":["wc-field"],"replace":["wc-string","field-list"],"rest":["rest-uri","get-arg-name","get-arg-value","count","splunk_server","timeout"],"return":["count","alias","field","$field"],"reverse":[],"rex":["field","mode","regex-expression","sed-expression","max_match","offset_field"],"rtorder":["buffer_span","discard","max_buffer_size"],"run":[],"savedsearch":["savedsearch name","savedsearch-opt","substitution-control","replacement"],"script":["script-name","maxinputs","script-arg"],"scrub":["public-terms","private-terms","name-terms","dictionary","timeconfig"],"search":["logical-expression","comparison-expression","index-expression","time-opts","cmp","field","lit-value","value","string","search-modifier","host-specifier","hosttag-specifier","eventtype-specifier","eventtypetag-specifier","savedsplunk-specifier","source-specifier","splunk_server-specifier","timeformat","time-modifier","starttime","endtime"],"searchtxn":["transaction-name","search-string","eventsonly","max_terms","use_disjunct"],"selfjoin":["field-list","selfjoin-options","keepsingle","max","overwrite"],"sendemail":["to","bcc","cc","format","footer","from","inline","graceful","maxinputs","maxtime","message","paperorientation","papersize","pdfview","priority","sendcsv","sendpdf","sendresults","server","subject","use_ssl","use_tls","width_sort_columns"],"set":["subsearch"],"setfields":["setfields-arg"],"sichart":[],"sirare":["field-list","top-opt","by-clause","countfield","limit","percentfield","showcount","showpercent"],"sistats":[],"sitimechart":[],"sitop":["field-list","top-opt","by-clause","countfield","limit","otherstr","percentfield","showcount","showperc","useother"],"sort":["count","sort-by-clause","desc","sort-field","field","auto","ip","num","str"],"spath":["input","output","path"],"stats":["stats-agg-term","sparkline-agg-term","allnum","delim","by clause","partitions","stats-function","sparkline-agg","sparkline-func"],"strcat":["destfield","srcfields","quoted-str","allrequired"],"streamstats":["stats-agg-term","current","window","global","allnum","by clause","stats-function"],"table":["wc-field-list"],"tags":["field-list","outputfield","inclname","inclvalue"],"tail":["N"],"timechart":["eval-expression","single-agg","split-by-clause","agg","bucketing option","cont","fixedrange","format","limit","partial","sep","stats-agg-term","stats-function","bins","minspan","span","start-end","log-span","span-length","timescale","sec","min","hr","day","week","month","subseconds","tc-option","usenull","nullstr","useother","otherstr","where clause","where-comp","wherein-comp","wherethresh-comp"],"top":["field-list","top-opt","by-clause","countfield","limit","otherstr","percentfield","showcount","showperc","useother"],"transaction":["field-list","memcontrol-opt","name","rendering-opt","txn_definition-opt","connected=bool","endswith=filter-string","keeporphans=bool","maxspan=int[s|m|h|d]","maxpause=int[s|m|h|d]","maxevents=int","startswith=filter-string","unifyends=bool","filter-string","search-expression","quoted-search-expression","eval-expression","keepevicted=bool","maxopenevents=int","maxopentxn=int","delim=string","mvlist=bool | field-list","mvraw=bool","nullstr=string"],"transpose":["int"],"trendline":["trendtype","period","field","newfield"],"tscollect":["keepresults","namespace","squashcase"],"tstats":["stats-func","namespace","sid","datamodel","append","allow_old_summaries","chunk_size","local","prestats","summariesonly","field-list"],"typeahead":["prefix","count","index-specifier","max_time","startimeu","endtimeu","collapse"],"typelearner":["grouping-field","grouping-maxlen"],"typer":[],"uniq":[],"untable":["x-field","y-name-field","y-data-field"],"where":["eval-expression"],"x11":["fieldname","type","period","newname"],"xmlkv":["maxinputs"],"xmlunescape":["maxinputs"],"xpath":["xpath","field","outfield","default"],"xyseries":["x-field","y-name-field","y-data-field","format","grouped","sep"]}'
);

var splunkTerms = [
    'abstract', 'accum', 'addcoltotals', 'addinfo', 'addtotals', 'analyzefields', 'anomalies', 'anomalousvalue', 'append', 'appendcols', 'appendpipe', 'arules', 'associate', 'audit', 'autoregress', 'bucket', 'bin', 'discretize', 'bucketdir', 'chart', 'cluster', 'collect', 'stash', 'concurrency', 'contingency', 'counttable', 'ctable', 'convert', 'correlate', 'crawl', 'datamodel', 'dbinspect', 'dbquery', 'dedup', 'delete', 'delta', 'diff', 'dispatch', 'erex', 'eval', 'eventcount', 'eventstats', 'extract', 'kv', 'fieldformat', 'fields', 'fieldsummary', 'file', 'filldown', 'fillnull', 'findtypes', 'folderize', 'foreach', 'format', 'gauge', 'gentimes', 'geostats', 'head', 'highlight', 'history', 'input', 'inputcsv', 'inputlookup', 'iplocation', 'join', 'kmeans', 'kvform', 'loadjob', 'localize', 'localop', 'lookup', 'makecontinuous', 'makemv', 'map', 'metadata', 'metasearch', 'multikv', 'multisearch', 'mvcombine', 'mvexpand', 'nomv', 'outlier', 'outputcsv', 'outputlookup', 'outputtext', 'overlap', 'pivot', 'predict', 'rangemap', 'rare', 'regex', 'relevancy', 'reltime', 'rename', 'replace', 'rest', 'return', 'reverse', 'rex', 'rtorder', 'run', 'savedsearch', 'script', 'run', 'scrub', 'search', 'searchtxn', 'selfjoin', 'sendemail', 'set', 'setfields', 'sichart', 'sirare', 'sistats', 'sitimechart', 'sitop', 'sort', 'spath', 'stats', 'strcat', 'streamstats', 'table', 'tags', 'tail', 'timechart', 'top', 'transaction', 'transpose', 'trendline', 'tscollect', 'tstats', 'typeahead', 'typelearner', 'typer', 'uniq', 'untable', 'where', 'x11', 'xmlkv', 'xmlunescape', 'xpath', 'xyseries'
];


var Leaf = function(val, complete){
  this.value = val || null;
  this.complete = !!complete;
  this.children = [];
};

Leaf.prototype.valueInChildren = function(val){
  for (var i = 0; i < this.children.length; i++){
    var child = this.children[i];
    if (child.value === val) return child;
  }
  return false;
};

Leaf.prototype.getAllDescendentValues = function(str, results){
  for (var i = 0; i < this.children.length; i++){
    var child = this.children[i];
    str += child.value;
    if (child.complete) {
      results.push(str);
    }
    child.getAllDescendentValues(str, results);
    str = str.substr(0, str.length - 1)
  }
};

var Trie = function(){
  this.root = new Leaf();
};

Trie.prototype.addWord = function(word){
  var i = 0;
  var leaf = this.root;
  var previousLeaf;
  var isLetter = new RegExp(/[A-Za-z\'\-\_\ ]/);

  while (i < word.length) {
    if ((i === 0 || i === word.length-1) && (word[i]==="'" || word[i]===" ")){
      noop();
    } else {
      if( isLetter.test(word[i]) ){
        previousLeaf = leaf;
        leaf = leaf.valueInChildren(word[i]);

        if (!leaf) {
          var newLeaf = new Leaf(word[i]);
          previousLeaf.children.push(newLeaf);
          leaf = newLeaf;
        }
      }
    }
    i++;
  }

  leaf.complete = true;
  return word;
};

Trie.prototype.getWords = function(str){ // Ad
  var results = [];
  var i = 0;
  var leaf = this.root;
  var previousLeaf;

  while (leaf && i < str.length){
    previousLeaf = leaf;
    leaf = leaf.valueInChildren(str[i]);
    i++;
  }

  leaf && leaf.getAllDescendentValues(str, results);

  return results;

};

Trie.prototype.addWords = function(wordList){
  for (var i = 0; i < wordList.length; i++) {
    this.addWord(wordList[i].toLowerCase());
  }
};


templates   = {};

templates.containerTemplate = function(options){
    var container;

    container               = document.createElement('div');
    container.id            = options.id;
    container.style.display = 'none';

    return container;
};

templates.listTemplate = function(options){
    var list;

    list            = document.createElement('select');
    list.size       = options.size;
    list.multiple   = options.multiple;

    list.classList.add('choice-list');

    return list;
};

templates.listOptionTemplate = function(options){
    var listOption;

    listOption           = document.createElement('option');
    listOption.value     = options.choice;
    listOption.innerText = options.choice;

    if (options.selected) {
        listOption.selected = options.selected;
    }

    return listOption;
};

templates.cssStringTemplate = function(){
    return ([
        "#choice-list-container {",
        "  display:none;",
        "}",
        ".choice-list {",
        "  position: relative;",
        "  background-color: white;",
        "}"
    ].join('\n'));
};


var matcher = new RegExp(/[a-zA-Z\-\_]+/);

var InputKeyEventHandler = function(autoComplete, subClass){
    this.name           = 'Super';
    this.AC             = autoComplete;
    this.inputMethods   = [
        'assignScanOptions',
        'cleanAndScan',
        'assignBackspace',
        'assignPreviousAndCurrentWords',
        'assignSuggestedWords',
        'handleView'
    ];

    if (subClass) _.extend(this, subClass);

};

// assign backspace
InputKeyEventHandler.prototype.assignBackspace = function(){
    this.AC.backspace = 0;
};

// assign scan text options
InputKeyEventHandler.prototype.assignScanOptions = function(){
    this.AC.scanTextOptions = { str: null, addLastWord: false };
};

// clean & scan
InputKeyEventHandler.prototype.cleanAndScan = function(){
    this.AC.scanText(this.AC.scanTextOptions);
    this.AC.cleanStatement();
};

// assign previous & current word
InputKeyEventHandler.prototype.assignPreviousAndCurrentWords = function(){ noop(); }

// assign suggested words
InputKeyEventHandler.prototype.assignSuggestedWords = function(){ noop(); }

// handle view
InputKeyEventHandler.prototype.handleView = function(){ noop(); }

InputKeyEventHandler.prototype.handleEvent = function(AC, e, ch){
    _.each(this.inputMethods, function(method){
      this[method].call(this, AC, e, ch)
    }, this);
};

var SubEventHandlers         = {};
SubEventHandlers.inArrowDown = { name: 'inArrowDown' };
SubEventHandlers.inBackspace = { name: 'inBackspace' };
SubEventHandlers.inSpace     = { name: 'inSpace'     };
SubEventHandlers.inPaste     = { name: 'inPaste'     };
SubEventHandlers.inVarchar   = { name: 'inVarchar'   };

SubEventHandlers.inArrowDown.handleEvent = function(e){
  if (this.AC.choiceListContainerEl.style.display !== 'inline-block') {
    return;
  }

  setTimeout(
    this.AC.stealFocus.bind(this.AC, 50)
  );
  e.preventDefault();
  return;
};

SubEventHandlers.inBackspace.assignBackspace = function(e){
  this.AC.backspace += 1;
};

SubEventHandlers.inBackspace.assignPreviousAndCurrentWords = function(e, ch){
  var last              = this.AC.currentStatement.length-1;
  var lastStatementWord = this.AC.currentStatement[last];

  if (lastStatementWord){
    this.AC.currentWord = lastStatementWord.substr(0, lastStatementWord.length-1);
  }
};

SubEventHandlers.inBackspace.handleView = function(e){
  if (!this.AC.currentWord.length) {
    this.AC.choiceListContainerEl.style.display = 'none';
  }
    };

SubEventHandlers.inSpace.assignScanOptions = function(e){
  this.AC.scanTextOptions = { str: null, addLastWord: true };
};

SubEventHandlers.inSpace.assignPreviousAndCurrentWords = function(e, ch){
  if (this.AC.currentStatement.length && this.AC.currentStatement[this.AC.currentStatement.length-1]){
      this.AC.previousWord = this.AC.currentStatement[this.AC.currentStatement.length-1].toLowerCase();
    } else {
      this.AC.previousWord = this.AC.currentWord;
    }

  this.AC.currentWord = "";
};

SubEventHandlers.inSpace.assignSuggestedWords = function(e){
  if (this.AC.previousWord && modifiers[this.AC.previousWord]){
    this.AC.suggestedWords = this.AC.suggestedWords.concat(modifiers[this.AC.previousWord]);
  }
};

SubEventHandlers.inSpace.handleView = function(e){
  if (this.AC.choiceListContainerEl.style.display != 'none'){
    this.AC.choiceListContainerEl.style.display = 'none';
  }
};

SubEventHandlers.inPaste.assignPreviousAndCurrentWords = function(e, ch){
  if (e.metaKey){
    var last = this.AC.currentStatement.length-1;
    this.AC.currentWord = this.AC.currentStatement[last];
  }
};

SubEventHandlers.inVarchar.assignPreviousAndCurrentWords = function(e, ch){
  this.AC.currentWord = this.AC.getCurrentWord(ch);
};

SubEventHandlers.inVarchar.assignSuggestedWords = function(e){
  if (this.AC.currentWord){
    this.AC.suggestedWords = this.AC.trie.getWords(this.AC.currentWord.trim());
  } else {
    this.AC.suggestedWords = [];
  }

  SubEventHandlers.inSpace.assignSuggestedWords.call(this, e);

};
var AutoCompleter = function(options){
    this.trie                      = new Trie();
    this.lastCursor                = 0;
    this.backspace                 = 0;
    this.suggestedWords            = [];
    this.currentStatement          = [];
    this.currentWord               = "";
    this.previousWord              = "";
    this.parentEl                  = options.el;
    this.targetEl                  = options.el.children[1];
    this.selectionEl               = options.el.children[0];
    this.choiceListContainerEl     = null;
    this.keyCodeDict               = null;

    this.trie.addWords(options.terms);
};

AutoCompleter.prototype.registerKeyCodes = function(){
    this.keyCodeDict = {
        "86":   "Paste",
        "8":    "Backspace",
        "32":   "Space",
        "40":   "ArrowDown"
    };

    for (var i = 65; i < 91; i++) {
        this.keyCodeDict[i] = "Varchar";
    }
};

AutoCompleter.prototype.registerHandlers = function(){
    this.keyEventHandlers             = {};
    this.keyEventHandlers.inArrowDown = new InputKeyEventHandler(this, SubEventHandlers.inArrowDown);
    this.keyEventHandlers.inBackspace = new InputKeyEventHandler(this, SubEventHandlers.inBackspace);
    this.keyEventHandlers.inSpace     = new InputKeyEventHandler(this, SubEventHandlers.inSpace);
    this.keyEventHandlers.inPaste     = new InputKeyEventHandler(this, SubEventHandlers.inPaste);
    this.keyEventHandlers.inVarchar   = new InputKeyEventHandler(this, SubEventHandlers.inVarchar);
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
    var len      = this.currentStatement.length - 1,
        nextWord = this.currentStatement[len] || "";

    if (val){
        val = this.matches(val) ? val : "";
        this.currentStatement[len] = (nextWord + val).match(matcher)[0];
    } else {
        this.currentStatement[len] = nextWord.substr(0, nextWord.length-1);
    }

    return this.currentStatement[len] || "";
};

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
        list.appendChild(templates.listOptionTemplate({ choice: choice, selected: selected }));
        size++;
    }, this);

    this.choiceListContainerEl.size = size;
};

AutoCompleter.prototype.matches = function(str){
    return matcher.test(str);
};

AutoCompleter.prototype.attachStyles = function(){
    var style = document.createElement('style');

    style.innerHTML = templates.cssStringTemplate();

    document.head.appendChild(style);
};

AutoCompleter.prototype.makeChoiceList = function(options){
  var parentEl  = options.el;

  this.choiceListEl          = templates.listTemplate({ multiple: true, size: 3 });
  this.choiceListContainerEl = templates.containerTemplate({ id: 'choice-list-container' });

  parentEl.appendChild(this.choiceListContainerEl);
  this.choiceListContainerEl.appendChild(this.choiceListEl);
};

AutoCompleter.prototype.assignHandler = function(keyCode){
    var key = this.keyCodeDict[keyCode];

    if (!key) return;

    handlerString = "in" + key;

    return this.keyEventHandlers[ handlerString ];
};

AutoCompleter.prototype.handleSelectionElKeyEvents = function(e){
        var ch = String.fromCharCode(e.keyCode).toLowerCase() || "";
        var handler;

        this.lastCursor = this.selectionEl.selectionStart;

        handler = this.assignHandler.call(this, e.keyCode)

        if ( !this.matches(ch) && (e.metaKey || !handler) ) return;

        handler && handler.handleEvent(e, ch);

        this.addChoices(this.suggestedWords);

        console.log('previousWord:',     this.previousWord);
        console.log('currentWord:',      this.currentWord);
        console.log('currentStatement:', this.currentStatement);
        console.log('suggested:',        this.suggestedWords);
        console.log('event:', e);

        if (this.choiceListContainerEl.style.display === 'none' &&
            this.choiceListContainerEl.children[0] && !this.backspace) {
            this.choiceListContainerEl.contentEditable  = true;
            this.choiceListContainerEl.style.display    = 'inline-block';
        }

};

AutoCompleter.prototype.handleChoiceListContainerElEvents = function(e){
    if (e.keyCode === 9 || e.keyCode === 13) {
        // tab
        var wordStart = this.lastCursor - this.currentWord.length + this.backspace,
            value     = this.backspace ? " " : "";

        e.preventDefault();

        if (e.srcElement.value){
            console.log('wordstart:', wordStart);
            value += e.srcElement.value;
            this.selectionEl.setSelectionRange(wordStart, wordStart + value.length);
            this.selectionEl.setRangeText(value);

        }

        this.currentWord = value.trim();
        this.selectionEl.focus();
        this.choiceListContainerEl.style.display = 'none';

    } else if (e.which === 27) {
        e.preventDefault();
        this.selectionEl.focus();
        this.choiceListContainerEl.style.display = 'none';
    }

};

AutoCompleter.prototype.registerListeners = function(){
    this.selectionEl.onkeydown           = this.handleSelectionElKeyEvents;
    this.choiceListContainerEl.onkeydown = this.handleChoiceListContainerElEvents;
};

AutoCompleter.prototype.initialize = function(){
    console.log('init');
    this.registerKeyCodes();
    this.registerHandlers();
    this.attachStyles();
    this.makeChoiceList({ el: this.parentEl });
    this.registerListeners();
};

var el = document.querySelector('[data-view="views/shared/searchbar/input/SearchField"]');
var autoComplete = new AutoCompleter({ el : el, terms: splunkTerms });

checkUnderscore(autoComplete.initialize.bind(autoComplete));
