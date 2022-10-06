import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"

const Nav = () => {
  return (
    <nav>
      <div className="nav">
        <div className="nav__logo">
          <Link to="/">
            Shopping Cart
          </Link>
        </div>
        <div className="nav__links">
          <ul>
            <Link className="nav__link" to="/">
              <li>Home</li>
            </Link>
            <Link className="nav__link" to="/shop">
              <li>Shop</li>
            </Link>
            <Link className="nav__link" to="/cart">
              <li>
                <FaShoppingCart />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;