export function obliczWyzywienie(
  stawkaSniadanie,
  stawkaObiad,
  stawkaKolacja,
  stawkaDieta,
  liczbaSniadan,
  liczbaObiadow,
  liczbaKolacji
) {
  const kwotaWyzywienia =
    stawkaDieta *
    (stawkaSniadanie * liczbaSniadan +
      stawkaObiad * liczbaObiadow +
      stawkaKolacja * liczbaKolacji);

  return kwotaWyzywienia;
}
