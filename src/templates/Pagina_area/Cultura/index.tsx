import React from "react";
import { Layout } from "../../../../components/Layout/layouts";

export default function CulturaOp1() {
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
                  <h1 className="mb-3">Cultura</h1>
                  <p className="lead">
                    Conocé y participá de los programas, espacios y actividades
                    que impulsan y desarrollan la cultura que la Ciudad tiene
                    para vos
                  </p>
                </div>
                <div className="d-block d-md-flex pt-3 ">
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
                          Ministerio de Cultura
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Subsecretaría Gestión Cultural
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Organigrama
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
                      <li className="nav-item">
                        <a
                          className="nav-link border-link nav-link-sm"
                          href="#"
                        >
                          <span>Transparencia activa</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link border-link nav-link-sm"
                          href="#"
                        >
                          <span>Protocolos de apertura</span>
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
          <div className="card-deck mb-5">
            <div className="card card-simple">
              <div className="card-body">
                <i className="bx bx-palette card-icon"></i>
                <h4 className="card-title">
                  <a href="#">Talleres</a>
                </h4>
                <p className="card-text">
                  Participá de talleres en todos los barrios
                </p>
              </div>
            </div>
            <div className="card card-simple">
              <div className="card-body">
                <i className="bx bxs-megaphone card-icon"></i>
                <h4 className="card-title">
                  <a href="#">Cultura Abierta</a>
                </h4>
                <p className="card-text">
                  Convocatorias para hacedores de la Ciudad
                </p>
              </div>
            </div>
            <div className="card card-simple">
              <div className="card-body">
                <i className="bx bxs-group card-icon"></i>
                <h4 className="card-title">
                  <a href="#">Impulso Cultural</a>
                </h4>
                <p className="card-text">
                  Solicitá subsidios y apoyo para tus proyectos
                </p>
              </div>
            </div>
            <div className="card card-simple">
              <div className="card-body">
                <i className="bx bxs-coupon card-icon"></i>
                <h4 className="card-title">
                  <a href="#">Pase Cultural</a>
                </h4>
                <p className="card-text">
                  Sacá tu tarjeta y disfrutá los beneficios exclusivos en la C
                </p>
              </div>
            </div>
            <div className="card card-simple">
              <div className="card-body">
                <i className="bx bx-news card-icon"></i>
                <h4 className="card-title">
                  <a href="#">Cultura independiente</a>
                </h4>
                <p className="card-text">
                  Conocé los espacios culturales independientes
                </p>
              </div>
            </div>
            <div className="card card-simple">
              <div className="card-body">
                <i className="bx bx-book card-icon"></i>
                <h4 className="card-title">
                  <a href="#">Bibliotecas</a>
                </h4>
                <p className="card-text">
                  Ingresá a la red de Bibliotecas de la Ciudad
                </p>
              </div>
            </div>
            <div className="card card-simple">
              <div className="card-body">
                <i className="bx bxs-map-alt card-icon"></i>
                <h4 className="card-title">
                  <a href="#">Barrios Creativos</a>
                </h4>
                <p className="card-text">
                  Participá de la programación en tu barrio
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="mb-5 py-1">
            <div className="card card-simple panel-horizontal my-2">
              <img
                src="../../assets/noticias/noticias-4.png"
                className="card-img"
                alt="descripción alternativa"
              />
              <div className="card-body">
                <h2 className="card-title">Vivamos Cultura</h2>
                <p className="card-text">
                  Es la nueva plataforma que busca dar a conocer el trabajo de
                  los artistas tanto de la cultura independiente como de los
                  diferentes espacios del Ministerio de Cultura de la Ciudad.
                </p>
                <button
                  type="button"
                  className="btn btn-lg btn-primary card-link"
                >
                  Visitá Vivamos Cultura
                </button>
                <button
                  type="button"
                  className="btn btn-lg btn-secondary card-link"
                >
                  Conocer más
                </button>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-light py-5 mb-5">
          <div className="container">
            <div>
              <h2 className="mb-4 mt-2 pt-1">Guía cultural</h2>
              <div className="card-deck max-cards-3 mb-2 pb-1">
                <a className="card" href="#">
                  <img
                    src="../../assets/noticias/noticias-3.png"
                    className="card-img-top"
                    alt="descripción alternativa"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Disfrutemos BA</h4>
                    <p className="card-text">
                      Descubrí la agenda cultural y todo lo que podés hacer en
                      la Ciudad.
                    </p>
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
                      Promoción del Libro, las Bibliotecas y la Cultura
                    </h4>
                    <p className="card-text">
                      Conocé la programación cultural en distintos puntos de la
                      Ciudad.
                    </p>
                  </div>
                </a>
                <a className="card" href="#">
                  <img
                    src="../../assets/noticias/noticias-3.png"
                    className="card-img-top"
                    alt="descripción alternativa"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Data Cultura</h4>
                    <p className="card-text">
                      Accedé a gráficos, mapas y estadísticas sobre la cultura
                      en la Ciudad.
                    </p>
                  </div>
                </a>

                <a className="card" href="#">
                  <img
                    src="../../assets/noticias/noticias-3.png"
                    className="card-img-top"
                    alt="descripción alternativa"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Patrimonio</h4>
                    <p className="card-text">
                      Conocé las actividades y servicios del patrimonio cultural
                      de la Ciudad.
                    </p>
                  </div>
                </a>
                <a className="card" href="#">
                  <img
                    src="../../assets/noticias/noticias-4.png"
                    className="card-img-top"
                    alt="descripción alternativa"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Festivales</h4>
                    <p className="card-text">
                      Participá de Ciudad Emergente, Tango BA, Bafici y más.
                    </p>
                  </div>
                </a>
                <a className="card" href="#">
                  <img
                    src="../../assets/noticias/noticias-3.png"
                    className="card-img-top"
                    alt="descripción alternativa"
                  />
                  <div className="card-body">
                    <h4 className="card-title">BA Audiovisual</h4>
                    <p className="card-text">
                      Conocé el plan que apoya al sector audiovisual de la
                      Ciudad.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="mb-5">
            <h2 className="mb-4 pt-1 mt-2">Espacios Culturales</h2>
            <div className="card-deck max-cards-3 mb-5">
              <a className="card" href="#">
                <img
                  src="../../assets/noticias/noticias-2.png"
                  className="card-img-top"
                  alt="descripción alternativa"
                />
                <div className="card-body">
                  <h4 className="card-title">Museos</h4>
                  <p className="card-text">
                    Conocé los once museos que la Ciudad tiene para vos.
                  </p>
                </div>
              </a>
              <a className="card" href="#">
                <img
                  src="../../assets/noticias/noticias-3.png"
                  className="card-img-top"
                  alt="descripción alternativa"
                />
                <div className="card-body">
                  <h4 className="card-title">Centro Cultural Recoleta</h4>
                  <p className="card-text">
                    Conocé los espacios para exhibiciones, obras, conciertos,
                    conferencias y más.
                  </p>
                </div>
              </a>
              <a className="card" href="#">
                <img
                  src="../../assets/noticias/noticias-2.png"
                  className="card-img-top"
                  alt="descripción alternativa"
                />
                <div className="card-body">
                  <h4 className="card-title">El Cultural San Martin</h4>
                  <p className="card-text">
                    Conocé toda la programación y participá de cursos y
                    talleres.
                  </p>
                </div>
              </a>
              <a className="card" href="#">
                <img
                  src="../../assets/noticias/noticias-4.png"
                  className="card-img-top"
                  alt="descripción alternativa"
                />
                <div className="card-body">
                  <h4 className="card-title">Usina del Arte</h4>
                  <p className="card-text">
                    Visitá el centro cultural multidisciplinario declarado
                    Patrimonio Histórico de la Ciudad.
                  </p>
                </div>
              </a>
              <a className="card" href="#">
                <img
                  src="../../assets/noticias/noticias-2.png"
                  className="card-img-top"
                  alt="descripción alternativa"
                />
                <div className="card-body">
                  <h4 className="card-title">Teatro Colón</h4>
                  <p className="card-text">
                    Visitá uno de los teatros más importantes del mundo.
                  </p>
                </div>
              </a>
              <a className="card" href="#">
                <img
                  src="../../assets/noticias/noticias-4.png"
                  className="card-img-top"
                  alt="descripción alternativa"
                />
                <div className="card-body">
                  <h4 className="card-title">Música</h4>
                  <p className="card-text">
                    Disfrutá de la Banda Sinfónica, la Orquesta de Tango y los
                    talleres de Estudio Urbano.
                  </p>
                </div>
              </a>
            </div>
            <div className="mb-2 pb-1">
              <a className="btn btn-primary btn-lg" href="#" target="_blank">
                Conocer más
              </a>
            </div>
          </div>

          <div className="mb-5">
            <h2 className="mb-4">Vivamos Cultura</h2>
            <div className="card-deck max-cards-3">
              <a className="card" href="#">
                <img
                  src="../../assets/noticias/noticias-2.png"
                  className="card-img-top"
                  alt="descripción alternativa"
                />
                <div className="card-body">
                  <h4 className="card-title">Bibliotecas</h4>
                  <p className="card-text">
                    Conocé la extensa red de bibliotecas y actividades de
                    difusión cultural.
                  </p>
                </div>
              </a>
              <a className="card" href="#">
                <img
                  src="../../assets/noticias/noticias-4.png"
                  className="card-img-top"
                  alt="descripción alternativa"
                />
                <div className="card-body">
                  <h4 className="card-title">
                    Circuito de Espacios Culturales
                  </h4>
                  <p className="card-text">
                    Conocé los siete centros culturales distribuídos en la
                    Ciudad y su oferta de actividades y talleres.
                  </p>
                </div>
              </a>
              <a className="card" href="#">
                <img
                  src="../../assets/noticias/noticias-3.png"
                  className="card-img-top"
                  alt="descripción alternativa"
                />
                <div className="card-body">
                  <h4 className="card-title">Espacio Casa de la Cultura</h4>
                  <p className="card-text">
                    Antigua sede del diario La Prensa declarado monumento
                    histórico nacional.
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div>
            <h2 className="mb-4 pt-1 mt-2">Seguinos en</h2>
            <div className="list-group list-group-row">
              <a href="#" className="list-group-item item-sm">
                <span className="access-title">
                  <i className="bx bx-sm align-middle mr-2 bxl-facebook-circle"></i>
                  Acceso chico
                </span>
              </a>
              <a href="#" className="list-group-item item-sm">
                <span className="access-title">
                  <i className="bx bx-sm align-middle mr-2 bxl-instagram"></i>
                  Acceso chico
                </span>
              </a>
              <a href="#" className="list-group-item item-sm">
                <span className="access-title">
                  <i className="bx bx-sm align-middle mr-2 bxl-twitter"></i>
                  Acceso chico
                </span>
              </a>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
