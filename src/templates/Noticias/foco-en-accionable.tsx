import React from "react";
import { Layout } from "../../../components/Layout/layouts";

export default function FocoEnAccionable() {
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
                  <a href="#">Desarrollo económico</a>
                </li>
              </ol>
            </nav>

            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="mt-2 pt-1">
                  <p>
                    <a href="#" className="badge badge-info">
                      Desarrollo económico
                    </a>
                  </p>
                  <p className="mb-0">
                    <small>Jueves 14 de junio de 2022</small>
                  </p>
                  <h1 className="mb-3">
                    Se creó el Programa de Asistencia al Sector Gastronómico y
                    Hotelero
                  </h1>
                  <p className="lead">
                    Otorgará una ayuda individual a cuenta del pago de la
                    remuneración para los trabajadores y trabajadoras del
                    sector, que se extenderá por un mes y alcanzará a empresas
                    que acrediten encontrarse en situación de emergencia.
                  </p>
                </div>

                <div className="d-flex flex-row pt-3">
                  Compartir en redes
                  <ul className="list-inline ml-2">
                    <li className="list-inline-item mr-1">
                      <a href="#" target="_blank">
                        <i className="bx bx-sm bxl-facebook-circle"></i>
                      </a>
                    </li>
                    <li className="list-inline-item mr-1">
                      <a href="#" target="_blank">
                        <i className="bx bx-sm bxl-instagram"></i>
                      </a>
                    </li>
                    <li className="list-inline-item mr-1">
                      <a href="#" target="_blank">
                        <i className="bx bx-sm bxl-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item mr-1">
                      <a href="#" target="_blank">
                        <i className="bx bx-sm bxl-linkedin-square"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <p className="mb-4">
                La Ciudad de Buenos Aires puso en marcha el{" "}
                <strong>
                  Programa de Asistencia al Sector Gastronómico y Hotelero
                </strong>
                , dirigido a solventar de modo parcial y por única vez el pago
                de las remuneraciones de las trabajadoras y los trabajadores que
                se desempeñan en esa actividad.
              </p>
              <p className="mb-4">
                El beneficio otorga hasta un máximo de $15 mil por empleado, se
                extenderá por un mes y alcanzará a las empresas que acrediten,
                entre otros requisitos, una caída en la facturación. La suma
                percibida deberá ser imputada al pago a cuenta de las
                remuneraciones del mes siguiente a la percepción de dicha suma.
              </p>

              <blockquote>
                <p>
                  Este es un apartado del texto que se quiere destacar por su
                  importancia dentro del contenido de la página.
                </p>
                <small>Nombre del autor de la cita</small>
              </blockquote>

              <div className="mb-5">
                <img
                  src="../assets/noticias/noticia-sin-redondear.jpg"
                  className="d-block w-100 rounded-lg mb-1"
                  alt="descripción alternativa"
                />
                <span className="text-xs">Fotos GCBA</span>
              </div>

              <p className="mb-4">
                El programa distingue dos tipos de beneficiarios y otorga un
                subsidio diferenciado para aquellos que se encuentren en la zona
                de emergencia gastronómica del microcentro, del macrocentro y de
                Puerto Madero, quienes percibirán un monto máximo de $15 mil.
              </p>
              <p className="mb-4">
                Para los gastronómicos que se encuentran fuera de la zona de
                emergencia económica se establecen dos rangos según medición de
                ventas en AGIP: quienes hayan decrecido sus ventas entre 20% y
                hasta 40%, recibirán $10 mil por trabajador. En tanto, quienes
                hayan decrecido sus ventas más del 40%, recibirán una ayuda de
                $12 mil por empleado.
              </p>
              <p className="mb-4">
                La asistencia otorgada es compatible con otras políticas de
                asistencia económica implementadas por el Gobierno Nacional o
                por el GCBA.
              </p>
              <p className="mb-4">
                Para acceder al beneficio, los empleadores y empleadoras deberán
                adherirse al mismo a través de la sección Trámites a Distancia
                (TAD) de la plataforma de AGIP hasta el día 15 de julio. El
                trámite es gratuito y no se requiere de intermediarios ni de
                gestores para su realización.
              </p>
              <p className="mb-2 pb-1">
                Como contraprestación, las empresas que resulten beneficiadas
                deberán comprometerse a mantener la nómina de empleados y
                empleadas durante el período por el que solicitan el beneficio y
                capacitar al personal en medidas de seguridad e higiene
                siguiendo los protocolos necesarios en el contexto de la
                pandemia de COVID-19.
              </p>
              <h2 className="mb-4 pt-5">Inscripción y requisitos</h2>
              <p className="mb-4">
                Para acceder al beneficio las empresas deben estar inscriptas en
                el Régimen de Empleadores de CABA, para acreditar que realizan
                alguna de las actividades incluidas en el programa. Asimismo,
                deberán demostrar la situación económica crítica, a través de la
                caída interanual en la facturación declarada.
              </p>
              <p className="mb-4">
                Para más información comunicarse al{" "}
                <a href="#" target="_blank">
                  2822-7250
                </a>
              </p>

              <div className="pt-2 mb-2 pb-1">
                <a href="#" className="btn btn-primary">
                  Comenzá el trámite
                </a>
              </div>
            </div>

            <aside className="col-12 col-lg-4 mt-5 mt-lg-0">
              <div className="row">
                <div className="col-xs-12 col-md-6 col-lg-12">
                  <section className="mb-5 pb-4">
                    <div className="bg-light shadow-sm rounded-lg px-4 pt-4 pb-3">
                      <div className="card card-simple panel-list-link">
                        <div className="card-body">
                          <h3 className="card-title">Marco normativo:</h3>
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
                          <h4 className="list-link-item-title">Informe</h4>
                          <a
                            className="btn btn-secondary btn-sm download-link card-link"
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Descargar
                          </a>
                          <h4 className="list-link-item-title">
                            Resolución N°125
                          </h4>
                          <a
                            className="btn btn-secondary btn-sm download-link card-link"
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Descargar
                          </a>
                          <h4 className="list-link-item-title">
                            Implementación
                          </h4>
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
                  </section>
                </div>
                <div className="col-xs-12 col-md-6 col-lg-12 pt-1">
                  <section>
                    <h3 className="mb-4">Noticias relacionadas</h3>
                    <div className="card-deck max-cards-1">
                      <a className="card card-horizontal" href="#">
                        <img
                          src="../assets/noticias/noticias-5.png"
                          className="card-img-left"
                          alt="descripción alternativa"
                        />
                        <div className="card-body">
                          <h4 className="card-title">
                            La Ciudad superó los 4 millones de testeos.
                          </h4>
                          <p className="card-text">
                            Son gratuitos y los lleva adelante el Gobierno de la
                            Ciudad, a través del (…)
                          </p>
                        </div>
                      </a>

                      <a className="card card-horizontal" href="#">
                        <img
                          src="../assets/noticias/noticias-5.png"
                          className="card-img-left"
                          alt="descripción alternativa"
                        />
                        <div className="card-body">
                          <h4 className="card-title">
                            14 de Junio: Día Internacional del Donante de
                            Sangre.
                          </h4>
                          <p className="card-text">
                            "Doná sangre para que el mundo siga latiendo" es (…)
                          </p>
                        </div>
                      </a>
                    </div>
                  </section>
                </div>
              </div>
            </aside>
          </div>
          <hr className="mt-5" />
          <section className="container">
            <h2 className="mt-5 mb-4">Noticias</h2>
            <div className="card-deck max-cards-3">
              <a className="card" href="#">
                <img
                  src="../assets/noticias/noticias-2.png"
                  className="card-img-top"
                  alt="descripción alternativa"
                />
                <div className="card-body">
                  <div className="mb-2">
                    <span className="badge badge-info">Actividades</span>
                    <span className="badge badge-info">Cultura</span>
                  </div>
                  <h4 className="card-title">
                    Agenda de verano en los MuseosBA
                  </h4>
                  <p className="card-text">
                    Descubrí toda la propuesta cultural que los MuseosBA tienen
                    para ofrecer en estas vacaciones de verano.
                  </p>
                </div>
                <div className="card-footer">
                  <small>Fecha de publicación: 11/01/2023</small>
                </div>
              </a>
              <a className="card d-none d-md-block" href="#">
                <img
                  src="../assets/noticias/noticias-3.png"
                  className="card-img-top"
                  alt="descripción alternativa"
                />
                <div className="card-body">
                  <div className="mb-2">
                    <span className="badge badge-info">Actividades</span>
                    <span className="badge badge-info">Cultura</span>
                  </div>
                  <h4 className="card-title">
                    El Museo Casa Carlos Gardel inauguró la muestra "La Fábrica
                    de Fileteado"
                  </h4>
                  <p className="card-text">
                    La exhibición que propone un recorrido visual que recupera
                    la expresión artística y popular del filete.
                  </p>
                </div>
                <div className="card-footer">
                  <small>Fecha de publicación: 02/12/2022</small>
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
                    <span className="badge badge-info">Emprendedores</span>
                  </div>
                  <h4 className="card-title">
                    ¡Sumate a la edición verano de Academia BA Emprende!
                  </h4>
                  <p className="card-text">
                    Comenzá el año haciendo crecer tu emprendimiento de manera
                    rápida y dinámica.
                  </p>
                </div>
                <div className="card-footer">
                  <small>Fecha de publicación: 10/01/2023</small>
                </div>
              </a>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}
