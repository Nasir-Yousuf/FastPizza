import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";

// BOTTOM COMPONENT
function CartOverview() {
  // const totalCartQuantity = useSelector((state) =>
  //   state.cart.cart.reduce((sum, item) => sum + item.quantity, 0),
  // );
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  if (!totalCartQuantity) return;
  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm text-stone-200 uppercase sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>${totalCartPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
      {/* <Link to="/menu">View menu &rarr;</Link> */}
    </div>
  );
}

export default CartOverview;
