function(doc) {
  if (doc.type == "entry") {
    for (var i in doc.tags) {
      emit(doc.tags[i], null);
    }
  }
}
