export async function getPosts() {
  const data = await fetch(
    `https://graph.facebook.com/v15.0/${
      import.meta.env.FACEBOOK_PAGE_ID
    }/posts?` +
      new URLSearchParams({
        fields: [
          "created_time",
          "story",
          "message",
          // "full_picture",
          "place",
          "permalink_url",
          "attachments{media,title}",
          "status_type",
        ].join(","),
        access_token: import.meta.env.FACEBOOK_ACCESS_TOKEN,
        limit: 10,
      })
  ).then((response) => response.json())
  const filteredPostsWithMessages = data.data.filter((post) => {
    if (post.message && post.status_type !== "shared_story") {
      return true
    } else {
      return false
    }
  })
  return filteredPostsWithMessages.slice(0, 3)
}
