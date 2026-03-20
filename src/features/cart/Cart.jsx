import { Link, useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getUserName } from "./cartSlice";
import EmptyCart from "./EmptyCart";
import DeleteItem from "./DeleteItem";

function Cart() {
  const username = useSelector(getUserName);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart());
    // navigate("/menu");
  }

  if (!cart.length) {
    return <EmptyCart />;
  }

  return (
    <div className="px-4 py-3">
      <Link to="/menu" className="text-sm text-blue-500 hover:text-blue-700">
        &larr; Back to menu
      </Link>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-2 divide-y divide-stone-200 border-t border-b border-stone-200">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>

      <div className="mt-4 space-x-2">
        <Button type="primary" to="/order/new">
          Order Pizzas
        </Button>
        <Button type="secondary" onClick={() => handleClearCart()}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
