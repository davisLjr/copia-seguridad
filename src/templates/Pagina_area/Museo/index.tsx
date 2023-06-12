import React from "react";
import { Layout } from "../../../../components/Layout/layouts";

export default function MuseoOp1() {
  return (
    <Layout>
      <article className="pb-5 mb-4">
        <header className="bg-light pt-3 pb-5 mb-5">
          <div className="container pt-1">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Buenos Aires</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Cultura</a>
                </li>
              </ol>
            </nav>
            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="mt-2 pt-1">
                  <h1 className="mb-3">Museo Fernández Blanco</h1>
                  <p className="lead">
                    Su patrimonio abarca dos períodos singulares del desarrollo
                    histórico y creativo hispanoamericano y argentino: el mundo
                    colonial en la sede Palacio Noel del Barrio de Retiro y el
                    arte de los siglos XIX y XX en la Casa Fernández Blanco, en
                    el barrio de Congreso.
                  </p>
                </div>
                <div className="d-flex pt-3">
                  <nav className="mb-3">
                    <ul className="nav flex-row nav-pills">
                      <li className="nav-item">
                        <a
                          className="nav-link border-link nav-link-sm"
                          href="#"
                        >
                          <span>Prensa</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link border-link nav-link-sm"
                          href="#"
                        >
                          <span>Suscribite</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link border-link nav-link-sm"
                          href="#"
                        >
                          <span>Anuarios</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link border-link nav-link-sm"
                          href="#"
                        >
                          <span>Noticias</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link border-link nav-link-sm"
                          href="#"
                        >
                          <span>Amigos del Museo</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container">
          <div className="row mb-5">
            <div className="col-12 col-lg-8">
              <div className="alert alert-info" role="alert">
                <p>
                  Este es un destacado de una alerta (opcional). Un texto simple
                  para una alerta simples.
                </p>
              </div>
            </div>
          </div>

          <div className="card-deck max-cards-3 mb-2 pb-1">
            <a className="card" href="#">
              <img
                src="../../assets/galeria/galeria-1.png"
                className="card-img-top"
                alt="descripción alternativa"
              />
              <div className="card-body">
                <h4 className="card-title">
                  Viví el verano en el Palacio Noel
                </h4>
              </div>
            </a>
            <a className="card" href="#">
              <img
                src="../../assets/galeria/galeria-1.png"
                className="card-img-top"
                alt="descripción alternativa"
              />
              <div className="card-body">
                <h4 className="card-title">
                  Noche de los Museos 2022 en la Casa Fernández Blanco
                </h4>
              </div>
            </a>
            <a className="card" href="#">
              <img
                src="../../assets/galeria/galeria-1.png"
                className="card-img-top"
                alt="descripción alternativa"
              />
              <div className="card-body">
                <h4 className="card-title">
                  Donación Martínez Avellanet - Passanisi Vasquez
                </h4>
              </div>
            </a>
          </div>

          <div className="card-deck py-5">
            <div className="card card-simple">
              <div className="card-body">
                <i className="bx bxs-home card-icon"></i>
                <h4 className="card-title">
                  <a href="#">El Museo</a>
                </h4>
                <p className="card-text">
                  Descubrí su historia, colecciones, donaciones y más.
                </p>
              </div>
            </div>
            <div className="card card-simple">
              <div className="card-body">
                <i className="bx bxs-calendar card-icon"></i>
                <h4 className="card-title">
                  <a href="#">Actividades y Servicios</a>
                </h4>
                <p className="card-text">
                  Enterate de todas las actividades del MIFB
                </p>
              </div>
            </div>
            <div className="card card-simple">
              <div className="card-body">
                <i className="bx bxs-info-circle card-icon"></i>
                <h3 className="card-title">
                  <a href="#">Quiénes Somos</a>
                </h3>
                <p className="card-text">Contactate con nosotros</p>
              </div>
            </div>
            <div className="card card-simple">
              <div className="card-body">
                <i className="bx bx-outline card-icon"></i>
                <h3 className="card-title">
                  <a href="#">Asociación de Amigos</a>
                </h3>
                <p className="card-text">
                  Conocé la Asociación de Amigos y sus publicaciones
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-4">
              <h2 className="mb-4 mt-2 pt-1">
                Las sedes del Museo Fernandez Blanco
              </h2>
              <h3>Palacio Noel</h3>
              <p>Colecciones de Arte Colonial de los Siglos XVI al XVIII</p>
              <h3>Casa Fernandez Blanco</h3>
              <p>
                Colecciones de artes aplicadas del Siglo XIX y comienzos del
                Siglo XX
              </p>
            </div>
            <div className="col-12 col-md-4">
              <h2 className="mb-4 mt-2 pt-1">Mapa</h2>
              <div className="card">
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="search-input">Dirección</label>
                    <input
                      type="search"
                      className="form-control input-search"
                      id="name-input"
                      name="name"
                      placeholder="Buscar..."
                    />
                  </div>
                  <h4>MAPA</h4>
                  <div>
                    <img
                      src="../../assets/noticias/maps.png"
                      alt="Mapa"
                      className="w-100 mb-3"
                    />
                  </div>
                  <button type="button" className="btn btn-primary btn-block">
                    Cómo llego
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <h2 className="mb-4 mt-2 pt-1">Seguinos en</h2>
              <div className="list-group mb-4">
                <a href="#" className="list-group-item item-sm">
                  <span className="access-title">
                    <i className="bx bx-sm align-middle mr-2 bxl-facebook-circle"></i>
                    Facebook
                  </span>
                </a>
                <a href="#" className="list-group-item item-sm">
                  <span className="access-title">
                    <i className="bx bx-sm align-middle mr-2 bxl-instagram"></i>
                    Instagram
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
