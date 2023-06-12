import React from "react";
import { Layout } from "../../../../components/Layout/layouts";

export default function Opcion2() {
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
                <li className="breadcrumb-item">
                  <a href="#">
                    Ministerio de Desarrollo económico y producción
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">
                    Subsecretaría de Micro, Pequeñas y Medianas Empresas
                  </a>
                </li>
              </ol>
            </nav>

            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="mt2 pt-1">
                  <h1 className="mb-3">
                    Subsecretaría de Micro, Pequeñas y Medianas Empresas{" "}
                  </h1>
                  <p className="lead">
                    Trabajamos para consolidar e incrementar la competitividad
                    de las PyMEs de la Ciudad Autónoma de Buenos Aires.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container pt-3">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="container mb-4">
                <div className="panel-deck max-cards-2 col-md-8 col-xs-12">
                  <div className="card card-horizontal card-lg unbordered">
                    <img
                      src="../assets/institucional/christianbauab.png"
                      className="card-img-left"
                      alt="descripción alternativa"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Christian Bauab</h4>
                      <p className="card-text">
                        Subsecretario de Micro, Pequeñas y Medianas Empresas
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mb-4">
                Es licenciado en Comercio Internacional por la Facultad de
                Ciencias Económicas de la UADE. Desde 1999 forma parte del
                Gobierno de la Ciudad de Buenos Aires. Trabajó en la ANSES
                dentro del Programa de Asistencia Técnica y como coordinador de
                Gestión y Monitoreo de Proyectos hasta el año 2003. En 2013
                asumió como legislador de la Ciudad Autónoma de Buenos Aires y
                como presidente de la Junta de Interpretación y Reglamento de la
                Comisión de Turismo y Deportes y de la Comisión de Desarrollo
                Económico. Actualmente se desempeña como subsecretario de Micro,
                Pequeñas y Medianas Empresas en el Ministerio de Desarrollo
                Económico y Producción de la Ciudad.
              </p>
              <div className="mb-5">
                <h3>Contacto</h3>
                <p className="mb-0">
                  Mail:{" "}
                  <a className="" href="#" target="_blank" rel="noreferrer">
                    cbauabi@buenosaires.gob.ar
                  </a>
                </p>
                <p className="mb-0">
                  Dirección:{" "}
                  <a className="" href="#" target="_blank" rel="noreferrer">
                    Av. Martín García 346, 2° piso
                  </a>
                </p>
              </div>

              <div className="row">
                <div className="col-lg-10 col-xs-12">
                  <div className="accordion" id="accordionExample">
                    <div className="card">
                      <button
                        className="card-header collapsed card-link"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                      >
                        Misiones y funciones
                      </button>
                      <div
                        id="collapseOne"
                        className="collapse"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          Desde la Subsecretaría buscamos fortalecer e
                          incrementar la competitividad de las PyMEs
                          comerciales, industriales, de servicio y de
                          construcción de la Ciudad de Buenos Aires.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <button
                        className="card-header collapsed card-link"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                      >
                        Responsabilidades primarias
                      </button>
                      <div
                        id="collapseTwo"
                        className="collapse"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          <ul className="m-0">
                            <li>
                              Diseñar e implementar programas de capacitación y
                              asistencia técnica orientados a la consolidación
                              de las PyMEs.
                            </li>
                            <li>
                              Contribuir en la elaboración e implementación de
                              programas y acciones orientados al desarrollo, la
                              reconversión productiva, la generación de valor
                              agregado en la producción, el fomento de la
                              productividad y el empleo genuino, así como la
                              internacionalización y la competitividad de las
                              PyMEs de la Ciudad Autónoma de Buenos Aires, en
                              coordinación con las áreas competentes.
                            </li>
                            <li>
                              Diseñar políticas tendientes a facilitar el acceso
                              al mercado de capitales de las PyMEs.
                            </li>
                            <li>
                              Potenciar el vínculo institucional con las Cámaras
                              Sectoriales y otros organismos que nucleen a las
                              PyMEs.
                            </li>
                            <li>
                              Promover la participación e instalación de las
                              PyMEs en los Centros Comerciales Abiertos de la
                              Ciudad Autónoma de Buenos Aires.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <aside className="col-12 col-lg-4 mt-5 mt-lg-0">
              <div className="bg-light shadow-sm rounded-lg px-4 pt-4 pb-3">
                <div className="card card-simple panel-list-link">
                  <div className="card-body">
                    <h3 className="card-title">Transparencia activa</h3>
                  </div>
                  <div className="list-link">
                    <h4 className="list-link-item-title">Anexo I</h4>
                    <a
                      className="btn btn-secondary btn-sm download-link card-link"
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Descargar
                    </a>
                    <h4 className="list-link-item-title">Anexo II</h4>
                    <a
                      className="btn btn-secondary btn-sm download-link card-link"
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Descargar
                    </a>
                    <h4 className="list-link-item-title">Anexo III</h4>
                    <a
                      className="btn btn-secondary btn-sm download-link card-link"
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Descargar
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>
      <section className="bg-light py-5">
        <div className="container my-1 py-2">
          <h2 className="mb-4">Organigrama</h2>
          <div className="row mb-5">
            <div className="col-lg-4 col-md-6 col-xs-12">
              <a className="card card-horizontal" href="#">
                <img
                  src="../assets/institucional/joseLuisGiusti.png"
                  className="card-img-left"
                  alt="descripción alternativa"
                />
                <div className="card-body">
                  <h4 className="card-title">
                    Ministerio de Desarrollo económico y producción
                  </h4>
                  <p className="card-text">José Luis Giusti</p>
                </div>
              </a>
            </div>
          </div>
          <h3 className="mt-4 mb-4">Subsecretaría</h3>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-xs-12">
              <a className="card card-horizontal" href="#">
                <img
                  src="../assets/institucional/christianbauab.png"
                  className="card-img-left"
                  alt="descripción alternativa"
                />
                <div className="card-body">
                  <h4 className="card-title">
                    Micro, Pequeñas y Medianas Empresas
                  </h4>
                  <p className="card-text">Christian Bauab</p>
                </div>
              </a>
            </div>
          </div>
          <h3 className="mt-5 mb-4">Direcciones generales</h3>
          <div className="card-deck max-cards-3">
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">
                  Micro, Pequeñas y Medianas Empresas
                </h4>
                <p className="card-text">Hernan Emilio Najenson</p>
              </div>
            </a>
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">
                  Relaciones interjuridiccionales vinculadas al desarrollo de...
                </h4>
                <p className="card-text">María Celeste Peña</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
