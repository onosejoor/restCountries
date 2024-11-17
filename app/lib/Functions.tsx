"use server";
import axios, { AxiosError } from "axios";

export async function getCountry() {
  try {
    const request = await axios.get("https://restcountries.com/v3.1/all");
    const response = await request.data;

    if (response) {
      return { success: true, data: response };
    } else {
      return { success: false, message: "No Data Returned" };
    }
  } catch (error) {
    return { success: false, message: "Network Error" };
  }
}

export async function getCountryBySearch(search: string) {
  try {
    const request = await axios.get(
      `https://restcountries.com/v3.1/name/${search.toLowerCase()}`
    );
    const response = await request.data;

    if (response) {
      return { success: true, data: response };
    } else {
      return {
        success: false,
        message: `404 No country matches the keyword: ${search}`,
      };
    }
  } catch (error) {
    return { success: false, message: "Network Error" };
  }
}

export async function getCountryByRegion(region: string) {
  try {
    const request = await axios.get(
      `https://restcountries.com/v3.1/region/${region}`
    );
    const response = await request.data;

    if (!response.message) {
      return { success: true, data: response };
    } else {
      return {
        success: false,
        message: `404 No country matches the region: ${region}`,
      };
    }
  } catch (error) {
    return { success: false, message: "Network Error" };
  }
}
export async function getCountryByCode(code: string) {
  try {
    const request = await axios.get(
      `https://restcountries.com/v3.1/alpha/${code}`
    );
    const response = await request.data;

    if (response) {
      const [first] = response;
      return { success: true, data: first };
    } else {
      return {
        success: false,
        message: `404 No country matches the region: ${code}`,
      };
    }
  } catch (error: unknown) {
    const err = error as AxiosError;
    if (err.status === 404) {
      return {
        success: false,
        message: `404 No country matches the region: ${code}`,
      };
    }
    return { success: false, message: "Network Error" };
  }
}
export async function getCountryByName(code: string) {
  try {
    const request = await axios.get(
      `https://restcountries.com/v3.1/alpha/${code}`
    );
    const response = await request.data;

    if (response) {
      const [first] = response;
      return { success: true, data: first.name };
    } else {
      return {
        success: false,
        message: `404 No country matches the region: ${code}`,
      };
    }
  } catch (error) {
    return { success: false, message: "Network Error" };
  }
}
export type NativeName = {
  [key: string]: CountryName;
};

export type CountryName = {
  common: string;
};

export interface Country {
  name: {
    common: CountryName["common"];
    nativeName: NativeName;
  };
  tld: string[];
  capital: Array<string>;
  region: string;
  languages: {
    [key: string]: string;
  };
  population: number;
  cca3: string;
  flags: {
    svg: string;
  };
}
