function() {
  var widget = $(this);
  var app = $$(this).app;
  var entry_id = $("input[name=data-id]").val();

  app.db.openDoc(entry_id, {
    success: function(doc) {
      doc.title = $("input[name=title]").val();
      doc.post = $("textarea[name=post]").val();
      doc.tags = $("input[name=tags]").val().split(",");
      doc.updated_at = new Date();
      app.db.saveDoc(doc, {
        success: function() {
          widget.trigger("show", [{id: entry_id}]);
        }
      });
    }
  });

  return false;
}
