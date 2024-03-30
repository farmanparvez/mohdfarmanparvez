import React, { Fragment } from "react";
import Header from "./sections/Header";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Work from "./sections/Work";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
// import "./style.css";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Skills />
      <Work />
      <Education />
      <About />
      <Contact />
    </Fragment>
  );
}
