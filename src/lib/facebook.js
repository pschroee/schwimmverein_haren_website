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
        ].join(","),
        access_token: import.meta.env.FACEBOOK_ACCESS_TOKEN,
        limit: 10,
      })
  ).then((response) => response.json())
  const filteredPostsWithMessages = data.data.filter((post) => post.message)
  return filteredPostsWithMessages.slice(0, 10)
}
