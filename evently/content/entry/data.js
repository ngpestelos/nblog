function(e, r) {
  return {
    title: r.title,
    id: r._id,
    post: r.post,
    tags: r.tags.join(", ")
  };
}
