export interface ProductProps {
  id: number,
  title: string,
  price: string,
  category: string,
  description: string,
  image: string
};

export interface CartItemProps {
  title: string,
  price: number,
  quantity: number
}

export interface CartProps {
  cartItems: CartItemProps[];
  amount: number,
  total: number
};