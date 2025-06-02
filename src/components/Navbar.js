import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="historical-navbar">
      <div className="navbar-content">
        <Link to="/" className="historical-nav-link">
          Главная
        </Link>
        <Link to="/about" className="historical-nav-link">
          О нас
        </Link>
        <Link to="/contact" className="historical-nav-link">
          Контакты
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
