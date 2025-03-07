import React from "react";
import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { NavBar } from "./components";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <About />
      <Skills />
      <Work />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
