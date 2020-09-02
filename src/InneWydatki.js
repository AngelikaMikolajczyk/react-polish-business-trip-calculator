import React from "react";
import { Expandable } from "./Expandable";
import { InputNumber } from "./InputNumber";
import { Naglowek } from "./Naglowek";

export function InneWydatki(props) {
  const [expanded, setExpanded] = React.useState(false);

  function handleOnCollapseClick(event) {
    event.preventDefault();
    setExpanded((expanded) => !expanded);
  }

  return (
    <div className="Sekcja">
      <Naglowek
        title="Zwrot innych udokumentowanych wydatków"
        onClick={handleOnCollapseClick}
        isExpanded={expanded}
      ></Naglowek>
      <Expandable isExpanded={expanded}>
        <div className="Inne_wiersz">
          <div className="Wiersz_opis">
            Kwota łączna innych udokumentowanych i uzasadnionych wydatków{" "}
          </div>
          <div className="Wiersz_pola">
            <InputNumber
              name="kwotaInneWydatki"
              value={props.value}
              onChange={props.onInneWydatkiChange}
              onFocus={props.onInneWydatkiFocus}
              onBlur={props.onInneWydatkiBlur}
              unit="zł"
            />
          </div>
        </div>
      </Expandable>
    </div>
  );
}
