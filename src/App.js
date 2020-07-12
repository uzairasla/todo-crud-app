import React from "react";
import Title from "./Components/Title";
import TekeInput from "./Actions/TekeInput";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="container mt-5 shadow">
      <Title title="Todo Application" />
      <TekeInput />
    </div>
  );
}

export default App;
