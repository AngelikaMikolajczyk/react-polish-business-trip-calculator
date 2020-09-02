import { STAWKA_RYCZALTU_ZA_DOAJZDY } from "./constants";

export function obliczKosztDojazdow(
  liczbaDob,
  stawkaDiety,
  kwotaDojazdowZRachunkow
) {
  let kosztyDojazdow =
    liczbaDob * stawkaDiety * STAWKA_RYCZALTU_ZA_DOAJZDY +
    Number(kwotaDojazdowZRachunkow);
  return kosztyDojazdow;
}
