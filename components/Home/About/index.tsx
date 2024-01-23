import React from "react";
import Panels from "../../Panels";

export const AboutSection = () => {
  return (
    <div className="about-panels">
      <Panels
        title="Copiar el HTML"
        description="El primer paso sería copiar el HTML que necesites; este puede ser proporcionado por un desarrollador, o puedes conseguirlo en Storybook."
        imageSrc="/assets/about/step-1.png"
      />

      <Panels
        title="Colocar el HTML"
        description="El segundo paso sería colocar el HTML previamente copiado y usarlo en el editor en línea de esta página."
        imageSrc="/assets/about/step-2.png"
      />

      <Panels
        title="Editar el HTML"
        description="Este sería el tercer y último paso. A esta altura, podrás editar el HTML según tus requerimientos y verificar los resultados visuales en tiempo real, garantizando que el código que usarás se vea de la manera correcta en todo momento."
        imageSrc="/assets/about/step-3.png"
      />
    </div>
  );
};
