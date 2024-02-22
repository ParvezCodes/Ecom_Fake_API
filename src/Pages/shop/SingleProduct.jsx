import React, { useContext } from "react";
import "../../Styles/SingleProduct.css";
import Context from "../../Context/Context";

const SingleProduct = ({ id, image, title, price, category }) => {
  const { addToCart, cartItem } = useContext(Context);

  function shortTitle(title, maxLength) {
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + "...";
    } else {
      return title;
    }
  }

  const cartItemValue = cartItem[id];

  return (
    <>
      <div className="product">
        <div className="productImg">
          <img src={image} alt="" />
        </div>
        <div className="info">
          <h2 className="title">{shortTitle(title, 17)}</h2>
          <p className="price">{`$ : ${price}`}</p>
          <p className="category">{category}</p>
        </div>
        <div className="buttons">
          <button className="btn" id="btn1">View</button>

          <button
            className="btn" id="btn2"
            onClick={() => {
              addToCart(id);
            }}
          >
            Add to Cart {cartItemValue > 0 && <>({cartItemValue})</>}
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
