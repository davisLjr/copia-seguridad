import React from "react";
import { Layout } from "../../../../components/Layout/layouts";

export default function Solicitud() {
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
                  <a href="#">Educación</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Calidad y equidad educativa</a>
                </li>
              </ol>
            </nav>

            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="mt-2 pt-1">
                  <h1 className="mb-3">Solicitud de información</h1>
                  <p className="lead">
                    Si necesitas información de estadística, investigación o
                    evaluación educativa de la Ciudad podés realizar tu consulta
                    en este formulario.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="container pt-3">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="form-wrapper pb-2">
                <div className="alert-wrapper mb-5 pb-2">
                  <div className="alert alert-danger fade show" role="alert">
                    <p>
                      <strong>
                        Por favor arreglá los siguientes errores para continuar:
                      </strong>
                    </p>
                    <ol className="list-links">
                      <li>
                        <a href="#">Correo electrónico*</a>
                      </li>
                      <li>
                        <a href="#">Nombre de la institución*</a>
                      </li>
                      <li>
                        <a href="#">Tipo de información requerida*</a>
                      </li>
                    </ol>
                  </div>
                </div>
                <h2 className="mb-4">Datos personales</h2>
                <div className="form-group pb-3 mb-3">
                  <label htmlFor="name-input" className="pb-2">
                    Nombre y Apellido*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name-input"
                    name="name"
                    placeholder=""
                    value="Heraldo Paez"
                  />
                </div>
                <div className="form-group pb-3 mb-3">
                  <label htmlFor="number-input" className="pb-2">
                    Número de teléfono*
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="number-input"
                    name="number"
                    value="1164875842"
                    placeholder="Ejemplo: 11 2378 3282"
                  />
                </div>
                <div className="form-group mb-5 pb-2">
                  <label htmlFor="email-input" className="pb-2">
                    Correo electrónico*
                  </label>
                  <input
                    type="email"
                    className="form-control is-invalid"
                    id="email-input"
                    name="email"
                    aria-describedby="email-help"
                    placeholder="Ejemplo: correo@gmail.com"
                    required={true}
                  />
                  <div className="valid-feedback">
                    Correo electrónico aceptado
                  </div>
                  <div className="invalid-feedback">
                    Correo electrónico es requerido
                  </div>
                </div>
                <h2 className="mb-4">Datos de la institución educativa</h2>
                <div className="form-group">
                  <label>
                    Tipo de institución desde la cual solicita información*
                  </label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input
                    className="custom-control-input"
                    type="checkbox"
                    id="skills-copywrite-input"
                    name="skills"
                    value="copywrite"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="skills-copywrite-input"
                  >
                    Dependencia del Ministerio de Educación del GCBA
                  </label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input
                    className="custom-control-input"
                    type="checkbox"
                    id="skills-copywrite-input"
                    name="skills"
                    value="copywrite"
                    checked={true}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="skills-copywrite-input"
                  >
                    Dependencia de otro ministerio u organismo del GCBA
                  </label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input
                    className="custom-control-input"
                    type="checkbox"
                    id="skills-copywrite-input"
                    name="skills"
                    value="copywrite"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="skills-copywrite-input"
                  >
                    ONG
                  </label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input
                    className="custom-control-input"
                    type="checkbox"
                    id="skills-copywrite-input"
                    name="skills"
                    value="copywrite"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="skills-copywrite-input"
                  >
                    Empresa
                  </label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input
                    className="custom-control-input"
                    type="checkbox"
                    id="skills-copywrite-input"
                    name="skills"
                    value="copywrite"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="skills-copywrite-input"
                  >
                    Otra
                  </label>
                </div>
                <div className="form-group pt-2 my-3 ">
                  <label htmlFor="name-input" className="pb-2">
                    Nombre de la institución*
                  </label>
                  <input
                    type="text"
                    className="form-control is-invalid"
                    id="name-input"
                    name="name"
                    required={true}
                  />
                  <div className="valid-feedback">
                    Nombre de la institución es aceptado
                  </div>
                  <div className="invalid-feedback">
                    Nombre de la institución es requerido
                  </div>
                </div>
                <div className="form-group pt-3">
                  <label>
                    Ocupación o función dentro de la institución educativa*
                  </label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input
                    className="custom-control-input"
                    type="checkbox"
                    id="skills-copywrite-input"
                    name="skills"
                    value="copywrite"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="skills-copywrite-input"
                  >
                    Funcionario/a / Asesor/a / Coordinador/a
                  </label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input
                    className="custom-control-input"
                    type="checkbox"
                    id="skills-copywrite-input"
                    name="skills"
                    value="copywrite"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="skills-copywrite-input"
                  >
                    Estudiante / Docente / Investigador/a
                  </label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input
                    className="custom-control-input"
                    type="checkbox"
                    id="skills-copywrite-input"
                    name="skills"
                    value="copywrite"
                    checked={true}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="skills-copywrite-input"
                  >
                    Periodista
                  </label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input
                    className="custom-control-input"
                    type="checkbox"
                    id="skills-copywrite-input"
                    name="skills"
                    value="copywrite"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="skills-copywrite-input"
                  >
                    Consultor/a
                  </label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input
                    className="custom-control-input"
                    type="checkbox"
                    id="skills-copywrite-input"
                    name="skills"
                    value="copywrite"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="skills-copywrite-input"
                  >
                    Otra
                  </label>
                </div>
                <div className="mb-5 pb-2">
                  <div className="form-group pt-2 mt-3">
                    <label>Tipo de información requerida*</label>
                  </div>
                  <div className=" custom-control custom-checkbox">
                    <input
                      className="custom-control-input is-invalid"
                      type=" checkbox"
                      id="skills-copywrite-input"
                      name="skills"
                      value="copywrite"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="skills-copywrite-input"
                    >
                      Datos estadísticos educativos
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      className="custom-control-input is-invalid"
                      type="checkbox"
                      id="skills-copywrite-input"
                      name="skills"
                      value="copywrite"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="skills-copywrite-input"
                    >
                      Listado de establecimientos educativos
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      className="custom-control-input is-invalid"
                      type="checkbox"
                      id="skills-copywrite-input"
                      name="skills"
                      value="copywrite"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="skills-copywrite-input"
                    >
                      Listado de establecimientos educativos
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox ">
                    <input
                      className="custom-control-input is-invalid"
                      type="checkbox"
                      id="skills-copywrite-input"
                      name="skills"
                      value="copywrite"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="skills-copywrite-input"
                    >
                      Otra
                    </label>
                    <div className="valid-feedback">
                      Tipo de información aceptado
                    </div>
                    <div className="invalid-feedback">
                      Tipo de información requerida es un campo obligatorio
                    </div>
                  </div>
                </div>
                <h2 className="mb-4">Comentarios generales</h2>
                <div className="form-group ">
                  <label htmlFor="text-area" className="pb-2">
                    ¿Hay algo que quieras agregar?
                  </label>
                  <textarea
                    className="form-control"
                    id="text-area"
                    rows={3}
                    placeholder="Sumá información que creas que pueda sumar valor a los datos cargados"
                  ></textarea>
                </div>
                <div className="pt-4 mt-1 ">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg mt-3 mb-3"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
