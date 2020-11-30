exports.handler = (event, context, callback) => {
  const createProduct = async event => {
    const product = await stripe.products.create({
      name: "T-shirt",
    })
    return product
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      product: product,
      event: event,
    }),
  }
  return callback(null, response)
}
