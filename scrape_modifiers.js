var modifiers = {};

var get = function(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = "document";
    xhr.open('GET', url);

    xhr.onload = function() {
      if (xhr.status == 200) {
        resolve(xhr.response);
      } else {
        reject(Error(xhr.statusText));
      }
    };
    xhr.onerror = function() {
      reject(Error("Network Error"));
    };
    xhr.send();
  });
};

splunkTerms.map(function(term){
  modifiers[term] = [];

  get('//docs.splunk.com/Documentation/Splunk/6.2.1/SearchReference/' + term).then(function(doc, err){

    if (err) {
      return console.log(err);
    } else if (doc){
      var defTerms = doc.getElementsByTagName('dt')
      var terms = Array.prototype.map.call(defTerms, function(defTerm){
        var term = defTerm.innerHTML.split(/[<>]/)[0].trim();
        return term;
      });

      modifiers[term] = terms;
    }
  });
})
