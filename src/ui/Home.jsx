import CreateUser from "../features/user/CreateUser";
import { useSelector } from "react-redux";
import Button from "./Button";
function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="my-10 p-4 text-center sm:p-6">
      <h1 className="mb-8 text-2xl font-semibold">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {!username && <CreateUser />}
      {username && (
        <Button type="primary" to="/menu">
          Start Ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
