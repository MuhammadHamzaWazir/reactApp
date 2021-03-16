/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="add-to-cart">
          <img src="https://www.kindpng.com/picc/m/366-3668689_transparent-shopping-cart-logo-hd-png-download.png" />
        </div>
        <h1>Home</h1>
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
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
