function(e, r) {
  $.log(r);
  var entries = [];
  var tag = r.rows[0].key[0];
  r.rows.map(function(row) {
    var e = {
      title: row.value,
      id: row.id
    };
    
    entries.push(e);
  });

  return {"entries" : entries, "tag" : tag};
}