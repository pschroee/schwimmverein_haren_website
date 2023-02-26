import fetch from "node-fetch"

exports.handler = async (event, context) => {
  if (event.httpMethod === "GET") {
    console.log("Facebook challenge request")
    const challenge = event.queryStringParameters["hub.challenge"]
    const verifyToken = event.queryStringParameters["hub.verify_token"]
    const mode = event.queryStringParameters["hub.mode"]

    if (
      process.env.FACEBOOK_VERIFY_TOKEN != verifyToken &&
      mode != "subscribe"
    ) {
      return { statusCode: 401, body: "Not allowed" }
    }
    return { statusCode: 200, body: challenge }
  } else if (event.httpMethod === "POST") {
    try {
      const body = JSON.parse(event.body)
      let isPostAdded = false

      if (Array.isArray(body)) {
        body.forEach((bodyItem) => {
          if (bodyItem["object"] == "page") {
            bodyItem.entry.forEach((entryItem) => {
              entryItem.changes.forEach((changesItem) => {
                if (
                  changesItem.field == "feed" &&
                  changesItem.value.item == "post" &&
                  changesItem.value.verb == "add"
                ) {
                  isPostAdded = true
                }
              })
            })
          }
        })
      } else {
        const bodyItem = body
        if (bodyItem["object"] == "page") {
          bodyItem.entry.forEach((entryItem) => {
            entryItem.changes.forEach((changesItem) => {
              if (
                changesItem.field == "feed" &&
                changesItem.value.item == "post" &&
                changesItem.value.verb == "add"
              ) {
                isPostAdded = true
              }
            })
          })
        }
      }

      if (isPostAdded) {
        console.log("New post is added. Rebuild the site.")
        await fetch(process.env.NETLIFY_BUILD_HOOK, {
          headers: {
            "content-type": "application/json",
          },
          method: "POST",
        })
      } else {
        console.log(`New update to feed: ${event.body}`)
      }
    } catch (error) {
      return {
        statusCode: 422,
        body: `Oops! Something went wrong. ${error}`,
      }
    }
  }
}
