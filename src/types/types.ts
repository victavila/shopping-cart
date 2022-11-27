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
  image: string
  price: number,
  quantity: number,
  id: number
}

export interface CartProps {
  cartItems: CartItemProps[];
  amount: number,
  total: number
};