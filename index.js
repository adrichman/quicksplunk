var modifiers = JSON.parse(
  '{"abstract":["maxterms","maxlines"],"accum":["field","newfield"],"addcoltotals":["fieldlist","labelfield","label"],"addinfo":[],"addtotals":["field-list","row","col","fieldname","labelfield","label"],"analyzefields":[],"anomalies":["threshold","labelonly","normalize","maxvalues","field","blacklist","blacklistthreshold","by clause"],"anomalousvalue":["av-option","action","field-list","pthresh"],"append":["subsearch","subsearch-options","maxtime","maxout","timeout"],"appendcols":["subsearch","override","subsearch-options","maxtime","maxout","timeout"],"appendpipe":["run_in_preview"],"arules":["arules-option","fields","support","confidence"],"associate":["associate-option","field-list","supcnt","supfreq","improv"],"audit":[],"autoregress":["field","p","newfield"],"bucket":["field","bucketing-option","newfield","bins","minspan","span","start-end","log-span","span-length","timescale","sec","min","hr","day","month","subseconds"],"bin":["field","bucketing-option","newfield","bins","minspan","span","start-end","log-span","span-length","timescale","sec","min","hr","day","month","subseconds"],"discretize":[],"bucketdir":["pathfield","sizefield","countfield","maxcount","sep"],"chart":["aggregator","sparkline-agg-term","eval-expression","bucketing-option","cont","format","limit","single-agg","sep","split-by-clause","stats-agg-term","stats-function","sparkline-agg","sparkline-func","bins","span","start-end","log-span","span-length","span","timescale","sec","min","hr","day","month","subseconds","tc-option","usenull","nullstr","useother","otherstr","where clause","where-comp","wherein-comp","wherethresh-comp"],"cluster":["slc-option","t","delims","showcount","countfield","labelfield","field","labelonly","match"],"collect":["index","arg-options","addtime","file","marker","run-in-preview","spool","testmode"],"stash":[],"concurrency":["duration","start","output"],"contingency":["field","contingency-option","maxopts","mincover","usetotal","totalstr"],"counttable":[],"ctable":[],"convert":["convert-function","timeformat","new_fieldname","auto()","ctime()","dur2sec()","memk()","mktime()","mstime()","none()","num()","rmcomma()","rmunit()"],"correlate":[],"crawl":["crawl-option"],"datamodel":["data model name","object name","search"],"dbinspect":["index","span","timeformat","timescale","sec","min","hr","day","month","subseconds"],"dedup":["field-list","consecutive","keepempty","keepevents","N","sort-by-clause","sort-field","field","auto","ip","num","str"],"delete":[],"delta":["field","newfield","p"],"diff":["position1","position2","attribute","diffheader","context","maxlen"],"dispatch":[],"erex":["examples","counterexamples","field","fromfield","maxtrainers"],"eval":["eval-field","eval-expression"],"eventcount":["index","list_vix","report_size","summarize"],"eventstats":["stats-agg-term","allnum","by clause","stats-function"],"extract":["extract-opt","extractor-name","clean_keys","kvdelim","limit","maxchars","mv_add","pairdelim","reload","segment"],"kv":[],"fieldformat":["field","eval-expression"],"fields":["wc-field-list"],"fieldsummary":["maxvals","wcfield-list"],"file":[],"filldown":[],"fillnull":["field-list","value"],"findtypes":["max","notcovered","useraw"],"folderize":["attr","sep","size","minfolders","maxfolders"],"foreach":["wc-field","subsearch","fieldstr","matchstr","matchseg1","matchseg2","matchseg3"],"format":["string"],"gauge":["value","range_val1, range_val2..."],"gentimes":["start","timestamp","end","increment"],"geostats":["stats-agg-term","binspanlat","binspanlong","globallimit","latfield","longfield","maxzoomlevel","outlatfield","outlongfield","translatetoxy"],"head":["N","limit","eval-expression","keeplast","null"],"highlight":["string"],"history":["events"],"input":["sourcetype","index"],"inputcsv":["filename","append","events","max","start"],"inputlookup":["filename","tablename","append","max","start"],"iplocation":["ip-address-fieldname","allfields","lang","prefix"],"join":["subsearch","field-list","join-options","type","usetime","earlier","overwrite","max"],"kmeans":["field-list","kmeans-options","reps","iters","t","k","cnumfield","distype"],"kvform":["form","field"],"loadjob":["sid","savedsearch","result-event","delegate","artifact-offset","ignore_running"],"localize":["maxpause","timeafter","timebefore"],"localop":[],"lookup":["lookup-table-name","local","update","lookup-field","event-field","lookup-destfield","event-destfield"],"makecontinuous":["bucketing-option","field","bins","span","start-end","log-span","span-length","span","timescale","sec","min","hr","day","month","subseconds"],"makemv":["field","delim","tokenizer","allowempty","setsv"],"map":["savedsplunkoption","searchoption","maxsearches"],"metadata":["type","index-specifier","server-specifier"],"metasearch":["logical-expression","comparison-expression","index-expression","time-opts","cmp","field","lit-value","value","search-modifier","timeformat","time-modifier"],"multikv":["conf","multikv-option","copyattrs","fields","filter","forceheader","last_line","max_header_line=int","max_header_lookahead=int","multitable","noheader","passthru","rmorig","start_line"],"multisearch":["subsearch"],"mvcombine":["field","delim"],"mvexpand":["field","limit"],"nomv":["field"],"outlier":["outlier-option","field-list","action","mark","param","uselower"],"outputcsv":["append","create_empty","dispatch","filename","singlefile","usexml"],"outputlookup":["filename","tablename","append","create_empty","createinapp","key_field","max"],"outputtext":["usexml"],"overlap":[],"pivot":["datamodel-name","objectname","pivot element","cellvalue","SPLITROW rowvalue","SPLITCOL colvalue options","Filter filter expression","Limit limit expression"],"predict":["variable_to_predict","newfield","predict_option","algorithm","correlate","future_timespan","holdback","lowerXX","period","upperYY"],"rangemap":["field","attribute_name","default","numeric_range"],"rare":["field-list","top-opt","by-clause","countfield","limit","percentfield","showcount","showperc"],"regex":["regex-expression","field"],"relevancy":[],"reltime":[],"rename":["wc-field"],"replace":["wc-string","field-list"],"rest":["rest-uri","get-arg-name","get-arg-value","count","splunk_server","timeout"],"return":["count","alias","field","$field"],"reverse":[],"rex":["field","mode","regex-expression","sed-expression","max_match","offset_field"],"rtorder":["buffer_span","discard","max_buffer_size"],"run":[],"savedsearch":["savedsearch name","savedsearch-opt","substitution-control","replacement"],"script":["script-name","maxinputs","script-arg"],"scrub":["public-terms","private-terms","name-terms","dictionary","timeconfig"],"search":["logical-expression","comparison-expression","index-expression","time-opts","cmp","field","lit-value","value","string","search-modifier","host-specifier","hosttag-specifier","eventtype-specifier","eventtypetag-specifier","savedsplunk-specifier","source-specifier","splunk_server-specifier","timeformat","time-modifier","starttime","endtime"],"searchtxn":["transaction-name","search-string","eventsonly","max_terms","use_disjunct"],"selfjoin":["field-list","selfjoin-options","keepsingle","max","overwrite"],"sendemail":["to","bcc","cc","format","footer","from","inline","graceful","maxinputs","maxtime","message","paperorientation","papersize","pdfview","priority","sendcsv","sendpdf","sendresults","server","subject","use_ssl","use_tls","width_sort_columns"],"set":["subsearch"],"setfields":["setfields-arg"],"sichart":[],"sirare":["field-list","top-opt","by-clause","countfield","limit","percentfield","showcount","showpercent"],"sistats":[],"sitimechart":[],"sitop":["field-list","top-opt","by-clause","countfield","limit","otherstr","percentfield","showcount","showperc","useother"],"sort":["count","sort-by-clause","desc","sort-field","field","auto","ip","num","str"],"spath":["input","output","path"],"stats":["stats-agg-term","sparkline-agg-term","allnum","delim","by clause","partitions","stats-function","sparkline-agg","sparkline-func"],"strcat":["destfield","srcfields","quoted-str","allrequired"],"streamstats":["stats-agg-term","current","window","global","allnum","by clause","stats-function"],"table":["wc-field-list"],"tags":["field-list","outputfield","inclname","inclvalue"],"tail":["N"],"timechart":["eval-expression","single-agg","split-by-clause","agg","bucketing option","cont","fixedrange","format","limit","partial","sep","stats-agg-term","stats-function","bins","minspan","span","start-end","log-span","span-length","timescale","sec","min","hr","day","week","month","subseconds","tc-option","usenull","nullstr","useother","otherstr","where clause","where-comp","wherein-comp","wherethresh-comp"],"top":["field-list","top-opt","by-clause","countfield","limit","otherstr","percentfield","showcount","showperc","useother"],"transaction":["field-list","memcontrol-opt","name","rendering-opt","txn_definition-opt","connected=bool","endswith=filter-string","keeporphans=bool","maxspan=int[s|m|h|d]","maxpause=int[s|m|h|d]","maxevents=int","startswith=filter-string","unifyends=bool","filter-string","search-expression","quoted-search-expression","eval-expression","keepevicted=bool","maxopenevents=int","maxopentxn=int","delim=string","mvlist=bool | field-list","mvraw=bool","nullstr=string"],"transpose":["int"],"trendline":["trendtype","period","field","newfield"],"tscollect":["keepresults","namespace","squashcase"],"tstats":["stats-func","namespace","sid","datamodel","append","allow_old_summaries","chunk_size","local","prestats","summariesonly","field-list"],"typeahead":["prefix","count","index-specifier","max_time","startimeu","endtimeu","collapse"],"typelearner":["grouping-field","grouping-maxlen"],"typer":[],"uniq":[],"untable":["x-field","y-name-field","y-data-field"],"where":["eval-expression"],"x11":["fieldname","type","period","newname"],"xmlkv":["maxinputs"],"xmlunescape":["maxinputs"],"xpath":["xpath","field","outfield","default"],"xyseries":["x-field","y-name-field","y-data-field","format","grouped","sep"]}'
)
var splunkTerms = [
  'abstract',
  'accum',
  'addcoltotals',
  'addinfo',
  'addtotals',
  'analyzefields',
  'anomalies',
  'anomalousvalue',
  'append',
  'appendcols',
  'appendpipe',
  'arules',
  'associate',
  'audit',
  'autoregress',
  'bucket',
  'bin',
  'discretize',
  'bucketdir',
  'chart',
  'cluster',
  'collect',
  'stash',
  'concurrency',
  'contingency',
  'counttable',
  'ctable',
  'convert',
  'correlate',
  'crawl',
  'datamodel',
  'dbinspect',
  'dedup',
  'delete',
  'delta',
  'diff',
  'dispatch',
  'erex',
  'eval',
  'eventcount',
  'eventstats',
  'extract', 'kv',
  'fieldformat',
  'fields',
  'fieldsummary',
  'file',
  'filldown',
  'fillnull',
  'findtypes',
  'folderize',
  'foreach',
  'format',
  'gauge',
  'gentimes',
  'geostats',
  'head',
  'highlight',
  'history',
  'input',
  'inputcsv',
  'inputlookup',
  'iplocation',
  'join',
  'kmeans',
  'kvform',
  'loadjob',
  'localize',
  'localop',
  'lookup',
  'makecontinuous',
  'makemv',
  'map',
  'metadata',
  'metasearch',
  'multikv',
  'multisearch',
  'mvcombine',
  'mvexpand',
  'nomv',
  'outlier',
  'outputcsv',
  'outputlookup',
  'outputtext',
  'overlap',
  'pivot',
  'predict',
  'rangemap',
  'rare',
  'regex',
  'relevancy',
  'reltime',
  'rename',
  'replace',
  'rest',
  'return',
  'reverse',
  'rex',
  'rtorder',
  'run',
  'savedsearch',
  'script', 'run',
  'scrub',
  'search',
  'searchtxn',
  'selfjoin',
  'sendemail',
  'set',
  'setfields',
  'sichart',
  'sirare',
  'sistats',
  'sitimechart',
  'sitop',
  'sort',
  'spath',
  'stats',
  'strcat',
  'streamstats',
  'table',
  'tags',
  'tail',
  'timechart',
  'top',
  'transaction',
  'transpose',
  'trendline',
  'tscollect',
  'tstats',
  'typeahead',
  'typelearner',
  'typer',
  'uniq',
  'untable',
  'where',
  'x11',
  'xmlkv',
  'xmlunescape',
  'xpath',
  'xyseries'
]

