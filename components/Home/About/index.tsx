import React from "react";
import Panels from "../../Panels";

export const AboutSection = () => {
  return (
    <div className="about-panels">
      <Panels
        title="Copiar el HTML"
        description="El primer paso sería copiar el HTML que necesites, este puede ser proporcionado por un desarollador, o puedes conseguirlo en Storybook."
        imageSrc="/assets/about/step-1.png"
      />

      <Panels
        title="Colocar el HTML"
        description="El segundo paso sería colocar el HTML previamente copiado, y usarlo en el editor online de esta pagina."
        imageSrc="/assets/about/step-2.png"
      />

      <Panels
        title="Editar el HTML"
        description="Este seria el tercer y ultimo paso, a esta altura podras editar el HTML dependiendo de tus requerimientos y verificar los resultados visuales en tiempo real, garantizando que el codigo que usaras se vea de la manera correcta en todo momento. "
        imageSrc="/assets/about/step-3.png"
      />
    </div>
  );
};
