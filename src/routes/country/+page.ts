import type { CountryResponse } from "../../lib/models/country";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function load({ fetch }: any): Promise<CountryResponse> {
  const res = await fetch('https://restcountries.com/v3.1/all');
  const data = await res.json();


  return { countries: data };
}

