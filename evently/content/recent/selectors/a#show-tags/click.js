function() {
  var app = $$(this).app;
  var tags = $("ul#tags");
  app.db.view("nblog/tags", {
    group_level: 1,
    success : function(res) {
      tags.empty();
      res.rows.forEach(function(r) {
        $("<li><a class=\"tag\" href=\"#/tag/" + r.key + "\">" + r.key + "</a></li>").appendTo(tags);        
      });
      
      /*
      $("a.tag").click(function() {
        $.scrollTo("#top");
      })
      */
    }
  });
  
  return false;
}