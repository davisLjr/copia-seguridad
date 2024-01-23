import React, {FC} from "react";

interface PanelsProps {
  title: string;
  description: string;
  imageSrc: string;
  Reverse?: string;
}

export const Panels: FC<PanelsProps> = ({
  title,
  description,
  imageSrc,
  Reverse,
}) => {
  return (
    <>
      <div className="panel-horizontal-content">
        <div className={`card card-simple panel-horizontal ${Reverse}`}>
          <img
            src={imageSrc}
            alt="descripción de imagen"
            className="card-img"
          />
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
