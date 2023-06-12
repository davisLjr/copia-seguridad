import React from "react";

export const Header = () => {
  return (
    <header className="navbar navbar-light navbar-lg">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            className="header-logo"
            src="https://gcba.github.io/Obelisco/header/LogoBA.svg"
            alt="Logo de la ciudad de Buenos Aires"
          />
        </a>
        <div className="navbar-search d-responsive ml-auto">
          <form className="form-search form-search-sm">
            <div className="form-group">
              <input
                type="search"
                className="form-control form-control-sm input-search"
                id="header-search-example-3"
                name="header-search"
                aria-label="Ingrese su búsqueda"
                placeholder="Buscar..."
              />
              <button className="reset" type="reset"></button>
            </div>
          </form>
        </div>
        <button
          className="navbar-toggler collapsed ml-2"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
        >
          Menú
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="list-group-content d-responsive ml-2">
          <a
            href="#"
            aria-label="Cerrar sesión"
            className="list-group-item list-group-item-logout logout-sm"
          >
            &nbsp;
          </a>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a href="#" className="nav-link active">
                <span>Inicio</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span>Chateá con BOTI</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span>Mi actividad</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span>Mi cuenta</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" aria-label="Notificaciones" className="nav-link">
                <i className="bx bxs-bell"></i>
              </a>
            </li>
            <li className="nav-item d-responsive">
              <div className="navbar-search">
                <form className="form-search form-search-sm">
                  <div className="form-group">
                    <input
                      type="search"
                      className="form-control form-control-sm input-search"
                      id="header-search-example-4"
                      name="header-search"
                      aria-label="Ingrese su búsqueda"
                      placeholder="Buscar..."
                    />
                    <button className="reset" type="reset"></button>
                  </div>
                </form>
              </div>
            </li>
            <li className="nav-item d-responsive">
              <a
                href="#"
                aria-label="Cerrar sesión"
                className="list-group-item list-group-item-logout logout-sm"
              >
                &nbsp;
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
