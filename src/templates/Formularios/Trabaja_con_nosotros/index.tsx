import React from "react";
import { Layout } from "../../../../components/Layout/layouts";

export default function TrabajaConNosotros() {
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
                  <a href="#">Subte</a>
                </li>
              </ol>
            </nav>
            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="mt-2 pt-1">
                  <h1 className="mb-3">Trabajá con nosotros</h1>
                  <p className="lead">
                    Cargá tus datos y te contactaremos si tu perfil se ajusta a
                    alguna de nuestras búsquedas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container pt-3">
          <h2 className="mb-4">Datos personales</h2>
          <form>
            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="form-group mb-5">
                  <label htmlFor="name-input" className="mb-2">
                    Nombre y Apellido*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name-input"
                    name="name"
                  />
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
                  <div className="col-12 col-lg-6">
                    <div className="form-group mb-5">
                      <label htmlFor="gender" className="mb-2">
                        Género*
                      </label>
                      <select className="custom-select" id="gender">
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
                </div>
              </div>
              <div className="col-12 col-lg-8">
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <div className="form-group mb-5">
                      <label htmlFor="city" className="mb-2">
                        Ciudad*
                      </label>
                      <select className="custom-select" id="city">
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
                      <label htmlFor="code-postal-input" className="mb-2">
                        Código postal*
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="code-postal-input"
                        name="code-postal"
                        aria-describedby="date-help"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-8 mt-3">
                <h2 className="mb-4">Datos de contacto</h2>
                <div className="row">
                  <div className="col-12 col-lg-6 my-3">
                    <div className="form-group mb-5">
                      <label htmlFor="phone-input" className="mb-2">
                        Número de teléfono*
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone-input"
                        name="phone"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 my-3">
                    <div className="form-group mb-5">
                      <label htmlFor="email-input" className="mb-2">
                        Correo electrónico*
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email-input"
                        name="email"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-8">
                <h2 className="mb-4">Nivel de estudios</h2>
                <div className="row">
                  <div className="col-12 col-lg-6 mt-3">
                    <div className="form-group mb-5">
                      <label htmlFor="level" className="mb-2">
                        Nivel alcanzado*
                      </label>
                      <select className="custom-select" id="level">
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
                  <div className="col-12 col-lg-6 mt-3">
                    <div className="form-group mb-5">
                      <label htmlFor="status" className="mb-2">
                        Estado en que se encuentra*
                      </label>
                      <select className="custom-select" id="status">
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
                  <div className="col-12 mb-3">
                    <div className="form-group mb-5">
                      <label htmlFor="study-area" className="mb-2">
                        Área de estudio*
                      </label>
                      <select className="custom-select" id="study-area">
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
                </div>
              </div>
              <div className="col-12 col-lg-8">
                <h2 className="mb-4">Idiomas</h2>
                <div className="row">
                  <div className="col-12 col-lg-5 my-3">
                    <div className="form-group mb-4">
                      <label htmlFor="language" className="mb-2">
                        Idioma*
                      </label>
                      <select className="custom-select" id="language">
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
                  <div className="col-12 col-lg-5 my-3">
                    <div className="form-group mb-4">
                      <label htmlFor="language-level" className="mb-2">
                        Nivel alcanzado*
                      </label>
                      <select className="custom-select" id="language-level">
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
                  <div className="col-12 col-lg-2 mb-5 mt-auto">
                    <button type="button" className="btn btn-sm btn-primary">
                      Guardar
                    </button>
                  </div>
                  <div className="col mb-3">
                    <hr />
                    <div className="d-flex align-items-center justify-content-between">
                      <span>Alemán - Avanzado</span>
                      <button type="button" className="btn btn-sm btn-danger">
                        Eliminar idioma
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-8 my-5">
                <h2 className="mb-4">Experiencia laboral</h2>
                <div className="row">
                  <div className="col-12 mt-3">
                    <div className="form-group mb-4">
                      <label htmlFor="name-first-company" className="mb-2">
                        Nombre de la primer empresa*
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name-first-company"
                        name="name-first-company"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 mt-3">
                    <div className="form-group mb-4">
                      <label htmlFor="date-start-job" className="mb-2">
                        Fecha de comienzo*
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="date-start-job"
                        name="date-start-job"
                        aria-describedby="date-help"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 mt-3">
                    <div className="form-group mb-4">
                      <label htmlFor="date-end-job" className="mb-2">
                        Fecha de finalización*
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="date-end-job"
                        name="date-end-job"
                        aria-describedby="date-help"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="custom-control custom-checkbox">
                      <input
                        className="custom-control-input"
                        type="checkbox"
                        id="fisrt-job"
                        name="skills"
                        value="copywrite"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="fisrt-job"
                      >
                        Es mi trabajo actual
                      </label>
                    </div>
                  </div>
                  <div className="col-12 mt-3">
                    <div className="form-group mb-5">
                      <label htmlFor="text-area" className="mb-2">
                        Descripción de tareas*
                      </label>
                      <textarea
                        className="form-control"
                        id="text-area"
                        rows={5}
                        placeholder="Sumá información que creas que pueda sumar valor a los datos cargados"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col">
                    <button
                      type="button"
                      className="btn btn-sm btn-danger mb-4"
                    >
                      Eliminar empresa
                    </button>
                    <hr />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 mt-3">
                    <div className="form-group mb-4">
                      <label htmlFor="name-first-company" className="mb-2">
                        Nombre de la segunda empresa*
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name-first-company"
                        name="name-first-company"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 mt-3">
                    <div className="form-group mb-4">
                      <label htmlFor="date-start-job" className="mb-2">
                        Fecha de comienzo*
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="date-start-job"
                        name="date-start-job"
                        aria-describedby="date-help"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 mt-3">
                    <div className="form-group mb-4">
                      <label htmlFor="date-end-job" className="mb-2">
                        Fecha de finalización*
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="date-end-job"
                        name="date-end-job"
                        aria-describedby="date-help"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="custom-control custom-checkbox">
                      <input
                        className="custom-control-input"
                        type="checkbox"
                        id="fisrt-job"
                        name="skills"
                        value="copywrite"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="fisrt-job"
                      >
                        Es mi trabajo actual
                      </label>
                    </div>
                  </div>
                  <div className="col-12 mt-3">
                    <div className="form-group mb-5">
                      <label htmlFor="text-area" className="mb-2">
                        Descripción de tareas*
                      </label>
                      <textarea
                        className="form-control"
                        id="text-area"
                        rows={5}
                        placeholder="Sumá información que creas que pueda sumar valor a los datos cargados"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col">
                    <button type="button" className="btn btn-sm btn-danger">
                      Eliminar empresa
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-8">
                <h2 className="mb-4">Curriculum Vitae (CV)</h2>
                <div className="row">
                  <div className="col">
                    <div className="form-group mb-5">
                      <label htmlFor="file" className="mb-2">
                        Adjuntá tu CV
                      </label>
                      <input
                        type="file"
                        className="form-control-file"
                        id="file"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary mt-5 mb-4">
              Enviar
            </button>
          </form>
        </div>
      </article>
    </Layout>
  );
}
