function(e, r) {
  var app = $$(this).app;
  var markdown = app.require("vendor/couchapp/lib/markdown");
  var doc = {
    title: r.title,
    _id: r._id,
    post: markdown.encode(r.post),
    tags: r.tags.join(", ")
  };

  if (r.hasOwnProperty('created_at')) {
    doc.created = $.prettyDate(r.created_at);
  } else if (r.hasOwnProperty('created')) {
    doc.created = $.prettyDate(r.created);
  }
  
  if (r.hasOwnProperty('updated_at')) {
    doc.updated = $.prettyDate(r.updated_at);
  } else if (r.hasOwnProperty('updated')) {
    doc.updated = $.prettyDate(r.updated);
  }

  return doc;
}
