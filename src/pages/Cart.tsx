import { useAppDispatch, useAppSelector } from "../app/hooks";

const Cart = () => {
  const dispatch = useAppDispatch();

  const { total } = useAppSelector(state => state.cart);
  
  return (
    <div className="cart">
      {total}
    </div>
  )
}

export default Cart;