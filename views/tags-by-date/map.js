function(doc) {
  var trim = function(s) {
    return s.replace(/^\s+|\s+$/g, '');
  }
  
  if (doc.type == "entry") {
    for (var i in doc.tags) {
      emit([trim(doc.tags[i]), doc.updated_at], null);
    }
  }
}
