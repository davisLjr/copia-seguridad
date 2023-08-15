import React, { useState } from "react";
import styles from "./Hero.module.scss";
import { ArrowFloating } from "../ArrowFloat";
import Typed from "react-typed";

export const Hero = () => {
  const [h1Complete, setH1Complete] = useState(false);
  const [pVisible, setPVisible] = useState(false);

  const handleH1Complete = () => {
    setH1Complete(true);
  };

  const handlePVisible = () => {
    setTimeout(() => {
      setPVisible(true);
    }, 500); // Wait 500 milliseconds before showing the <p>
  };

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <header className={`d-flex overflow-hidden  ${styles.customHeight}`}>
      <div className={`${styles.test}`}></div>
      <div className="row w-100 h-100 m-0 align-items-center">
        <div className="col-md-6 col-12 px-2">
          <div className="d-block px-1 px-md-3">
            <h1 className="mb-3">
              <Typed
                strings={[
                  "Create designs faster with Obelisco",
                ]}
                typeSpeed={40}
                backSpeed={20}
                onComplete={() => {
                  handleH1Complete();
                  handlePVisible(); // Trigger showing the <p>
                }}
                showCursor={!h1Complete} // Hide cursor when h1 is complete
              />
            </h1>
            {pVisible && (
              <p className="lead">
                <Typed
                  strings={[
                    "On this website you can use our online editor to quickly test all of our components.",
                  ]}
                  typeSpeed={40}
                  startDelay={500}
                  cursorChar="." // Set the cursorChar to a point
                />
              </p>
            )}
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
      <ArrowFloating />
    </header>
  );
};
