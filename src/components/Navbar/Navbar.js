import './Navbar';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (

 <header className="header">
                    <nav className="navbar">
                        <div className="navbar-container">
                            <div className="img-container">
                                <img src="img/logo.png" alt="Logo" />
                            </div>
                            <div className="ul-container">
                                <ul className="list">
                                    <button className="btn">Categoría 1</button>
                                    <button className="btn">Categoría 2</button>
                                    <button className="btn">Categoría 3</button>
                                    <button className="btn">Categoría 4</button>
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