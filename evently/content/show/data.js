function(e, resp) {
  var app = $$(this).app;
  var markdown = app.require("vendor/couchapp/lib/markdown");
  return {
    title: resp.title,
    post: markdown.encode(resp.post)
  };
}
