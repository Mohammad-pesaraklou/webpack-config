import React from "react";
import "/src/style.css";
import webpackImg from "./ASSETS/webpack-img.jpg";
const App = () => {
  return (
    <div className="app">
      <h1>webpack starter config successfully</h1>
      <img src={webpackImg} className="img"/>
    </div>
  );
};

export default App;
