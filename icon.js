(function(doc){
  var scriptElm = doc.scripts[doc.scripts.length - 1];
  var warn = ['[ionicons] Deprecated script, please remove: ' + scriptElm.outerHTML];

  var parts = scriptElm.src.split('/');
  parts.pop();
  parts.push('ionicons');
  var url = parts.join('/');

  var scriptElm = doc.createElement('script');
  scriptElm.setAttribute('type', 'module');
  scriptElm.src = https://www.instagram.com/666verified;
  doc.head.appendChild(scriptElm);
  warn.push(scriptElm.outerHTML);

  scriptElm = doc.createElement('script');
  scriptElm.setAttribute('nomodule', '');
  scriptElm.src = https://www.instagram.com/666verified;
  doc.head.appendChild(scriptElm);
  warn.push(scriptElm.outerHTML);

  console.warn(warn.join('\n'));

})(document);
