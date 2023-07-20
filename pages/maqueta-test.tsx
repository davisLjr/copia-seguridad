import React from "react";
import { Layout } from "../components/Layout/layouts";

export default function Maqueta() {
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
                  <a href="#">Jefatura de Gabinete</a>
                </li>
              </ol>
            </nav>
            <div className="row">
              <div className="col-12 col-lg-10">
                <div className="mt-2 pt-1">
                  <h1 className="mb-3">
                    Secretaría de Innovación y Transformación Digital
                  </h1>
                  <p className="lead">
                    Trabajamos en soluciones integrales para mejorar la calidad
                    de vida de los vecinos y visitantes de la Ciudad, a partir
                    de la tecnología y la innovación.
                  </p>
                </div>
                <div className="d-block d-md-flex pt-3 ">
                  <div className="dropdown mb-3 mr-2">
                    <button
                      type="button"
                      className="btn btn-dropdown btn-dropdown-border  dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Institucional
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Qué hacemos
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Secretaría de Innovación y Transformación Digital
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Subsecretaría de Experiencia Digital
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Subsecretaría de Ciudad Inteligente
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Subsecretaría de Políticas Públicas Basadas en
                          Evidencia
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Guía de funcionarios
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Organigrama
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown dropbottom">
                    <button
                      type="button"
                      className="btn btn-dropdown btn-dropdown-border  dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Transparencia activa
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Informes de auditoría
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Presupuesto
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Declaraciones juradas
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Compras y contrataciones
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Normativa
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Concursos de personal
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Sueldos de funcionarios
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Escalas salariales
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Nómina de personal
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container pt-2">
          <div className="card-deck max-cards-3 card-column mb-5">
            <div className="card card-simple">
              <div className="card-body">
                <i className="bx bx-cog card-icon"></i>
                <h4 className="card-title">Plataformas digitales</h4>
                <p className="card-text">
                  Mantenemos las plataformas y damos soporte a las áreas de
                  gobierno.
                </p>
              </div>
            </div>
            <div className="card card-simple">
              <div className="card-body">
                <span className="material-icons-round card-icon">
                  design_services
                </span>
                <h4 className="card-title">Experiencia Digital</h4>
                <p className="card-text">
                  Diseñamos estrategias y productos digitales para mejorar la
                  experiencia de los vecinos.
                </p>
              </div>
            </div>
            <div className="card card-simple">
              <div className="card-body">
                <span className="material-icons-round card-icon">
                  checklist
                </span>
                <h4 className="card-title">Estándares</h4>
                <p className="card-text">
                  Definimos los estándares necesarios para las webs y
                  aplicaciones de la familia BA.
                </p>
              </div>
            </div>
          </div>

          <hr className="my-5" />

          <div className="card card-simple panel-horizontal">
            <img
              src="https://gcba.github.io/img/card/homev1.svg"
              alt="descripción alternativa"
              className="card-img"
            />
            <div className="card-body">
              <h2 className="card-title">Boti</h2>
              <p className="card-text">
                El chatbot del Gobierno de la Ciudad resuelve todas tus
                inquietudes y consultas de forma fácil e inmediata, las 24 horas
                los 365 días del año.
                <br />
                En 2019, el Gobierno de la Ciudad de Buenos Aires se convirtió
                en el primero del mundo en utilizar WhatsApp para comunicarse
                con los vecinos..
              </p>
              <div className="panel-footer">
                <button
                  type="button"
                  className="btn btn-lg btn-primary card-link"
                >
                  Chateá con Boti
                </button>
                <button
                  type="button"
                  className="btn btn-lg btn-secondary card-link"
                >
                  Conocé más
                </button>
              </div>
            </div>
          </div>

          <hr className="my-5" />

          <div className="alert alert-success mb-5" role="alert">
            <p>
              <strong>Te estamos buscando.</strong>
              <br />
              ¡Tu visión y tu experiencia tienen lugar! Conocé todas las
              oportunidades laborales que tenemos en la Secretaría de Innovación
              para vos. Dejanos tu CV y datos personales, ¡y sumate al equipo de
              innovadores!
              <br />
              <a href="#">Ingresá tu CV</a>.
            </p>
          </div>
        </div>

        <section className="bg-light py-5 mb-5">
          <div className="container">
            <div>
              <h2 className="mb-4 mt-2 pt-1">Titulo a colocar</h2>
              <div className="card-deck max-cards-3 card-column mb-2 pb-1">
                <a
                  className="card"
                  href="https://gestioncolaborativa.buenosaires.gob.ar/prestaciones"
                >
                  <img
                    src="https://buenosaires.gob.ar/sites/default/files/styles/card_img_top/public/media/image/2020/10/02/225e52884d0e6b931e09204f2ecc69dd297c361f.jpg?itok=RUvXmjjM"
                    className="card-img-top"
                    alt="descripción alternativa"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Gestión colaborativa</h4>
                    <p className="card-text">
                      Damos seguimiento a las solicitudes, denuncias y consultas
                      de los vecinos.
                    </p>
                  </div>
                </a>
                <a
                  className="card"
                  href="https://buenosaires.gob.ar/que-turno-queres-sacar"
                >
                  <img
                    src="https://buenosaires.gob.ar/sites/default/files/styles/card_img_top/public/media/image/2018/10/05/46d84a0a1c30f424c49fef6d889bc7f77b00c2d7.jpg?itok=x5owORJz"
                    className="card-img-top"
                    alt="descripción alternativa"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Turnos</h4>
                    <p className="card-text">
                      Agilizamos el sistema para que puedas gestionar tus
                      turnos.
                    </p>
                  </div>
                </a>
                <a
                  className="card"
                  href="https://buenosaires.gob.ar/atencionygestionciudadana/fila-cero"
                >
                  <img
                    src="https://buenosaires.gob.ar/sites/default/files/styles/card_img_top/public/media/image/2016/04/26/0dbd91d1e1435e26905bff920ee5c3dc9aee0252.jpg?itok=vw5eH87t"
                    className="card-img-top"
                    alt="descripción alternativa"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Fila Cero</h4>
                    <p className="card-text">
                      Es la aplicación móvil que permite hacer la fila oline de
                      los trámite en la Ciudad.
                    </p>
                  </div>
                </a>

                <a className="card" href="#">
                  <img
                    src="https://buenosaires.gob.ar/sites/default/files/styles/card_img_top/public/media/image/2020/03/06/7bba2ec0f257caa3703bdefba2130f78e3a4ecec.png?itok=odMpPxWM"
                    className="card-img-top"
                    alt="descripción alternativa"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Mapa del delito</h4>
                    <p className="card-text">
                      Consultá cuáles son los hechos delictivos de la Ciudad por
                      comuna o barrio.
                    </p>
                  </div>
                </a>
                <a className="card" href="#">
                  <img
                    src="https://buenosaires.gob.ar/sites/default/files/styles/card_img_top/public/media/image/2020/03/06/a4660f0de287911e415690c4d613fb2bedf3ab69.png?itok=lPLlMGHF"
                    className="card-img-top"
                    alt="descripción alternativa"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Mapas Abiertos</h4>
                    <p className="card-text">
                      Accedé a las aplicaciones y servicios geográficos del
                      Gobierno de la Ciudad de Buenos Aires.
                    </p>
                  </div>
                </a>
                <a className="card" href="#">
                  <img
                    src="https://buenosaires.gob.ar/sites/default/files/styles/card_img_top/public/2023-03/Mockup2.jpg?itok=0_t3A8yd"
                    className="card-img-top"
                    alt="descripción alternativa"
                  />
                  <div className="card-body">
                    <h4 className="card-title">miBA</h4>
                    <p className="card-text">
                      La plataforma de la Ciudad para acceder a todos tus
                      servicios.
                    </p>
                  </div>
                </a>
                {/** */}
                <a className="card" href="#">
                  <img
                    src="https://buenosaires.gob.ar/sites/default/files/styles/card_img_top/public/media/image/2020/03/06/6d3c251f5f7f56f9b89a18d41b4c7b09a55da606.png?itok=IdMmg_Ao"
                    className="card-img-top"
                    alt="descripción alternativa"
                  />
                  <div className="card-body">
                    <h4 className="card-title">BA Data</h4>
                    <p className="card-text">
                      Abrimos los datos que genera la Ciudad para que puedas
                      desarrollar aplicaciones.
                    </p>
                  </div>
                </a>
                <a className="card" href="#">
                  <img
                    src="https://buenosaires.gob.ar/sites/default/files/styles/card_img_top/public/media/image/2020/05/14/fa2cd88f99ca119c9a26b29f1e846f62db2d6310.png?itok=q6Vp6cZJ"
                    className="card-img-top"
                    alt="descripción alternativa"
                  />
                  <div className="card-body">
                    <h4 className="card-title">
                      Centro de Ciberseguridad de la Ciudad
                    </h4>
                    <p className="card-text">
                      Comunicate con nosotros para recibir asistencia ante
                      incidentes de seguridad relacionados al uso de la
                      tecnología.
                    </p>
                  </div>
                </a>
                <a className="card" href="#">
                  <img
                    src="https://buenosaires.gob.ar/sites/default/files/styles/card_img_top/public/media/image/2020/03/06/0ff45584b9d55d86af0a8c89aaafb8513daf0f8d.png?itok=RJn_ywVV"
                    className="card-img-top"
                    alt="descripción alternativa"
                  />
                  <div className="card-body">
                    <h4 className="card-title">
                      Agencia de Sistemas de Información
                    </h4>
                    <p className="card-text">
                      Organizamos y coordinamos con todas las dependencias del
                      Gobierno de la Ciudad, la infraestructura informática de
                      telecomunicaciones y de los sistemas de información.
                    </p>
                  </div>
                </a>
                <a className="card" href="#">
                  <img
                    src="https://buenosaires.gob.ar/sites/default/files/styles/card_img_top/public/media/image/2020/03/06/dde133f73101ddba584e77cf3aee1b6921f7177a.png?itok=udKLDw9k"
                    className="card-img-top"
                    alt="descripción alternativa"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Trámites a Distancia</h4>
                    <p className="card-text">
                      Gestioná y llevá el seguimiento de todos tus trámites ante
                      la Administración Pública de manera virtual.
                    </p>
                  </div>
                </a>
                <a className="card" href="#">
                  <img
                    src="https://buenosaires.gob.ar/sites/default/files/styles/card_img_top/public/media/image/2022/08/17/7b4a14aab163751221abf64c2856a5903927144b.png?itok=fnyV-NQB"
                    className="card-img-top"
                    alt="descripción alternativa"
                  />
                  <div className="card-body">
                    <h4 className="card-title">BA Gaming</h4>
                    <p className="card-text">
                      El plan para acompañar el desarrollo profesional de los
                      gamers.
                    </p>
                  </div>
                </a>
                <a className="card" href="#">
                  <img
                    src="https://buenosaires.gob.ar/sites/default/files/styles/card_img_top/public/2023-07/sitema%20de%20inoperabilidad.jpg?itok=tUjvx69I"
                    className="card-img-top"
                    alt="descripción alternativa"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Sistema de Interoperabilidad</h4>
                    <p className="card-text">
                      Conocé el sistema de la Ciudad que permite gestionar la
                      interoperabilidad de datos de forma estandarizada y segura
                      para mejorar la experiencia ciudadana.
                    </p>
                  </div>
                </a>
                <a
                  className="card"
                  href="https://documentosboletinoficial.buenosaires.gob.ar/publico/ck_PE-RES-MJGGC-SECITD-94-23-6626.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Enlace a resolución."
                >
                  <img
                    src="https://gcba.github.io/img/card/homev1.svg"
                    className="card-img-top"
                    alt="descripción alternativa"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Conocé nuestra resolución</h4>
                    <p className="card-text">
                      Descargá la resolución publicada en el Boletín Oficial del
                      Gobierno de la Ciudad de Buenos Aires.
                    </p>
                  </div>
                </a>
                <a
                  className="card"
                  href="https://gcba.github.io/obelisco-demo/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Enlace a templates de ejemplo."
                >
                  <img
                    src="https://gcba.github.io/img/card/homev1.svg"
                    className="card-img-top"
                    alt="descripción alternativa"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Obelisco</h4>
                    <p className="card-text">
                      Sitio web donde se muestran los componentes basados en el sistema de diseño Obelisco.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="container">
          <h2 className="mt-5 mb-4">Noticias</h2>
          <div className="card-deck max-cards-3 mb-5">
            <a className="card" href="#">
              <img
                src="https://buenosaires.gob.ar/sites/default/files/2023-07/FiReLEAGUE%20BATTLE%20EN%20EL%20MOVISTAR%20ARENA%20%28FOTO%20MANUEL%20CASCALLAR%29%20.jpg"
                className="card-img-top"
                alt="descripción alternativa"
              />
              <div className="card-body">
                <div className="mb-2">
                  <span className="badge badge-info">tecnología</span>
                </div>
                <h4 className="card-title">
                  La Ciudad de Buenos Aires fue sede de uno de los eventos de
                  esports más importantes de Latinoamérica
                </h4>
                <p className="card-text">
                  Equipos de Counter-Strike: Global Offensive de la escena
                  nacional e internacional compitie..
                </p>
              </div>
              <div className="card-footer">
                <small>Fecha de publicación: 11/07/2023</small>
              </div>
            </a>
            <a className="card d-none d-md-block" href="#">
              <img
                src="https://buenosaires.gob.ar/sites/default/files/2023-07/5%20%281%29_0.jpg"
                className="card-img-top"
                alt="descripción alternativa"
              />
              <div className="card-body">
                <div className="mb-2">
                  <span className="badge badge-info">
                    Innovación y tecnología
                  </span>
                </div>
                <h4 className="card-title">
                  BA WiFi, la red que permite conectarse gratis a internet en
                  espacios públicos
                </h4>
                <p className="card-text">
                  Los vecinos de la Ciudad acceden a través de 2.400 puntos
                  ubicados en plazas, parques y es...
                </p>
              </div>
              <div className="card-footer">
                <small>Fecha de publicación: 04/07/2023</small>
              </div>
            </a>
            <a className="card d-none d-lg-block" href="#">
              <img
                src="https://buenosaires.gob.ar/sites/default/files/2023-06/WHAT%20WORKS%20CITIES%20-%20VISITA%202.jpg"
                className="card-img-top"
                alt="descripción alternativa"
              />
              <div className="card-body">
                <div className="mb-2">
                  <span className="badge badge-info">Innovación</span>
                </div>
                <h4 className="card-title">
                  La Ciudad recibió la Certificación Oro del programa What Works
                  Cities de Bloomberg Philanthropies
                </h4>
                <p className="card-text">
                  Es una de las primeras cinco urbes de Latinoamérica en obtener
                  este reconocimiento interna...
                </p>
              </div>
              <div className="card-footer">
                <small>Fecha de publicación: 22/06/2023</small>
              </div>
            </a>
          </div>
          <a className="access" href="#" target="_blank" rel="noreferrer">
            Ver todos las noticias
          </a>
        </section>

        <section className="container">
          <div className="pt-4 mt-3">
            <hr className="pb-3" />
            <h2 className="mb-4 pt-3">Redes sociales</h2>
            <div className="list-group list-group-row mb-1">
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
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}
