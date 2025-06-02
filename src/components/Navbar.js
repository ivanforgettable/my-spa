import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="historical-navbar">
      <div className="navbar-content">
        <Link to="/" className="historical-nav-link">
          Главная
        </Link>
        <Link to="/courses" className="historical-nav-link">
          Курсы
        </Link>
        <Link to="/about" className="historical-nav-link">
          О школе
        </Link>
        <Link to="/contact" className="historical-nav-link">
          Записат��ся
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
