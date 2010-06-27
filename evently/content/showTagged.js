function(e, r) {
  var tag = r.tag;
  var app = $$(this).app;
  var widget = $(this);
  
  app.db.view("nblog/tags-by-date", {
    startkey: [tag],
    endkey: [tag,[]],
    include_docs: true,
    success: function(res) {
      widget.trigger("tagged", [res]);
    }
  });
  
}
