import React from "react";
import { Formularz } from "./Formularz";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Kalkulator krajowej podróży służbowej</h1>
      <Formularz className="App_formularz" />
    </div>
  );
}
