function() {
  var widget = $(this);
  var app = $$(this).app;
  var entry_id = $("input[name=data-id]").val();

  var title = $("input[name=title]").val();
  var post  = $("textarea[name=post]").val();
  var tags  = $("input[name=tags]").val().split(",");

  app.db.openDoc(entry_id, {
    success: function(doc) {
      doc.title = title;
      doc.post  = post;
      doc.tags  = tags;
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
