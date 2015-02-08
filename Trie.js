var Leaf = function(val, complete){
    this.value = val || null;
    this.complete = !!complete;
    this.children = [];
};

Leaf.prototype.valueInChildren = function(val){
    for (var i = 0; i < this.children.length; i++){
        if (this.children[i].value === val) return this.children[i];
    }
    return false;
};

Leaf.prototype.getAllDescendentValues = function(str, results){
    for (var i = 0; i < this.children.length; i++){
        str += this.children[i].value;

        if (str && this.children[i].complete) {
            results.push(str);
        }

        this.children[i].getAllDescendentValues(str, results);
        str = str.substr(0, str.length - 1)
    }
};

var Trie = function(){
    this.results = [];
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
    var i = 0;
    var leaf = this.root;

    this.results.clearArray();

    while (leaf && i < str.length){
        leaf = leaf.valueInChildren(str[i]);
        i++;
    }

    leaf && leaf.getAllDescendentValues(str, this.results);

    return this.results;

};

Trie.prototype.addWords = function(wordList){
    for (var i = 0; i < wordList.length; i++) {
        this.addWord(wordList[i].toLowerCase());
    }
};
