import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../../Context/Context.js";
import CartItem from "./CartItem.jsx";
import "../../Styles/Cart.css";

const Cart = () => {
  const { data, cartItem, getCartAmount } = useContext(Context);
  const totalAmount = getCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h2 className="heading">Your Cart Items</h2>
      </div>
      <div className="cartItems">
        {data.map((product) => {
          if (cartItem[product.id] !== 0) {
            return (
              <CartItem
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                desc={product.description}
                cat={product.category}
                rating={product.rating.rate}
                count={product.rating.count}
              />
            );
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>{`Total :$ ${totalAmount}`}</p>
          <button
            className="btnnn"
            onClick={() => {
              navigate("/");
            }}
          >
            Continue
          </button>
          <button className="btnnn">CheckOut</button>
        </div>
      ) : (
        <h1 className="empty">Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
