import React from "react";
import { Layout } from "../../../../components/Layout/layouts";

export default function Opcion3() {
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
                  <a href="#">Desarrollo económico y producción</a>
                </li>
              </ol>
            </nav>

            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="mt-2 pt-1">
                  <h1 className="mb-3">Desarrollo Económico y producción</h1>
                  <p className="lead">
                    Desarrollo del talento y la búsqueda de inversiones con el
                    objetivo de fomentar el empleo y contribuir a una mejor
                    calidad de vida de los vecinos de la Ciudad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container pt-3 mb-5">
          <div className="card-deck mb-5">
            <div className="card card-simple">
              <div className="card-body">
                <i className="bx bx-news card-icon"></i>
                <h4 className="card-title">
                  <a href="#">Título de tarjeta</a>
                </h4>
                <p className="card-text">
                  Recomendamos en este espacio no utilizar más de 3 líneas, para
                  generar una lectura óptima.
                </p>
              </div>
            </div>
            <div className="card card-simple">
              <div className="card-body">
                <i className="bx bx-news card-icon"></i>
                <h4 className="card-title">
                  <a href="#">Título de tarjeta</a>
                </h4>
                <p className="card-text">
                  Recomendamos en este espacio no utilizar más de 3 líneas, para
                  generar una lectura óptima.
                </p>
              </div>
            </div>
            <div className="card card-simple">
              <div className="card-body">
                <i className="bx bx-news card-icon"></i>
                <h3 className="card-title">
                  <a href="#">Título de tarjeta</a>
                </h3>
                <p className="card-text">
                  Recomendamos en este espacio no utilizar más de 3 líneas, para
                  generar una lectura óptima.
                </p>
              </div>
            </div>
            <div className="card card-simple">
              <div className="card-body">
                <i className="bx bx-news card-icon"></i>
                <h3 className="card-title">
                  <a href="#">Título de tarjeta</a>
                </h3>
                <p className="card-text">
                  Recomendamos en este espacio no utilizar más de 3 líneas, para
                  generar una lectura óptima.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-light py-5 mb-5">
          <div className="container my-1 py-2">
            <h2 className="mb-4">Agenda 2022</h2>
            <p className="mb-4">
              Enterate y participá de todas las actividades económicas de la
              Ciudad
            </p>
            <div className="card-deck mb-5">
              <a className="card" href="#">
                <div className="card-event-top">
                  <img
                    src="../assets/eventos/evento-bg.jpg"
                    className="card-event-bg"
                    alt="descripción alternativa"
                  />
                  <div className="card-event-img">
                    <img
                      src="../assets/eventos/evento-thumb.jpg"
                      alt="descripción alternativa"
                    />
                  </div>
                  <p className="card-event-name">
                    Actividades y clases en polideportivos
                  </p>
                </div>
                <div className="card-body">
                  <p className="card-headline">18 de Enero al 1 de Febrero</p>
                  <h4 className="card-title">
                    Comienza una nueva edición de actividades en polideportivos
                  </h4>
                </div>
              </a>
              <a className="card d-none d-sm-block" href="#">
                <div className="card-event-top">
                  <img
                    src="../assets/eventos/evento-bg.jpg"
                    className="card-event-bg"
                    alt="descripción alternativa"
                  />
                  <div className="card-event-img">
                    <img
                      src="../assets/eventos/evento-thumb.jpg"
                      alt="descripción alternativa"
                    />
                  </div>
                  <p className="card-event-name">
                    Actividades y clases en polideportivos
                  </p>
                </div>
                <div className="card-body">
                  <p className="card-headline">18 de Enero al 1 de Febrero</p>
                  <h4 className="card-title">
                    Comienza una nueva edición de actividades en polideportivos
                  </h4>
                </div>
              </a>
              <a className="card d-none d-lg-block" href="#">
                <div className="card-event-top">
                  <img
                    src="../assets/eventos/evento-bg.jpg"
                    className="card-event-bg"
                    alt="descripción alternativa"
                  />
                  <div className="card-event-img">
                    <img
                      src="../assets/eventos/evento-thumb.jpg"
                      alt="descripción alternativa"
                    />
                  </div>
                  <p className="card-event-name">
                    Actividades y clases en polideportivos
                  </p>
                </div>
                <div className="card-body">
                  <p className="card-headline">18 de Enero al 1 de Febrero</p>
                  <h4 className="card-title">
                    Comienza una nueva edición de actividades en polideportivos
                  </h4>
                </div>
              </a>
            </div>
            <a className="access" href="#" target="_blank" rel="noreferrer">
              Ver todos los eventos
            </a>
          </div>
        </section>

        <div className="container pt-4 mb-5">
          <div className="container">
            <div className="row">
              <div className="card-deck max-cards-2">
                <div className="card card-simple panel-vertical">
                  <img
                    src="../assets/noticias/noticias-3.png"
                    className="card-img"
                    alt="descripción alternativa"
                  />
                  <div className="card-body">
                    <h2 className="card-title">Encabezado</h2>
                    <p className="card-text">
                      Conocé todos los beneficios del mayor centro de
                      desarrollo, innovación y conocimiento.
                    </p>
                    <button
                      type="button"
                      className="btn btn-sm btn-secondary card-link"
                    >
                      Conocé más
                    </button>
                  </div>
                </div>
                <div className="card card-simple panel-vertical">
                  <img
                    src="../assets/noticias/noticias-3.png"
                    className="card-img"
                    alt="descripción alternativa"
                  />
                  <div className="card-body">
                    <h2 className="card-title">Encabezado</h2>
                    <p className="card-text">
                      Conocé todos los beneficios del mayor centro de
                      desarrollo, innovación y conocimiento.
                    </p>
                    <button
                      type="button"
                      className="btn btn-sm btn-secondary card-link"
                    >
                      Conocé más
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container pt-4 ">
          <h3 className="mb-4">Espacios destacados de la Ciudad</h3>
          <div className="card-deck max-cards-3">
            <a className="card" href="#">
              <div className="card-body">
                <i className="bx bx-news card-icon"></i>
                <h4 className="card-title">BA Laboratorio</h4>
              </div>
            </a>
            <a className="card" href="#">
              <div className="card-body">
                <i className="bx bx-news card-icon"></i>
                <h4 className="card-title">Centro Metropolitano de Diseño</h4>
              </div>
            </a>
            <a className="card" href="#">
              <div className="card-body">
                <i className="bx bx-news card-icon"></i>
                <h4 className="card-title">Coorporación Sur</h4>
              </div>
            </a>
          </div>
          <h3 className="my-5">Conocé más</h3>
          <div className="card-deck max-cards-3">
            <a className="card" href="#">
              <div className="card-body">
                <i className="bx bx-news card-icon"></i>
                <h4 className="card-title">BA Laboratorio</h4>
              </div>
            </a>
            <a className="card" href="#">
              <div className="card-body">
                <i className="bx bx-news card-icon"></i>
                <h4 className="card-title">Centro Metropolitano de Diseño</h4>
              </div>
            </a>
          </div>
          <h3 className="my-5">
            Enterate de toda la información y datos de la Ciudad
          </h3>
          <div className="card-deck max-card-2">
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">Título de tarjeta</h4>
                <p className="card-text">
                  Recomendamos en este espacio no utilizar más de 3 líneas, para
                  generar una lectura óptima.
                </p>
              </div>
            </a>
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">Título de tarjeta</h4>
                <p className="card-text">
                  Recomendamos en este espacio no utilizar más de 3 líneas, para
                  generar una lectura óptima.
                </p>
              </div>
            </a>
          </div>

          <h2 className="my-5">Noticias</h2>
          <div className="card-deck max-cards-3">
            <a className="card" href="#">
              <img
                src="../assets/noticias/noticias-2.png"
                className="card-img-top"
                alt="descripción alternativa"
              />
              <div className="card-body">
                <div className="mb-2">
                  <span className="badge badge-info">Etiqueta 1</span>
                </div>
                <h4 className="card-title">Título de tarjeta</h4>
                <p className="card-text">
                  Recomendamos en este espacio no utilizar más de 3 líneas, para
                  generar una lectura óptima.
                </p>
              </div>
              <div className="card-footer">
                <small>Fecha de publicación: 22/04/2022</small>
              </div>
            </a>
            <a className="card d-none d-sm-block" href="#">
              <img
                src="../assets/noticias/noticias-3.png"
                className="card-img-top"
                alt="descripción alternativa"
              />
              <div className="card-body">
                <div className="mb-2">
                  <span className="badge badge-primary">Etiqueta 1</span>
                </div>
                <h4 className="card-title">Título de tarjeta</h4>
                <p className="card-text">
                  Recomendamos en este espacio no utilizar más de 3 líneas, para
                  generar una lectura óptima.
                </p>
              </div>
              <div className="card-footer">
                <small>Fecha de publicación: 22/04/2022</small>
              </div>
            </a>
            <a className="card d-none d-lg-block" href="#">
              <img
                src="../assets/noticias/noticias-4.png"
                className="card-img-top"
                alt="descripción alternativa"
              />
              <div className="card-body">
                <div className="mb-2">
                  <span className="badge badge-secondary">Etiqueta 1</span>
                </div>
                <h4 className="card-title">Título de tarjeta</h4>
                <p className="card-text">
                  Recomendamos en este espacio no utilizar más de 3 líneas, para
                  generar una lectura óptima.
                </p>
              </div>
              <div className="card-footer">
                <small>Fecha de publicación: 22/04/2022</small>
              </div>
            </a>
          </div>
          <div className="mt-4">
            <a className="access" href="#" target="_blank" rel="noreferrer">
              Ver todos los eventos
            </a>
          </div>
        </div>
      </article>
      <section className="bg-light py-5 ">
        <div className="container my-1 py-2">
          <h2 className="mb-4">Información institucional</h2>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="panel-deck max-cards-1">
              <div className="card card-simple card-horizontal">
                <img
                  src="../assets/institucional/joseLuisGiusti.png  "
                  className="card-img-left-panel"
                  alt="descripción alternativa"
                />
                <div className="card-body">
                  <h4 className="card-title">José Luis Giusti</h4>
                  <p className="card-text-panel">
                    Ministro de Desarrollo Económico y Producción
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card-deck my-5">
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">Título de tarjeta</h4>
                <p className="card-text">
                  Recomendamos en este espacio no utilizar más de 3 líneas, para
                  generar una lectura óptima.
                </p>
              </div>
            </a>
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">Título de tarjeta</h4>
                <p className="card-text">
                  Recomendamos en este espacio no utilizar más de 3 líneas, para
                  generar una lectura óptima.
                </p>
              </div>
            </a>
          </div>
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="group-access bg-white ">
                <div className="card-access">
                  <div className="card-access-body p-list">
                    <div className="">
                      <h3 className="card-access-title">Redes sociales</h3>
                      <p className="card-access-text"></p>
                    </div>
                  </div>
                  <div className="container-access">
                    <hr className="clearfix" />
                    <div className="access-option">
                      <a href="#" className="list-group-item item-sm">
                        <span className="access-title">Facebook</span>
                      </a>
                      <a href="#" className="list-group-item item-sm">
                        <span className="access-title">Instagram</span>
                      </a>
                      <a href="#" className="list-group-item item-sm">
                        <span className="access-title">Twitter</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-3 mb-md-0">
              <div className="card">
                <h3 className="ml-4 pt-4">Ubicación</h3>
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
                  <button type="button" className="btn btn-primary btn-block">
                    Cómo llego
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="mb-5">
                <div className="card bg-white rounded-lg p-4">
                  <h3>Contacto</h3>
                  <p className="mb-0">
                    Telefono:{" "}
                    <a className="" href="#" target="_blank" rel="noreferrer">
                      1122-3344
                    </a>
                  </p>
                  <p className="mb-0">
                    Mail:{" "}
                    <a className="" href="#" target="_blank" rel="noreferrer">
                      jlgiusti@buenosaires.gob.ar
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
