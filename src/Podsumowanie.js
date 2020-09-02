import React from "react";
import { currencyFormatter } from "./currencyFormatter";
import { dateFormatter } from "./dateFormatter";

function Podnaglowek(props) {
  return (
    <div className="Podsumowanie_podnaglowek">
      <div className="Podnaglowek_opis">{props.tytulPodnaglowka}</div>
      <div className="Podnaglowek_pole">{props.kwotaPodnaglowka}</div>
    </div>
  );
}

function Wiersz(props) {
  return (
    <div className={"Podsumowanie_wiersz " + props.className}>
      <div className="Wiersz_opis">{props.tytulWiersza}</div>
      <div className="Wiersz_pole">{props.wartoscPola}</div>
    </div>
  );
}

export function Podsumowanie(props) {
  return (
    <div className="Sekcja" ref={props.innerRef}>
      <div className="Naglowek">
        <h2>Podsumowanie</h2>
      </div>
      <Podnaglowek
        tytulPodnaglowka="Diety "
        kwotaPodnaglowka={currencyFormatter.format(props.lacznaKwotaDiety)}
      />
      <Wiersz
        tytulWiersza="Data i godzina wyjazdu: "
        wartoscPola={dateFormatter.format(new Date(props.terminOd))}
      />
      <Wiersz
        tytulWiersza="Data i godzina powrotu: "
        wartoscPola={dateFormatter.format(new Date(props.terminDo))}
      />
      <Wiersz tytulWiersza="Czas podróży: " wartoscPola={props.czasPodrozy} />
      <Wiersz
        tytulWiersza="Wysokość diet:"
        wartoscPola={currencyFormatter.format(props.kwotaDiety)}
      />
      <Wiersz
        tytulWiersza="Liczba zapewnionych śniadań: "
        wartoscPola={props.liczbaSniadan}
      />
      <Wiersz
        tytulWiersza="Liczba zapewnionych obiadów: "
        wartoscPola={props.liczbaObiadow}
      />
      <Wiersz
        tytulWiersza="Liczba zapewnionych kolacji: "
        wartoscPola={props.liczbaKolacji}
      />
      <Wiersz
        tytulWiersza="Łączna kwota zmniejszająca diety z tytułu zapewnionego wyżywienia: "
        wartoscPola={currencyFormatter.format(props.kwotaWyzywienie)}
      />
      <Podnaglowek
        tytulPodnaglowka="Koszty przejazdu "
        kwotaPodnaglowka={currencyFormatter.format(
          props.podsumowanieKosztyPrzejazdu
        )}
      />
      <Wiersz
        tytulWiersza="Koszty biletów: "
        wartoscPola={currencyFormatter.format(props.kwotaBiletow)}
      />
      <Wiersz
        tytulWiersza="Przejazd samochodem osobowym (do 900cm3): "
        wartoscPola={props.kmSamMaly + " km"}
      />
      <Wiersz
        tytulWiersza="Przejazd samochodem osobowym (pow. 900cm3): "
        wartoscPola={props.kmSamDuzy + " km"}
      />
      <Wiersz
        tytulWiersza="Przejazd motocyklem: "
        wartoscPola={props.kmMotocykl + " km"}
      />
      <Wiersz
        tytulWiersza="Przejazd motorowerem: "
        wartoscPola={props.kmMotorower + " km"}
      />
      <Wiersz
        tytulWiersza="Koszty przejazdów rozliczanych kilometrówką: "
        wartoscPola={currencyFormatter.format(props.kilometrowka)}
      />
      <Podnaglowek
        tytulPodnaglowka="Koszty noclegów "
        kwotaPodnaglowka={currencyFormatter.format(
          props.podsumowanieKosztyNoclegow
        )}
      />
      <Wiersz
        tytulWiersza="Liczba noclegów za które przysługuje ryczałt: "
        wartoscPola={props.liczbaNoclegow}
      />
      <Wiersz
        tytulWiersza="Kwota przysługującego ryczałtu: "
        wartoscPola={currencyFormatter.format(props.kwotaRyczaltZaNoclegi)}
      />
      <Wiersz
        tytulWiersza="Koszty noclegów stwierdzony rachunkami: "
        wartoscPola={currencyFormatter.format(props.kosztNoclegiZRachunkow)}
      />
      <Podnaglowek
        tytulPodnaglowka="Koszty dojazdów komunikacją miejską "
        kwotaPodnaglowka={currencyFormatter.format(
          props.podsumowanieKosztyDojazdow
        )}
      />
      <Wiersz
        tytulWiersza="Liczba rozpoczętych dób za które przysługuje ryczałt za dojazdy: "
        wartoscPola={props.liczbaDobDoRyczaltuZaDojazdy}
      />
      <Wiersz
        tytulWiersza="Kwota przysługującego ryczałtu: "
        wartoscPola={currencyFormatter.format(props.kwotaRyczaltZaDojazdy)}
      />
      <Wiersz
        tytulWiersza="Udokumentowane koszty dojazdu: "
        wartoscPola={currencyFormatter.format(props.kosztyDojazdowZRachunkow)}
      />
      <Podnaglowek
        tytulPodnaglowka="Zwrot innych udokumentowanych wydatków "
        kwotaPodnaglowka={currencyFormatter.format(
          props.podsumowanieInneKoszty
        )}
      />
      <Podnaglowek tytulPodnaglowka="Wynik" kwotaPodnaglowka={" "} />
      <Wiersz
        tytulWiersza="Suma kosztów: "
        wartoscPola={currencyFormatter.format(props.sumaKosztow)}
        className="Wynik"
      />
      <Wiersz
        tytulWiersza="Pobrana zaliczka: "
        wartoscPola={currencyFormatter.format(props.zaliczka)}
        className="Wynik"
      />
      <Wiersz
        tytulWiersza={props.wynik < 0 ? "Do zwrotu: " : "Do wypłaty: "}
        wartoscPola={
          props.wynik < 0
            ? currencyFormatter.format(props.wynik * -1)
            : currencyFormatter.format(props.wynik)
        }
        className="Wynik"
      />
    </div>
  );
}
