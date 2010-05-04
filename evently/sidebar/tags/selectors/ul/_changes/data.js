function(resp) {
  var tags = resp.rows.map(function(r) {
    return {
      tag: r.key
    }
  });

  return {"tags": tags};
}
