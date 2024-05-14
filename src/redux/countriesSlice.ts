import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface ICountryType {
  name: string
  topLevelDomain: string[]
  alpha2Code: string
  alpha3Code: string
  callingCodes: string[]
  capital: string
  altSpellings: string[]
  subregion: string
  region: string
  population: number
  latlng: number[]
  demonym: string
  area: number
  gini: number
  timezones: string[]
  borders: string[]
  nativeName: string
  numericCode: string
  flags: Flags
  currencies: Currency[]
  languages: Language[]
  translations: Translations
  flag: string
  cioc: string
  independent: boolean
}

export interface Flags {
  svg: string
  png: string
}

export interface Currency {
  code: string
  name: string
  symbol: string
}

export interface Language {
  iso639_1: string
  iso639_2: string
  name: string
  nativeName: string
}

export interface Translations {
  br: string
  pt: string
  nl: string
  hr: string
  fa: string
  de: string
  es: string
  fr: string
  ja: string
  it: string
  hu: string
}

export interface ICountriesState {
  data: ICountryType[];
  searchedCountries: ICountryType[];
  filteredCountries: ICountryType[];
  searchAndFilteredCountries: ICountryType[];
}


export const getAllCountries = createAsyncThunk<ICountryType[], void>(
  'countries',
  async () => {
    const response = await axios.get<ICountryType[]>("https://restcountries.com/v2/all");
    return response.data;
  }
);


const initialState: ICountriesState = {
  data: [],
  searchedCountries: [],
  filteredCountries: [],
  searchAndFilteredCountries: []
};

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    searchCountries: (state, action: PayloadAction<string>) => {
      const input = action.payload;
      state.searchedCountries = state.data.filter((country) => country.name.toLowerCase().includes(input.toLowerCase()))
    },
    filterCountries: (state, action: PayloadAction<string>) => {
      const option = action.payload;
      state.filteredCountries = state.data.filter((country) => country.region.toLowerCase().includes(option.toLowerCase()))
    },
    searchAndFilterCountries: (state, action: PayloadAction<string>) => {
      const option = action.payload;
      state.searchAndFilteredCountries = state.searchedCountries.filter((country) => country.region.toLowerCase().includes(option.toLowerCase()))
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCountries.fulfilled, (state, action: PayloadAction<ICountryType[]>) => {
      state.data = action.payload
    })
  },
});

export const {searchCountries, filterCountries , searchAndFilterCountries} = countriesSlice.actions;

export default countriesSlice.reducer;