import React from "react";
import { Expandable } from "./Expandable";
import { InputNumber } from "./InputNumber";
import { Naglowek } from "./Naglowek";

export function KosztyPrzejazdu(props) {
  const [expanded, setExpanded] = React.useState(false);

  function handleOnCollapseClick(event) {
    event.preventDefault();
    setExpanded((expanded) => !expanded);
  }
  return (
    <div className="Sekcja">
      <Naglowek
        title="Koszty przejazdu"
        onClick={handleOnCollapseClick}
        isExpanded={expanded}
      ></Naglowek>
      <Expandable isExpanded={expanded}>
        <div className="Przejazdy_wiersz">
          <div className="Wiersz_opis">Koszty biletów za przejazd </div>
          <div className="Wiersz_pola">
            <InputNumber
              name="kosztBilety"
              value={props.koszty.kosztBilety}
              onChange={props.onKosztyPrzejazduChange}
              onFocus={props.onKosztyPrzejazduFocus}
              onBlur={props.onKosztyPrzejazduBlur}
              unit="zł"
            />
          </div>
        </div>

        <div className="Przejazdy_wiersz">
          Przejazd środkiem transportu będący własnością pracownika
          (kilometrówka):
        </div>

        <div className="Przejazdy_wiersz">
          <div className="Wiersz_opis">
            samochód osobowy o poj. silnika do 900cm3
          </div>
          <div className="Wiersz_pola">
            <InputNumber
              name="samOsobMaly"
              value={props.koszty.samOsobMaly}
              onChange={props.onKosztyPrzejazduChange}
              onFocus={props.onKosztyPrzejazduFocus}
              onBlur={props.onKosztyPrzejazduBlur}
              unit="km"
            />
          </div>
        </div>

        <div className="Przejazdy_wiersz">
          <div className="Wiersz_opis">
            samochód osobowy o poj. silnika pow. 900cm3
          </div>
          <div className="Wiersz_pole">
            <InputNumber
              name="samOsobDuzy"
              value={props.koszty.samOsobDuzy}
              onChange={props.onKosztyPrzejazduChange}
              onFocus={props.onKosztyPrzejazduFocus}
              onBlur={props.onKosztyPrzejazduBlur}
              unit="km"
            />
          </div>
        </div>

        <div className="Przejazdy_wiersz">
          <div className="Wiersz_opis">motocykl</div>
          <div className="Wiersz_pole">
            <InputNumber
              name="motocykl"
              value={props.koszty.motocykl}
              onChange={props.onKosztyPrzejazduChange}
              onFocus={props.onKosztyPrzejazduFocus}
              onBlur={props.onKosztyPrzejazduBlur}
              unit="km"
            />
          </div>
        </div>

        <div className="Przejazdy_wiersz">
          <div className="Wiersz_opis">motorower</div>
          <div className="Wiersz_pole">
            <InputNumber
              name="motorower"
              value={props.koszty.motorower}
              onChange={props.onKosztyPrzejazduChange}
              onFocus={props.onKosztyPrzejazduFocus}
              onBlur={props.onKosztyPrzejazduBlur}
              unit="km"
            />
          </div>
        </div>
      </Expandable>
    </div>
  );
}
