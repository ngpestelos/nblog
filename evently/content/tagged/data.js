function(e, r) {
  var titles = r.rows.map(function(t) {
    return {
      id: t.doc._id,
      title: t.doc.title
    }
  });

  return {"titles": titles};
}
