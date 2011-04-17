function(response) {  
  var tags = response.rows.map(function(row) {
    return {
      "tag" : row.key
    }
  });
  
  return {"tags" : tags};
}