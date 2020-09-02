export function formatDateToString(data = new Date()) {
  const rok = data.getFullYear();
  const indexMiesiac = data.getMonth() + 1;
  const miesiac =
    indexMiesiac.toString().length === 2 ? indexMiesiac : `0${indexMiesiac}`;
  const dzien =
    data.getDate().toString().length === 2
      ? data.getDate()
      : `0${data.getDate()}`;
  return `${rok}-${miesiac}-${dzien}`;
}
