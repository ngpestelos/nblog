function(doc) {
  if (doc.type == "entry") {
    if (doc.hasOwnProperty("updated_at"))
      emit(doc.updated_at, doc);
    else
      emit(doc.updated, doc);
  }
}
