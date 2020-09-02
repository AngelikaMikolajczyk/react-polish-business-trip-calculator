import React from "react";
import { Expandable } from "./Expandable";
import { InputNumber } from "./InputNumber";
import { Naglowek } from "./Naglowek";

export function KosztyDojazdow(props) {
  const [expanded, setExpanded] = React.useState(false);

  function handleOnCollapseClick(event) {
    event.preventDefault();
    setExpanded((expanded) => !expanded);
  }

  return (
    <div className="Sekcja">
      <Naglowek
        title="Koszty dojazdów środkami komunikacji miejskiej"
        onClick={handleOnCollapseClick}
        isExpanded={expanded}
      ></Naglowek>
      <Expandable isExpanded={expanded}>
        <div className="Dojazdy_wiersz">
          <div className="Wiersz_opis">
            Liczba rozpoczętych dób pobytu za które przysługuje ryczałt za
            dojazdy{" "}
          </div>
          <div className="Wiersz_pola">
            <InputNumber
              name="liczbaDobRyczaltu"
              value={props.koszty.liczbaDobRyczaltu}
              onChange={props.onKosztyDojazdowChange}
              onFocus={props.onKosztyNoclegowFocus}
              onBlur={props.onKosztyNoclegowBlur}
            />
          </div>
        </div>
        <div className="Dojazdy_wiersz">
          <div className="Wiersz_opis">
            Kwota z tytułu udokumentowanych kosztów dojazdów
          </div>
          <div className="Wiersz_pola">
            <InputNumber
              name="kosztyDojazdowZRachunkow"
              value={props.koszty.kosztyDojazdowZRachunkow}
              onChange={props.onKosztyDojazdowChange}
              onFocus={props.onKosztyNoclegowFocus}
              onBlur={props.onKosztyNoclegowBlur}
              unit="zł"
            />
          </div>
        </div>
      </Expandable>
    </div>
  );
}
