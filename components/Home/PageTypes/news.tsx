import Link from "next/link";
import React from "react";

const News = () => {
  return (
    <div className="d-flex">
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
    </div>
  );
};

export default News;
