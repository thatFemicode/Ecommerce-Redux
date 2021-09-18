import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";
import ProductComponents from "./ProductComponents";
const url = "https://fakestoreapi.com/products";

// To Dipatch use the redux hook

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts);
  // console.log(products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios.get(url).catch((err) => {
      console.log("Err", err);
    });
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("products", products);
  return (
    <div>
      <h1>Product Listing</h1>
      <ProductComponents />
    </div>
  );
};

export default ProductListing;
