import './Navbar';

const Navbar = () => {
    return (

<header className="header">
                    <nav className="navbar">
                        <div className="navbar-container">
                            <div className="img-container">
                                <img src="../public/logo.png" alt="Logo" />
                            </div>
                            <div className="ul-container">
                                <ul className="list">
                                    <li className="list-item"><a href="/" className="list-item-a">Los Favoritos</a></li>
                                    <li className="list-item"><a href="/" className="list-item-a">Más Recetas</a></li>
                                    <li className="list-item"><a href="/" className="list-item-a">Acerca de</a></li>
                                    <li className="list-item"><a href="/" className="list-item-a">Contacto</a></li>
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