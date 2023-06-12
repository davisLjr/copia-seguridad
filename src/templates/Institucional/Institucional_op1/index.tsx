import React from "react";
import { Layout } from "../../../../components/Layout/layouts";

export default function Opcion1() {
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
                  <a href="#">Desarrollo económico y producción</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">
                    Ministerio de Desarrollo económico y producción
                  </a>
                </li>
              </ol>
            </nav>

            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="mt2 pt-1">
                  <h1 className="mb-3">
                    Ministerio de Desarrollo económico y producción
                  </h1>
                  <p className="lead">
                    La misión del Ministerio de Desarrollo Económico y
                    Producción es potenciar la actividad económica, promoviendo
                    la innovación y el desarrollo del talento para fomentar el
                    empleo y contribuir a una mejor calidad de vida.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="container mb-4">
                <div className="panel-deck max-cards-2 col-md-8 col-xs-12">
                  <div className="card card-horizontal card-lg unbordered">
                    <img
                      src="../assets/institucional/joseLuisGiusti.png"
                      className="card-img-left"
                      alt="descripción alternativa"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Christian Bauab</h4>
                      <p className="card-text">
                        Subsecretario de Micro, Pequeñas y Medianas Empresas
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mb-4">
                Es licenciado en Economía por la Universidad de Buenos Aires. Se
                desempeñó como titular de la Unidad de Proyectos Especiales
                Transferencia de Funciones y Facultades en Materia de Seguridad
                del Ministerio de Justicia y Seguridad de la Ciudad entre 2016 y
                2019.
              </p>
              <p className="mb-4">
                Anteriormente fue decano de la Facultad de Ciencias Económicas y
                secretario de Hacienda y Administración de la Universidad de
                Buenos Aires. Desde diciembre de 2019 ocupa el cargo de ministro
                de Desarrollo Económico y Producción de la Ciudad.
              </p>

              <div className="mb-5">
                <h3>Contacto</h3>
                <p className="mb-0">
                  Mail:{" "}
                  <a className="" href="#" target="_blank" rel="noreferrer">
                    jlgiusti@buenosaires.gob.ar
                  </a>
                </p>
                <p className="mb-0">
                  Dirección:{" "}
                  <a className="" href="#" target="_blank" rel="noreferrer">
                    Av. Martín García 346, 2° piso
                  </a>
                </p>
              </div>

              <div className="row">
                <div className="col-lg-10 col-xs-12">
                  <div className="accordion" id="accordionExample">
                    <div className="card">
                      <button
                        className="card-header collapsed card-link"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                      >
                        Colapsable
                      </button>
                      <div
                        id="collapseOne"
                        className="collapse"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          Este es el área descriptiva de un colapsable de
                          selección única. Una vez que se accione sobre el área
                          de títulos, se abrirá el componente mostrando el área
                          descriptiva.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <button
                        className="card-header collapsed card-link"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                      >
                        Colapsable
                      </button>
                      <div
                        id="collapseTwo"
                        className="collapse"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          Este es el área descriptiva de un colapsable de
                          selección única. Una vez que se accione sobre el área
                          de títulos, se abrirá el componente mostrando el área
                          descriptiva.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <aside className="col-12 col-lg-4 mt-5 mt-lg-0">
              <div className="bg-light shadow-sm rounded-lg px-4 pt-4 pb-3">
                <div className="card card-simple panel-list-link">
                  <div className="card-body">
                    <h3 className="card-title">Transparencia activa</h3>
                  </div>
                  <div className="list-link">
                    <h4 className="list-link-item-title">Anexo I</h4>
                    <a
                      className="btn btn-secondary btn-sm download-link card-link"
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Descargar
                    </a>
                    <h4 className="list-link-item-title">Anexo II</h4>
                    <a
                      className="btn btn-secondary btn-sm download-link card-link"
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Descargar
                    </a>
                    <h4 className="list-link-item-title">Anexo III</h4>
                    <a
                      className="btn btn-secondary btn-sm download-link card-link"
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Descargar
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>
      <section className="bg-light py-5">
        <div className="container my-1 py-2">
          <h2 className="mb-4">Organigrama</h2>
          <div className=" row mb-5">
            <div className="col-lg-4 col-md-6 col-xs-12">
              <a className="card card-horizontal" href="#">
                <img
                  src="../assets/institucional/joseLuisGiusti.png"
                  className="card-img-left"
                  alt="descripción alternativa"
                />
                <div className="card-body">
                  <h4 className="card-title">
                    Ministerio de Desarrollo económico y producción
                  </h4>
                  <p className="card-text">José Luis Giusti</p>
                </div>
              </a>
            </div>
          </div>
          <h3 className="mb-4">Secretaría</h3>
          <div className="row mb-5">
            <div className="col-lg-4 col-md-6 col-xs-12">
              <a className="card" href="#">
                <div className="card-body">
                  <h4 className="card-title">Deportes</h4>
                  <p className="card-text">Carlos José Reteguí</p>
                </div>
              </a>
            </div>
          </div>
          <h3 className="mb-4">Subsecretarías</h3>
          <div className="card-deck max-cards-3 mb-5">
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">Trabajo, industria y comercio</h4>
                <p className="card-text">Ezequiel Edgardo Jarvis</p>
              </div>
            </a>
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">Políticas Gastronómicas</h4>
                <p className="card-text">Hector Rodolfo Gatto</p>
              </div>
            </a>
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">Desarrollo inclusivo</h4>
                <p className="card-text">Daniel Ricardo Nieto Michel</p>
              </div>
            </a>
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">
                  Micro, pequeñas y medianas empresas
                </h4>
                <p className="card-text">Christian Bauab</p>
              </div>
            </a>
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">Desarrollo económico</h4>
                <p className="card-text">Sergio Pablo Lera</p>
              </div>
            </a>
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">
                  Administración de bienes inmuebles
                </h4>
                <p className="card-text">Carlos Alberto Rapisarda</p>
              </div>
            </a>
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">
                  Cooperación para el desarrollo económico y la producción
                </h4>
                <p className="card-text">Carlos Faián Macchi</p>
              </div>
            </a>
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">Lorem Ipsum</h4>
                <p className="card-text">Lorem ipsum dolor sit amet.</p>
              </div>
            </a>
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">Lorem Ipsum</h4>
                <p className="card-text">Lorem ipsum dolor sit amet.</p>
              </div>
            </a>
          </div>

          <h3 className="my-4">Direcciones generales</h3>
          <div className="card-deck max-cards-3 mb-5">
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">Técnica, Administrativa y Legal</h4>
                <p className="card-text">Lautaro Vasser</p>
              </div>
            </a>
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">
                  Planificación y coordinación de gestión
                </h4>
                <p className="card-text">Matías Sala</p>
              </div>
            </a>
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">Políticas Energéticas</h4>
                <p className="card-text">Patricia Valentina Fagundez</p>
              </div>
            </a>
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">Políticas de Juventud</h4>
                <p className="card-text">Tomas Mestre Olmedo</p>
              </div>
            </a>
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">Técnica, Administrativa y Legal</h4>
                <p className="card-text">Lautaro Vasser</p>
              </div>
            </a>
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">Técnica, Administrativa y Legal</h4>
                <p className="card-text">Lautaro Vasser</p>
              </div>
            </a>
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">Técnica, Administrativa y Legal</h4>
                <p className="card-text">Lautaro Vasser</p>
              </div>
            </a>
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">Lorem Ipsum</h4>
                <p className="card-text">Lorem ipsum dolor sit amet.</p>
              </div>
            </a>
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">Lorem Ipsum</h4>
                <p className="card-text">Lorem ipsum dolor sit amet.</p>
              </div>
            </a>
          </div>

          <h3 className="mb-4">Organismos fuera de nivel</h3>
          <div className="card-deck max-cards-3">
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">
                  Consejo Económico y Social de la Ciudad de Buenos Aires
                </h4>
                <p className="card-text">Claudio Damián Presman</p>
              </div>
            </a>
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">Corporación Buenos Aires Sur</h4>
                <p className="card-text">Santiago Lopez Medrano</p>
              </div>
            </a>
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">Parque de la Innovación</h4>
                <p className="card-text">Luis María Eduardo Bullrich</p>
              </div>
            </a>
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">
                  Micro, pequeñas y medianas empresas
                </h4>
                <p className="card-text">Christian Bauab</p>
              </div>
            </a>
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">
                  Ente Metropolitano Regulador del Servicio Eléctrico
                </h4>
                <p className="card-text"></p>
              </div>
            </a>
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">
                  Unidad de proyectos especiales (UPE) Autódromo de la Ciudad
                  Autónoma de Buenos Aires
                </h4>
                <p className="card-text"></p>
              </div>
            </a>
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">
                  Cooperación para el desarrollo económico y la producción
                </h4>
                <p className="card-text">Carlos Faián Macchi</p>
              </div>
            </a>
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">Lorem Ipsum</h4>
                <p className="card-text">Lorem ipsum dolor sit amet.</p>
              </div>
            </a>
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">Lorem Ipsum</h4>
                <p className="card-text">Lorem ipsum dolor sit amet.</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
