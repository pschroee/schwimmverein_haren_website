import fetch from "node-fetch"

exports.handler = async (event, context) => {
  // Only allow POST
  // if (event.httpMethod !== "POST") {
  //   return { statusCode: 405, body: "Method Not Allowed" }
  // }

  // When the method is POST, the name will no longer be in the event’s
  // queryStringParameters – it’ll be in the event body encoded as a queryString

  console.log(event.httpMethod)
  if (event.httpMethod === "GET") {
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
      console.log(event.body)
      // await fetch(process.env.NETLIFY_BUILD_HOOK, {
      // headers: {
      //   "content-type": "application/json",
      // },
      // method: "POST",
      // })
    } catch (error) {
      return {
        statusCode: 422,
        body: `Oops! Something went wrong. ${error}`,
      }
    }
  }
}
