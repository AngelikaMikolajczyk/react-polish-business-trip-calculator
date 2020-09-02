export function obliczKosztyPrzejazdu(
  stawkaSamMaly,
  stawkaSamDuzy,
  stawkaMotocykl,
  stawkaMotorower,
  kmSamMaly,
  kmSamDuzy,
  kmMotocykl,
  kmMotorower,
  kosztBilety
) {
  let kosztyPrzejazdu =
    stawkaSamMaly * kmSamMaly +
    stawkaSamDuzy * kmSamDuzy +
    stawkaMotocykl * kmMotocykl +
    stawkaMotorower * kmMotorower +
    Number(kosztBilety);

  return parseFloat(kosztyPrzejazdu);
}
