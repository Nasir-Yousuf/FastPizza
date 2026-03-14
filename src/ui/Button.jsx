import { Link } from "react-router-dom";

function Button({ children, disabled, to, type = "primary" }) {
  const base =
    "inline-block rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold tracking-wide text-stone-800 uppercase transition-all hover:bg-yellow-300 focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:bg-yellow-100 disabled:text-yellow-300 sm:px-6 sm:py-4 text-sm";
  const style = {
    primary: base + " px-4 py-2 md:px-6 md:py-4",
    small: base + " px-4py-2 md:px-5 md:py-2.5 text-xs text-xs",
    secondary:
      "text-sm inline-block rounded-full border-2 border-stone-300  font-semibold tracking-wide text-stone-800 uppercase tracking-wide text-stone-800 transition-colours duration-300 hover:bg-stone-300 focus:ring-2 focus:bg-stone-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed  disabled:cursor-not-allowed  px-4 py-2.5 md:px-6 md:py-3.5 hover:text-stone-800 focus:ring-stone-200",
  };
  if (to) {
    return (
      <Link to={to} className={style[type]} disabled={disabled}>
        {children}
      </Link>
    );
  }
  return (
    <button className={style[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