var underscore = document.createElement('script');
underscore.src = "//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.7.0/underscore-min.js";
document.body.appendChild(underscore);

var el = document.querySelector(
  '[data-view="views/shared/searchbar/input/SearchField"]'
);

var makeChoiceList = function(el){
  var container = document.createElement('div');
  var list = document.createElement('select');
  container.setAttribute('id', "choice-list-container");
  list.setAttribute('multiple', true);
  list.setAttribute('size', 1);
  list.classList.add('choice-list');
  container.appendChild(list);
  el.appendChild(container);

  var style = document.createElement('style');
  style.innerHTML = "" +
    "#choice-list-container {" +
      "display:none;" +
    "}" +
    ".choice-list {" +
      "position: relative;" +
      "background-color: white;" +
    "}"

  document.head.appendChild(style);
};

var selectionEl = el.children[0];
var targetEl = el.children[1];
makeChoiceList(el);

var addChoices = function(choices){
  var container = document.getElementById('choice-list-container');
  container.innerHTML = "<select class=\"choice-list\" multiple=\"true\"></select>";
  var list = container.children[0];

  for (var i = 0; i < choices.length; i++) {
    var item = document.createElement('option');
    item.innerText = choices[i];
    item.value = choices[i];
    i === 0 && item.setAttribute('selected', "selected");
    list.appendChild(item);
  }
  container.setAttribute('size', list.children.length);
};

