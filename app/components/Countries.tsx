import Link from "next/link";
import Img from "./Img";
import { CountryName } from "../lib/Functions";
import commaNumber from "comma-number";

interface Country {
  title: CountryName;
  flag: string;
  population: number;
  region: string;
  capital?: string[];
  code: string;
}

const Countries = (details: Country) => {
  return (
    <Link href={`/${details.code}`} className="mx-auto">
      <div className="w-[300px]  dark:shadow-none shadow-country rounded-md overflow-hidden bg-white dark:bg-dark_mode_elements">
        <Img
          src={details.flag}
          alt={details.title.common}
          className="h-[200px] object-cover"
        />
        <div className="p-5 flex flex-col gap-5">
          <h3 className=" dark:text-dark_mode_white text-2xl font-bold">
            {details.title.common}
          </h3>

          <div className="flex flex-col gap-3">
            <p className=" bg-transparent text-light_mode_text capitalize dark:text-dark_mode_white">
              population:{" "}
              <span className="text-light_mode_input ">
                {commaNumber(details.population)}
              </span>
            </p>
            <p className="text-light_mode_text dark:text-dark_mode_white capitalize">
              region:{" "}
              <span className="text-light_mode_input">
                {details.region}
              </span>
            </p>
            <p className="text-light_mode_text dark:text-dark_mode_white capitalize">
              capital:{" "}
              <span className="text-light_mode_input ">
                {details.capital?.map((ca) =>
                  details?.capital && details.capital.length > 1
                    ? ca + ", "
                    : ca
                )}
              </span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Countries;
