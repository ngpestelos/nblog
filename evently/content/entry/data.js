function(e, r) {
  var app = $$(this).app;
  var markdown = app.require("vendor/couchapp/lib/markdown");
  var tags_href = r.tags.map(function(t) {
    return "<a href='#/tag/" + t + "'>" + t + "</a>";
  });
  var doc = {
    title: r.title,
    _id: r._id,
    post: markdown.encode(r.post),
    tags: tags_href.join(", ")
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
