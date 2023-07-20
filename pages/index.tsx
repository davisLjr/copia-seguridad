import React, { useState } from "react";
import { Hero } from "../components/Home/Hero";
import TabsSlider from "../components/TabsSilder";
import AreaGob from "../components/Home/PageTypes/areaGob";
import Form from "../components/Home/PageTypes/form";
import Institutional from "../components/Home/PageTypes/institutional";
import News from "../components/Home/PageTypes/news";
import Area from "../components/Home/PageTypes/area";
import BookPage from "../components/Home/PageTypes/bookPage";
import Simple from "../components/Home/PageTypes/simple";
import FloatButton from "../components/FloatButton";
import Link from "next/link";

export default function Home() {

  const tabsData = [
    'Área de Gobierno',
    'Formularios',
    'Institucional',
    'Noticias',
    'Página de Área',
    'Página de Libro',
    'Página de Simple',

  ];

  // Contenido correspondiente a cada pestaña
  const tabContents = [
    <div>
      <AreaGob />
    </div>,
    <div>
      <Form />
    </div>,
    <div>
      <Institutional />
    </div>,
    <div>
      <News />
    </div>,
    <div>
      <Area />
    </div>,
    <div>
      <BookPage />
    </div>,
    <div>
      <Simple />
    </div>,
  ];

  return (
    <article>
      <header className="navbar navbar-light navbar-md">
        <div className="container">
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

      <div className="container pb-5">
        <h2 className="mb-0">Tipos de paginas</h2>
        <p className="mb-5">Navegá por los diferentes tipos de paginas realizadas con buenas practicas usando la herramienta Obelisco.</p>
        <TabsSlider tabsData={tabsData} tabContents={tabContents} />
        {/* {tabContents[activeTab]} */}
      </div>


      <div className="container pb-5">
        <h4>Seccion de prueba y maquetados</h4>

        <Link
          href="maqueta-test"
          target="_blank"
          >
            Secretaría de innovación y transformación digital
          </Link>
      </div>

    </article>
  );
}
