import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { decrementQuantity, incrementQuantity, deleteItem } from "../features/cartSlice";

const Cart = () => {
  const dispatch = useAppDispatch();

  const { total, amount, cartItems } = useAppSelector(state => state.cart);

  return (
    <div className="cart">
      <h2 className="cart__title">Shopping Cart</h2>
      <div className="cart__container">
        {amount > 0 ?
        <div className="cart__items">
          {cartItems.map(item => (
            <div key={item.id} className="cart__item">
              <div className="item__image">
                <img src={item.image} alt={item.title}></img>
              </div>
              <div className="item__info">
                <div className="top__container">
                  <h3>{item.title}</h3>
                  <p>${(Math.round(item.price * 100) / 100).toFixed(2)}</p>
                </div>
                <div className="bot__container">
                  <button className="btn__delete" onClick={() => dispatch(deleteItem(item))}>Remove Item</button>
                  <div className="item__quantity">
                    <div>{item.quantity}</div>
                    <div className="quantity__btns">
                      <div className="increment">
                        <FaChevronUp
                        style={{cursor: item.quantity > 98 ? "not-allowed": "pointer"}}
                        onClick={() => dispatch(incrementQuantity(item))} />
                      </div>
                      <div className="decrement">
                        <FaChevronDown
                        style={{cursor: item.quantity < 2 ? "not-allowed": "pointer"}}
                        onClick={() => dispatch(decrementQuantity(item))} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>: 
        <div className="cart__items cart__empty">
          <h3>CART IS EMPTY!</h3>
          <Link to="/shop">
            <button className="btn">Continue to shop</button>
          </Link>
        </div>
        }
        <div className="cart__total">
          <h3>Cart Total</h3>
          <div className="total__display">
            <p>Total</p>
            <p>${(Math.round(total * 100) / 100).toFixed(2)}</p>
          </div>
          <div className="cart__checkout">
            <button className="checkout__btn btn">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;