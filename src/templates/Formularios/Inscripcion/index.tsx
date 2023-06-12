import React from "react";
import { Layout } from "../../../../components/Layout/layouts";

export default function Inscripcion() {
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
                  <a href="#">Inscripción</a>
                </li>
              </ol>
            </nav>
            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="mt-2 pt-1">
                  <div className="stepper p-0">
                    <p className="step-title">Nombre del paso</p>
                    <p className="step-next">
                      Paso siguiente: Nombre del paso 2
                    </p>
                    <div className="steps">
                      <div className="step active"></div>
                      <div className="step"></div>
                      <div className="step"></div>
                      <div className="step"></div>
                      <div className="step"></div>
                    </div>
                    <span className="step-text">Paso 1 de 5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="container pt-3">
          <small>DATOS DEL ASPIRANTE</small>
          <div className="d-flex justify-content-between align-items-end">
            <h2 className="mb-0">Datos personales</h2>
            <p className="mb-0">Campos obligatorios*</p>
          </div>
          <hr />
          <div className="alert alert-danger fade show" role="alert">
            <p>
              <strong>Este es un destacado de una alerta (opcional).</strong>
            </p>
            <ol>
              <li>
                <span>
                  Un texto simple para un enlace en una lista de alerta
                </span>
              </li>
              <li>
                <span>
                  Un texto simple para un enlace en una lista de alerta
                </span>
              </li>
              <li>
                <span>
                  Un texto simple para un enlace en una lista de alerta
                </span>
              </li>
            </ol>
          </div>
          <form className="mt-4">
            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <div className="form-group mb-5">
                      <label htmlFor="name-input" className="mb-2">
                        Nombre*
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name-input"
                        name="name"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="form-group mb-5">
                      <label htmlFor="subname-input" className="mb-2">
                        Apellido*
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="subname"
                        name="subname"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-8">
                <div className="row">
                  <div className="col-12 col-lg-4">
                    <div className="form-group mb-5">
                      <label htmlFor="date-input" className="mb-2">
                        Fecha de nacimiento*
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="date-input"
                        name="date"
                        aria-describedby="date-help"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="form-group mb-5">
                      <label htmlFor="gender" className="mb-2">
                        Género*
                      </label>
                      <select className="custom-select" id="gender">
                        <option selected disabled>
                          Seleccionar…
                        </option>
                        <option>Masculino</option>
                        <option>Femenino</option>
                        <option>Otro</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="form-group mb-5">
                      <label htmlFor="country" className="mb-2">
                        Pais*
                      </label>
                      <select className="custom-select" id="country">
                        <option selected disabled>
                          Seleccionar…
                        </option>
                        <option>Argentina</option>
                        <option>Extranjero</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-8">
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <div className="form-group mb-5">
                      <label htmlFor="type-dni" className="mb-2">
                        Tipo de documento*
                      </label>
                      <select className="custom-select" id="type-dni">
                        <option selected disabled>
                          Seleccionar…
                        </option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="form-group mb-5">
                      <label htmlFor="dni-input" className="mb-2">
                        Número de documento*
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="dni-input"
                        name="dni"
                        placeholder="Ejemplo: 38129329"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-8">
                <div className="row">
                  <div className="col-12 col-lg-4">
                    <div className="form-group mb-5">
                      <label htmlFor="phone" className="mb-2">
                        ¿Tiene teléfono celular?*
                      </label>
                      <select className="custom-select" id="phone">
                        <option selected disabled>
                          Seleccionar…
                        </option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="form-group mb-8">
                      <label htmlFor="number-phone-input" className="mb-2">
                        N° de teléfono celular
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="number-phone-input"
                        name="number-phone"
                        aria-describedby="date-help"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary mt-5 mb-4">
              Continuar
            </button>
          </form>
        </div>
      </article>
    </Layout>
  );
}
