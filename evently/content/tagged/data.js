function(e, r) {
  var rows = r.rows.reverse(); // reverse sorting hack
  var titles = rows.map(function(t) {
    return {
      id: t.doc._id,
      title: t.doc.title
    }
  });
  
  return {"titles" : titles};
  
  /*
  var titles = r.rows.map(function(t) {
    return {
      id: t.doc._id,
      title: t.doc.title
    }
  });

  return {"titles": titles};*/
}
