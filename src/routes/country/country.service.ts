export async function fetchCountries() {
  const url = 'https://restcountries.com/v3.1/all';
  const res = await fetch(url);
  const data = await res.json();

  return data;
}
