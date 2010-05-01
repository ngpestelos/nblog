function(doc) {
  if (doc.type == "entry") {
    emit(doc.created_at, doc)
  }
}
