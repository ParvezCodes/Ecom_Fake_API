import axios from "axios";
import React, { useEffect, useContext, useState } from "react";
import SingleProduct from "./SingleProduct";
import "../../Styles/Shop.css";
import Context from "../../Context/Context";

const Shop = () => {
  const { data, setData } = useContext(Context);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        console.log(res.data);
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className="heading">All Products</h1>

      <div className="shop">
        {data.map((product) => (
          <SingleProduct
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            category={product.category}
          />
        ))}
      </div>
    </>
  );
};

export default Shop;
