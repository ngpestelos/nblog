$.couch.app(function(app) {
  $("#content").evently(app.ddoc.evently.content, app);
  $("#content").pathbinder("recent", "/");
  $("#content").pathbinder("new", "/new");
  $("#content").pathbinder("show", "/show/:id");
  $("#content").pathbinder("edit", "/edit/:id");
  $("#content").pathbinder("all", "/all");
  $("#content").pathbinder("showTagged", "/tag/:tag");

  $("#navbar").evently(app.ddoc.evently.navbar, app);

  $("#sidebar").evently(app.ddoc.evently.sidebar, app);

  $.pathbinder.begin("/");

  //$.evently.connect($("#content"), $("#sidebar"));
});
