import React from "react";
import { Expandable } from "./Expandable";
import { InputNumber } from "./InputNumber";
import { Naglowek } from "./Naglowek";

export function KosztyNoclegow(props) {
  const [expanded, setExpanded] = React.useState(false);

  function handleOnCollapseClick(event) {
    event.preventDefault();
    setExpanded((expanded) => !expanded);
  }

  return (
    <div className="Sekcja">
      <Naglowek
        title="Koszty noclegów"
        onClick={handleOnCollapseClick}
        isExpanded={expanded}
      ></Naglowek>
      <Expandable isExpanded={expanded}>
        <div className="Noclegi_wiersz">
          <div className="Wiersz_opis">
            Liczba noclegów za które przysługuje ryczałt{" "}
            <span className="asteriks">*</span>
          </div>
          <div className="Wiersz_pola">
            <InputNumber
              name="liczbaNoclegow"
              value={props.koszty.liczbaNoclegow}
              onChange={props.onKosztyNoclegowChange}
              onFocus={props.onKosztyNoclegowFocus}
              onBlur={props.onKosztyNoclegowBlur}
            />
          </div>
        </div>
        <div className="Noclegi_wiersz">
          <div className="Wiersz_opis notka">
            <span className="asteriks">*</span> Ryczałt za nocleg przysługuje,
            jeżeli nocleg trwa co najmniej 6 godzin pomiędzy godzinami 21 i 7.
          </div>
        </div>
        <div className="Noclegi_wiersz">
          <div className="Wiersz_opis">
            Koszt noclegów stwierdzony rachunkami{" "}
            <span className="asteriks">*</span>
          </div>
          <div className="Wiersz_pola">
            <InputNumber
              name="kosztyNoclegowZRachunkow"
              value={props.koszty.kosztyNoclegowZRachunkow}
              onChange={props.onKosztyNoclegowChange}
              onFocus={props.onKosztyNoclegowFocus}
              onBlur={props.onKosztyNoclegowBlur}
              unit="zł"
            />
          </div>
        </div>
        <div className="Noclegi_wiersz">
          <div className="Wiersz_opis notka">
            <span className="asteriks">*</span> Za nocleg podczas podróży
            krajowej w obiekcie świadczącym usługi hotelarskie pracownikowi
            przysługuje zwrot kosztów w wysokości stwierdzonej rachunkiem,
            jednak nie wyższej za jedną dobę hotelową niż dwudziestokrotność
            stawki diety. W uzasadnionych przypadkach pracodawca może wyrazić
            zgodę na zwrot kosztów noclegu stwierdzonych rachunkiem w wysokości
            przekraczającej ten limit.
          </div>
        </div>
      </Expandable>
    </div>
  );
}
