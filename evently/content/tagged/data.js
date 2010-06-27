function(e, r) {
  var rows = r.rows.reverse(); // reverse sorting hack
  var tag = r.rows[0].key[0];  
  //$.log(tag);
  
  var titles = rows.map(function(t) {
    return {
      id: t.doc._id,
      title: t.doc.title
    }
  });
  
  return {"titles" : titles, "tag" : tag};
  
}
