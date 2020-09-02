export function validateDate(stringDataOd, stringDataDo) {
  const dataOd = new Date(stringDataOd);
  const dataDo = new Date(stringDataDo);

  return dataOd > dataDo;
}
