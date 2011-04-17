function(e, r) {
  var widget = $(this);
  var app = $$(this).app;
  var markdown = app.require("vendor/couchapp/lib/markdown");  

  app.db.openDoc(r.id, {
    success : function(doc) {
      widget.trigger("entry", [doc]);
    },
    error : function() {
      widget.trigger("recent");
    }    
  });
}