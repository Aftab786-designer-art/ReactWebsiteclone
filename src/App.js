import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Textform from "./components/Textform.js";

function App() {
  return (
    <>
      <Navbar title="TextUtils"/>
      <div className="container my-3 ">
        <Textform heading="Enter the Text to Analyze Below"/>
      </div>
    </>
  );
}

export default App;
