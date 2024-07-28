import productModel from "../models/product-model.js";
import fs from "fs";

// add product
const addProduct = async (req, res) => {
  let image_filename = `${req.file.filename}`;
  const { name, description, price, category } = req.body;

  const product = new productModel({
    name,
    description,
    price,
    category,
    image: image_filename,
  });

  try {
    await product.save();
    res.json({ success: true, message: "product added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error to add product" });
  }
};

export { addProduct };
