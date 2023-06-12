import React from "react";
import { Layout } from "../../../../components/Layout/layouts";

export default function Adicciones() {
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
                  <a href="#">Desarrollo Humano y Hábitat</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Adicciones</a>
                </li>
              </ol>
            </nav>

            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="mt-2 pt-1">
                  <h1 className="mb-3">Contacto</h1>
                  <p className="lead">
                    Si necesitas contarnos acerca de alguna situación de consumo
                    problemático que estés atravesando vos, un amigo o un
                    familiar, no dudes en contactarnos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="container pt-3">
          <div className="row mb-4">
            <div className="col-12 col-lg-8">
              <div className="alert alert-info" role="alert">
                <p>
                  <strong>
                    Este es un destacado de una alerta de información.
                  </strong>{" "}
                  Esta es la descripción de una alerta de información que
                  continua al texto destacado.
                </p>
              </div>
              <form className="mt-5">
                <div className="form-group mb-5">
                  <label htmlFor="text-area" className="mb-2">
                    Bloque de texto
                  </label>
                  <textarea
                    className="form-control"
                    id="text-area"
                    rows={5}
                    placeholder="Escribí tu consulta"
                  ></textarea>
                </div>
                <div className="form-group mb-5">
                  <label htmlFor="email-input" className="mb-2">
                    ¿Dónde queres que te contactemos?
                  </label>
                  <span id="email-help" className="form-text">
                    Puede ser un correo electrónico o un número de teléfono
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="name-input"
                    name="name"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
