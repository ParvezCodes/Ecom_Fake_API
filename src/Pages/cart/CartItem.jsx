import React, { useContext } from "react";
import "../../Styles/CartItem.css";
import Context from "../../Context/Context";

const CartItem = ({ id, image, title, price, desc, cat, rating, count }) => {
  const { cartItem, addToCart, removeFromCart } = useContext(Context);

  return (
    <div className="cartItem">
      <div className="image">
        <img src={image} alt="product" />
      </div>
      <div className="info">
        <div className="cartInfo">
          <h2 className="title">{title}</h2>
        </div>
        <div className="rating cartInfo">
          <p>{`Rating : ${rating}`}</p>
          <p>{`Count : ${count}`}</p>
        </div>

        <div className="cartInfo">
          <p className="desc">{desc}</p>
        </div>
        <div className="cartInfo">
          <p className="category">{cat}</p>
        </div>

        <div className="cartInfo">
          <p className="price">{`$ : ${price}`}</p>
        </div>

        <div className="cartInfo counthandler">
          <button
            className="btnn"
            onClick={() => {
              removeFromCart(id);
            }}
          >
            {" "}
            -{" "}
          </button>
          <input type="number" className="counter" value={cartItem[id]} />
          <button
            className="btnn"
            onClick={() => {
              addToCart(id);
            }}
          >
            {" "}
            +{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
