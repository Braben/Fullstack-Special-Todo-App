import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Task Manager</h1>
      <div className="flex gap-4">
        <Link to="/" className="hover:text-yellow-300">
          Home
        </Link>
        <Link to="/signin" className="hover:text-yellow-300">
          Sign In
        </Link>
        <Link to="/signup" className="hover:text-yellow-300">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
