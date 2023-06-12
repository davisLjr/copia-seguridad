import React from "react";
import { Layout } from "../../../../components/Layout/layouts";

export default function JusticiaOp1() {
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
              </ol>
            </nav>

            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="mt-2 pt-1">
                  <h1 className="mb-3">Justicia y Seguridad</h1>
                  <p className="lead">
                    Elabora e implementa políticas que garanticen las
                    condiciones para el ejercicio de los derechos de las
                    personas
                  </p>
                </div>
                <div className="d-block d-md-flex pt-3">
                  <div className="dropdown mb-3 mr-1">
                    <button
                      type="button"
                      className="btn btn-dropdown btn-dropdown-border btn-dropdown-sm dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Institucional
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Ministerio de Justicia y Seguridad
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Subsecretaría de Justicia
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Subsecretaría de Emergencia
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown mb-3 mr-1 ml-0 ml-md-2">
                    <button
                      type="button"
                      className="btn btn-dropdown btn-dropdown-border btn-dropdown-sm dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Transparencia activa
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Informes de Auditoría
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Declaraciones juradas
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Gestión de proyectos
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Presupuesto
                        </a>
                      </li>
                    </ul>
                  </div>
                  <nav className="ml-0 ml-md-2 mb-3">
                    <ul className="nav flex-row nav-pills">
                      <li className="nav-item">
                        <a
                          className="nav-link border-link nav-link-sm"
                          href="#"
                        >
                          <span>Noticias</span>
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
          <div className="card-deck max-cards-3 mb-2 pb-1">
            <a className="card" href="#">
              <img
                src="../../assets/noticias/noticias-2.png"
                className="card-img-top"
                alt="descripción alternativa"
              />
              <div className="card-body">
                <h4 className="card-title">
                  Más de 13.000 detenciones por el aporte de las cámaras del
                  Centro de Monitoreo
                </h4>
              </div>
            </a>
            <a className="card" href="#">
              <img
                src="../../assets/noticias/noticias-2.png"
                className="card-img-top"
                alt="descripción alternativa"
              />
              <div className="card-body">
                <h4 className="card-title">
                  Nómina y antecedentes curriculares de los candidatos para el
                  ascenso de la Policía y los Bomberos de la Ciudad
                </h4>
              </div>
            </a>
            <a className="card" href="#">
              <img
                src="../../assets/noticias/noticias-2.png"
                className="card-img-top"
                alt="descripción alternativa"
              />
              <div className="card-body">
                <h4 className="card-title">
                  La Ciudad reconoció a Agentes de Calle destacados durante 2022
                </h4>
              </div>
            </a>
          </div>

          <div className="card-deck py-5">
            <div className="card card-simple">
              <div className="card-body">
                <i className="bx bxs-user card-icon"></i>
                <h4 className="card-title">
                  <a href="#">Policía de la Ciudad</a>
                </h4>
                <p className="card-text">Una policía cercana a la comunidad</p>
              </div>
            </div>
            <div className="card card-simple">
              <div className="card-body">
                <i className="bx bxs-first-aid card-icon"></i>
                <h4 className="card-title">
                  <a href="#">Emergencias</a>
                </h4>
                <p className="card-text">
                  Sistema de Atención de riesgo al Ciudadano
                </p>
              </div>
            </div>
            <div className="card card-simple">
              <div className="card-body">
                <i className="bx bx-edit-alt card-icon"></i>
                <h4 className="card-title">
                  <a href="#">Infracciones</a>
                </h4>
                <p className="card-text">
                  Información sobre el Régimen de faltas en la Ciudad
                </p>
              </div>
            </div>
            <div className="card card-simple">
              <div className="card-body">
                <i className="bx bx-notepad card-icon"></i>
                <h4 className="card-title">
                  <a href="#">Denuncias</a>
                </h4>
                <p className="card-text">
                  Te guiamos para realizarla de manera más rápida
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-4">
              <h2 className="mb-4 pt-1 mt-2">Áreas</h2>
              <div className="card-deck max-cards-1">
                <a className="card card-horizontal" href="#">
                  <img
                    src="../../assets/noticias/noticias-2.png"
                    className="card-img-left"
                    alt="descripción alternativa"
                    width="168"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Subsecretaría de Justicia</h4>
                    <p className="card-text">
                      Representa al GCBA ante el Poder Judicial de la Nación, y
                      de otras jurisdicciones.
                    </p>
                  </div>
                </a>
                <a className="card card-horizontal" href="#">
                  <img
                    src="../../assets/noticias/noticias-2.png"
                    className="card-img-left"
                    alt="descripción alternativa"
                    width="168"
                  />
                  <div className="card-body">
                    <h4 className="card-title">
                      Agencia Gubernamental de Control{" "}
                    </h4>
                    <p className="card-text">
                      Habilita y fiscaliza los locales comerciales de la Ciudad.
                    </p>
                  </div>
                </a>
                <a className="card card-horizontal" href="#">
                  <img
                    src="../../assets/noticias/noticias-2.png"
                    className="card-img-left"
                    alt="descripción alternativa"
                    width="168"
                  />
                  <div className="card-body">
                    <h4 className="card-title">
                      Instituto Superior de Seguridad Pública
                    </h4>
                    <p className="card-text">
                      Centro académico y de investigación de la Ciudad de Buenos
                      Aires.
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <h2 className="mb-4 pt-1 mt-2">
                Programas y servicios de Seguridad
              </h2>
              <div className="list-group">
                <a href="#" className="list-group-item item-sm">
                  <span className="access-title">
                    Formá parte de la Policía de la Ciudad
                  </span>
                </a>
                <a href="#" className="list-group-item item-sm">
                  <span className="access-title">
                    Formá parte de los Bomberos de la Ciudad
                  </span>
                </a>
                <a href="#" className="list-group-item item-sm">
                  <span className="access-title">
                    Buscador de Comisarías y Bomberos
                  </span>
                </a>
                <a href="#" className="list-group-item item-sm">
                  <span className="access-title">
                    Guía de orientación y asistencia a las víctimas de delitos
                  </span>
                </a>
                <a href="#" className="list-group-item item-sm">
                  <span className="access-title">
                    Buscador de Senderos Escolares
                  </span>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <h2 className="mb-4 pt-1 mt-2">Seguinos en</h2>
              <div className="list-group mb-4">
                <a href="#" className="list-group-item item-sm">
                  <span className="access-title">
                    <i className="bx bx-sm align-middle mr-1 bxl-facebook-circle"></i>
                    Facebook
                  </span>
                </a>
                <a href="#" className="list-group-item item-sm">
                  <span className="access-title">
                    <i className="bx bx-sm align-middle mr-1 bxl-twitter"></i>
                    Twitter
                  </span>
                </a>
              </div>
              <a className="card card-horizontal" href="#">
                <img
                  src="../../assets/noticias/noticias-1.png"
                  className="card-img-left"
                  alt="descripción alternativa"
                  width="168"
                />
                <div className="card-body">
                  <h3 className="card-title">RECAVIP</h3>
                  <p className="card-text">
                    Registro de Cámaras de Videovigilancia Privadas
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
