import React, { useState } from "react";
import styles from "./Hero.module.scss";

export const Hero = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight, // Scroll hacia abajo de 100vh
      behavior: "smooth", // Animación de scroll suave
    });
  };
  return (
    <header className={`d-flex overflow-hidden  ${styles.customHeight}`}>
      <div className="row w-100 h-100 m-0 align-items-center">
        <div className="col-md-6 col-12 px-2">
          <div className="d-block px-1 px-md-3">
            <h1 className="mb-3">Create designs faster with Obelisco</h1>
            <p className="lead">
              {" "}
              On this website you can use our online editor to quickly test all
              of our components.
            </p>
            <button
              type="button"
              className="btn btn-primary btn-lg btn-icon"
              onClick={handleScroll}
            >
              Get Started <i className="bx bx-right-arrow-alt"></i>
            </button>
          </div>
        </div>
        <div
          className={`col-md-6 d-none d-md-block p-0 ${styles.heroImage}`}
        ></div>
      </div>
    </header>
  );
};
