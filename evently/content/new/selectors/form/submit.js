function() {
  // TODO an entry must have a title

  var form = this;
  var app = $$(this).app;
  var widget = $(this);
  
  var newEntry = {
    post : $("textarea[name=post]").val(),
    title : $("input[name=title]").val(),
    type : "entry",
    tags : $("input[name=tags]").val().split(", "),
    created_at : new Date()
  };

  app.db.saveDoc(newEntry, {
    success: function() {
      widget.trigger("recent");
    },
    error : function() {
      alert('oh noes');
    }
  });

  return false;
}
