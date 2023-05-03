const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
//const stripeRoute = require("./routes/stripe");
// const cryptoJsKey = process.env.CRYPTO_JS_KEY;
// console.log(`CRYPTO_JS_KEY value is: ${cryptoJsKey}`);


const cors = require("cors");
mongoose.set('strictQuery', true);

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

app.listen(process.env.PORT || 3000, () => {
  console.log("Backend server is running!");
});