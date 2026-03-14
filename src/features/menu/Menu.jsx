import { getMenu } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();

  return (
    <ul className="divide-y divide-stone-300 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} />
      ))}
    </ul>
  );
}
// This is using render as you fetch strtegy not the fetch on render that create waterfall effect. This is the recommended way to fetch data in react router v6.4 and above. It is also the recommended way to fetch data in react in general. It allows you to fetch data before rendering the component, which can improve the user experience by avoiding loading states and reducing the time to first paint.

export function loader() {
  const menu = getMenu();
  return menu;
}

export default Menu;
