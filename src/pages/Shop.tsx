import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { receivedProducts } from "../features/productsSlice";
import { addToCart } from "../features/cartSlice";
import { getProducts } from "../utils/api";

const Shop = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getProducts().then(products => {
      dispatch(receivedProducts(products));
    })
  }, [dispatch])

  const products = useAppSelector(state => state.products);
  
  return (
    <div className="shop">
      <div>
        <ul className="shop__items">
          {products.map(product => (
            <li className="shop__product" key={product.id}>
              <div className="product">
                <img className="product__img" src={product.image} alt={product.title}></img>
                <div className="product__info">
                  <h3>{product.title}</h3>
                  <p>${product.price}</p>
                </div>
                <div>
                  <button className="btn" onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
                </div>
              </div>
            </li>
          )) }
        </ul>
      </div>
    </div>
  )
}

export default Shop;