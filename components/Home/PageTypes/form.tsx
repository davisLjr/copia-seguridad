import Link from "next/link";
import React from "react";

const Form = () => {
  return (
    <div className="d-flex flex-wrap">
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
                <h3 className="card-access-title">Contacto</h3>
                <p className="card-access-text">Modelos de ejemplo</p>
              </div>
              <i className="bx bxs-spreadsheet card-access-icon"></i>
            </div>
            <div className="container-access">
              <hr className="clearfix" />
              <div className="access-option">
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
    </div>
  );
};

export default Form
