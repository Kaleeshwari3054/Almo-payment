// Clients.jsx
import React from "react";
import almo1 from "../assets/Clients/Almo-1.jpeg";
import almo2 from "../assets/Clients/Almo-2.jpeg";
import almo3 from "../assets/Clients/Almo-3.jpeg";
import almo4 from "../assets/Clients/Almo-4.jpeg";
import almo5 from "../assets/Clients/Almo-5.jpeg";
import almo6 from "../assets/Clients/Almo-6.jpeg";
import almo7 from "../assets/Clients/Almo-7.jpeg";
import almo8 from "../assets/Clients/Almo-8.jpeg";
import almo9 from "../assets/Clients/Almo-9.jpeg";
import almo10 from "../assets/Clients/Almo-10.jpeg";
import almo11 from "../assets/Clients/Almo-11.jpeg";
import almo12 from "../assets/Clients/Almo-12.jpeg";
import almo13 from "../assets/Clients/Almo-13.jpeg";
import almo14 from "../assets/Clients/Almo-14.jpeg";
import almo15 from "../assets/Clients/Almo-15.jpeg";
import almo16 from "../assets/Clients/Almo-16.jpg";
import "../Styles/Clients.css";

const Clients = () => {
  const logos = [
    almo1,
    almo2,
    almo3,
    almo4,
    almo5,
    almo6,
    almo7,
    almo8,
    almo9,
    almo10,
    almo11,
    almo12,
    almo13,
    almo14,
    almo15,
    almo16,
  ];

  return (
    <section className="clients-strip">
      <div className="clients-container">
        <div className="clients-heading">
          <p className="clients-kicker">OUR TRUSTED CLIENTS</p>
          {/* <h2>Brands that rely on Almodesk</h2> */}
          <p className="clients-subtitle">
            16+ companies growing their business with us.
          </p>
        </div>

        <div className="clients-strip-inner">
          <div className="clients-track">
            {[...logos, ...logos].map((logo, idx) => (
              <div className="client-item" key={idx}>
                <img src={logo} alt={`Client ${idx + 1}`} />
              </div>
            ))}
          </div>
          {/* Reverse track for two-way effect */}
          {/* <div className="clients-track reverse">
    {[...logos, ...logos].map((logo, idx) => (
      <div className="client-item" key={`rev-${idx}`}>
        <img src={logo} alt={`Client ${idx + 1}`} />
      </div>
    ))}
  </div> */}
        </div>
      </div>
    </section>
  );
};

export default Clients;
