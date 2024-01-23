import Image from "next/image";
import React from "react";

export const Header = () => {
  return (
    <header>
      <div>
        <a href="#" className="logo-header align-items-center d-flex">
          <Image
            src="/assets/header/codificacion.png"
            alt="Logo del editor obelisco"
            width={35}
            height={35}
          />
          Editor Obelisco
        </a>
      </div>
    </header>
  );
};
