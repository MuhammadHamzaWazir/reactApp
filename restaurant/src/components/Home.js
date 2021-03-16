/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

function Home(props) {
  console.warn("home p", props.data);
  return (
    <div>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://www.gizmochina.com/wp-content/uploads/2020/04/cats-500x500.jpg"
            width="100"
          />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() =>
              props.addToCartHandler({ price: 1000, name: "IPhone 10" })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
