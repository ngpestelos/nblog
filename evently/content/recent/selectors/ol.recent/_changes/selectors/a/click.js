function() {
  var li = $(this).parents("li");
  var entry_id = li.attr("data-id");
  var app = $$(this).app;
  var widget = $(this);
  app.db.openDoc(entry_id, {
    success: function(doc) {
      widget.trigger("show", [doc]);
    }
  }); 
  return false;
}
