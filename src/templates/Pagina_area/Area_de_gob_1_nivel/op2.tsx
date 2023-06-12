import React from "react";
import { Layout } from "../../../../components/Layout/layouts";

export default function AreaGobOp2() {
  return (
    <Layout>
      <article className="pb-5 mb-4">
        <header className="bg-light pt-3 pb-5 mb-5">
          <div className="container pt-1">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Inicio</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Nombre del área de ejemplo</a>
                </li>
              </ol>
            </nav>

            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="mt-2 pt-1">
                  <h1 className="mb-3">Nombre del área</h1>
                  <p className="lead">
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container pt-3 pb-2">
          <div className="card-deck max-cards-3">
            <div className="card card-simple">
              <div className="card-body">
                <i className="bx bxs-rocket card-icon"></i>
                <h4 className="card-title">
                  <a href="#">Accesos 1</a>
                </h4>
                <p className="card-text">
                  Descripción del servicio. It was popularised in the 1960s with
                  the release of Letraset.
                </p>
              </div>
            </div>
            <div className="card card-simple">
              <div className="card-body">
                <i className="bx bxs-business card-icon"></i>
                <h4 className="card-title">
                  <a href="#">Servicio o accesos 2</a>
                </h4>
                <p className="card-text">
                  Contrary to popular belief, simply random text. Has roots.
                </p>
              </div>
            </div>
            <div className="card card-simple">
              <div className="card-body">
                <i className="bx bxs-briefcase card-icon"></i>
                <h4 className="card-title">
                  <a href="#">Servicio o acceso 3</a>
                </h4>
                <p className="card-text">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots.
                </p>
              </div>
            </div>
            <div className="card card-simple">
              <div className="card-body">
                <i className="bx bxs-rocket card-icon"></i>
                <h4 className="card-title">
                  <a href="#">Accesos 1</a>
                </h4>
                <p className="card-text">
                  Descripción del servicio. It was popularised in the 1960s with
                  the release of Letraset.
                </p>
              </div>
            </div>
            <div className="card card-simple">
              <div className="card-body">
                <i className="bx bxs-business card-icon"></i>
                <h4 className="card-title">
                  <a href="#">Servicio o accesos 2</a>
                </h4>
                <p className="card-text">
                  Contrary to popular belief, simply random text. Has roots.
                </p>
              </div>
            </div>
            <div className="card card-simple">
              <div className="card-body">
                <i className="bx bxs-briefcase card-icon"></i>
                <h4 className="card-title">
                  <a href="#">Servicio o acceso 3</a>
                </h4>
                <p className="card-text">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container pt-5 pb-4 mt-4 mb-5">
          <div className="card card-simple panel-horizontal">
            <img
              src="../../assets/galeria/galeria-2.png"
              className="card-img"
              alt="descripción alternativa"
            />
            <div className="card-body">
              <h2 className="card-title">Encabezado</h2>
              <p className="card-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Suscipit nostrum quo animi dignissimos omnis dicta quia placeat,
                nesciunt quasi hic autem iure eum necessitatibus ea expedita
                quas. Rem, aspernatur repudiandae.
              </p>
              <button
                type="button"
                className="btn btn-lg btn-primary card-link"
              >
                Botón
              </button>
              <button
                type="button"
                className="btn btn-lg btn-secondary card-link"
              >
                Botón
              </button>
            </div>
          </div>
        </div>

        <section className="bg-light py-5 mt-2">
          <div className="container my-1 py-2">
            <h2>Accesos con ícono</h2>
            <div className="row pt-3">
              <div className="col-12 col-lg-4">
                <div className="mb-3 pb-2">
                  <a className="card card-horizontal" href="#">
                    <i className="bx bx-test-tube card-icon-left"></i>
                    <div className="card-body">
                      <h4 className="card-title">BA Laboratorio</h4>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="mb-3 pb-2">
                  <a className="card card-horizontal" href="#">
                    <i className="bx bx-heart-circle card-icon-left"></i>
                    <div className="card-body">
                      <h4 className="card-title">
                        Centro Metropolitano de Diseño
                      </h4>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="mb-3 pb-2">
                  <a className="card card-horizontal" href="#">
                    <i className="bx bx-buildings card-icon-left"></i>
                    <div className="card-body">
                      <h4 className="card-title">Coorporación Sur</h4>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-4">
                <div className="mb-3 pb-2">
                  <a className="card card-horizontal" href="#">
                    <i className="bx bxs-tree card-icon-left"></i>
                    <div className="card-body">
                      <h4 className="card-title">Parque de la Ciudad</h4>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <h2>Accesos a servicios con descripción</h2>
              <div className="card-deck max-card-3 mt-4">
                <a className="card" href="#">
                  <div className="card-body">
                    <h4 className="card-title">
                      Administración de bienes inmuebles
                    </h4>
                    <p className="card-text">
                      Administración y disposición de los bienes inmuebles de la
                      Ciudad
                    </p>
                  </div>
                </a>
                <a className="card" href="#">
                  <div className="card-body">
                    <h4 className="card-title">
                      Análisis, estadística y simplificación productiva
                    </h4>
                    <p className="card-text">
                      Analizamos datos y generamos informes para la toma de
                      decisiones
                    </p>
                  </div>
                </a>
                <a className="card" href="#">
                  <div className="card-body">
                    <h4 className="card-title">Turnos</h4>
                    <p className="card-text">
                      Infracciones, verificación vehiculares, identificaciones,
                      partidas de nacimientos, etc...
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="container my-5 py-3">
          <h2 className="mb-4">Los más consultados</h2>
          <div className="card-deck max-cards-2">
            <a className="card card-horizontal card-lg" href="#">
              <img
                src="../../assets/eventos/cultura.png"
                className="card-img-left"
                alt="descripción alternativa"
                width="168"
              />
              <div className="card-body">
                <h3 className="card-title">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod
                </h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy
                </p>
              </div>
            </a>
            <a className="card card-horizontal card-lg" href="#">
              <img
                src="../../assets/eventos/cultura.png"
                className="card-img-left"
                alt="descripción alternativa"
                width="168"
              />
              <div className="card-body">
                <h3 className="card-title">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod
                </h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy
                </p>
              </div>
            </a>
          </div>
        </div>

        <div className="container">
          <h2 className="mb-4">Noticias</h2>
          <div className="card-deck max-cards-3 mb-4 pb-2">
            <a className="card" href="#">
              <img
                src="../../assets/eventos/event-card.png"
                className="card-img-top"
                alt="descripción alternativa"
              />
              <div className="card-body">
                <div className="mb-2">
                  <span className="badge badge-secondary">Etiqueta 1</span>
                  <span className="badge badge-secondary">Etiqueta 1</span>
                </div>
                <h4 className="card-title">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                </h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut
                </p>
              </div>
              <div className="card-footer">
                <small>Fecha de publicación: 22/04/2022</small>
              </div>
            </a>
            <a className="card d-none d-sm-block" href="#">
              <img
                src="../../assets/noticias/noticias.png"
                className="card-img-top"
                alt="descripción alternativa"
              />
              <div className="card-body">
                <div className="mb-2">
                  <span className="badge badge-secondary">Etiqueta 1</span>
                  <span className="badge badge-secondary">Etiqueta 1</span>
                </div>
                <h4 className="card-title">IncuBAte 2022</h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut
                </p>
              </div>
              <div className="card-footer">
                <small>Fecha de publicación: 21/04/2022</small>
              </div>
            </a>
            <a className="card d-none d-lg-block" href="#">
              <img
                src="../../assets/noticias/obelisco-buenos-aires2.png"
                className="card-img-top"
                alt="descripción alternativa"
              />
              <div className="card-body">
                <div className="mb-2">
                  <span className="badge badge-secondary">Etiqueta 1</span>
                  <span className="badge badge-secondary">Etiqueta 1</span>
                </div>
                <h4 className="card-title">
                  Habilidades para la Empleabilidad
                </h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut
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
      <section className="bg-light py-5">
        <div className="container my-1 py-2">
          <h2 className="mb-4">Información institucional</h2>
          <div className="card-deck max-cards-2 mb-5">
            <a className="card card-horizontal card-lg" href="#">
              <img
                src="../../assets/institucional/joseLuisGiusti.png"
                className="card-img-left"
                alt="descripción alternativa"
              />
              <div className="card-body">
                <h4 className="card-title">José Luis Giusti</h4>
                <p className="card-text">
                  Ministro de Desarrollo Económico y Producción
                </p>
              </div>
            </a>
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">Contacto</h4>
                <p className="card-text">
                  Teléfono: 5030-9400 <br /> Mail: jlgiusti@buenosaires.gob.ar
                </p>
              </div>
            </a>
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">Transparencia activa</h4>
                <p className="card-text">
                  Accedé a la información pública del Gobierno.
                </p>
              </div>
            </a>
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">Funcionarios y organigrama</h4>
                <p className="card-text">
                  Conocé cada una de las áreas que conforman el Gobierno de la
                  Ciudad.
                </p>
              </div>
            </a>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <h2 className="mb-4">Encabezado</h2>
              <div className="list-group mb-4">
                <a href="#" className="list-group-item">
                  <span className="access-title">
                    <i className="bx bx-sm align-middle mr-1 bxl-facebook-circle"></i>
                    Facebook
                  </span>
                </a>
                <a href="#" className="list-group-item">
                  <span className="access-title">
                    <i className="bx bx-sm align-middle mr-1 bxl-instagram"></i>
                    Instagram
                  </span>
                </a>
                <a href="#" className="list-group-item">
                  <span className="access-title">
                    <i className="bx bx-sm align-middle mr-1 bxl-twitter"></i>
                    Twitter
                  </span>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="card">
                <div className="card-body">
                  <h4>Ubicación</h4>
                  <img
                    className="w-100 mb-3"
                    src="../../assets/noticias/maps.png"
                    alt=""
                  />
                  <p className="mb-0">
                    Dirección:
                    <a className="" href="#" target="_blank" rel="noreferrer">
                      Martin García 346, 2° piso
                    </a>
                  </p>
                  <a href="#" className="btn btn-primary btn-lg mt-3">
                    Cómo llego
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
