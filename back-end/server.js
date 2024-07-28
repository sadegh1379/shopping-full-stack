import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import productRouter from "./routes/product-route.js";

// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// api endpoints
app.use("/api/product", productRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

// db connect
connectDB();

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
