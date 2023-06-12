import React from "react";
import { Layout } from "../../../../components/Layout/layouts";

export default function SimpleOp3() {
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
                  <a href="#">Desarrollo económico y producción</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Inversores</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Propuestas de inversión</a>
                </li>
              </ol>
            </nav>

            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="mt-2 pt-1">
                  <h1 className="mb-3">Distrito tecnológico</h1>
                  <p className="lead">
                    El centro de promoción y desarrollo de tecnología,
                    innovación y conocimiento de la Ciudad.
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
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-12 col-lg-8">
              <h2 className="mb-4">¿Qué es el Distrito Tecnológico?</h2>
              <p className="mb-4">
                Fue creado en diciembre de 2008 a través de la ley 2972. Es un
                centro de promoción, desarrollo, innovación y conocimiento que
                alberga empresas de tecnologías de la información y comunicación
                (“TIC”) y a sus profesionales generando un clúster con alto
                valor agregado.
              </p>
              <div className="mt-5">
                <h2 className="mb-4">Su historia</h2>
                <p className="mb-4">
                  Durante los últimos años, en distintas ciudades de los cinco
                  continentes han surgido proyectos urbanos que prevén la
                  radicación de empresas dedicadas a producir valor en el campo
                  de las nuevas tecnologías de la información y comunicación
                  (TICs). Se trata de iniciativas en las que intervienen el
                  ámbito privado, gobiernos, instituciones educativas y
                  organizaciones no gubernamentales (ONGs), y que tienen como
                  principales objetivos el desarrollo económico bajo el nuevo
                  paradigma de la sociedad de la información, la inclusión
                  social de ciertos sectores de la población y la revitalización
                  urbana.
                </p>
                <p className="mb-4">
                  A su vez, estos nodos de innovación son diseñados con una
                  orientación estratégica que potencian la identidad social y el
                  sentido de pertenencia. Junto con sistemas desarrollados de
                  transporte e infraestructura, estas iniciativas se proponen
                  configurar nuevos escenarios de integración, competencia y
                  cooperación.
                </p>
              </div>

              <div className="gallery-grid gallery-max-5 mt-5">
                <div className="gallery-grid-item">
                  <img
                    src="../../assets/pagina-simple/distrito-1.png"
                    alt="Texto alternativo de la imagen"
                  />
                </div>
                <div className="gallery-grid-item">
                  <img
                    src="../../assets/pagina-simple/distrito-3.png"
                    alt="Texto alternativo de la imagen"
                  />
                </div>
                <div className="gallery-grid-item">
                  <img
                    src="../../assets/pagina-simple/distrito-4.png"
                    alt="Texto alternativo de la imagen"
                  />
                </div>
                <div className="gallery-grid-item">
                  <img
                    src="../../assets/pagina-simple/distrito-5.png"
                    alt="Texto alternativo de la imagen"
                  />
                </div>
                <div className="gallery-grid-item">
                  <img
                    src="../../assets/pagina-simple/distrito-2.png"
                    alt="Texto alternativo de la imagen"
                  />
                </div>
              </div>
              <div className="mt-5">
                <h2 className="mb-4">
                  ¿Dónde está ubicado y cuánto ocupa el Distrito Tecnológico?
                </h2>
                <p className="mb-4">
                  El Distrito Tecnológico se ubica estratégicamente en la Zona
                  Sur de la Ciudad de Buenos Aires, en los barrios de Parque
                  Patricios y Nueva Pompeya, en línea con la estrategia del GCBA
                  que trabaja en la revitalización y desarrollo de esa zona de
                  la Ciudad. Abarca 328 hectáreas que se extienden hasta los
                  barrios de Boedo, al norte, y Nueva Pompeya, al sur. El
                  perímetro está marcado por: Avenidas Sáenz, Boedo, Chiclana,
                  Sánchez de Loria y Brasil, las calles Alberti y Manuel García
                  y la Avenida Amancio Alcorta, en ambas aceras.
                </p>
              </div>

              <div className="mt-5">
                <h2 className="mb-4">Mapa del Distrito Tecnológico</h2>
                <iframe
                  src="//epok.buenosaires.gob.ar/pub/mapa/distritos_economicos/distrito_tecnologico/"
                  name="Mapa del Distrito Tecnológico del GCBA"
                  width="100%"
                  height="500"
                  scrolling="no"
                  frameBorder="0"
                  className="rounded-lg"
                ></iframe>
              </div>

              <div className="mt-5 pb-3">
                <h2 className="mb-4">Centros de atención</h2>
                <ul className="mb-2">
                  <li className="mb-1">Cercana al microcentro de la Ciudad.</li>
                  <li className="mb-1">
                    Grandes posibilidades de construcción.
                  </li>
                  <li className="mb-1">Excelente acceso.</li>
                  <li className="mb-1">
                    Confluencia de numerosas líneas de colectivos (Metrobus
                    Sur), la Línea H de subterráneos y ferrocarriles.
                  </li>
                  <li className="mb-1">Accesos mediante bicisendas.</li>
                </ul>
                <p className="mb-0">
                  Para acceder a este producto deberás haber cumplimentado el
                  Censo Nacional Económico.
                </p>
              </div>

              <div className="mt-5 pt-1">
                <h2>Beneficios</h2>
                <div className="accordion-wrapper">
                  <div className="accordion" id="accordionExample">
                    <div className="card">
                      <button
                        className="card-header collapsed card-link"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                      >
                        Programa Beneficiatech
                      </button>
                      <div
                        id="collapseOne"
                        className="collapse"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          Transformando el Distrito.
                          <br />
                          En el Distrito Tecnológico, dentro del Plan de
                          mejoramiento del espacio público, se han invertido más
                          de 15 millones de pesos, obras que incluyeron más de
                          10 mil metros cuadrados de veredas, regularización de
                          440 puestos en la feria de artesanos, 3 patios de
                          juegos nuevos, 1 cancha multipropósito para realizar
                          deportes, más de 100 luminarias nuevas, 190 bancos de
                          plaza, más de 150 nuevos cestos de basura y plantación
                          y poda de 8 mil arbustos, entre otros.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <button
                        className="card-header collapsed card-link"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                      >
                        Empresas radicadas en el Distrito
                      </button>
                      <div
                        id="collapseTwo"
                        className="collapse"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer congue magna mauris. Vestibulum justo
                          nulla, pulvinar vitae odio laoreet, aliquam laoreet
                          orci. Sed molestie mauris eget tempus bibendum.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <button
                        className="card-header collapsed card-link"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                      >
                        Beneficiarios
                      </button>
                      <div
                        id="collapseThree"
                        className="collapse"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer congue magna mauris. Vestibulum justo
                          nulla, pulvinar vitae odio laoreet, aliquam laoreet
                          orci. Sed molestie mauris eget tempus bibendum.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <button
                        className="card-header collapsed card-link"
                        data-toggle="collapse"
                        data-target="#collapseFour"
                      >
                        Mejoras en el barrio
                      </button>
                      <div
                        id="collapseFour"
                        className="collapse"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer congue magna mauris. Vestibulum justo
                          nulla, pulvinar vitae odio laoreet, aliquam laoreet
                          orci. Sed molestie mauris eget tempus bibendum.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <button
                        className="card-header collapsed card-link"
                        data-toggle="collapse"
                        data-target="#collapseFive"
                      >
                        Centro Cívico
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
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <button
                        className="card-header collapsed card-link"
                        data-toggle="collapse"
                        data-target="#collapseSix"
                      >
                        Becas de estudio en el Distrito
                      </button>
                      <div
                        id="collapseSix"
                        className="collapse"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer congue magna mauris. Vestibulum justo
                          nulla, pulvinar vitae odio laoreet, aliquam laoreet
                          orci. Sed molestie mauris eget tempus bibendum.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <h2>Contacto</h2>
                <div className="mb-4">
                  <p className="mb-0">
                    Mail:
                    <a
                      href="mailto:distritotecnologico@buenosaires.gob.ar"
                      target="_blank"
                      rel="noreferrer"
                    >
                      distritotecnologico@buenosaires.gob.ar
                    </a>
                  </p>
                  <p className="mb-0">
                    Tel:
                    <a
                      href="tel:(54 11) 5030-9100"
                      target="_blank"
                      rel="noreferrer"
                    >
                      (54 11) 5030-9100
                    </a>
                  </p>
                  <p className="mb-0">
                    Dirección:
                    <a
                      href="https://mapa.buenosaires.gob.ar/buscador/?lat=-34.628908&lng=-58.369939&zl=15&modo=transporte&dir=Garcia%2C+Martin+Av.+346"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Avenida Martín García 346
                    </a>
                  </p>
                </div>
                <p className="mb-4">
                  También podés recibir asesoramiento en forma virtual. Boti
                  está disponible las 24 horas de los 365 días del año, tanto en
                  los sitios web del Gobierno de la Ciudad como a través de
                  WhatsApp (+54911) 5050-0147.
                </p>
              </div>

              <div className="mt-5 pt-2">
                <div className="card card-simple panel-list-link">
                  <div className="card-body">
                    <h3 className="card-title">Material descargable</h3>
                  </div>
                  <div className="list-link">
                    <h4 className="list-link-item-title">Beneficios</h4>
                    <a
                      className="download card-link"
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Resolución Beneficiatech
                    </a>
                    <a
                      className="download card-link"
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Anexo - Términos y condiciones
                    </a>
                    <h4 className="list-link-item-title">Leyes</h4>
                    <a
                      className="download card-link"
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ley 6392 Distrito Tecnológico
                    </a>
                    <a
                      className="download card-link"
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Mapa de empresas radicadas
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 mx-auto">
              <div className="card bg-light mb-5 mb-lg-0">
                <div className="card-body">
                  <h4 className="card-title mb-3">
                    Inscripción al Registro del Distrito Tecnológico
                  </h4>
                  <a
                    className="btn btn-primary btn-block"
                    href="#"
                    target="_blank"
                  >
                    Conocé el trámite
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
