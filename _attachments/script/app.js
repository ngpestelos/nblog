$.couch.app(function(app) {
  $("#content").evently(app.ddoc.evently.content, app);
  $("#content").pathbinder("recent", "/");
  $("#content").pathbinder("new", "/new");
  $("#content").pathbinder("show", "/show/:id");
  $("#content").pathbinder("edit", "/edit/:id");

  $("#navbar").evently(app.ddoc.evently.navbar, app);

  $.pathbinder.begin("/");
});
