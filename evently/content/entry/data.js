function(e, r) {
  var app = $$(this).app;
  var markdown = app.require("vendor/couchapp/lib/markdown");
  return {
    title: r.title,
    id: r._id,
    post: markdown.encode(r.post),
    tags: r.tags.join(", ")
  };
}
