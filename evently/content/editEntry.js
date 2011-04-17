function(e, r) {
  var widget = $(this);
  var app = $$(this).app;
  app.db.openDoc(r.id, {
    success : function(doc) {
      widget.trigger("editor", [doc]);
    },
    error : function(doc) {
      alert('oops');
    }
  });
}