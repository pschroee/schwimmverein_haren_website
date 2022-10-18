const querystring = require("querystring")
const fetch = require("node-fetch")

exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" }
  }

  // When the method is POST, the name will no longer be in the event’s
  // queryStringParameters – it’ll be in the event body encoded as a queryString
  const params = querystring.parse(event.body)
  const challenge = params["hub.challenge"]
  const verifyToken = params["hub.verifyToken"]

  if (process.env.FACEBOOK_VERIFY_TOKEN != verifyToken) {
    return { statusCode: 401, body: "Wrong verify token" }
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
