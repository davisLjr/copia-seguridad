import React from "react";

export const Hero = () => {
  return (
    <>
      <div className="title-container">
        <div className="title-mask">
          <div className="hero-container">
            <div className="hero-title">
              <h1>Te invito a Editor Obelisco</h1>
              <p>
                En este sitio web podras probar los componentes de Obelisco e
                interactuar con los mismos para usarlos posteriormente copiando
                y pegando el codigo
              </p>
            </div>
            <div className="hero-bg">
              <div className="box">
                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
