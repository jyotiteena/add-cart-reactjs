import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartCount } = useCart();

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link to="/" className="navbar-brand">
        Shopping App
      </Link>
      <Link to="/cart" className="btn btn-warning">
        Cart ({cartCount})
      </Link>
    </nav>
  );
};

export default Navbar;
