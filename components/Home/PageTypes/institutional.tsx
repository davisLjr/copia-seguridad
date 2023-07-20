import Link from "next/link";
import React from "react";

const Institutional = () => {
  return (
    <div className="d-flex flex-wrap">
      <div className="col-12 col-lg-4 mb-4">
        <div className="group-access">
          <div className="card-access">
            <div className="card-access-body p-list reverse">
              <div>
                <h3 className="card-access-title">Institucional</h3>
                <p className="card-access-text">Modelos de ejemplo</p>
              </div>
              <i className="bx bxs-school card-access-icon"></i>
            </div>
            <div className="container-access">
              <hr className="clearfix" />
              <div className="access-option">
                <Link
                  href="./institucional-op-1"
                  target="_blank"
                  className="list-group-item item-sm"
                >
                  <span className="access-title">Opción 1</span>
                </Link>
                <Link
                  href="./institucional-op-2"
                  target="_blank"
                  className="list-group-item item-sm"
                >
                  <span className="access-title">Opción 2</span>
                </Link>
                <Link
                  href="./institucional-op-3"
                  target="_blank"
                  className="list-group-item item-sm"
                >
                  <span className="access-title">Opción 3</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Institutional;
