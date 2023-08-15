import Link from "next/link";
import React from "react";

const BookPage = () => {
  return (
    <div className="d-flex flex-wrap">
      <div className="col-12 col-lg-4 mb-4">
        <div className="group-access">
          <div className="card-access">
            <div className="card-access-body p-list reverse">
              <div>
                <h3 className="card-access-title">Página de Libro</h3>
                <p className="card-access-text">Modelo de ejemplo</p>
              </div>
              <i className="bx bxs-book-open card-access-icon"></i>
            </div>
            <div className="container-access">
              <hr className="clearfix" />
              <div className="access-option">
                <Link
                  href="./libro-op-1"
                  target="_blank"
                  className="list-group-item item-sm"
                >
                  <span className="access-title">Opción 1</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
