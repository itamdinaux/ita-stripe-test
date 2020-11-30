const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

exports.handler = (event, context, callback) => {
  const element = async event => {
    const product = await stripe.products.create({
      name: "T-shirt",
    })
    const price = await stripe.prices.create({
      product: "{{PRODUCT_ID}}",
      unit_amount: 2000,
      currency: "usd",
    })
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hi there!",
      event: event,
    }),
  }
  return callback(null, response)
}
