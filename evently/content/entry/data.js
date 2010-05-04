function(e, r) {
  var app = $$(this).app;
  var markdown = app.require("vendor/couchapp/lib/markdown");
  doc = {
    title: r.title,
    id: r._id,
    post: markdown.encode(r.post),
    tags: r.tags.join(","),
    updated_at: $.prettyDate(r.updated_at)
  };

  if (r.hasOwnProperty('created_at')) {
    doc.created_at = $.prettyDate(r.created_at);
  }

  return doc;
}
