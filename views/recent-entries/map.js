function(doc) {
  if (doc.type == "entry") {
    emit(doc.updated_at, doc)
  }
}
