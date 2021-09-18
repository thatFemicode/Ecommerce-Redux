import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProductComponents = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderedList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div key={id}>
        <Link to={`/product/${id}`}>
          <div>
            <div>
              <div>
                <img src={image} alt="" />
              </div>
              <div>
                <div>{title}</div>
                <div>${price}</div>
                <div>{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  console.log(products);
  return <>{renderedList}</>;
  // const { id, title } = products[0];
  // console.log(title);
};

export default ProductComponents;
