import React from "react";

interface TitleProps {
  title: string;
}

export const TitleGlitch: React.FC<TitleProps> = ({title}) => {
  return (
    <div className="about-title">
      <div className="glitch" data-text={title}>
        {title}
      </div>
    </div>
  );
};
