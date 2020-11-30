exports.handler = (event, context, callback) => {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

  const createProduct = async event => {
    const product = await stripe.products.create({
      name: "T-shirt",
    })
  }
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "hello world",
      product: product,
      event: event,
    }),
  }

  return callback(null, response)
}
