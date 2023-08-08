import React from "react";
import { Link } from "react-router-dom";

const OrderConfirmation = ({ data }) => {
  return (
    <div style={{ backgroundColor: "red", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", color: "white" }}>
      <h1>Teknolojik Yemekler</h1>
      <p>TEBRİKLER!</p>
      <p>SİPARİŞİNİZ ALINDI!</p>
    </div>
  );
};

export default OrderConfirmation;
