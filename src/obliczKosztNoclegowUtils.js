import { STAWKA_RYCZALTU_ZA_NOCLEGI } from "./constants";

export function obliczKosztNoclegow(
  liczbaNoclegow,
  stawkaDieta,
  kosztNoclegowZRachunow
) {
  let lacznyKoszt =
    liczbaNoclegow * STAWKA_RYCZALTU_ZA_NOCLEGI * stawkaDieta +
    Number(kosztNoclegowZRachunow);
  return lacznyKoszt;
}
