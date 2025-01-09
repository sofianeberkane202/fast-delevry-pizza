import { useDispatch } from "react-redux";
import { addToCart, decreaseQuantity, deleteCartItem, increaseQuantity } from "./reducerCartSlice";

function useCartActions({ id, newItem }) {
  const dispatch = useDispatch();

  function handleDeleteCartItem() {
    dispatch(deleteCartItem(id));
  }

  function handleDecreaseQuantity() {
    dispatch(decreaseQuantity(id));
  }

  function handleIncreaseQuantity() {
    dispatch(increaseQuantity(id));
  }

  function handleAddItemToCart() {
    const { id, name, unitPrice, ingredients } = newItem;
    const item = {
      pizzaId: +id,
      name,
      ingredients,
      unitPrice,
      quantity: 1,
      totalPrice: unitPrice * 1,
    };
    dispatch(addToCart(item));
  }

  return { handleDecreaseQuantity, handleDeleteCartItem, handleIncreaseQuantity, handleAddItemToCart };
}

export default useCartActions;
