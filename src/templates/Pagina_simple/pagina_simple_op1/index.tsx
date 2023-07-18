import React from "react";
import { Layout } from "../../../../components/Layout/layouts";
import { CopyButton } from "../../../../components/CopyButton";
import FloatButton from "../../../../components/FloatButton";

export default function SimpleOp1() {
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
                  <a href="#">Pymes y emprendedores</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Financiamiento</a>
                </li>
              </ol>
            </nav>

            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="mt-2 pt-1">
                  <h1 className="mb-3">Nombre de atajo</h1>
                  <p className="lead">
                    Informate acerca de las líneas de crédito disponibles según
                    tu actividad
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container pb-3 mb-4" id="seccion-uno-no-copiar">
          <div className="d-flex">
            <h2 className="mb-4">
              Actividad comercial
            </h2>
            <CopyButton targetId="seccion-uno-no-copiar" />
          </div>
          <div className="card-deck max-cards-3">
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">Emprendedores con aval de SGR</h4>
                <p className="card-text">
                  Personas físicas con actividad comercial, monotributistas y
                  responsables inscriptos
                </p>
              </div>
            </a>
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">Línea Ciudad mujeres emprendedoras</h4>
                <p className="card-text">
                  Para mujeres emprendedoras con actividad comercial
                </p>
              </div>
            </a>
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">
                  Bienes de Capital y Capital de Trabajo a 36 meses
                </h4>
                <p className="card-text">MiPyMEs con certificado vigente</p>
              </div>
            </a>
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">Ciudad pago aguinaldos</h4>
                <p className="card-text">
                  Empresas Pymes o Personas Físicas con actividad comercial, en
                  el ámbito de radicación del Banco
                </p>
              </div>
            </a>
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">Distritos, barrios o polos CABA</h4>
                <p className="card-text">
                  Diseñado para incentivar la actividad y la radicación de
                  empresas en Distritos, Barrios o Polos de la CABA
                </p>
              </div>
            </a>
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">Línea Ciudad emprendedores</h4>
                <p className="card-text">
                  Personas humanas, empresas unipersonales y sociedades de hecho
                  y emprendedores de nuevos proyectos
                </p>
              </div>
            </a>
          </div>
        </div>

        <div className="container pb-3 mb-4" id="seccion-dos-no-copiar">
          <div className="d-flex">
            <h2 className="mb-4">
              Administración de consorcios
            </h2>
            <CopyButton targetId="seccion-dos-no-copiar" />
          </div>
          <div className="card-deck max-cards-3">
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">Ciudad consorcios</h4>
                <p className="card-text">
                  Consorcios de Propietarios de Edificios o Consorcios con valor
                  patrimonial
                </p>
              </div>
            </a>
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">Escuelas privadas</h4>
                <p className="card-text">Escuelas privadas y jardines maternales</p>
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

        <div className="container pb-3 mb-4" id="seccion-tres-no-copiar">
          <div className="d-flex">
            <h2 className="mb-4">
              Educación
            </h2>
            <CopyButton targetId="seccion-tres-no-copiar" />
          </div>
          <div className="card-deck max-cards-3">
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">Escuelas privadas</h4>
                <p className="card-text">Escuelas privadas y jardines maternales</p>
              </div>
            </a>
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">Escuelas privadas</h4>
                <p className="card-text">Escuelas privadas y jardines maternales</p>
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

        <div className="container" id="seccion-cuatro-no-copiar">
          <div className="d-flex">            
            <h2 className="mb-4">
              Industrias creativas y software
            </h2>
            <CopyButton targetId="seccion-cuatro-no-copiar" />  
          </div>
          <div className="card-deck max-cards-3">
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">
                  Línea Innova Ciudad: para sectores estratégicos
                </h4>
                <p className="card-text">
                  Personas físicas con actividad comercial y Personas Jurídicas
                </p>
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
      </article>

      <section className="bg-light py-5" id="seccion-cinco-no-copiar">
        <div className="container my-1 py-2">
          <div className="d-flex">
            <h2 className="mb-4">
              Cancelá tus deudas y promové la reactivación productiva
            </h2>
            <CopyButton targetId="seccion-cinco-no-copiar" />
          </div>
          <div className="card-deck max-cards-3">
            <a className="card" href="#">
              <div className="card-body">
                <h4 className="card-title">Plan de Facilidades</h4>
                <p className="card-text">
                  Adherite para disponer de un plan de pago de deuda
                  administrativa y judicial
                </p>
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

      <div className="container">
        <FloatButton />
      </div>
    </Layout>
  );
};
