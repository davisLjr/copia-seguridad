import React from "react";
import {Hero} from "../components/Home/Hero";
import {CodeEditor} from "../components/codepen";
import {TitleGlitch} from "../components/TitleGlitch";
import {Header} from "../components/Layout/components/header/header";
import {AboutSection} from "../components/Home/About";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Agradecimiento a Neitrys Barrera, con su ayuda puedo desarrollar paginas web." />
        <meta property="og:title" content="Neitrys Barrera - Practicas de programación" />
        <meta property="og:description" content="Esto es una practica de desarrollo guiada por Neitrys Barrera." />
      </Head>
      <article>
        <h1 style={{ opacity: 0, height: '1px' }} >Neitrys Barrera</h1>
        <Header />
        <Hero />
        <TitleGlitch title="COMO SE USA" />
        <AboutSection />
        <TitleGlitch title="EDITOR ONLINE" />
        <CodeEditor />
      </article>
    </>
  );
}
