import React, { useRef, useState  } from 'react';
import Slider from 'react-slick';
import styles from './React-slick.module.scss';

const TabsSlider = ({ tabsData, tabContents }) => {
  const sliderRef = useRef<Slider | null>(null);
  const [activeTab, setActiveTab] = useState(0);
  
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handleScrollLeft = () => {
    sliderRef.current?.slickPrev();
  };

  const handleScrollRight = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <>
      <nav className="tabs-slider">
        <ul className="nav nav-pills tabs">
          <Slider ref={sliderRef} {...settings} className={`${styles.customSlider}`}>
            {tabsData.map((tab, index) => (
              <li
              key={index}
              className="nav-item"
              onClick={() => setActiveTab(index)}
              >
                <button className={`nav-link w-100 ${activeTab === index ? 'active' : ''}`} type='button'>
                  <div className="nav-icon">
                    {tab}
                    <span className="material-icons-round">home</span>
                  </div>
                </button>
              </li>
            ))}
          </Slider>
        </ul>
        <div className="icons-container">
          <button className={`right-left icon d-flex ${styles.customButtom}`}onClick={handleScrollLeft} id="left">
            <span className="material-icons-round">arrow_back_ios</span>
          </button>
          <button className={`right-left icon ${styles.customButtom}`} onClick={handleScrollRight} id="right">
            <span className="material-icons-round">arrow_forward_ios</span>
          </button>
        </div>
      </nav>
      <hr />
      <div className={`${styles.tabContent}`}>
      {/* Mostrar el contenido de la pestaña activa */}
      {tabContents[activeTab]}
      </div>
    </>
  );
};

export default TabsSlider;
