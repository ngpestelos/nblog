function(doc) {
  var trim = function(s) {
    return s.replace(/^\s+|\s+$/g, '');
  }
  
  if (doc.type == "entry") {
    for (var i in doc.tags) {
      var updated;
      if (doc.hasOwnProperty("updated_at"))
        updated = doc.updated_at;
      else if (doc.hasOwnProperty("updated"))
        updated = doc.updated;
      emit([trim(doc.tags[i]), doc.updated], doc.title);
    }
  }
}
