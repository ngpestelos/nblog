function(e) {
  var ans = confirm("Are you sure?");
  if (ans) {
    var widget = $(this);
    var id = $("div.entry").attr("data-id");
    var db = $$(this).app.db;
    db.openDoc(id, {
      success: function(doc) {
        db.removeDoc(doc);
        widget.trigger("recent", []);
      }  
    });
  }
  return ans;
}
