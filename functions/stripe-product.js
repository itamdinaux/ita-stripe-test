const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

exports.handler = (event, context, callback) => {
  const requestBody = JSON.parse(event.body)
  const token = requestBody.token.id

  return stripe.products
    .create({
      // Create Stripe charge with token
      name: "T-shirt",
      source: token,
    })
    .then(
      callback(null, {
        statusCode: 200,
        body: "Product create",
      })
    )
}
