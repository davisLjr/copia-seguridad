import React from "react";
import { Layout } from "../../../../components/Layout/layouts";

export default function EducacionOp1() {
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
                  <h1 className="mb-3">Educación</h1>
                  <p className="lead">
                    Nos ocupamos de crear, promover y ejecutar políticas
                    educativas en sus niveles inicial, primario, secundario y
                    superior, que conformen un sistema educativo innovador,
                    único e integrado.
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
                          Ministerio de Educación
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Subsecretaría de Carrera Docente
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Subsecretaría de Coordinación Pedagógica y Equidad
                          Educativa
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
                          <span>Agenda educativa 2023</span>
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
                  <strong>Inicio de clases 2023</strong>
                  <br />
                  <a href="#">
                    Conocé cómo va a ser la escuela este nuevo año escolar
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="card-deck max-cards-3 mb-2 pb-1">
            <a className="card" href="#">
              <img
                src="../../assets/noticias/noticias-2.png"
                className="card-img-top"
                alt="descripción alternativa"
              />
              <div className="card-body">
                <h4 className="card-title">Inscripción escolar 2023</h4>
                <p className="card-text">
                  Te invitamos a recorrer una experiencia virtual sobre las
                  escuelas de la Ciudad.
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
                <h4 className="card-title">Terminá la Secundaria</h4>
                <p className="card-text">
                  Conocé cómo sumarte para terminar la secundaria gratis,
                  virtual y desde donde vivas.
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
                <h4 className="card-title">miEscuela</h4>
                <p className="card-text">
                  Accedé a la plataforma que te permite gestionar las tareas
                  administrativas y académicas de las escuelas.
                </p>
              </div>
            </a>
          </div>

          <div className="card-deck py-5">
            <div className="card card-simple">
              <div className="card-body">
                <i className="bx bxs-group card-icon"></i>
                <h4 className="card-title">
                  <a href="#">Estudiantes</a>
                </h4>
                <p className="card-text">
                  Inscripción escolar, boleto estudiantil y programas
                </p>
              </div>
            </div>
            <div className="card card-simple">
              <div className="card-body">
                <i className="bx bxs-book card-icon"></i>
                <h4 className="card-title">
                  <a href="#">Docentes</a>
                </h4>
                <p className="card-text">
                  Capacitación, información administrativa, beneficios
                </p>
              </div>
            </div>
            <div className="card card-simple">
              <div className="card-body">
                <i className="bx bxs-school card-icon"></i>
                <h4 className="card-title">
                  <a href="#">Escuelas</a>
                </h4>
                <p className="card-text">Áreas y Programas</p>
              </div>
            </div>
            <div className="card card-simple">
              <div className="card-body">
                <i className="bx bx-group card-icon"></i>
                <h4 className="card-title">
                  <a href="#">Familias</a>
                </h4>
                <p className="card-text">
                  Acompañamos a las familias en el recorrido educativo
                </p>
              </div>
            </div>
          </div>

          <div className="card-deck mb-5 pt-1 mt-2">
            <a className="card" href="#">
              <img
                src="../../assets/noticias/noticias-3.png"
                className="card-img-top"
                alt="descripción alternativa"
              />
              <div className="card-body">
                <h4 className="card-title">Prácticas educativas</h4>
                <p className="card-text">
                  Experiencias pedagógicas para acompañar la transición.
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
                <h4 className="card-title">Educar en comunidad</h4>
                <p className="card-text">
                  Conocé los aprendizajes esperados y los resultados.
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
                <h4 className="card-title">Conocé tu escuela</h4>
                <p className="card-text">
                  Te acompañamos en el proceso de inscripción de los chicos y
                  chicas.
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
                <h4 className="card-title">Escuela Abierta</h4>
                <p className="card-text">
                  Es un espacio de encuentro entre chicos, familia y comunidad.
                </p>
              </div>
            </a>
          </div>

          <div className="row">
            <div className="col-12 col-lg-4 mb-5">
              <h2 className="mb-4 pt-1 mt-2">Los más consultados</h2>
              <div className="card-deck max-cards-1">
                <a className="card card-horizontal" href="#">
                  <img
                    src="../../assets/noticias/card-horizontal.png"
                    className="card-img-left"
                    alt="descripción alternativa"
                    width="168"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Aprendé Programando</h4>
                    <p className="card-text">
                      Sumate al mundo de la programación.
                    </p>
                  </div>
                </a>
                <a className="card card-horizontal" href="#">
                  <img
                    src="../../assets/noticias/card-horizontal.png"
                    className="card-img-left"
                    alt="descripción alternativa"
                    width="168"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Terminá la Secundaria</h4>
                    <p className="card-text">
                      Conocé Adultos 2000, el Programa que te permite finalizar
                      los estudios.
                    </p>
                  </div>
                </a>
                <a className="card card-horizontal" href="#">
                  <img
                    src="../../assets/noticias/card-horizontal.png"
                    className="card-img-left"
                    alt="descripción alternativa"
                    width="168"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Secundaria del Futuro</h4>
                    <p className="card-text">
                      Profundiza la NES y propone un modelo de escuela más
                      inclusivo.
                    </p>
                  </div>
                </a>
                <a className="card card-horizontal" href="#">
                  <img
                    src="../../assets/noticias/card-horizontal.png"
                    className="card-img-left"
                    alt="descripción alternativa"
                    width="168"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Plan Sarmiento</h4>
                    <p className="card-text">
                      El camino hacia la innovación en los procesos de enseñanza
                      y aprendizaje.
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-12 col-lg-4 mb-5">
              <h2 className="mb-4 pt-1 mt-2">Destacados</h2>
              <div className="card-deck max-cards-1">
                <a className="card card-horizontal" href="#">
                  <img
                    src="../../assets/noticias/noticias-5.png"
                    className="card-img-left"
                    alt="descripción alternativa"
                    width="168"
                  />
                  <div className="card-body">
                    <h4 className="card-title">54 Nuevas Escuelas</h4>
                    <p className="card-text">
                      Mirá el Plan del Compromiso de Gobierno.
                    </p>
                  </div>
                </a>
                <a className="card card-horizontal" href="#">
                  <img
                    src="../../assets/noticias/noticias-5.png"
                    className="card-img-left"
                    alt="descripción alternativa"
                    width="168"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Materiales didácticos</h4>
                    <p className="card-text">
                      Elaboramos documentos curriculares, orientaciones y
                      propuestas de enseñanza.
                    </p>
                  </div>
                </a>
                <a className="card card-horizontal" href="#">
                  <img
                    src="../../assets/noticias/noticias-5.png"
                    className="card-img-left"
                    alt="descripción alternativa"
                    width="168"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Escuelas Verdes</h4>
                    <p className="card-text">
                      Fomentamos el desarrollo sustentable a través de la
                      Educación.
                    </p>
                  </div>
                </a>
                <a className="card card-horizontal" href="#">
                  <img
                    src="../../assets/noticias/noticias-5.png"
                    className="card-img-left"
                    alt="descripción alternativa"
                    width="168"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Calidad y Equidad Educativa</h4>
                    <p className="card-text">
                      Producimos estadísticas del sistema educativo para mejorar
                      la calidad educativa.
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-4 mb-5">
              <h2 className="mb-4 pt-1 mt-2">Conocé más </h2>
              <div className="card-deck max-cards-1">
                <a className="card card-horizontal" href="#">
                  <img
                    src="../../assets/noticias/noticias-4.png"
                    className="card-img-left"
                    alt="descripción alternativa"
                    width="168"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Ciudadanía Global</h4>
                    <p className="card-text">
                      Promovemos diversos recorridos de enseñanza y aprendizaje.
                    </p>
                  </div>
                </a>
                <a className="card card-horizontal" href="#">
                  <img
                    src="../../assets/noticias/noticias-4.png"
                    className="card-img-left"
                    alt="descripción alternativa"
                    width="168"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Consulta de Establecimientos</h4>
                    <p className="card-text">
                      Buscador de instituciones educativas de gestión estatal y
                      privada.
                    </p>
                  </div>
                </a>
                <a className="card card-horizontal" href="#">
                  <img
                    src="../../assets/noticias/noticias-4.png"
                    className="card-img-left"
                    alt="descripción alternativa"
                    width="168"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Centro de Reciclado Creativo</h4>
                    <p className="card-text">
                      Destinado a docentes y estudiantes de nivel inicial y
                      niños.
                    </p>
                  </div>
                </a>
                <a className="card card-horizontal" href="#">
                  <img
                    src="../../assets/noticias/noticias-4.png"
                    className="card-img-left"
                    alt="descripción alternativa"
                    width="168"
                  />
                  <div className="card-body">
                    <h4 className="card-title">
                      Educación inclusiva en la escuela
                    </h4>
                    <p className="card-text">
                      Conocé los derechos de los niños, niñas y adolescentes con
                      discapacidad.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-4 pt-1 mt-2">Seguinos en</h2>
            <div className="list-group list-group-row">
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
              <a href="#" className="list-group-item item-sm">
                <span className="access-title">
                  <i className="bx bx-sm align-middle mr-2 bxl-twitter"></i>
                  Twitter
                </span>
              </a>
              <a href="#" className="list-group-item item-sm">
                <span className="access-title">
                  <i className="bx bx-sm align-middle mr-2 bxl-youtube"></i>
                  YouTube
                </span>
              </a>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
