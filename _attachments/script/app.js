$.couch.app(function(app) {
  $("#hello").evently(app.ddoc.evently.hello, app);
  
  $("#navbar").evently(app.ddoc.evently.navbar, app);
});