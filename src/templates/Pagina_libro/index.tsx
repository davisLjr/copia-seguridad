import React from "react";
import { Layout } from "../../../components/Layout/layouts";

export default function LibroOp1() {
  return (
    <Layout>
      <article className="pb-5">
        <header className="pt-3 mb-2 d-flex">
          <div className="container pt-1">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Buenos Aires</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Página anterior</a>
                </li>
              </ol>
            </nav>
          </div>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="nav-container mb-5 mb-md-0">
                <nav>
                  <ul className="nav flex-column nav-pills nav-lg">
                    <li className="nav-item">
                      <a className="nav-link active" href="#">
                        <span>Adultos y Adolescentes</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <span>Educación secundaria</span>
                      </a>
                      <ul className="nav flex-column nav-pills">
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            <span>Adultos 2000</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <span>Supervisiones y sedes</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <span>Ventanilla Única de Adultos (VUA)</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <span>Contacto</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <span>Buscá tu escuela</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-12 col-lg-8">
              <div>
                <h1 className="mb-3">Adultos y Adolescentes</h1>
                <p className="lead">
                  El área de Educación de Adultos y Adolescentes ofrece una
                  variada oferta educativa para personas mayores de 14 o de 18
                  años. Además, de los espacios de educación formal (primaria y
                  secundaria para adultos -CENS presencial, Adultos 2000 a
                  distancia, Plan FINES-), el área brinda cursos que facilitan
                  la inserción laboral.
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

              <hr className="my-5" />

              <section>
                <h2 className="mb-4">Educación Primaria para Adultos</h2>
                <p className="mb-4">
                  Tiene como finalidad brindar la oportunidad de finalizar los
                  estudios primarios a personas mayores de 14 años, a través de
                  diferentes modalidades y programas:
                </p>
                <ul>
                  <li>
                    <a href="#" target="_blank" rel="noreferrer">
                      Escuelas Primarias para Adultos
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noreferrer">
                      Centros Educativos de Nivel primario (CENP)
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noreferrer">
                      Programa de Alfabetización, Educación Básica y Trabajo -
                      (PAEBYT)
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noreferrer">
                      Listado supervisiones terminalidad primaria para adultos
                    </a>
                  </li>
                </ul>
                <a href="#" className="btn btn-primary mt-3 mb-5">
                  Conocer más
                </a>

                <h2 className="mb-4 pt">Educación Secundaria para Adultos</h2>
                <p className="mb-4">
                  Tiene como finalidad brindar la oportunidad de retomar y
                  finalizar los estudios secundarios a personas mayores de 18
                  años. Existen diferentes alternativas y modalidades:
                </p>
                <ul>
                  <li>
                    <a href="#" target="_blank" rel="noreferrer">
                      Centros Educativos de Nivel Secundario (CENS, presencial)
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noreferrer">
                      Adultos 2000 (A distancia)
                    </a>
                  </li>
                  <li>FINES (Plan de Finalización de Estudios Secundarios)</li>
                  <li>
                    <a href="#" target="_blank" rel="noreferrer">
                      UGEE - BACHIS
                    </a>
                  </li>
                </ul>
                <a href="#" className="btn btn-primary mt-3 mb-4">
                  Conocer más
                </a>
              </section>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
