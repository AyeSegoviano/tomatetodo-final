import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="img-container">
            <Link to="/">
              <img src="/img/logo.png" alt="Logo" />
            </Link>
          </div>
          <div className="ul-container">
            <ul className="list">
              <Link to="/category/vodka" className="btn-nav">
                Tragos con Vodka
              </Link>
              <Link to="/category/gin" className="btn-nav">
                Tragos con Gin
              </Link>
              <Link to="/category/whisky" className="btn-nav">
                Tragos con Whisky
              </Link>
              <CartWidget />
            </ul>
          </div>
        </div>
      </nav>
      <div className="header-container">
        <h1>Tomate Todo</h1>
        <p className="h1-subtitle">Recetas de Coctelería</p>
      </div>
    </header>
  );
};

export default Navbar;
