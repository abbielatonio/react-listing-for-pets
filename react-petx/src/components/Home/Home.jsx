import React from "react";
import hero from "../../assets/hero.jpg";
import Pets from "../PetSection/Pets";

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={hero} className="hero" alt="hero" />
              <div className="content">
                <h5 className="title">adopt a rescue pet.</h5>
                <p className="subtitle">Give them your pawrever 🐾</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Pets />
    </div>
  );
}

export default Home;
