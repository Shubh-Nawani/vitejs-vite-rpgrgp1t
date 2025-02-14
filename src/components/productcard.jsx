// write product card here
import React from "react";
import reactsvg from "../assets/react.svg";
import ViewProductButton from "./button"; 

const Productcard = () => {
  // Static product details
  const productImage = reactsvg ;
  const productName = "Sample Product";
  const price = "$99.99";

  return (
    <div style={{
      backgroundColor: "white",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      borderRadius: "10px",
      padding: "16px",
      width: "250px",
      textAlign: "center",
      border: "1px solid #ddd"
    }}>
      <img
        src={productImage}
        alt="Product"
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "10px"
        }}
      />
      <h2 style={{ fontSize: "18px", marginTop: "10px" }}>{productName}</h2>
      <p style={{ color: "gray", fontSize: "16px", fontWeight: "bold" }}>{price}</p>
      <ViewProductButton />
    </div>
  );
};

export default Productcard;
