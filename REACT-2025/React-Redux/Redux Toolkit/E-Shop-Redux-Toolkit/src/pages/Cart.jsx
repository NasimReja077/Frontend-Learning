// pages / Cart.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// if store is request then action ko useDispatch kar na para ga
import { remove } from '../store/slices/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const handleRemove = (productId) => {
    dispatch(remove(productId))
  }
    return (
        <div>
            <h3>Cart</h3>
            <div className="cartWrapper">
                {products.map((product) => (
                    <div key={product.id + Math.random()} className="cartCard">
                        <img src={product.image} alt="" />
                        <h5>{product.title}</h5>
                        <h5>{product.price}</h5>
                        <button
                            className="btn"
                            onClick={() => handleRemove(product.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;