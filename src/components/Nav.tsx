import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"
import { useAppSelector } from "../app/hooks";

const Nav = () => {
  const { amount } = useAppSelector(state => state.cart);
  
  return (
    <nav>
      <div className="nav">
        <div className="nav__logo">
          <Link className="logo__link" to="/shopping-cart/">
            Fake Store
          </Link>
        </div>
        <ul className="nav__links">
          <Link className="nav__link link--underline" to="/shopping-cart/">
            <li>Home</li>
          </Link>
          <Link className="nav__link link--underline" to="/shopping-cart/shop">
            <li>Shop</li>
          </Link>
          <Link className="nav__link" to="/shopping-cart/cart">
            <li>
              <div className="icon__container">
                <FaShoppingCart />
                <div className="amount__container">{amount}</div>
              </div>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;