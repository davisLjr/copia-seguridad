import React from "react";
import { Layout } from "../../../components/Layout/layouts";

export default function FocoEnVideo() {
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
                      SALUD
                    </a>
                  </p>
                  <p className="mb-0">
                    <small>Lunes 14 de junio de 2021</small>
                  </p>
                  <h1 className="mb-3">
                    Video: la experiencia de los vecinos y vecinas en los
                    centros de vacunación
                  </h1>
                  <p className="lead">
                    Ya son muchas las personas que transmiten su emoción por
                    haber recibido las dosis contra el COVID-19 en las postas de
                    la Ciudad, las cuales están especialmente acondicionadas y
                    distribuidas de manera estratégica a lo largo del territorio
                    porteño.
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
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              width="885"
              height="498"
              src="https://www.youtube.com/embed/9BBDnfGk1O0"
              title="El testimonio de vecinos y vecinas que recibieron la vacuna contra el COVID-19"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="row mb-5">
            <div className="col-12 col-lg-8 mt-5">
              <p className="mb-4">
                “Mi nombre es Oscar, tengo 59 años,
                <strong>por eso me estoy vacunando.</strong> Estaba con el
                celular y dije: “Voy a probar”. La verdad es que el registro fue
                facilísimo”.
              </p>
              <p className="mb-4">
                Al igual que Oscar, ya son muchas las personas que
                <strong>transmiten su experiencia y expresan su emoción</strong>
                por haber recibido las vacunas en los Centros de Vacunación de
                la Ciudad, los cuales están especialmente acondicionados y
                distribuidos de maneran estratégica a lo largo del territorio
                porteño.
              </p>
              <p className="mb-4">
                “Llegué, me recibieron, me tomaron la temperatura, me registré.
                <strong>Ahora tengo aplicada la vacuna</strong>”, contó Jorge,
                de 52 años, mientras sonreía y sostenía su certificado de
                vacunación.
              </p>
              <div className="py-3">
                <blockquote>
                  <p>
                    Este es un apartado del texto que se quiere destacar por su
                    importancia dentro del contenido de la página.
                  </p>
                  <p className="text-xs">Nombre del autor de la cita</p>
                </blockquote>
              </div>
              <p className="mb-4">
                Para facilitar el traslado de los vecinos y vecinas, los Centros
                de Vacunación están ubicados en clubes, edificios de gobierno y
                centros culturales. Cuentan
                <strong>con un equipo de más de 2 mil personas</strong> y cada
                uno de esos puntos cumple con todas las medidas de bioseguridad
                correspondientes. Además, están equipados con sistemas de
                refrigeración adecuados para la correcta conservación de las
                vacunas.
              </p>
              <div className="gallery-grid gallery-max-5 my-5">
                <div className="gallery-grid-item">
                  <img
                    src="../assets/galeria/galeria-5.jpg"
                    alt="Texto alternativo de la imagen"
                  />
                </div>
                <div className="gallery-grid-item">
                  <img
                    src="../assets/galeria/galeria-6.jpg"
                    alt="Texto alternativo de la imagen"
                  />
                </div>
                <div className="gallery-grid-item">
                  <img
                    src="../assets/galeria/galeria-7.jpg"
                    alt="Texto alternativo de la imagen"
                  />
                </div>
                <div className="gallery-grid-item">
                  <img
                    src="../assets/galeria/galeria-8.jpg"
                    alt="Texto alternativo de la imagen"
                  />
                </div>
                <div className="gallery-grid-item" >
                  <img
                    src="../assets/galeria/galeria-9.jpg"
                    alt="Texto alternativo de la imagen"
                    height="50px"
                  />
                </div>
              </div>
              <p className="mb-4">
                El comentario entre los vecinos se reitera: alegría y
                tranquilidad por recibir las dosis. “Por nosotros,
                <strong>por nuestros seres queridos hay que vacunarse</strong>”,
                opinó Claudia de 53 mientras que Ricardo, de 56, le recomendó a
                los ciudadanos: “¡Que se anoten, que se vacunen porque es para
                el bien de todos!”.
              </p>
              <p className="mb-4">
                Desde el 29 de diciembre, 1.243.837 personas recibieron la
                primera dosis de la vacuna Sputnik-V, Sinopharm o AstraZeneca.
                Del total, 335.306 ya completaron la inmunización con el segundo
                componente. Así, en el territorio porteño ya se aplicaron
                1.579.143 vacunas.
              </p>
              <p className="mb-4">
                En tanto, la Ciudad puedan recibir la vacuna contra el COVID-19.
                En paralelo, se continúa con el último tramo de la 1° Etapa
                (personal de salud del sistema público, privado e
                independiente), de la 2° Etapa (mayores de 70 años y residentes
                de geriátricos), de la 3° Etapa (personas de 60 a 69 años), de
                la 4° Etapa (personal estratégico), de la 5° Etapa (personas con
                condiciones de riesgo) y de todos los vecinos mayores de 45
                años.
              </p>
              <img
                src="../assets/galeria/galeria-3.png"
                className="d-block w-100 rounded-lg mt-5 mb-1"
                alt="Texto alternativo de la imagen"
              />
              <p className="text-xs">Fotos GCBA</p>
            </div>

            <aside className="col-12 col-lg-4 mt-5">
              <div className="row">
                <div className="col-xs-12 col-md-12 col-lg-12">
                  <section>
                    <h3 className="mb-4">Noticias relacionadas</h3>
                    <a className="card card-horizontal" href="#">
                      <img
                        src="../assets/tarjetas/cultura.png"
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
                    <a className="card card-horizontal mt-4" href="#">
                      <img
                        src="../assets/tarjetas/cultura.png"
                        className="card-img-left"
                        alt="descripción alternativa"
                      />
                      <div className="card-body">
                        <h4 className="card-title">
                          14 de Junio: Día Internacional del Donante de Sangre.
                        </h4>
                        <p className="card-text">
                          "Doná sangre para que el mundo siga latiendo" es (…)
                        </p>
                      </div>
                    </a>
                  </section>
                </div>
              </div>
            </aside>
          </div>
          <hr />
          <h2 className="mb-4 mt-5">Noticias</h2>
          <div className="card-deck max-cards-3">
            <a className="card" href="#">
              <img
                src="../assets/tarjetas/noticia-1.png"
                className="card-img-top"
                alt="descripción alternativa"
              />
              <div className="card-body">
                <div className="mb-2">
                  <span className="badge badge-primary">EMPLEO</span>
                </div>
                <h4 className="card-title">
                  Llega la segunda edición de Expo Empleo Barrial
                </h4>
                <p className="card-text">
                  Más de 20 empresas participarán de la jornada de
                  intermediación laboral para vecinos y vecinas de la Ciudad
                </p>
              </div>
              <div className="card-footer">
                <small>Fecha de publicación: 22/04/2022</small>
              </div>
            </a>
            <a className="card d-none d-md-block" href="#">
              <img
                src="../assets/tarjetas/noticia-2.png"
                className="card-img-top"
                alt="descripción alternativa"
              />
              <div className="card-body">
                <div className="mb-2">
                  <span className="badge badge-secondary">EMPRENDIMIENTO</span>
                </div>
                <h4 className="card-title">IncuBAte 2022</h4>
                <p className="card-text">
                  Programa que impulsa el desarrollo de emprendimientos
                  innovadores de la Ciudad
                </p>
              </div>
              <div className="card-footer">
                <small>Fecha de publicación: 21/04/2022</small>
              </div>
            </a>
            <a className="card d-none d-lg-block" href="#">
              <img
                src="../assets/tarjetas/noticia-3.png"
                className="card-img-top"
                alt="descripción alternativa"
              />
              <div className="card-body">
                <div className="mb-2">
                  <span className="badge badge-primary">EMPLEO</span>
                </div>
                <h4 className="card-title">
                  Habilidades para la Empleabilidad
                </h4>
                <p className="card-text">
                  Comenzó la inscripción al ciclo de capacitaciones online y
                  gratuito, que te ayudará a desarrollar herramientas
                </p>
              </div>
              <div className="card-footer">
                <small>Fecha de publicación: 20/04/2022</small>
              </div>
            </a>
          </div>
        </div>
      </article>
    </Layout>
  );
}
