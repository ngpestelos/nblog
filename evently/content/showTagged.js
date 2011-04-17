function(e, r) {  
  var app = $$(this).app;
  var widget = $(this);  
  var tag = r.t;

  app.db.view("nblog/recent-tags", {
    startkey : [tag],
    endkey : [tag, []],
    success : function(res) {
      widget.trigger("tagged", [res]);
    },
    error : function() {
      alert("oops");
    }
  });
}