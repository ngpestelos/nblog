function(resp) {
  var entries = resp.rows.map(function(r) {
    return {
      title: r.value.title  
    };
  });
  return { "entries": entries };
}
