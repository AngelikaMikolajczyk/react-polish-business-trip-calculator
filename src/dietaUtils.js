import { obliczWyzywienie } from "./obliczWyzywienieUtils";

export function obliczDiete(
  dataOd,
  dataDo,
  godzinaOd,
  godzinaDo,
  stawkaDiety,
  stawkaSniadanie,
  liczbaSniadanie,
  stawkaObiad,
  liczbaObiad,
  stawkaKolacja,
  liczbaKolacja
) {
  const data_od = dataOd + " " + godzinaOd;
  const data_do = dataDo + " " + godzinaDo;
  const termin_od = new Date(data_od);
  const termin_do = new Date(data_do);
  const roznica = termin_do - termin_od;
  const minuty = roznica / 60000;
  const minutyDoOdjecia = minuty % 60;
  const godziny = (minuty - minutyDoOdjecia) / 60;
  const godzinyDoOdjecia = godziny % 24;
  const dni = (godziny - godzinyDoOdjecia) / 24;
  let dieta;

  /* Poniższe obliczenia wynikają z zapisów Rozporzędznia Ministra Pracy i Polityki Społecznej 
      w sprawie należności przysługujących pracownikowi zatrudnionemu w państwowej lub samorządowej 
      jednostce sfery budżetowej z tytułu podróży służbowej. Rozporządzenie dostępne na stronie sejmu RP
      pod linkiem: http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20130000167/O/D20130167.pdf */

  if (dni < 1) {
    if (godzinyDoOdjecia < 8) {
      dieta = 0;
    } else if (
      (godzinyDoOdjecia === 8 && minutyDoOdjecia >= 0) ||
      (godzinyDoOdjecia > 8 && godzinyDoOdjecia < 12) ||
      (godzinyDoOdjecia === 12 && minutyDoOdjecia === 0)
    ) {
      dieta = stawkaDiety * 0.5;
    } else {
      dieta = stawkaDiety;
    }
  } else {
    if (godzinyDoOdjecia === 0 && minutyDoOdjecia === 0) {
      dieta = dni * stawkaDiety;
    } else if (
      godzinyDoOdjecia < 8 ||
      (godzinyDoOdjecia === 8 && minutyDoOdjecia === 0)
    ) {
      dieta = (dni + 0.5) * stawkaDiety;
    } else {
      dieta = (dni + 1) * stawkaDiety;
    }
  }

  const wyzywienieDoDiety = obliczWyzywienie(
    stawkaSniadanie,
    stawkaObiad,
    stawkaKolacja,
    stawkaDiety,
    liczbaSniadanie,
    liczbaObiad,
    liczbaKolacja
  );

  return dieta - wyzywienieDoDiety;
}
