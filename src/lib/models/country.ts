export interface CountryResponse {
  countries: Country[]
}

export interface Country {
  cioc: string
  capital: string[]
  name: Name
  flags: Flags
  population: number
  timezones: string[]
  continent: string[]
}

interface Name {
  common: string
  official: string
}

interface Flags {
  png: string
  svg: string
}
