import Link from "next/link";
import React from "react";

const AreaGob = () => {
  return (
    <div className="d-flex flex-wrap">
      <div className="col-12 col-lg-4 mb-4">
        <div className="group-access">
          <div className="card-access">
            <div className="card-access-body p-list reverse">
              <div>
                <h3 className="card-access-title">Primer nivel</h3>
                <p className="card-access-text">Modelos de ejemplo</p>
              </div>
              <i className="bx bxs-buildings card-access-icon"></i>
            </div>
            <div className="container-access">
              <hr className="clearfix" />
              <div className="access-option">
                <Link
                  href="./area_gob_op1"
                  target="_blank"
                  className="list-group-item item-sm"
                >
                  <span className="access-title">Opción 1</span>
                </Link>
                <Link
                  href="./area_gob_op2"
                  target="_blank"
                  className="list-group-item item-sm"
                >
                  <span className="access-title">Opción 2</span>
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
                <h3 className="card-access-title">Segundo nivel</h3>
                <p className="card-access-text">Modelos de ejemplo</p>
              </div>
              <i className="bx bxs-buildings card-access-icon"></i>
            </div>
            <div className="container-access">
              <hr className="clearfix" />
              <div className="access-option">
                <Link
                  href="./area_gob_2_op1"
                  target="_blank"
                  className="list-group-item item-sm"
                >
                  <span className="access-title">Opción 1</span>
                </Link>
                <Link
                  href="./area_gob_2_op2"
                  target="_blank"
                  className="list-group-item item-sm"
                >
                  <span className="access-title">Opción 2</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaGob;
