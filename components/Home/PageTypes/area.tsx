import Link from "next/link";
import React from "react";

const Area = () => {
  return (
    <div className="d-flex flex-wrap">
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
    </div>
  );
};

export default Area;
