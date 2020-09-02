import React from "react";
import { formatDateToString } from "./dateUtils";
import { Diety } from "./Diety";
import { obliczDiete } from "./dietaUtils";
import { Zaliczka } from "./Zaliczka";
import { KosztyPrzejazdu } from "./KosztyPrzejazdu";
import { obliczKosztyPrzejazdu } from "./kilometrowkaUtils";
import { KosztyNoclegow } from "./KosztyNoclegow";
import { obliczKosztNoclegow } from "./obliczKosztNoclegowUtils";
import { KosztyDojazdow } from "./KosztyDojazdow";
import { obliczKosztDojazdow } from "./obliczKosztDojazdowUtils";
import { InneWydatki } from "./InneWydatki";
import { Podsumowanie } from "./Podsumowanie";
import { czasPodrozy } from "./czasPodrozy";
import { Expandable } from "./Expandable";
import { obliczWyzywienie } from "./obliczWyzywienieUtils";
import { STAWKI_KILOMETROWKA, STAWKI_WYZYWIENIA } from "./constants";

export function Formularz() {
  const [daneDiety, setDaneDiety] = React.useState({
    dataOd: formatDateToString(),
    godzinaOd: "00:00",
    dataDo: formatDateToString(),
    godzinaDo: "00:00",
    stawkaDiety: 30.0,
    liczbaSniadan: 0,
    liczbaObiadow: 0,
    liczbaKolacji: 0
  });

  const [dieta, setDieta] = React.useState(0.0);

  const [kosztyPrzejazdu, setKosztyPrzejazdu] = React.useState({
    kosztBilety: 0.0,
    samOsobMaly: 0.0,
    samOsobDuzy: 0.0,
    motocykl: 0.0,
    motorower: 0.0
  });

  const [lacznyKosztPrzejazdu, setLacznyKosztPzejazdu] = React.useState(0.0);

  const [kosztyNoclegow, setKosztyNoclegow] = React.useState({
    liczbaNoclegow: 0,
    kosztyNoclegowZRachunkow: 0.0
  });

  const [lacznyKosztNoclegow, setLacznyKosztNoclegow] = React.useState(0.0);

  const [kosztyDojazdow, setKosztyDojazdow] = React.useState({
    liczbaDobRyczaltu: 0,
    kosztyDojazdowZRachunkow: 0.0
  });

  const [lacznyKosztDojazdow, setLacznyKosztDojazdow] = React.useState(0.0);

  const [inneWydatki, setInneWydatki] = React.useState(0.0);

  const [zaliczka, setZaliczka] = React.useState(0.0);

  const [wynik, setWynik] = React.useState("0,00");

  const [expanded, setExpanded] = React.useState(false);

  const summaryRef = React.useRef(null);

  function createOnChange(setState) {
    return function handleOnChange(event) {
      event.persist();
      setState((oldState) => ({
        ...oldState,
        [event.target.name]: event.target.value
      }));
    };
  }

  function createOnFocus(setState) {
    return function handleOnFocus(event) {
      event.persist();
      setState((oldState) => ({
        ...oldState,
        [event.target.name]: ""
      }));
    };
  }

  function createOnBlur(setState) {
    return function handleOnBlur(event) {
      event.persist();
      setState((oldState) => ({
        ...oldState,
        [event.target.name]: oldState[event.target.name]
          ? oldState[event.target.name]
          : 0
      }));
    };
  }

  function createOnChangeShort(setState) {
    return function handleOnChangeShort(event) {
      setState(Number(event.target.value));
    };
  }

  function createOnFocusShort(setState) {
    return function handleOnFocusShort() {
      setState("");
    };
  }

  function createOnBlurShort(setState) {
    return function handleOnBlurShort(event) {
      setState("" ? 0 : Number(event.target.value));
    };
  }

  function handleOnClick(event) {
    event.preventDefault();
    let dieta = obliczDiete(
      daneDiety.dataOd,
      daneDiety.dataDo,
      daneDiety.godzinaOd,
      daneDiety.godzinaDo,
      daneDiety.stawkaDiety,
      STAWKI_WYZYWIENIA.sniadanie,
      daneDiety.liczbaSniadan,
      STAWKI_WYZYWIENIA.obiad,
      daneDiety.liczbaObiadow,
      STAWKI_WYZYWIENIA.kolacja,
      daneDiety.liczbaKolacji
    );
    let lacznyKosztPrzejazdu = obliczKosztyPrzejazdu(
      STAWKI_KILOMETROWKA.samOsobMaly,
      STAWKI_KILOMETROWKA.samOsobDuzy,
      STAWKI_KILOMETROWKA.motocykl,
      STAWKI_KILOMETROWKA.motorower,
      kosztyPrzejazdu.samOsobMaly,
      kosztyPrzejazdu.samOsobDuzy,
      kosztyPrzejazdu.motocykl,
      kosztyPrzejazdu.motorower,
      kosztyPrzejazdu.kosztBilety
    );
    let lacznyKosztNoclegow = obliczKosztNoclegow(
      kosztyNoclegow.liczbaNoclegow,
      daneDiety.stawkaDiety,
      kosztyNoclegow.kosztyNoclegowZRachunkow
    );

    let lacznyKosztDojazdow = obliczKosztDojazdow(
      kosztyDojazdow.liczbaDobRyczaltu,
      daneDiety.stawkaDiety,
      kosztyDojazdow.kosztyDojazdowZRachunkow
    );
    setDieta(dieta);
    setLacznyKosztPzejazdu(lacznyKosztPrzejazdu);
    setLacznyKosztNoclegow(lacznyKosztNoclegow);
    setLacznyKosztDojazdow(lacznyKosztDojazdow);
    setWynik(
      dieta +
        lacznyKosztPrzejazdu +
        lacznyKosztNoclegow +
        lacznyKosztDojazdow +
        inneWydatki -
        zaliczka
    );

    if (!expanded) {
      setExpanded(true);
    }
  }

  React.useEffect(() => {
    if (expanded) {
      summaryRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [expanded, wynik]);

  return (
    <form className="App_formularz">
      <Diety
        dane={daneDiety}
        onDaneDietyChange={createOnChange(setDaneDiety)}
        onDaneDietyFocus={createOnFocus(setDaneDiety)}
        onDaneDietyBlur={createOnBlur(setDaneDiety)}
      />
      <KosztyPrzejazdu
        koszty={kosztyPrzejazdu}
        onKosztyPrzejazduChange={createOnChange(setKosztyPrzejazdu)}
        onKosztyPrzejazduFocus={createOnFocus(setKosztyPrzejazdu)}
        onKosztyPrzejazduBlur={createOnBlur(setKosztyPrzejazdu)}
      />
      <KosztyNoclegow
        koszty={kosztyNoclegow}
        onKosztyNoclegowChange={createOnChange(setKosztyNoclegow)}
        onKosztyNoclegowFocus={createOnFocus(setKosztyNoclegow)}
        onKosztyNoclegowBlur={createOnBlur(setKosztyNoclegow)}
      />
      <KosztyDojazdow
        koszty={kosztyDojazdow}
        onKosztyDojazdowChange={createOnChange(setKosztyDojazdow)}
        onKosztyNoclegowFocus={createOnFocus(setKosztyDojazdow)}
        onKosztyNoclegowBlur={createOnBlur(setKosztyDojazdow)}
      />
      <InneWydatki
        value={inneWydatki}
        onInneWydatkiChange={createOnChangeShort(setInneWydatki)}
        onInneWydatkiFocus={createOnFocusShort(setInneWydatki)}
        onInneWydatkiBlur={createOnBlurShort(setInneWydatki)}
      />
      <Zaliczka
        value={zaliczka}
        onZaliczkaChange={createOnChangeShort(setZaliczka)}
        onZaliczkaFocus={createOnFocusShort(setZaliczka)}
        onZaliczkaBlur={createOnBlurShort(setZaliczka)}
      />
      <button
        type="submit"
        className="Formularz_button"
        onClick={handleOnClick}
      >
        Oblicz
      </button>
      <Expandable isExpanded={expanded}>
        <Podsumowanie
          innerRef={summaryRef}
          lacznaKwotaDiety={dieta}
          terminOd={daneDiety.dataOd + " " + daneDiety.godzinaOd}
          terminDo={daneDiety.dataDo + " " + daneDiety.godzinaDo}
          czasPodrozy={czasPodrozy(
            daneDiety.dataOd,
            daneDiety.dataDo,
            daneDiety.godzinaOd,
            daneDiety.godzinaDo
          )}
          liczbaSniadan={daneDiety.liczbaSniadan}
          liczbaObiadow={daneDiety.liczbaObiadow}
          liczbaKolacji={daneDiety.liczbaKolacji}
          kwotaWyzywienie={obliczWyzywienie(
            STAWKI_WYZYWIENIA.sniadanie,
            STAWKI_WYZYWIENIA.obiad,
            STAWKI_WYZYWIENIA.kolacja,
            daneDiety.stawkaDiety,
            daneDiety.liczbaSniadan,
            daneDiety.liczbaObiadow,
            daneDiety.liczbaKolacji
          )}
          kwotaDiety={
            dieta +
            obliczWyzywienie(
              STAWKI_WYZYWIENIA.sniadanie,
              STAWKI_WYZYWIENIA.obiad,
              STAWKI_WYZYWIENIA.kolacja,
              daneDiety.stawkaDiety,
              daneDiety.liczbaSniadan,
              daneDiety.liczbaObiadow,
              daneDiety.liczbaKolacji
            )
          }
          podsumowanieKosztyPrzejazdu={lacznyKosztPrzejazdu}
          kwotaBiletow={kosztyPrzejazdu.kosztBilety}
          kmSamDuzy={kosztyPrzejazdu.samOsobDuzy}
          kmSamMaly={kosztyPrzejazdu.samOsobMaly}
          kmMotocykl={kosztyPrzejazdu.motocykl}
          kmMotorower={kosztyPrzejazdu.motorower}
          kilometrowka={lacznyKosztPrzejazdu - kosztyPrzejazdu.kosztBilety}
          podsumowanieKosztyNoclegow={lacznyKosztNoclegow}
          liczbaNoclegow={kosztyNoclegow.liczbaNoclegow}
          kwotaRyczaltZaNoclegi={
            kosztyNoclegow.liczbaNoclegow * 1.5 * daneDiety.stawkaDiety
          }
          kosztNoclegiZRachunkow={kosztyNoclegow.kosztyNoclegowZRachunkow}
          podsumowanieKosztyDojazdow={lacznyKosztDojazdow}
          liczbaDobDoRyczaltuZaDojazdy={kosztyDojazdow.liczbaDobRyczaltu}
          kwotaRyczaltZaDojazdy={
            kosztyDojazdow.liczbaDobRyczaltu * daneDiety.stawkaDiety * 0.2
          }
          kosztyDojazdowZRachunkow={kosztyDojazdow.kosztyDojazdowZRachunkow}
          podsumowanieInneKoszty={inneWydatki}
          sumaKosztow={
            dieta +
            lacznyKosztPrzejazdu +
            lacznyKosztNoclegow +
            lacznyKosztDojazdow +
            inneWydatki
          }
          zaliczka={zaliczka}
          wynik={wynik}
        />
      </Expandable>
    </form>
  );
}
