"use client";
import { useEffect, useState } from "react";
import Input from "./Input";
import Countries from "../components/Countries";
import {
  Country,
  getCountryByRegion,
  getCountryBySearch,
} from "../lib/Functions";
import Loading from "../loading";

interface Props {
  code: Country[];
}

export default function CountrySection({ code }: Props) {
  const [text, setText] = useState("");
  const [selected, setSelected] = useState("");
  const [country, setCountry] = useState(code);

  useEffect(() => {
    if (!selected) {
      return setCountry(code);
    }
    const get = async () => {
      const request = await getCountryByRegion(selected);
      if (request.success) {
        setCountry(request.data);
        return;
      } else return null;
    };
    get();
  }, [selected, code]);

  useEffect(() => {
    if (!text.trim()) {
      setCountry(code);
    }
    const get = async () => {
      const request = await getCountryBySearch(text);
      if (request.success) {
        setCountry(request.data);
        return;
      } else return null;
    };
    get();
  }, [text, code]);


  return (
    <>
      <Input
        setText={setText}
        text={text}
        selected={selected}
        setSelected={setSelected}
      />
      <section
        className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:grid-cols-4 my-10 gap-10  justify-self-stretch"
        // className="flex flex-wrap my-10 gap-[50px]  justify-between"
      >
        {" "}
        {country.map((country: Country, index: number) => {
          const {
            name,
            population,
            cca3,
            capital,
            region,
            flags: { svg },
          } = country;
          return (
            <Countries
              key={index}
              title={name}
              population={population}
              code={cca3}
              capital={capital}
              region={region}
              flag={svg}
            />
          );
        })}
      </section>
    </>
  );
}
