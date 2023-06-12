import React from "react";
import { Layout } from "../../../../components/Layout/layouts";

export default function SindicaturaGeneral() {
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
                  <a href="#">Jefe de Gobierno</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Sindicatura General</a>
                </li>
              </ol>
            </nav>

            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="mt-2 pt-1">
                  <h1 className="mb-3">Contacto</h1>
                  <p className="lead">
                    Para comunicarte con la Sindicatura General, podes enviarnos
                    un correo a través del formulario de contacto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="container pt-3">
          <form>
            <div className="row">
              <div className="col-12 col-lg-4">
                <div className="form-group mb-4">
                  <label htmlFor="name-input" className="mb-2">
                    Nombre y Apellido*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name-input"
                    name="name"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="form-group mb-5">
                  <label htmlFor="name-input" className="mb-2">
                    Correo electrónico*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name-input"
                    name="email"
                    placeholder="Ejemplo: correo@gmail.com"
                  />
                </div>
              </div>
              <div className="col-12 col-lg-8">
                <div className="form-group mb-5">
                  <label htmlFor="text-area" className="mb-2">
                    Bloque de texto
                  </label>
                  <textarea
                    className="form-control"
                    id="text-area"
                    rows={5}
                  ></textarea>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary mb-4">
              Enviar
            </button>
          </form>
        </div>
      </article>
    </Layout>
  );
}
