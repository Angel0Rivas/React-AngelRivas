import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">Loguet</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/productos">Carrito</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/productos">Tienda</a>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;