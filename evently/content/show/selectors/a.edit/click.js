// see evently/content/recent/selectors/ol.recent/_changes/selectors/a/click.js

function() {
  var div = $(this).parents("div");
  var entry_id = div.attr("data-id");
  var app = $$(this).app;
  var widget = $(this);

  app.db.openDoc(entry_id, {
    success: function(doc) {
      widget.trigger("edit", [doc]);
    }
  });

  return false;
}
