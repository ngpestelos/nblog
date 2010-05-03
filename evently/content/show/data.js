function(e, resp) {
  var app = $$(this).app;
  var markdown = app.require("vendor/couchapp/lib/markdown");
  return {
    id: resp._id,
    title: resp.title,
    post: markdown.encode(resp.post),
    tags: resp.tags.join(", ")
  };
}
