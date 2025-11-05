// components/Header.jsx
import { Link } from 'react-router-dom';
import CartIcon from '../assets/cart-icon.svg';
import { useSelector } from 'react-redux';

export default function Header() {
  const cartItems = useSelector((state) => state.cartItems); // Correct key

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <Link className="cart-icon" to="/cart">
          <img src={CartIcon} alt="cart-icon" />
          <div className="cart-items-count">{totalItems}</div>
        </Link>
      </div>
    </header>
  );
}