import fetch from "node-fetch"

exports.handler = async (event, context) => {
  // Only allow POST
  // if (event.httpMethod !== "POST") {
  //   return { statusCode: 405, body: "Method Not Allowed" }
  // }

  // When the method is POST, the name will no longer be in the event’s
  // queryStringParameters – it’ll be in the event body encoded as a queryString
  const challenge = event.queryStringParameters["hub.challenge"]
  const verifyToken = event.queryStringParameters["hub.verify_token"]

  if (process.env.FACEBOOK_VERIFY_TOKEN != verifyToken) {
    return { statusCode: 401, body: challenge }
  }

  // Send greeting to Slack
  return fetch(process.env.NETLIFY_BUILD_HOOK, {
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
  })
    .then(() => ({
      statusCode: 200,
      body: challenge,
    }))
    .catch((error) => ({
      statusCode: 422,
      body: `Oops! Something went wrong. ${error}`,
    }))
}
