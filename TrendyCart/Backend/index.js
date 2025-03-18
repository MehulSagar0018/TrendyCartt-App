const express = require('express');
const app = express();
const cors = require('cors');
require("dotenv").config();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const uploadImage = require("./src/utils/uploadImage");
const helmet = require('helmet');


const port = process.env.PORT || 3000

//middlewares
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
 

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        fontSrc: ["'self'", "https://fonts.gstatic.com", "https://js.stripe.com"], // Allow fonts from Google Fonts and Stripe
      },
    },
  })
);
app.use(cors({ 
  origin: ' http://localhost:5173',
  credentials: true,
}));
app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: req.body.items.map(item => {
        return {
          price_data: {
            currency: 'usd',
            product_data: {
              name: item.name,
              images: [item.image]
            },
            unit_amount: item.price * 100
          },
          quantity: item.quantity
        }
      }),
      success_url: `http://localhost:5173/success`,
      cancel_url: `http://localhost:5173/cancel`,
      billing_address_collection: 'required',
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
});
//routes
const authRoutes = require('./src/users/user.route');
const productRoutes = require('./src/products/products.route');
const reviewRoutes = require('./src/reviews/reviews.router');
const orderRoutes = require('./src/orders/orders.route');
const statsRoutes = require('./src/stats/stats.route');


app.use('/api/auth', authRoutes);
app.use('/api/products',productRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/stats', statsRoutes);

main()
.then(() => console.log('Connected to DB'))
.catch((err) => console.log(err));
// Chatbot Logic
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).send({ error: 'Message is required' });
  }

  try {
    // Simple chatbot logic
    const botReply = chatbotResponse(message);
    res.send({ reply: botReply });
  } catch (error) {
    console.error('Error processing message:', error);
    res.status(500).send({ error: 'Failed to process your message' });
  }
});
// Chatbot response logic
const chatbotResponse = (message) => {
  const lowerCaseMessage = message.toLowerCase();

  if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
    return 'Hello! How can I assist you today?';
  }

  if (lowerCaseMessage.includes('product') || lowerCaseMessage.includes('search')) {
    return 'Sure! What product are you looking for?';
  }

  if (lowerCaseMessage.includes('order') || lowerCaseMessage.includes('track')) {
    return 'Please provide your order ID to track your order.';
  }

  if (lowerCaseMessage.includes('return') || lowerCaseMessage.includes('policy')) {
    return 'Our return policy allows returns within 30 days of purchase.';
  }

  return "I'm sorry, I didn't understand that. How can I assist you?";
};

async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.get('/', (req, res) => {
    res.send('Hello ')
  })
}


app.listen(port, () => {
  console.log(`Example app listening ${port}`)
})