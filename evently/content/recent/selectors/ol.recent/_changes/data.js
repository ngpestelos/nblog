function(resp) {
  var entries = resp.rows.map(function(r) {
    return {
      id: r.id,
      title: r.value.title  
    };
  });
  return { "entries": entries };
}
