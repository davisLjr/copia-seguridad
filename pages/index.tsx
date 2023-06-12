import React from "react";
import { Hero } from "../components/Home/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <article>
      <Hero />

      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4 mb-4">
            <div className="group-access">
              <div className="card-access">
                <div className="card-access-body p-list reverse">
                  <div>
                    <h3 className="card-access-title">Área de Gobierno</h3>
                    <p className="card-access-text">Plantillas</p>
                  </div>
                  <i className="bx bxs-buildings card-access-icon"></i>
                </div>
                <div className="container-access">
                  <hr className="clearfix" />
                  <div className="access-option">
                    <h2 className="title-option">Primer nivel</h2>
                    <Link
                      href="./area_gob_op1"
                      target="_blank"
                      className="list-group-item item-sm"
                    >
                      <span className="access-title">Opción 1</span>
                    </Link>
                    <Link
                      href="./area_gob_op2"
                      target="_blank"
                      className="list-group-item item-sm"
                    >
                      <span className="access-title">Opción 2</span>
                    </Link>
                    <h2 className="title-option">Segundo nivel</h2>
                    <Link
                      href="./area_gob_2_op1"
                      target="_blank"
                      className="list-group-item item-sm"
                    >
                      <span className="access-title">Opción 1</span>
                    </Link>
                    <Link
                      href="./area_gob_2_op2"
                      target="_blank"
                      className="list-group-item item-sm"
                    >
                      <span className="access-title">Opción 2</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 mb-4">
            <div className="group-access">
              <div className="card-access">
                <div className="card-access-body p-list reverse">
                  <div>
                    <h3 className="card-access-title">Formularios</h3>
                    <p className="card-access-text">Modelos de ejemplo</p>
                  </div>
                  <i className="bx bxs-spreadsheet card-access-icon"></i>
                </div>
                <div className="container-access">
                  <hr className="clearfix" />
                  <div className="access-option">
                    <Link
                      href="./inscripcion"
                      target="_blank"
                      className="list-group-item item-sm"
                    >
                      <span className="access-title">Inscripción</span>
                    </Link>
                    <Link
                      href="./solicitud"
                      target="_blank"
                      className="list-group-item item-sm"
                    >
                      <span className="access-title">Solicitud</span>
                    </Link>
                    <Link
                      href="./trabaja-con-nosotros"
                      target="_blank"
                      className="list-group-item item-sm"
                    >
                      <span className="access-title">Trabajá con nosotros</span>
                    </Link>
                    <h2 className="title-option">Contacto</h2>
                    <Link
                      href="./adicciones"
                      target="_blank"
                      className="list-group-item item-sm"
                    >
                      <span className="access-title">Adicciones</span>
                    </Link>
                    <Link
                      href="./sindicatura-general"
                      target="_blank"
                      className="list-group-item item-sm"
                    >
                      <span className="access-title">Sindicatura General</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 mb-4">
            <div className="group-access">
              <div className="card-access">
                <div className="card-access-body p-list reverse">
                  <div>
                    <h3 className="card-access-title">Institucional</h3>
                    <p className="card-access-text">Modelos de ejemplo</p>
                  </div>
                  <i className="bx bxs-school card-access-icon"></i>
                </div>
                <div className="container-access">
                  <hr className="clearfix" />
                  <div className="access-option">
                    <Link
                      href="./institucional-op-1"
                      target="_blank"
                      className="list-group-item item-sm"
                    >
                      <span className="access-title">Opción 1</span>
                    </Link>
                    <Link
                      href="./institucional-op-2"
                      target="_blank"
                      className="list-group-item item-sm"
                    >
                      <span className="access-title">Opción 2</span>
                    </Link>
                    <Link
                      href="./institucional-op-3"
                      target="_blank"
                      className="list-group-item item-sm"
                    >
                      <span className="access-title">Opción 3</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-4 mb-4">
            <div className="group-access">
              <div className="card-access">
                <div className="card-access-body p-list reverse">
                  <div>
                    <h3 className="card-access-title">Noticias</h3>
                    <p className="card-access-text">Modelos de ejemplo</p>
                  </div>
                  <i className="bx bxs-message-detail card-access-icon"></i>
                </div>
                <div className="container-access">
                  <hr className="clearfix" />
                  <div className="access-option">
                    <Link
                      href="./galeria"
                      target="_blank"
                      className="list-group-item item-sm"
                    >
                      <span className="access-title">Galería de imágenes</span>
                    </Link>
                    <Link
                      href="./foco-en-accionable"
                      target="_blank"
                      className="list-group-item item-sm"
                    >
                      <span className="access-title">Foco en accionable</span>
                    </Link>
                    <Link
                      href="./foco-en-texto"
                      target="_blank"
                      className="list-group-item item-sm"
                    >
                      <span className="access-title">Foco en texto</span>
                    </Link>
                    <Link
                      href="./foco-en-video"
                      target="_blank"
                      className="list-group-item item-sm"
                    >
                      <span className="access-title">Foco en video</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 mb-4">
            <div className="group-access">
              <div className="card-access">
                <div className="card-access-body p-list reverse">
                  <div>
                    <h3 className="card-access-title">Página de Área</h3>
                    <p className="card-access-text">Modelos de ejemplo</p>
                  </div>
                  <i className="bx bxs-book-content card-access-icon"></i>
                </div>
                <div className="container-access">
                  <hr className="clearfix" />
                  <div className="access-option">
                    <Link
                      href="./cultura-op-1"
                      target="_blank"
                      className="list-group-item item-sm"
                    >
                      <span className="access-title">Cultura</span>
                    </Link>
                    <Link
                      href="./educacion-op-1"
                      target="_blank"
                      className="list-group-item item-sm"
                    >
                      <span className="access-title">Educación</span>
                    </Link>
                    <Link
                      href="./justi-y-seguri-op-1"
                      target="_blank"
                      className="list-group-item item-sm"
                    >
                      <span className="access-title">Justicia y Seguridad</span>
                    </Link>
                    <Link
                      href="./museo-op-1"
                      target="_blank"
                      className="list-group-item item-sm"
                    >
                      <span className="access-title">Museo</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-4 mb-4">
            <div className="group-access">
              <div className="card-access">
                <div className="card-access-body p-list reverse">
                  <div>
                    <h3 className="card-access-title">Página de Libro</h3>
                    <p className="card-access-text">Modelo de ejemplo</p>
                  </div>
                  <i className="bx bxs-book-open card-access-icon"></i>
                </div>
                <div className="container-access">
                  <hr className="clearfix" />
                  <div className="access-option">
                    <Link
                      href="./libro-op-1"
                      target="_blank"
                      className="list-group-item item-sm"
                    >
                      <span className="access-title">Opción 1</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-4 mb-4">
            <div className="group-access">
              <div className="card-access">
                <div className="card-access-body p-list reverse">
                  <div>
                    <h3 className="card-access-title">Página Simple</h3>
                    <p className="card-access-text">Modelos de ejemplo</p>
                  </div>
                  <i className="bx bxs-bookmark card-access-icon"></i>
                </div>
                <div className="container-access">
                  <hr className="clearfix" />
                  <div className="access-option">
                    <Link
                      href="./simple-op-1"
                      target="_blank"
                      className="list-group-item item-sm"
                    >
                      <span className="access-title">Opción 1</span>
                    </Link>
                    <Link
                      href="./simple-op-2"
                      target="_blank"
                      className="list-group-item item-sm"
                    >
                      <span className="access-title">Opción 2</span>
                    </Link>
                    <Link
                      href="./simple-op-3"
                      target="_blank"
                      className="list-group-item item-sm"
                    >
                      <span className="access-title">Opción 3</span>
                    </Link>
                    <Link
                      href="./simple-op-4"
                      target="_blank"
                      className="list-group-item item-sm"
                    >
                      <span className="access-title">Opción 4</span>
                    </Link>
                    <Link
                      href="./simple-op-5"
                      target="_blank"
                      className="list-group-item item-sm"
                    >
                      <span className="access-title">Opción 5</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