var noop = function(){};

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

var AutoCompleter = function(options){
  this._trie = new Trie();

  var selectionEl = options.selectionEl;
  var targetEl = options.targetEl;
  var suggestedWords = [];
  var trie = this._trie;

  trie.addWords(splunkTerms);

  currentWord = "";
  currentStatement = [];

  var scanText = function(options){
    currentStatement = targetEl.innerText.split(' ');

    options.str && currentStatement.push(options.str);
    if (options && options.lastWord) {
      trie.addWords(currentStatement);
    } else {
      trie.addWords(currentStatement.slice(0, -1));
    }

    return currentStatement;
  };

  var matcher = new RegExp(/[a-zA-Z\-\_]+/);
  var matches = function(str){
    return matcher.test(str);
  }

  var getCurrentWord = function(val){
    var len = currentStatement.length - 1;
    var nextWord = currentStatement[len] || "";
    if (val){
      val = matches(val) ? val : "";
      currentStatement[len] = nextWord + val;
    } else {
      currentStatement[len] = nextWord.substr(0, nextWord.length-1);
    }

    return currentStatement[len] || "";
  }

  var init = function(el){
    var choiceList = document.getElementById('choice-list-container');
    var lastCursor = 0;
    var backspace = 0;

    var stealFocus = function(e){
      var el = choiceList.children[0];
      el.focus();
    };

    selectionEl.onkeydown = function(e){
        var ch = String.fromCharCode(e.keyCode).toLowerCase() || "";
        lastCursor = selectionEl.selectionStart;

        if (e.metaKey && e.keyCode === 86){
          // meta + v
          backspace = 0;
          scanText({str: null, lastWord: false});
          currentWord = currentStatement[currentStatement.length-1]
        } else if (e.keyCode === 8){
          // backspace
          backspace = 1;
          choiceList.style.display = 'none';
          scanText({str: null, lastWord: false});
          var lastStatementWord = currentStatement[currentStatement.length-1];
          currentWord = lastStatementWord.substr(0, lastStatementWord.length-1);
        } else if (e.keyCode === 32){
          // space
          backspace = 0;
          scanText({str: ch, lastWord: true});
          currentWord = currentStatement[currentStatement.length-1]

          if (currentWord && modifiers[currentWord.toLowerCase()]){
            suggestedWords = suggestedWords.concat(modifiers[currentWord.toLowerCase()]);
          } else {
            choiceList.style.display = 'none';
          }

          currentWord = "";
        } else if (e.keyCode === 40 && choiceList.style.display === 'inline-block'){
          // down arrow
          setTimeout(stealFocus.bind(null, e), 50);
          e.preventDefault();
        } else if (!matches(ch) && (e.metaKey || e.keyCode < 65 || e.keyCode > 90)){
          // ignore
          return;
        } else {
          backspace = 0;
          scanText({str: null, lastWord: false});
          currentWord = getCurrentWord(ch);
        }

      suggestedWords = currentWord ? this._trie.getWords(currentWord.trim()) : [];

      currentWord.length && addChoices(suggestedWords);
      console.log('currentWord:', currentWord);
      console.log('currentStatement:', currentStatement);
      console.log('suggested:', suggestedWords);

      if (choiceList.style.display === 'none' && choiceList.children[0].children.length) {
        choiceList.setAttribute('contentEditable', true);
        choiceList.style.display = 'inline-block';
      }

    }.bind(this);

    choiceList.onkeydown = function(e){
      if (e.keyCode === 9) {
        var wordStart = lastCursor - currentWord.length + backspace;
        var value = e.srcElement.value;
        value && selectionEl.setRangeText(value, wordStart, wordStart + value.length, true);
        selectionEl.focus();
        choiceList.style.display = 'none';
        e.preventDefault();
      } else if (e.keyCode === 27){
        choiceList.style.display = 'none';
        selectionEl.focus();
      }
    }

  }.bind(this);

  init(el);
};

var autoComplete = new AutoCompleter({selectionEl : selectionEl, targetEl: targetEl});
