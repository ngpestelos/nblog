function() {
  var widget = $(this);
  var app = $$(this).app;
  var entry_id = $("input[name=data-id]").val();

  app.db.openDoc(entry_id, {
    success: function(doc) {
      doc.title = $("input[name=title]").val();
      app.db.saveDoc(doc, {
        success: function() {
          widget.trigger("recent", []);
        }
      });
    }
  });

  return false;
}
