import React from "react";
import { achievements } from "../../portfolio/portfolio";
import "./Highlights.css";

const Highlights = () => {
  if (!achievements.length) return null;

  return (
    <section className="section highlights reveal" id="highlights">
      <h2 className="section__title">Highlights</h2>
      <div className="highlights__grid">
        {achievements.map((item, index) => (
          <article key={index} className="highlight">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
