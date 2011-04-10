$.couch.app(function(app) {
  $("#content").evently(app.ddoc.evently.content, app);
  $("#content").pathbinder("recent", "/");
  $("#content").pathbinder("show", "/show/:id");
  $("#content").pathbinder("edit", "/edit/:id");
  $("#content").pathbinder("new-entry", "/new");
  
  $.pathbinder.begin("/");
});