const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

exports.handler = (event, context, callback) => {
  const element = async event => {
    const product = await stripe.products.create({
      name: "T-shirt",
    })

    return product.name
  }
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hi there!",
      product: element(),
      event: event,
    }),
  }

  return callback(null, response)
}
