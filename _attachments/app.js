$.couch.app(function(app) {
  $("#content").evently(app.ddoc.evently.content, app);
  $("#content").pathbinder("recent", "/");
  $("#content").pathbinder("showEntry", "/show/:id");
  $("#content").pathbinder("editEntry", "/edit/:id");
  $("#content").pathbinder("newEntry", "/new");
  $("#content").pathbinder("showTagged", "/tag/:t");
  
  $.pathbinder.begin("/");
});