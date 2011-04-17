function(e, r) {
  var app = $$(this).app;
  var markdown = app.require("vendor/couchapp/lib/markdown");
  var doc = {};

  if (r && r.hasOwnProperty("_id")) {
    doc['title'] = r.title;
    doc['id'] = r._id;
    doc['post'] = r.post;
    doc['tags'] = r.tags.join(", ");
    
    if (r.hasOwnProperty("updated_at"))
      doc['updated'] = $.prettyDate(r.updated_at);      
    else if (r.hasOwnProperty("updated"))
      doc['updated'] = $.prettyDate(r.updated);
      
    if (r.hasOwnProperty("created_at"))
      doc['created'] = $.prettyDate(r.created_at);
    else if (r.hasOwnProperty("created"))
      doc['created'] = $.prettyDate(r.created);
      
  } else {
    doc['title'] = "New Entry";
  }

  return doc;
}