const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

exports.handler = (event, context, callback) => {

  const product = await stripe.products.create({
    name: 'T-shirt',
  });
  const price = await stripe.prices.create({
    product: '{{PRODUCT_ID}}',
    unit_amount: 2000,
    currency: 'usd',
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price: '{{PRICE_ID}}',
      quantity: 1,
    }],
    mode: 'payment',
    success_url: 'https://localhost.com/?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: 'https://localhost.com/cancel',
  });

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hi there!",
      stripe : price,
      event: event,
    }),
  }
  return callback(null, response)
}
