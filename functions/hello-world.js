exports.handler = (event, context, callback) => {
 const product = await stripe.products.create({
  name: 'T-shirt',
});

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hi there!',
      product : product,
      event: event,
    }),
  }
  return callback(null, response)
}