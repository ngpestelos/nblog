function(e, r) {  
  var entry_id = r.id;
  var app = $$(this).app;
  var widget = $(this);
  app.db.openDoc(entry_id, {
    success: function(doc) {
      $.log(doc);
      widget.trigger("entry", [doc]);
    }
  });
}