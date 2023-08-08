import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "./Assets/mvp-banner.png";
import './Home.css'; 

const Home = () => {
 
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh", 
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={backgroundImageStyle}>
      <h1 className="h1Baslik">Teknolojik Yemekler</h1>
      <h2 className="h2Baslik">
        KOD ACIKTIRIR
        <br />
        PİZZA, DOYURUR
      </h2>
      <Link to="/pizza" id="order-pizza" >
        ACIKTIM
      </Link>
    </div>
  );
};

export default Home;

