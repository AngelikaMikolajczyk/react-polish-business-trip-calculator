import React from "react";

export function Naglowek(props) {
  return (
    <div className="Naglowek">
      <h2>{props.title}</h2>
      <button className="Naglowek_button" onClick={props.onClick}>
        {props.isExpanded ? "zwiń" : "rozwiń"}
      </button>
    </div>
  );
}
