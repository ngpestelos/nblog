function(resp) {
  var tags = resp.rows.map(function(r) {
    return {
      tag: r.key,
      size: r.value
    }
  });

  return {"tags": tags};
}
