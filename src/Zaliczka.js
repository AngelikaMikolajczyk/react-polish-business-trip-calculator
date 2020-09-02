import React from "react";
import { Expandable } from "./Expandable";
import { InputNumber } from "./InputNumber";
import { Naglowek } from "./Naglowek";

export function Zaliczka(props) {
  const [expanded, setExpanded] = React.useState(false);

  function handleOnCollapseClick(event) {
    event.preventDefault();
    setExpanded((expanded) => !expanded);
  }
  return (
    <div className="Sekcja">
      <Naglowek
        title="Zaliczka"
        onClick={handleOnCollapseClick}
        isExpanded={expanded}
      ></Naglowek>
      <Expandable isExpanded={expanded}>
        <div className="Zaliczka_wiersz">
          <div className="Wiersz_opis">Kwota pobranej zaliczki</div>
          <div className="Wiersz_pola">
            <InputNumber
              name="zaliczka"
              value={props.value}
              onChange={props.onZaliczkaChange}
              onFocus={props.onZaliczkaFocus}
              onBlur={props.onZaliczkaBlur}
              unit="zł"
            />
          </div>
        </div>
      </Expandable>
    </div>
  );
}
