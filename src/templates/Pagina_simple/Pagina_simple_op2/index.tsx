import React from "react";
import { Layout } from "../../../../components/Layout/layouts";

export default function SimpleOp2() {
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
                  <a href="#">Empleados</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Asesoramiento</a>
                </li>
              </ol>
            </nav>
            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="mt-2 pt-1">
                  <h1 className="mb-3">Asesoramiento en temas de salud</h1>
                  <p className="lead">
                    Apoyo médico para contribuir a dirimir las discrepancias
                    médicas, que involucren la salud del trabajador o
                    trabajadora
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
              <div>
                <h2 className="mb-4">Junta Médica Laboral</h2>
                <p className="mb-4">
                  La Subsecretaría de Trabajo, Industria y Comercio, a través de
                  la Dirección General Trabajo Decente y Relaciones Laborales,
                  implementó el servicio de “Junta Médica laboral”. Una
                  iniciativa que tiene como objetivo ofrecer de forma gratuita,
                  apoyo médico para contribuir a dirimir las discrepancias
                  médicas que involucren la salud del trabajador o trabajadora.
                </p>
                <p className="mb-4">
                  Se trata de un equipo conformado por médicos de distintas
                  especialidades (Medicina del Trabajo, Traumatología y
                  Psiquiatría), que se encuentra facultado para asesorar e
                  intervenir en aquellos casos en los que se plantean
                  disidencias respecto a enfermedades y accidentes inculpables,
                  en el marco de la Ley de Contrato de Trabajo (Nº 20.744)
                </p>
                <p className="mb-4">
                  Este procedimiento está dirigido exclusivamente a
                  trabajadores/as y empleadores/as del ámbito privado de la
                  Ciudad, y su intervención se encuentra sujeta a la solicitud
                  del interesado: trabajadores/as, empleadores/as o
                  apoderados/as con poder especial.
                </p>
              </div>
              <div className="mt-5 pb-2">
                <img
                  src="../../assets/pagina-simple/asesoramiento-1.png"
                  className="d-block w-100 rounded-lg"
                  alt="Texto alternativo de la imagen"
                />
              </div>

              <div className="mt-5 pt-1">
                <h2>Requisitos</h2>
                <ul>
                  <li className="mb-2">
                    Presentar DNI al momento del asesoramiento.
                  </li>
                  <li className="mb-2">
                    Acompañar documentación laboral, en el caso de contar con
                    ella.
                  </li>
                  <li className="mb-2">
                    Preséntate en Bartolomé Mitre 575 con la documentación
                    solicitada. La consulta sólo pueden efectuarse en forma
                    personal.
                  </li>
                </ul>
              </div>
              <div className="mt-5">
                <h2 className="mb-4">Costo trámite</h2>
                <ul>
                  <li>Gratuito</li>
                </ul>
              </div>
              <div className="mt-5">
                <h2 className="mb-4">Contacto</h2>
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
                <p className="mb-0">
                  También podés recibir asesoramiento en forma virtual. Boti
                  está disponible las 24 horas de los 365 días del año, tanto en
                  los sitios web del Gobierno de la Ciudad como a través de
                  WhatsApp (+54911) 5050-0147.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};
