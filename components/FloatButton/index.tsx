import React from "react";
import CodeEditor from "../codepen";
import styles from './FloatButton.module.scss';

const FloatButton = () => {
  return (
    <div className={styles.floatingButton}>
      <button
        type="button"
        className="btn btn-primary btn-lg btn-icon"
        data-toggle="modal"
        data-target="#exampleModal1"
      >
        Probar código
        <span className="material-icons-round">mode_edit</span>
      </button>
      <div className="modal fade" role="dialog" id="exampleModal1">
        <div
          className="modal-dialog modal-dialog-centered modal-xl"
          role="document"
        >
          <div className="modal-content pt-4">
            <div className="modal-body">
              <CodeEditor />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-danger"
                data-dismiss="modal"
              >
                cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatButton;
