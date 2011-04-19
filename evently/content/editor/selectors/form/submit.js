function() {  
  var widget = $(this);
  var app = $$(this).app;
  var title = $("input[name=title]").val();
  var post  = $("textarea[name=post]").val();
  var tags  = $("input[name=tags]").val();
  
  if (title === "") {
    alert("Title is required");
    $("input[name=title]").focus();
    return false;
  }
  
  if (tags === "") {
    tags = ["blog"];
  } else {
    tags = tags.split(", ");
  }
  
  var entry = {
    "title" : title,
    "post"  : post,
    "tags"  : tags,
    "type"  : "entry"
  };
  
  var id = $("input[name=data-id]").val();
  var tstamp = new Date();
  if (id === "") {
    // New    
    entry['created'] = tstamp;
    entry['updated'] = tstamp;
    app.db.saveDoc(entry, {
      success : function() {
        widget.trigger("recent");
      },
      error : function() {
        alert("Could not save entry");
      }
    });
  } else {
    // Update
    app.db.openDoc(id, {
      success : function(doc) {
        entry['_id'] = doc['_id'];
        entry['_rev'] = doc['_rev'];
        entry['created'] = doc.hasOwnProperty('created_at') ? doc['created_at'] : doc['created'];
        entry['updated'] = tstamp;
        app.db.saveDoc(entry, {
          success: function() {
            widget.trigger("show", [{"id" : id}]);
          },
          error : function() {
            alert("Could not save entry");
          }
        });
      },
      error : function() {
        alert("Could not load entry");
      }
    });
    entry['updated'] = tstamp.getTime();
  }

  return false;
}