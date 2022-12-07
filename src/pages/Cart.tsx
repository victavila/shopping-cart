import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { FaChevronUp, FaChevronDown, FaTrashAlt } from "react-icons/fa";
import { decrementQuantity, incrementQuantity, deleteItem } from "../features/cartSlice";

const Cart = () => {
  const dispatch = useAppDispatch();

  const { total, amount, cartItems } = useAppSelector(state => state.cart);
  
  return (
    <div className="cart">
      <h2 className="cart__title">Shopping Cart</h2>
      <div className="cart__container">
        <div className="cart__items">
          {amount > 0 ? 
          <ul className="cart__list">
            {cartItems.map(item => (
              <li className="cart__listItem" key={item.id}>
                <div className="cart__item">
                  <div className="cart__itemImg">
                    <img src={item.image} alt={item.title}></img>
                  </div>
                  <div className="cart__itemDetails">
                    <h4 className="item__name">{item.title}</h4>
                    <div className="item__price">${item.price}</div>
                    <div className="item__quantity">
                      <div>{item.quantity}</div>
                      <div className="item__quantityBtns">
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
                      <div className="item__deleteBtn">
                        <button>
                          <FaTrashAlt onClick={() => dispatch(deleteItem(item))} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>:
          <div>
            <h3>CART IS EMPTY!</h3>
            <Link to="/shop">
              <button>Continue to shop</button>
            </Link>
          </div>
          }
        </div>
        <div className="cart__total">
          <div></div>
          <div className="cart__total">Total: $ {(Math.round(total * 100) / 100).toFixed(2)}</div>
          <div className="cart__checkout">
            <button className="checkout__btn">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;