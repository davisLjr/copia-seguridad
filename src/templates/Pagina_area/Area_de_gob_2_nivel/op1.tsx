import React from "react";
import { Layout } from "../../../../components/Layout/layouts";

export default function AreaGob2Op1() {
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
                  <a href="#">Empresas</a>
                </li>
              </ol>
            </nav>
            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="mt-2 pt-1">
                  <h1 className="mb-3">Título área</h1>
                  <p className="lead">
                    Conocé toda la información y contá con asesoramiento para
                    las distintas etapas de tu empresa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container pt-2 pb-5 mb-2">
          <div className="mb-1">
            <div className="card-deck max-cards-3 mt-1">
              <a className="card" href="#">
                <div className="card-body">
                  <h4 className="card-title">Asesoramiento y conexión</h4>
                  <p className="card-text">
                    Conocé cómo mejorar la productividad y competitividad de tu
                    empresa
                  </p>
                </div>
              </a>
              <a className="card" href="#">
                <div className="card-body">
                  <h4 className="card-title">Beneficios</h4>
                  <p className="card-text">
                    Descubrí los beneficios para ciertas actividades y cómo
                    acceder a ellos.
                  </p>
                </div>
              </a>
              <a className="card" href="#">
                <div className="card-body">
                  <h4 className="card-title">Normativas</h4>
                  <p className="card-text">
                    Infórmate sobre las normativas y leyes para impulsar tu
                    empresa
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-light pt-5 pb-5">
          <div className="container my-2 py-1">
            <h2 className="mb-4">Agenda Empresarial</h2>
            <p className="lead">
              Conocé toda la actividad relacionada al mundo de las empresas e
              industrias
            </p>
            <div className="card-deck max-cards-3 mb-4">
              <a className="card" href="#">
                <div className="card-event-top">
                  <img
                    src="../../assets/tarjetas/agenda-1-bg.png"
                    className="card-event-bg"
                    alt="descripción alternativa"
                  />
                  <div className="card-event-img">
                    <img
                      src="../../assets/tarjetas/agenda-1-thumb.png"
                      alt="descripción alternativa"
                    />
                  </div>
                  <p className="card-event-name">
                    Actividades y clases en polideportivos
                  </p>
                </div>
                <div className="card-body">
                  <p className="card-headline">18 de Enero al 1 de Febrero</p>
                  <h4 className="card-title">
                    Comienza una nueva edición de actividades en polideportivos
                  </h4>
                </div>
              </a>
              <a className="card" href="#">
                <div className="card-event-top">
                  <img
                    src="../../assets/tarjetas/agenda-2-bg.png"
                    className="card-event-bg"
                    alt="descripción alternativa"
                  />
                  <div className="card-event-img">
                    <img
                      src="../../assets/tarjetas/agenda-2-thumb.png"
                      alt="descripción alternativa"
                    />
                  </div>
                  <p className="card-event-name">
                    Actividades y clases en polideportivos
                  </p>
                </div>
                <div className="card-body">
                  <p className="card-headline">18 de Enero al 1 de Febrero</p>
                  <h4 className="card-title">
                    Comienza una nueva edición de actividades en polideportivos
                  </h4>
                </div>
              </a>
              <a className="card" href="#">
                <div className="card-event-top">
                  <img
                    src="../../assets/tarjetas/agenda-3-bg.png"
                    className="card-event-bg"
                    alt="descripción alternativa"
                  />
                  <div className="card-event-img">
                    <img
                      src="../../assets/tarjetas/agenda-3-thumb.png"
                      alt="descripción alternativa"
                    />
                  </div>
                  <p className="card-event-name">
                    Actividades y clases en polideportivos
                  </p>
                </div>
                <div className="card-body">
                  <p className="card-headline">18 de Enero al 1 de Febrero</p>
                  <h4 className="card-title">
                    Comienza una nueva edición de actividades en polideportivos
                  </h4>
                </div>
              </a>
            </div>
            <div className="pt-1">
              <a className="access" href="#" target="_blank" rel="noreferrer">
                Ver todos los eventos
              </a>
            </div>
          </div>
        </div>

        <div className="container pt-5">
          <h2 className="mb-4">Noticias</h2>
          <div className="card-deck max-cards-3 mb-4">
            <a className="card" href="#">
              <img
                src="../../assets/tarjetas/noticia-1.png"
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
                src="../../assets/tarjetas/noticia-2.png"
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
                src="../../assets/tarjetas/noticia-3.png"
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
          <div className="pt-1">
            <a className="access" href="#" target="_blank" rel="noreferrer">
              Ver todas las noticias
            </a>
          </div>
        </div>
      </article>
    </Layout>
  );
}
