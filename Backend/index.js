import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRoute from "./route/user.routes.js";
import bookRoute from "./route/book.routes.js";
import contactRoute from "./route/contact.route.js";
import queryRoute from "./route/query.routes.js";

const app = express();
dotenv.config(); // Ensure dotenv is configured before using process.env

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;
const ConnString = process.env.MONGODB_URI;

// Connect to MongoDB Atlas
mongoose
  .connect(ConnString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.log("Connection Failed: " + error));

// Defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/contact", contactRoute);
app.use("/query", queryRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
