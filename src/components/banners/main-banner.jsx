import React from "react";

export const MainBanner = ({ title, text, img, full }) => {
  return (
    <div style={full ? { backgroundColor: "red" } : {}}>
      <img src={img} alt="img" />
      <h1>{title}</h1>
      <p>{text}</p>
      <button>send</button>
    </div>
  );
};
