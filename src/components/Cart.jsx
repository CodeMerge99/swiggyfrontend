

import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  return (
    <div className="m-4 p-4 text-center">
      <h1 className="font-bold">Cart</h1>
      <div>
        <ItemList items={cartItems} />
        <button
          className="m-2 p-2 bg-black text-white rounded-md"
          onClick={clearCartHandler}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1>Your Cart is Empty. Please Add some Items</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
