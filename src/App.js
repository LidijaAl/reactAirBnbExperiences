import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

import "./style.css";
//
export default function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        item={item}
        //we can use spread : {...item}
        //if you do you neeed to remove ".item"
      />
    );
  });

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <section className="cards-section">
      {cards}
      </section>
    </div>
  );
}
