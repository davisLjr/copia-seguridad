import React from "react";
import { Layout } from "../../../../components/Layout/layouts";

export default function SimpleOp4() {
  return (
    <Layout>
      <article className="pb-5 mb-4">
        <header className="bg-light pt-3 mb-5 d-flex">
          <div className="container pt-1">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Inicio</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Desarrollo económico y producción</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Pymes y emprendedores</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Capacitaciones</a>
                </li>
              </ol>
            </nav>
          </div>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div>
                <h1 className="mb-3">
                  Capacitación en el uso de WhatsApp Business
                </h1>
                <p>
                  <small>
                    Organizado por ASEA - Asociación De Emprendedores De
                    Argentina y WhatsApp
                  </small>
                </p>
              </div>
              <div className="row pt-3">
                <div className="cards-container col-12 col-lg-4 mr-3">
                  <div className="card card-simple card-horizontal mb-3">
                    <i className="bx bx-sm bxs-lock mr-3 my-auto"></i>
                    <div className="card-body">
                      <p className="m-0 card-text">
                        <strong>Inscripción hasta: </strong>
                      </p>
                      <p className="m-0 card-text">30/03/2022</p>
                    </div>
                  </div>
                  <div className="card card-simple card-horizontal mb-3">
                    <i className="bx bx-sm bx-time mr-3 my-auto"></i>
                    <div className="card-body">
                      <p className="m-0 card-text">
                        <strong>Inicio: </strong>01/04/2022
                      </p>
                      <p className="m-0 card-text">
                        <small>Duración: 1 mes</small>
                      </p>
                    </div>
                  </div>
                  <div className="card card-simple card-horizontal mb-3">
                    <i className="bx bx-sm bx-calendar-week mr-3 my-auto"></i>
                    <div className="card-body">
                      <p className="m-0 card-text">
                        <strong>Días y horario: </strong>
                      </p>
                      <p className="m-0 card-text">
                        <small>Viernes de 10 a 11h.</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="cards-container col-12 col-lg-4">
                  <div className="card card-simple card-horizontal mb-3">
                    <i className="bx bx-sm bxs-map mr-3 my-auto"></i>
                    <div className="card-body">
                      <p className="m-0 card-text">Campus virtual</p>
                    </div>
                  </div>
                  <div className="card card-simple card-horizontal mb-3">
                    <i className="bx bx-sm bx-bar-chart-alt mr-3 my-auto"></i>
                    <div className="card-body">
                      <p className="m-0 card-text">Nivel básico</p>
                    </div>
                  </div>
                  <div className="card card-simple card-horizontal mb-3">
                    <i className="bx bx-sm bx-money mr-3 my-auto"></i>
                    <div className="card-body">
                      <p className="m-0 card-text">Gratis</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-3 mt-2 pt-1 pb-3">
                <a className="btn btn-primary btn-lg" href="#" target="_blank">
                  Inscribirme
                </a>
              </div>

              <hr className="mb-5" />
              <p className="mb-4">
                Es una iniciativa de la Asociación de Emprendedores de Argentina
                (ASEA), la Asociación de Emprendedores de Latinoamérica (ASELA)
                y WhatsApp en alianza con el Centro de Géneros en Tecnología
                (Centro G+T) de la Secretaría de Innovación Tecnológica del
                Sector Público de la Jefatura de Gabinete de Ministros.
              </p>
              <p className="mb-4">
                Se trata de 5 talleres enfocados en aumentar las habilidades
                digitales de las MIPyMES en WhatsApp Business, especialmente las
                lideradas por mujeres y personas LGBTIQ+.
              </p>
              <p className="mb-4">
                El objetivo es contribuir a reducir la brecha de géneros en las
                pequeñas y medianas empresas.
              </p>
              <p className="mb-4">
                Las personas que participen tendrán acceso a capacitaciones
                sobre las herramientas para empresas de WhatsApp Business.
              </p>

              <h2 className="mt-4 pt-2 mb-4">¿Qué lograrás aprender?</h2>
              <ul className="pl-2">
                <li style={{listStyleType: '- '}} className="mb-2">
                  Crear tu perfil de empresa
                </li>
                <li style={{listStyleType: '- '}} className="mb-2">
                  Impulsar tu negocio con un catálogo online
                </li>
                <li style={{listStyleType: '- '}} className="mb-2">
                  Agilizar la comunicación y crear mensajes automatizados
                </li>
                <li style={{listStyleType: '- '}} className="mb-2">
                  Optimizar la atención al cliente
                </li>
                <li style={{listStyleType: '- '}} className="mb-2">
                  Desarrollar estrategias de posicionamiento
                </li>
              </ul>

              <h2 className="mt-4 pt-2 mb-2 pb-1">Contenidos</h2>
              <h3 className="pb-1">Taller 1: ¡Empecemos!</h3>
              <ul className="pl-2 pb-3">
                <li style={{listStyleType: '- '}} className="mb-1">
                  ¿Qué es WhatsApp Business?
                </li>
                <li style={{listStyleType: '- '}} className="mb-1">
                  Creá tu cuenta
                </li>
              </ul>
              <h3 className="pb-1">Taller 2: Potenciate con WhatsApp</h3>
              <ul className="pl-2 pb-3">
                <li style={{listStyleType: '- '}} className="mb-1">
                  ¿Por qué WhatsApp Web es un multidispositivo?
                </li>
                <li style={{listStyleType: '- '}} className="mb-1">
                  ¿Cómo usar los mensajes automáticos?
                </li>
              </ul>
              <h3 className="pb-1">Taller 3: Automatizá</h3>
              <ul className="pl-2 pb-3">
                <li style={{listStyleType: '- '}} className="mb-1">
                  Vinculá cuentas
                </li>
                <li style={{listStyleType: '- '}} className="mb-1">
                  ¿Cómo enlazar Facebook Ads con WhatsApp?
                </li>
              </ul>
              <h3 className="pb-1">Taller 4: Integrá</h3>
              <ul className="pl-2 pb-1">
                <li style={{listStyleType: '- '}} className="mb-1">
                  La seguridad ante todo
                </li>
                <li style={{listStyleType: '- '}} className="mb-1">
                  Sin Spam, sin molestias
                </li>
                <li style={{listStyleType: '- '}} className="mb-1">
                  ¿Cómo detectar problemas?
                </li>
              </ul>

              <h2 className="mt-5 mb-4">Preguntas frecuentes</h2>
              <div id="accordion">
                <div className="accordion-wrapper">
                  <div className="accordion" id="accordionExample">
                    <div className="card">
                      <button
                        className="card-header collapsed card-link"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                      >
                        ¿Se entregará constancia?
                      </button>
                      <div
                        id="collapseOne"
                        className="collapse"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          ¡Sí! ASEA en alianza con Centro G+T entregará a partir
                          del 16 de mayo las constancias de participación a las
                          personas que hayan cursado el programa completo y
                          concluyan las evaluaciones de retroalimentación que se
                          enviarán al finalizar cada uno de los talleres que
                          conforman el programa.
                          <br />
                          Sólo se emitirán constancias a las personas que hayan
                          cursado el programa completo y concluido las
                          evaluaciones de retroalimentación antes del 13 de mayo
                          de 2022.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <button
                        className="card-header collapsed card-link"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                      >
                        ¿Puedo tomar solo alguno de los talleres?
                      </button>
                      <div
                        id="collapseTwo"
                        className="collapse"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          <em> Lorem ipsum dolor sit amet,</em> consectetur
                          adipiscing elit. Integer congue magna mauris.
                          Vestibulum justo nulla, pulvinar vitae odio laoreet,
                          aliquam laoreet orci. Sed molestie mauris eget tempus
                          bibendum.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <button
                        className="card-header collapsed card-link"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                      >
                        ¿Por qué asistir en vivo?
                      </button>
                      <div
                        id="collapseThree"
                        className="collapse"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. <strong>Integer congue magna mauris.</strong>{" "}
                          Vestibulum justo nulla, pulvinar vitae odio laoreet,
                          aliquam laoreet orci. Sed molestie mauris eget tempus
                          bibendum.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <button
                        className="card-header collapsed card-link"
                        data-toggle="collapse"
                        data-target="#collapseFour"
                      >
                        ¿Quién se puede inscribir?
                      </button>
                      <div
                        id="collapseFour"
                        className="collapse"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          <ul className="mb-0">
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Consectetur adipiscing elit</li>
                            <li>Integer congue magna mauris</li>
                            <li>Vestibulum justo nulla</li>
                            <li>Sed molestie mauris</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <button
                        className="card-header collapsed card-link"
                        data-toggle="collapse"
                        data-target="#collapseFive"
                      >
                        ¿Quién brinda las capacitaciones?
                      </button>
                      <div
                        id="collapseFive"
                        className="collapse"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer congue magna mauris. Vestibulum justo
                          nulla, pulvinar vitae odio laoreet, aliquam laoreet
                          orci. Sed molestie mauris eget tempus bibendum.
                          <a href="#" target="_blank" rel="noreferrer">
                            Enlace
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <img
                src="../../assets/pagina-simple/capacitacion-1.png"
                className="w-100 mb-5 pb-4 mt-5 mt-md-4"
                alt="Texto alternativo de la imagen"
              />
              <h2 className="mb-4 pt-1">Docente</h2>
              <div className="card card-simple card-horizontal mb-5 pb-3">
                <img
                  src="../../assets/pagina-simple/capacitacion-2.png"
                  className="card-img-left-panel"
                  alt="descripción alternativa"
                />
                <div className="card-body">
                  <h4 className="card-title">Adolfo Trabocchi</h4>
                  <p className="card-text-panel">
                    <small>Especialista de WhatsApp Business de la ASEA</small>
                  </p>
                </div>
              </div>

              <div className="mb-5">
                <h2 className="mb-4">Requerimientos</h2>
                <div className="mb-4">
                  <h3>Conocimientos</h3>
                  <p className="mb-4">No se requieren conocimientos previos</p>
                </div>
                <div className="mb-4">
                  <h3>Materiales</h3>
                  <div className="card card-simple card-horizontal">
                    <i className="bx bx-sm bx-laptop mr-3 my-auto"></i>
                    <div className="card-body">
                      <p className="m-0 card-text">
                        Computadora y conexión a internet
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3>Compartir</h3>
                <ul className="list-inline">
                  <li className="list-inline-item mr-1">
                    <a href="#" target="_blank" className="text-body">
                      <i className="bx bx-sm bxl-facebook-circle"></i>
                    </a>
                  </li>
                  <li className="list-inline-item mr-1">
                    <a href="#" target="_blank" className="text-body">
                      <i className="bx bx-sm bxl-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item mr-1">
                    <a href="#" target="_blank" className="text-body">
                      <i className="bx bx-sm bxl-linkedin-square"></i>
                    </a>
                  </li>
                  <li className="list-inline-item mr-1">
                    <a href="#" target="_blank" className="text-body">
                      <i className="bx bx-sm bxl-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item mr-1">
                    <a href="#" target="_blank" className="text-body">
                      <i className="bx bx-sm bxl-whatsapp"></i>
                    </a>
                  </li>
                  <li className="list-inline-item mr-1">
                    <a href="#" target="_blank" className="text-body">
                      <i className="bx bx-sm bx-link-alt"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <section className="mt-5 pt-5">
          <div className="pt-4 mt-1">
            <div className="container">
              <h2 className="mb-4">Cursos relacionados</h2>
              <div className="card-deck max-cards-2 pb-4">
                <a className="card card-horizontal" href="#">
                  <img
                    src="../../assets/pagina-simple/capacitacion-4.png"
                    className="card-img-left"
                    alt="descripción alternativa"
                  />
                  <div className="card-body">
                    <h4 className="card-title">
                      1era Edición del Plan Crear - Club de Emprendedores
                    </h4>
                    <p className="card-text">
                      Inicio 01/08/2022 - Duración 1 mes
                      <br />
                      Virtual
                    </p>
                  </div>
                </a>
                <a className="card card-horizontal" href="#">
                  <img
                    src="../../assets/pagina-simple/capacitacion-3.png"
                    className="card-img-left"
                    alt="descripción alternativa"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Ventas online</h4>
                    <p className="card-text">
                      Inicio 09/04/2022 - Duración 8 meses
                      <br />
                      Virtual
                    </p>
                  </div>
                </a>
              </div>
              <div className="pt-1">
                <a className="access" href="#" target="_blank" rel="noreferrer">
                  Ver todos los cursos
                </a>
              </div>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}
