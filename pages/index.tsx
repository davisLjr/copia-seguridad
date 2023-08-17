import React from "react";
import { Hero } from "../components/Home/Hero";
// import TabsSlider from "../components/TabsSilder";
// import AreaGob from "../components/Home/PageTypes/areaGob";
// import Form from "../components/Home/PageTypes/form";
// import Institutional from "../components/Home/PageTypes/institutional";
// import News from "../components/Home/PageTypes/news";
// import Area from "../components/Home/PageTypes/area";
// import BookPage from "../components/Home/PageTypes/bookPage";
// import Simple from "../components/Home/PageTypes/simple";
// import FloatButton from "../components/FloatButton";
import CodeEditor from "../components/codepen";

export default function Home() {
  // const tabsData = [
  //   'Área de Gobierno',
  //   'Formularios',
  //   'Institucional',
  //   'Noticias',
  //   'Página de Área',
  //   'Página de Libro',
  //   'Página de Simple',

  // ];

  // Contenido correspondiente a cada pestaña
  // const tabContents = [
  //   <div>
  //     <AreaGob />
  //   </div>,
  //   <div>
  //     <Form />
  //   </div>,
  //   <div>
  //     <Institutional />
  //   </div>,
  //   <div>
  //     <News />
  //   </div>,
  //   <div>
  //     <Area />
  //   </div>,
  //   <div>
  //     <BookPage />
  //   </div>,
  //   <div>
  //     <Simple />
  //   </div>,
  // ];

  return (
    <>
      <article>
        <header className="navbar navbar-light navbar-md px-4">
          <div>
            <a href="#" className="navbar-brand">
              <img
                className="header-logo  w-75"
                src="https://gcba.github.io/estandares/obelisco.svg"
                alt="Logo de la ciudad de Buenos Aires"
              />
            </a>
          </div>
        </header>

        <Hero />

        <CodeEditor />
        {/* 
        <div className="container pb-5">
          <h2 className="mb-0">Tipos de paginas</h2>
          <p className="mb-5">Navegá por los diferentes tipos de paginas realizadas con buenas practicas usando la herramienta Obelisco.</p>
          <TabsSlider tabsData={tabsData} tabContents={tabContents} />
        </div>

        <div className="container">
          <FloatButton />
        </div> */}
      </article>
      {/* <footer className="main-footer mt-5">
        <div className="container">
          <section>
            <h4>Redes de la ciudad</h4>
            <ul className="list-inline">
              <li className="list-inline-item redes-items">
                <a href="https://www.facebook.com/GCBA">
                  <i className="bx bxl-facebook"></i>
                  Facebook
                </a>
              </li>
              <li className="list-inline-item redes-items">
                <a href="https://www.instagram.com/buenosaires">
                  <i className="bx bxl-instagram"></i>
                  Instagram
                </a>
              </li>
              <li className="list-inline-item redes-items">
                <a href="https://twitter.com/gcba">
                  <i className="bx bxl-twitter"></i>
                  Twitter
                </a>
              </li>
              <li className="list-inline-item redes-items">
                <a href="https://www.youtube.com/user/GCBA">
                  <i className="bx bxl-youtube"></i>
                  YouTube
                </a>
              </li>
              <li className="list-inline-item redes-items">
                <a href="https://ar.linkedin.com/company/gobierno-de-la-ciudad-de-buenos-aires">
                  <i className="bx bxl-linkedin"></i>
                  LinkedIn
                </a>
              </li>
            </ul>
          </section>
        </div>
        <hr className="divider" />
        <div className="container">
          <section className="footer-legal-section">
            <div className="row align-items-center">
              <div className="col-12 col-md-5 col-xl-4 footer-content-img mb-2">
                <img
                  className="d-lg-none"
                  src="https://gcba.github.io/Obelisco/footer/ciudad-ba-sm.svg"
                  alt="Ciudad de Buenos Aires"
                  height="48"
                />
                <img
                  className="d-none d-lg-inline"
                  src="https://gcba.github.io/Obelisco/footer/ciudad-ba.svg"
                  alt="Ciudad de Buenos Aires"
                  height="40"
                />
                <img
                  className="img-vamos-ba"
                  src="https://gcba.github.io/Obelisco/footer/vamos-ba.svg"
                  alt="Vamos Buenos Aires"
                />
              </div>
            </div>
          </section>
          <section>
            <div className="footer-license-text">
              Los contenidos de buenosaires.gob.ar están licenciados bajo
              Creative Commons Reconocimiento 2.5 Argentina License.
            </div>
          </section>
        </div>
      </footer> */}
    </>
  );
}
