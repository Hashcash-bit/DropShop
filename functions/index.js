const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IBsR3LRhLda3bwndAmoC01jQGJr5uz5zrtRDn5oq7Nlx445VITUn6XDY9lPWq140N2K1eWNCiaBarUSozjMYwlI003B3WNdSg"
);

//API

// APP Config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Recieved Boom!!! for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen command]
exports.api = functions.https.onRequest(app);

//Example endpoint
//http://localhost:5001/dropshop-68e7f/us-central1/api
