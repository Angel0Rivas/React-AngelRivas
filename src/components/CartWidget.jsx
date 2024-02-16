import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  const itemCount = 5; 

  return (
    <div className="cart-widget">
      <FaShoppingCart className="cart-icon" />
      <span className="item-count badge bg-secondary">{itemCount}</span>
    </div>
  );
};

export default CartWidget;