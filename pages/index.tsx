import React from "react";
import {Hero} from "../components/Home/Hero";
import {CodeEditor} from "../components/codepen";
import {TitleGlitch} from "../components/TitleGlitch";
import {Header} from "../components/Layout/components/header/header";
import {AboutSection} from "../components/Home/About";

export default function Home() {
  return (
    <>
      <article>
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
