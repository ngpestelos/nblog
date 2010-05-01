function() {
  // TODO an entry must have a title

  var form = this;
  var app = $$(this).app;
  var widget = $(this);
  
  var newEntry = {
    post : $("input[name=post]").val(),
    title : $("input[name=title]").val(),
    type : "entry",
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
