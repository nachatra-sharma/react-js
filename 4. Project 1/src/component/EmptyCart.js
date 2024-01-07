import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <>
      <div className="empty-cart-img">
        <img
          src="https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg"
          alt="empty-cart-img"
        />
      </div>
      <div className="empty-cart-text">
        <h2>
          Your Cart is <span>Empty!</span>
        </h2>
        <p>
          Must add items on the cart before before you proceed to check out.
        </p>
        <Link to="/">
          <button>
            <i className="fa fa-shopping-bag" aria-hidden="true"></i> Return to
            Shopping
          </button>
        </Link>
      </div>
    </>
  );
};

export default EmptyCart;
