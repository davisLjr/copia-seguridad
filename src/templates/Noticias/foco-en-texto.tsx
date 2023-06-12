import React from "react";
import { Layout } from "../../../components/Layout/layouts";

export default function FocoEnTexto() {
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
                  <p>
                    <a href="#" className="badge badge-info">
                      ESPACIO PÚBLICO
                    </a>
                  </p>
                  <p className="mb-0">
                    <small>Miércoles 16 de junio de 2021</small>
                  </p>
                  <h1 className="mb-3">
                    Alivio fiscal para gastronómicos y sanatorios: accedé a los
                    beneficios
                  </h1>
                  <p className="lead">
                    La exención del pago de Ingresos Brutos alcanza a clínicas y
                    sanatorios que brinden servicios de internación y a
                    comercios dedicados a la venta de comidas y bebidas. Conocé
                    los detalles y cómo solicitarla.
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
                Ya es posible gestionar la eximición del pago del impuesto sobre
                los Ingresos Brutos que{" "}
                <a href="#">la Legislatura porteña aprobó</a> en beneficio de
                los <strong>comercios del rubro gastronómico</strong> y las{" "}
                <strong>
                  instituciones de la salud privada que brinden servicios de
                  internación
                </strong>{" "}
                con el objetivo de aliviar la situación crítica de ambos
                sectores en el contexto de la pandemia de COVID-19.
              </p>
              <div className="mb-5">
                <img
                  src="../assets/noticias/noticias-2.png"
                  className="d-block w-100 rounded-lg mb-1"
                  alt=""
                />
                <p className="text-xs">Foto de prensa GCBA</p>
              </div>

              <h2 className="mb-4">
                Exención de IIBB para el sector gastronómico:
              </h2>
              <p className="mb-4">
                Aplica para los meses de{" "}
                <strong>mayo, junio y julio del 2021</strong> y abarca los
                siguientes rubros:
              </p>
              <ul className="mb-4">
                <li>Servicios de restaurantes y cantinas sin espectáculo.</li>
                <li>Servicios de restaurantes y cantinas con espectáculo.</li>
                <li>
                  Servicios de "fast food" y locales de venta de comidas y
                  bebidas al paso.
                </li>
                <li>Servicio de expendio de bebidas en bares.</li>
                <li>
                  Servicio de expendio de comidas y bebidas en establecimientos
                  con servicio de mesa y/o en mostrador.
                </li>
                <li>
                  Servicio de expendio de helados. Los contribuyentes y/o
                  responsables inscriptos en las categorías Locales o Convenio
                  Multilateral que realicen las actividades alcanzadas deberán
                  presentar sus respectivas declaraciones juradas consignando la
                  base imponible correspondiente como exenta. Para todos los
                  contribuyentes, el domicilio de explotación deberá estar
                  inscrito en el{" "}
                  <a href="#">Registro de Domicilios de Explotación</a> (RDE).
                </li>
              </ul>
              <p className="mb-4">
                Asimismo, cada contribuyente debe completar el aplicativo
                “Exención Ley Nº 6.418”, disponible en la página web de la
                Administración Gubernamental de Ingresos Públicos (
                <a href="#">AGIP</a>), accediendo con Clave Ciudad Nivel 2, y
                detallar la siguiente información:
              </p>
              <ul className="mb-4">
                <li>
                  Número de partida inmobiliaria del inmueble afectado a la
                  actividad desarrollada.
                </li>
                <li>Carácter de la ocupación del inmueble.</li>
                <li>
                  Nombre y apellido o razón social del titular de dominio.
                </li>
                <li>CUIT del titular.</li>
                <li>Alquiler pactado contractualmente del mes en curso.</li>
              </ul>
              <p className="mb-4">
                La declaración total de los requisitos informados será condición
                necesaria para proceder a la exclusión temporal de retenciones.
              </p>
              <h3>
                Exención de IIBB para las instituciones de la salud privada:
              </h3>
              <p className="mb-4">
                Aplica para las cuotas correspondientes a los meses de{" "}
                <strong>mayo y junio de 2021</strong> y corre para aquellos
                establecimientos que ofrezcan servicios de internación a
                pacientes con COVID-19, y únicamente respecto de los ingresos
                provenientes de esta actividad. En este sentido, aquellos
                contribuyentes que presten otros servicios de internación en sus
                establecimientos deberán detallar las actividades por separado.
              </p>
              <p className="mb-4">
                Para el reconocimiento de este beneficio fiscal, los
                contribuyentes que realicen las actividades alcanzadas deberán
                tener en cuenta que:
              </p>
              <ul className="mb-4">
                <li>
                  Deben presentar su respectivas declaraciones juradas
                  detallando la base imponible correspondiente como exenta.
                </li>
                <li>
                  Es obligatoria la previa inscripción del domicilio de
                  explotación en el{" "}
                  <a href="#">Registro de Domicilios de Explotación</a> (RDE).
                </li>
                <li>
                  Los responsables del Impuesto serán excluidos temporalmente de
                  los padrones de retenciones y/o percepciones durante la
                  vigencia del beneficio.
                </li>
                <li>
                  En el supuesto de que desarrollen múltiples actividades, la
                  exclusión de los regímenes de recaudación será proporcional a
                  la magnitud de los ingresos de la actividad contemplada en el
                  beneficio liberatorio.
                </li>
                <li>
                  Los ingresos alcanzados por la exención deben ser determinados
                  en las Declaraciones Juradas de los meses de mayo y junio de
                  2021, consignándolos bajo el mismo código de actividad del
                  Nomenclador de Actividades Económicas del Sistema Federal de
                  Recaudación (NAES) utilizado por los contribuyentes y/o
                  responsables del tributo habitualmente.
                </li>
              </ul>
              <h3>Nuevo crédito del Banco Ciudad para gastronómicos</h3>
              <p className="mb-4">
                El Banco Ciudad lanzó una nueva línea crediticia para los
                comercios porteños del rubro gastronómico, en una iniciativa
                conjunta con el Gobierno de la Ciudad, para ampliar la
                asistencia al sector a través de un mayor acceso al
                financiamiento, en el marco de las restricciones a la actividad
                a causa de la emergencia sanitaria.
              </p>
              <p className="mb-4">
                Las micro, pequeñas y medianas empresas (MiPyMEs) dedicadas al
                comercio gastronómico -restaurantes, locales de comidas y
                bebidas al paso, de comida rápida y heladerías, entre otros- ya
                pueden solicitar este crédito a tasa fija subsidiada (desde 23%
                TNA), con destino para capital de trabajo, por un monto máximo
                de $700.000 y con un plazo de financiación de hasta 24 meses.
              </p>
              <p className="mb-4">
                Para más información, ingresá a este <a href="#">link.</a>
              </p>
            </div>

            <aside className="col-12 col-lg-4 mt-5 mt-lg-0">
              <div className="row">
                <div className="col-xs-12 col-md-6 col-lg-12">
                  <section className="mb-4">
                    <div className="bg-light shadow-sm rounded-lg px-4 pt-4 pb-3">
                      <div className="card card-simple panel-list-link">
                        <div className="card-body">
                          <h3 className="card-title">Marco normativo</h3>
                        </div>
                        <div className="list-link">
                          <a
                            className="download card-link"
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Anexo I
                          </a>
                          <a
                            className="download card-link"
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Anexo II
                          </a>
                          <a
                            className="download card-link"
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Anexo III
                          </a>
                          <a
                            className="download card-link"
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Informe
                          </a>
                          <a
                            className="download card-link"
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Resolución N°125
                          </a>
                          <a
                            className="download"
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Implentación
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="col-xs-12 col-md-6 col-lg-12">
                  <section className="py-4 mb-5">
                    <h3 className="mb-4">Noticias relacionadas</h3>
                    <div className="card-deck max-cards-1">
                      <a className="card card-horizontal" href="#">
                        <img
                          src="../assets/eventos/cultura.png"
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
                          src="../assets/eventos/cultura.png"
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
        </div>
        <div className="container">
          <hr />
        </div>
      </article>
      <section className="container pb-4 mb-5">
        <h2 className="mb-4">Noticias</h2>
        <div className="card-deck max-cards-3">
          <a className="card" href="#">
            <img
              src="../assets/eventos/event-card.png"
              className="card-img-top"
              alt="descripción alternativa"
            />
            <div className="card-body">
              <div className="mb-2">
                <span className="badge badge-info">Etiqueta 1</span>
                <span className="badge badge-info">Etiqueta 2</span>
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
              src="../assets/noticias/noticias.png"
              className="card-img-top"
              alt="descripción alternativa"
            />
            <div className="card-body">
              <div className="mb-2">
                <span className="badge badge-info">Etiqueta 1</span>
                <span className="badge badge-info">Etiqueta 2</span>
              </div>
              <h4 className="card-title">IncuBAte 2022</h4>
              <p className="card-text">
                Recomendamos en este espacio no utilizar más de 3 líneas, para
                generar una lectura óptima.
              </p>
            </div>
            <div className="card-footer">
              <small>Fecha de publicación: 21/04/2022</small>
            </div>
          </a>
          <a className="card d-none d-lg-block" href="#">
            <img
              src="../assets/noticias/obelisco-buenos-aires2.png"
              className="card-img-top"
              alt="descripción alternativa"
            />
            <div className="card-body">
              <div className="mb-2">
                <span className="badge badge-info">Etiqueta 1</span>
                <span className="badge badge-info">Etiqueta 2</span>
              </div>
              <h4 className="card-title">Habilidades para la Empleabilidad</h4>
              <p className="card-text">
                Recomendamos en este espacio no utilizar más de 3 líneas, para
                generar una lectura óptima.
              </p>
            </div>
            <div className="card-footer">
              <small>Fecha de publicación: 20/04/2022</small>
            </div>
          </a>
        </div>
      </section>
    </Layout>
  );
}
