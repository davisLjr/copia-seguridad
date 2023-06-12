import React from "react";
import { Layout } from "../../../../components/Layout/layouts";

export default function SimpleOp5() {
  return (
    <Layout>
      <article className="pb-5 mb-4">
        <header className="pt-3 pb-5">
          <div className="container pt-1">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Buenos Aires</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Página Anterior</a>
                </li>
              </ol>
            </nav>

            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="mt-3">
                  <h1 className="mb-3">Preguntas frecuentes</h1>
                  <p className="lead">
                    Encontrá aquí las respuestas a las consultas más comunes que
                    tiene la población migrante sobre las elecciones de la
                    Ciudad.
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
              <hr className="mt-0 mb-5" />
              <section>
                <h2 className="mb-4">Generales</h2>
                <div id="accordion">
                  <div className="accordion-wrapper">
                    <div className="accordion" id="accordionExample">
                      <div className="card">
                        <button
                          className="card-header collapsed card-link"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                        >
                          ¿Hay diferencia en los términos migrante
                          (internacional) y extranjero/a?
                        </button>
                        <div
                          id="collapseOne"
                          className="collapse"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            Los dos términos refieren a personas que se
                            trasladaron desde su país de origen a otro. El
                            término migrante tiene un carácter más inclusivo en
                            el lenguaje cotidiano al aglutinar todas las formas
                            de movimiento de personas. El término extranjero, si
                            bien suele utilizarse de forma extendida, en ciertos
                            contextos se lo hace con una connotación negativa en
                            un sentido de alteridad. A continuación,
                            definiciones de términos de la Organización Mundial
                            para las Migraciones (OIM):
                            <ul className="mb-0">
                              <li>
                                <strong>Migrante:</strong> designa a toda
                                persona que se traslada fuera de su lugar de
                                residencia habitual, ya sea dentro de un país o
                                a través de una frontera internacional, de
                                manera temporal o permanente, y por diversas
                                razones.
                              </li>
                              <li>
                                <strong>Extranjero/a:</strong>Persona que no es
                                nacional de un Estado determinado en cuyo
                                territorio se encuentra.
                              </li>
                              <small>
                                Fuente:{" "}
                                <a
                                  className=""
                                  href="#"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  www.iom.int
                                </a>
                              </small>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <button
                          className="card-header collapsed card-link"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                        >
                          ¿Cuántas personas migrantes vivimos en la Ciudad
                          Autónoma de Buenos Aires?
                        </button>
                        <div
                          id="collapseTwo"
                          className="collapse"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            La Encuesta Anual de Hogares (2021) de la Dirección
                            General de Estadísticas y Censos del Gobierno de la
                            Ciudad, estimó que el 12,2% del total de habitantes
                            del distrito son migrantes.
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <button
                          className="card-header collapsed card-link"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                        >
                          ¿Qué significa que la Ciudad de Buenos Aires es
                          autónoma?
                        </button>
                        <div
                          id="collapseThree"
                          className="collapse"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            Esto significa que tiene su propia Constitución y
                            dicta sus propias leyes. En este sentido, la
                            autonomía de la Ciudad consiste en:
                            <ul className="mb-0">
                              <li>Elegir autoridades locales.</li>
                              <li>Sancionar nuestras leyes.</li>
                              <li>Contar con un sistema de justicia propio.</li>
                              <li>
                                Administrar los hospitales, las escuelas, el
                                transporte público, la policía de la Ciudad, la
                                recolección de residuos, etc.
                              </li>
                              <small>
                                Fuente:{" "}
                                <a
                                  className=""
                                  href="#"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  www.buenosaires.gob.ar/gobierno/autonomia
                                </a>
                              </small>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <button
                          className="card-header collapsed card-link"
                          data-toggle="collapse"
                          data-target="#collapseFour"
                        >
                          ¿Las personas migrantes podemos votar en la Ciudad de
                          Buenos Aires?
                        </button>
                        <div
                          id="collapseFour"
                          className="collapse"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            <strong>Sí</strong>, las personas migrantes que
                            cumplen los requisitos establecidos en el Código
                            Electoral de la Ciudad pueden votar cargos locales
                            en la Ciudad de Buenos Aires.
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <button
                          className="card-header collapsed card-link"
                          data-toggle="collapse"
                          data-target="#collapseFive"
                        >
                          ¿Qué cargos podemos votar las personas migrantes?
                        </button>
                        <div
                          id="collapseFive"
                          className="collapse"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            Las personas migrantes podemos votar los cargos
                            locales de la Ciudad de Buenos Aires:
                            <ul className="mb-0">
                              <li>Jefe/a de Gobierno</li>
                              <li>Legisladores/as</li>
                              <li>Miembros de la Junta Comunal</li>
                              <small>
                                Fuente:{" "}
                                <a
                                  className=""
                                  href="#"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Constitución de la Ciudad Autónoma de Buenos
                                  Aires
                                </a>{" "}
                                Art. 62
                              </small>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="mb-4 mt-5">Día de la elección</h2>
                <div className="accordion-wrapper">
                  <div className="accordion" id="accordionExample">
                    <div className="card">
                      <button
                        className="card-header collapsed card-link"
                        data-toggle="collapse"
                        data-target="#collapseSix"
                      >
                        ¿Cómo denunciar anomalías en el proceso electoral?
                      </button>
                      <div
                        id="collapseSix"
                        className="collapse"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          Deben dirigirse al <em>delegado electoral</em>{" "}
                          presente en cada establecimiento de votación o ponerse
                          en contacto con la <strong>Justicia Electoral</strong>
                          .
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <button
                        className="card-header collapsed card-link"
                        data-toggle="collapse"
                        data-target="#collapseSeven"
                      >
                        ¿En qué horario se vota?
                      </button>
                      <div
                        id="collapseSeven"
                        className="collapse"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          Los comicios comienzan a las 8:00 y cierran a las
                          18:00 horas. A esa hora se clausura el acceso, pero si
                          hubiera electores o electoras en la fila de la mesa
                          esperando para emitir el sufragio el presidente de
                          mesa debe continuar recibiendo los votos hasta que
                          todas las personas presentes en la fila hayan votado.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
