import Link from "next/link";
import React from "react";

const Simple = () => {
  return (
    <div className="d-flex">
      <div className="col-12 col-lg-4 mb-4">
        <div className="group-access">
          <div className="card-access">
            <div className="card-access-body p-list reverse">
              <div>
                <h3 className="card-access-title">Página Simple</h3>
                <p className="card-access-text">Modelos de ejemplo</p>
              </div>
              <i className="bx bxs-bookmark card-access-icon"></i>
            </div>
            <div className="container-access">
              <hr className="clearfix" />
              <div className="access-option">
                <Link
                  href="./simple-op-1"
                  target="_blank"
                  className="list-group-item item-sm"
                >
                  <span className="access-title">Opción 1</span>
                </Link>
                <Link
                  href="./simple-op-2"
                  target="_blank"
                  className="list-group-item item-sm"
                >
                  <span className="access-title">Opción 2</span>
                </Link>
                <Link
                  href="./simple-op-3"
                  target="_blank"
                  className="list-group-item item-sm"
                >
                  <span className="access-title">Opción 3</span>
                </Link>
                <Link
                  href="./simple-op-4"
                  target="_blank"
                  className="list-group-item item-sm"
                >
                  <span className="access-title">Opción 4</span>
                </Link>
                <Link
                  href="./simple-op-5"
                  target="_blank"
                  className="list-group-item item-sm"
                >
                  <span className="access-title">Opción 5</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simple;
