import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/" style={{ margin: "0 10px" }}>Главная</Link>
      <Link to="/about" style={{ margin: "0 10px" }}>О нас</Link>
      <Link to="/contact" style={{ margin: "0 10px" }}>Контакты</Link>
    </nav>
  );
}

export default Navbar;
