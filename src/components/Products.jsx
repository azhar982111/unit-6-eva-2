import React from "react";
import Product from "./Product"

const Products = () => {
  const getData = () => {
    fetch(`http://localhost:8080/products`)
  .then((response) => response.json())
  .then((data) => {return data});
  }

  let data = getData()
  console.log(data)

  return (
    <div>
      {data.map((element) => {
      <Product id={element.id} />
    })};
    </div>
  );

  
};

export default Products;
