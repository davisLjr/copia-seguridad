import React from "react";
import { Layout } from "../../../components/Layout/layouts";

export default function Galeria() {
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
              <div className="col-12 col-lg-8">
                <div className="mt-2 pt-1">
                  <p>
                    <a href="#" className="badge badge-info">
                      Espacio público
                    </a>
                  </p>
                  <p className="mb-0">
                    <small>Jueves 17 de junio de 2022</small>
                  </p>
                  <h1 className="mb-3">
                    Sumate al programa Embajadores Verdes y promové el reciclado
                  </h1>
                  <p className="lead">
                    El Ministerio de Espacio Público e Higiene Urbana desarrolló
                    el programa de Embajadores Ciudad Verde. Se trata de una
                    propuesta vinculada con el Plan de Reciclaje de la Ciudad,
                    BA Recicla. Si querés promover el reciclado ¡Sumate!
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
                <strong>
                  Contribuyendo a alcanzar el objetivo de que el 80% de los
                  vecinos y las vecinas de la Ciudad separen sus residuos, el{" "}
                </strong>{" "}
                <a href="#" target="_blank" rel="noreferrer">
                  {" "}
                  Ministerio de Espacio Público e Higiene Urbana
                </a>{" "}
                <strong>
                  {" "}
                  desarrolló el programa de Embajadores Ciudad Verde.{" "}
                </strong>
                Este programa brinda a la ciudadanía un espacio para encontrarse
                y construir una visión compartida del esfuerzo que debe
                realizarse en conjunto para avanzar hacia una ciudad más
                sustentable.
                <strong> Si querés promover el reciclado. </strong>{" "}
                <a href="#" target="_blank" rel="noreferrer">
                  {" "}
                  ¡Sumate!
                </a>
              </p>

              <section className="embed-responsive embed-responsive-16by9 my-5">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/bPiMIeLG2CE"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </section>

              <blockquote>
                <p>
                  Forma parte del programa que nos invita a co-construir una
                  Ciudad cada vez más verde, promoviendo la participación
                  ciudadana y fortaleciendo el compromiso de todos los vecinos y
                  vecinas.
                </p>
                <small>Autor (no obligatorio)</small>
              </blockquote>

              <h2 className="mb-4 mt-5">¿Quiénes pueden sumarse a la red?</h2>

              <p className="mb-4">
                Todas aquellas personas interesadas en temáticas relacionadas a
                reciclado y economía circular. Si te entusiasma:{" "}
                <a href="#" target="_blank" rel="noreferrer">
                  ¡Sumate!
                </a>
              </p>

              <h3>¿Cuáles son los pasos a seguir para ser parte de la red?</h3>
              <ol>
                <li>
                  Completar el{" "}
                  <a href="#" target="_blank" rel="noreferrer">
                    formulario de inscripción.
                  </a>
                </li>
                <li>Recibir el email de bienvenida y agendar tu inducción.</li>
                <li>
                  Asistir a la charla introductoria donde te contaremos en
                  detalle qué podrás encontrar en la red. La charla es abierta a
                  la comunidad y está dirigida a todas las personas interesadas
                  en ser embajadoras. Este es el primer requisito para comenzar
                  a ser parte de la red.
                </li>
              </ol>

              <blockquote className="my-5">
                <p>
                  Nadie es demasiado pequeño para tener un impacto y cambiar el
                  mundo, así que haz todo lo que puedas.
                </p>
              </blockquote>

              <section className="embed-responsive embed-responsive-16by9 my-4">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/bPiMIeLG2CE"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </section>

              <section className="embed-responsive embed-responsive-16by9 my-4">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/bPiMIeLG2CE"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </section>

              <p className="mb-4">
                <strong>
                  Cabe señalar que el programa Embajadores Verdes es una
                  iniciativa vinculada con el Plan de Reciclaje de la Ciudad
                </strong>
                , BA Recicla, presentado recientemente. Dicho plan es el punto
                de partida hacia la circularidad ya que contempla dentro de sus
                objetivos duplicar la cantidad de residuos reciclables que se
                recolectan en la Ciudad y lograr que para el 2023 el 80% de los
                vecinos y vecinas separen la basura en sus casas. Para eso, se
                prevé optimizar el ordenamiento de la infraestructura de
                captación colocando un contenedor verde o campana a 150 metros
                de cada hogar y con el trabajo de los recuperadores urbanos en
                las zonas de mayor generación de reciclables. Además, el plan
                incluye nuevos programas y acciones para la promoción de la
                separación de residuos domiciliarios.
              </p>

              <section className="embed-responsive embed-responsive-16by9 my-4">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/bPiMIeLG2CE"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </section>

              <p className="mb-4">
                Por otro lado, la Ciudad cuenta con un Centro de Reciclaje que
                procesa un altísimo porcentaje de los residuos generados en la
                ciudad, entre áridos (escombros); plásticos PET, restos de poda,
                y residuos orgánicos. También cuenta con 16 Centros Verdes a
                donde llegan los materiales que juntan cada día los
                recuperadores urbanos y tres centros de compostaje de restos.
                Enterate de cómo hacemos una Ciudad más Verde en:{" "}
                <a href="#" target="_blank" rel="noreferrer">
                  www.ciudadverde.gob.ar
                </a>
              </p>

              <h2 className="mb-4 mt-5">Fotogalería</h2>
              <div className="mt-4 mb-2 pb-1">
                <div className="gallery-grid-container">
                  <div className="gallery-grid gallery-max-7">
                    <a
                      href="../assets/galeria/galeria-1.png"
                      className="gallery-grid-item"
                      data-toggle="modal"
                      data-target="#modalGallery"
                    >
                      <img
                        src="../assets/galeria/galeria-1.png"
                        alt="Texto alternativo de la imagen"
                      />
                    </a>
                    <a
                      href="../assets/galeria/galeria-2.png"
                      className="gallery-grid-item"
                      data-toggle="modal"
                      data-target="#modalGallery"
                    >
                      <img
                        src="../assets/galeria/galeria-2.png"
                        alt="Texto alternativo de la imagen"
                      />
                    </a>
                    <a
                      href="../assets/galeria/galeria-3.png"
                      className="gallery-grid-item"
                      data-toggle="modal"
                      data-target="#modalGallery"
                    >
                      <img
                        src="../assets/galeria/galeria-3.png"
                        alt="Texto alternativo de la imagen"
                      />
                    </a>
                    <a
                      href="../assets/galeria/galeria-3.png"
                      className="gallery-grid-item"
                      data-toggle="modal"
                      data-target="#modalGallery"
                    >
                      <img
                        src="../assets/galeria/galeria-3.png"
                        alt="Texto alternativo de la imagen"
                      />
                    </a>
                    <a
                      href="../assets/galeria/galeria-2.png"
                      className="gallery-grid-item"
                      data-toggle="modal"
                      data-target="#modalGallery"
                    >
                      <img
                        src="../assets/galeria/galeria-2.png"
                        alt="Texto alternativo de la imagen"
                      />
                    </a>
                    <a
                      href="../assets/galeria/galeria-3.png"
                      className="gallery-grid-item"
                      data-toggle="modal"
                      data-target="#modalGallery"
                    >
                      <img
                        src="../assets/galeria/galeria-3.png"
                        alt="Texto alternativo de la imagen"
                      />
                    </a>
                    <a
                      href="../assets/galeria/galeria-1.png"
                      className="gallery-grid-item"
                      data-toggle="modal"
                      data-target="#modalGallery"
                    >
                      <img
                        src="../assets/galeria/galeria-1.png"
                        alt="Texto alternativo de la imagen"
                      />
                    </a>
                  </div>
                  <div
                    className="modal modal-carousel"
                    data-backdrop="static"
                    tabIndex={1}
                    role="dialog"
                    id="modalGallery"
                  >
                    <div className="modal-dialog modal-lg" role="document">
                      <div className="modal-content">
                        <a
                          className="modal-carousel-close"
                          data-dismiss="modal"
                        >
                          Cerrar ventana
                        </a>
                        <div
                          id="modalGalleryControls"
                          className="carousel"
                          data-ride="carousel"
                          data-interval="false"
                        >
                          <div className="carousel-inner">
                            <div className="carousel-item active">
                              <img
                                src="../assets/galeria/galeria-1.png"
                                className="d-block w-100"
                                alt="Texto alternativo de la imagen"
                              />
                              <div className="carousel-caption">
                                <div className="row mb-4">
                                  <div className="col">
                                    <span className="text-xs">
                                      Autor de la imagen.
                                    </span>
                                  </div>
                                  <div className="col text-right">
                                    <span className="text-xs">Imagen 1/7</span>
                                  </div>
                                </div>
                                <h5 className="h2">Título de la imagen 1.</h5>
                                <p>
                                  Descripción o epígrafe de la imagen. Máximo de
                                  2 líneas.
                                  <br />
                                  Lorem impsum dolor sit amet, consetetir
                                  sadipscing elitr, sed diam nonumy eirmod
                                </p>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <img
                                src="../assets/galeria/galeria-2.png"
                                className="d-block w-100"
                                alt="Texto alternativo de la imagen"
                              />
                              <div className="carousel-caption">
                                <div className="row mb-4">
                                  <div className="col">
                                    <span className="text-xs">
                                      Autor de la imagen.
                                    </span>
                                  </div>
                                  <div className="col text-right">
                                    <span className="text-xs">Imagen 2/7</span>
                                  </div>
                                </div>
                                <h5 className="h2">Título de la imagen 2.</h5>
                                <p>
                                  Descripción o epígrafe de la imagen. Máximo de
                                  2 líneas.
                                  <br />
                                  Lorem impsum dolor sit amet, consetetir
                                  sadipscing elitr, sed diam nonumy eirmod
                                </p>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <img
                                src="../assets/galeria/galeria-3.png"
                                className="d-block w-100"
                                alt="Texto alternativo de la imagen"
                              />
                              <div className="carousel-caption">
                                <div className="row mb-4">
                                  <div className="col">
                                    <span className="text-xs">
                                      Autor de la imagen.
                                    </span>
                                  </div>
                                  <div className="col text-right">
                                    <span className="text-xs">Imagen 3/7</span>
                                  </div>
                                </div>
                                <h5 className="h2">Título de la imagen 3.</h5>
                                <p>
                                  Descripción o epígrafe de la imagen. Máximo de
                                  2 líneas.
                                  <br />
                                  Lorem impsum dolor sit amet, consetetir
                                  sadipscing elitr, sed diam nonumy eirmod
                                </p>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <img
                                src="../assets/galeria/galeria-1.png"
                                className="d-block w-100"
                                alt="Texto alternativo de la imagen"
                              />
                              <div className="carousel-caption">
                                <div className="row mb-4">
                                  <div className="col">
                                    <span className="text-xs">
                                      Autor de la imagen.
                                    </span>
                                  </div>
                                  <div className="col text-right">
                                    <span className="text-xs">Imagen 4/7</span>
                                  </div>
                                </div>
                                <h5 className="h2">Título de la imagen 1.</h5>
                                <p>
                                  Descripción o epígrafe de la imagen. Máximo de
                                  2 líneas.
                                  <br />
                                  Lorem impsum dolor sit amet, consetetir
                                  sadipscing elitr, sed diam nonumy eirmod
                                </p>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <img
                                src="../assets/galeria/galeria-2.png"
                                className="d-block w-100"
                                alt="Texto alternativo de la imagen"
                              />
                              <div className="carousel-caption">
                                <div className="row mb-4">
                                  <div className="col">
                                    <span className="text-xs">
                                      Autor de la imagen.
                                    </span>
                                  </div>
                                  <div className="col text-right">
                                    <span className="text-xs">Imagen 5/7</span>
                                  </div>
                                </div>
                                <h5 className="h2">Título de la imagen 2.</h5>
                                <p>
                                  Descripción o epígrafe de la imagen. Máximo de
                                  2 líneas.
                                  <br />
                                  Lorem impsum dolor sit amet, consetetir
                                  sadipscing elitr, sed diam nonumy eirmod
                                </p>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <img
                                src="../assets/galeria/galeria-3.png"
                                className="d-block w-100"
                                alt="Texto alternativo de la imagen"
                              />
                              <div className="carousel-caption">
                                <div className="row mb-4">
                                  <div className="col">
                                    <span className="text-xs">
                                      Autor de la imagen.
                                    </span>
                                  </div>
                                  <div className="col text-right">
                                    <span className="text-xs">Imagen 6/7</span>
                                  </div>
                                </div>
                                <h5 className="h2">Título de la imagen 3.</h5>
                                <p>
                                  Descripción o epígrafe de la imagen. Máximo de
                                  2 líneas.
                                  <br />
                                  Lorem impsum dolor sit amet, consetetir
                                  sadipscing elitr, sed diam nonumy eirmod
                                </p>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <img
                                src="../assets/galeria/galeria-3.png"
                                className="d-block w-100"
                                alt="Texto alternativo de la imagen"
                              />
                              <div className="carousel-caption">
                                <div className="row mb-4">
                                  <div className="col">
                                    <span className="text-xs">
                                      Autor de la imagen.
                                    </span>
                                  </div>
                                  <div className="col text-right">
                                    <span className="text-xs">Imagen 7/7</span>
                                  </div>
                                </div>
                                <h5 className="h2">Título de la imagen 3.</h5>
                                <p>
                                  Descripción o epígrafe de la imagen. Máximo de
                                  2 líneas.
                                  <br />
                                  Lorem impsum dolor sit amet, consetetir
                                  sadipscing elitr, sed diam nonumy eirmod
                                </p>
                              </div>
                            </div>
                          </div>
                          <button
                            className="carousel-control-prev"
                            type="button"
                            data-target="#modalGalleryControls"
                            data-slide="prev"
                          >
                            <span
                              className="carousel-control-prev-icon"
                              aria-hidden="true"
                            ></span>
                            <span className="sr-only">Anterior</span>
                          </button>
                          <button
                            className="carousel-control-next"
                            type="button"
                            data-target="#modalGalleryControls"
                            data-slide="next"
                          >
                            <span
                              className="carousel-control-next-icon"
                              aria-hidden="true"
                            ></span>
                            <span className="sr-only">Siguiente</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <aside className="col-12 col-lg-4 mt-5 mt-lg-0">
              <div className="row">
                <div className="col-xs-12 col-md-6 col-lg-12">
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
                            La Ciudad iluminará monumentos durante el verano
                          </h4>
                          <p className="card-text">
                            Serán los primeros de una serie de iluminaciones que
                            se realizarán durante el año.
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
                            Más de 32.500 estudiantes asisten a la Escuela de
                            Verano
                          </h4>
                          <p className="card-text">
                            Con un récord de inscriptos, alumnos de todos los
                            niveles participan de una propuesta.
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
                    <span className="badge badge-info">Comuna 7</span>
                    <span className="badge badge-info">Gestión Comunal</span>
                  </div>
                  <h4 className="card-title">
                    Nuevo patio de juegos, cancha y espacios de encuentro en
                    Plaza Padre Rodolfo Ricciardelli
                  </h4>
                  <p className="card-text">
                    Está ubicada en Avenida Perito Moreno y Erezcano, Flores.
                  </p>
                </div>
                <div className="card-footer">
                  <small>Fecha de publicación: 14/01/2023</small>
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
                    <span className="badge badge-info">Usina del Arte</span>
                  </div>
                  <h4 className="card-title">
                    Cuatro shows infantiles en vivo para disfrutar el fin de
                    semana en la Usina
                  </h4>
                  <p className="card-text">
                    Las mejores propuestas para que el verano de las infancias
                    sea el más entretenido.
                  </p>
                </div>
                <div className="card-footer">
                  <small>Fecha de publicación: 13/01/2023</small>
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
                    <span className="badge badge-info">Museos</span>
                    <span className="badge badge-info">Museo Sívori</span>
                  </div>
                  <h4 className="card-title">
                    Verano en el Museo Sívori, con propuestas para todas las
                    edades
                  </h4>
                  <p className="card-text">
                    Hasta el 19 de febrero te invitamos a disfrutar de una
                    programación imperdible.
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
