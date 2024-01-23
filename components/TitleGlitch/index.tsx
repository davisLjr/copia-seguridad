import React from "react";

interface TitleProps {
  title: string;
}

const TitleGlitch: React.FC<TitleProps> = ({title}) => {
  return (
    <div className="about-title">
      <div className="glitch" data-text={title}>
        {title}
      </div>
    </div>
  );
};

export default TitleGlitch;
