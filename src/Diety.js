import React from "react";
import { Expandable } from "./Expandable";
import { validateDate } from "./validateDate";
import { InputNumber } from "./InputNumber";
import { Naglowek } from "./Naglowek";

function InputDate(props) {
  return (
    <input
      type="date"
      value={props.value}
      min="2017-01-01"
      max="2020-12-31"
      name={props.name}
      onChange={props.onChange}
    />
  );
}

function InputTime(props) {
  return (
    <input
      type="time"
      value={props.value}
      name={props.name}
      onChange={props.onChange}
    />
  );
}

function Wyzywienie(props) {
  return (
    <div className="Wyzywienie">
      <div className="Wiersz_opis">Liczba {props.label}</div>
      <div className="Wiersz_pola">
        <InputNumber
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
        />
      </div>
    </div>
  );
}

export function Diety(props) {
  const [expanded, setExpanded] = React.useState(false);

  function handleOnCollapsClick(event) {
    event.preventDefault();
    setExpanded((expanded) => !expanded);
  }

  return (
    <div className="Sekcja">
      <Naglowek
        title="Diety"
        onClick={handleOnCollapsClick}
        isExpanded={expanded}
      ></Naglowek>
      <Expandable isExpanded={expanded}>
        <div className="Diety_wiersz">
          <div className="Wiersz_opis">Data i godzina wyjazdu</div>
          <div className="Wiersz_pola">
            <InputDate
              name="dataOd"
              value={props.dane.dataOd}
              onChange={props.onDaneDietyChange}
            />

            <InputTime
              name="godzinaOd"
              value={props.dane.godzinaOd}
              onChange={props.onDaneDietyChange}
            />
          </div>
        </div>
        <div className="Diety_wiersz">
          <div className="Wiersz_opis">Data i godzina powrotu</div>
          <div className="Wiersz_pola">
            <InputDate
              name="dataDo"
              value={props.dane.dataDo}
              onChange={props.onDaneDietyChange}
            />
            <InputTime
              name="godzinaDo"
              value={props.dane.godzinaDo}
              onChange={props.onDaneDietyChange}
            />
          </div>
        </div>
        {validateDate(props.dane.dataOd, props.dane.dataDo) ? (
          <div className="Diety_wiersz walidacja">
            Data powrotu nie może być wcześniejsza niż data wyjazdu!
          </div>
        ) : null}
        <div className="Diety_wiersz">
          <div className="Wiersz_opis">
            Wysokość diety za dobę podróży <span className="asteriks">*</span>
          </div>
          <div className="Wiersz_pola">
            <InputNumber
              name="stawkaDiety"
              value={props.dane.stawkaDiety}
              onChange={props.onDaneDietyChange}
              onFocus={props.onDaneDietyFocus}
              onBlur={props.onDaneDietyBlur}
              unit="zł"
            />
          </div>
        </div>
        <div className="Diety_wiersz">
          <div className="Wiersz_opis notka">
            <span className="asteriks">*</span> Pamiętaj, że kwota powyżej
            limitu 30 zł stanowi przychód pracownika! Należy wtedy pracownikowi
            z tego tytułu naliczyć podatek dochodowy oraz stanowi podstawę
            wymiaru składek ZUS.
          </div>
        </div>
        <div className="Diety_wiersz">
          Koszt zapewnionego wyżywienia zmniejszającego diety:
        </div>
        <div className="Diety_wiersz">
          <Wyzywienie
            name="liczbaSniadan"
            label="śniadań"
            value={props.dane.liczbaSniadan}
            onChange={props.onDaneDietyChange}
            onFocus={props.onDaneDietyFocus}
            onBlur={props.onDaneDietyBlur}
          />
          <Wyzywienie
            name="liczbaObiadow"
            label="obiadów"
            value={props.dane.liczbaObiadow}
            onChange={props.onDaneDietyChange}
            onFocus={props.onDaneDietyFocus}
            onBlur={props.onDaneDietyBlur}
          />
          <Wyzywienie
            name="liczbaKolacji"
            label="kolacji"
            value={props.dane.liczbaKolacji}
            onChange={props.onDaneDietyChange}
            onFocus={props.onDaneDietyFocus}
            onBlur={props.onDaneDietyBlur}
          />
        </div>
      </Expandable>
    </div>
  );
}
