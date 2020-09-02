export function czasPodrozy(dataOd, dataDo, godzinaOd, godzinaDo) {
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

  const czas = `${dni}d ${godzinyDoOdjecia}g ${minutyDoOdjecia}min`;

  return czas;
}
