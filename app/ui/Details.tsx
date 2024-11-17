import Link from "next/link";
import Back from "../components/Back";
import Img from "../components/Img";
import { Country, getCountryByName } from "../lib/Functions";
import commaNumber from "comma-number";

interface Props {
  country: CountryExtended;
}
interface Name {
  name: string;
}
type NGN = {
  [key: string]: Name;
};

interface CountryExtended extends Country {
  subregion: string;
  currencies: NGN;
  flags: {
    svg: string;
    alt: string;
  };
  borders?: string[];
}

export default function Details({ country }: Props) {
  const {
    population,
    flags: { svg, alt },
    borders,
    languages,
    tld,
    name,
    region,
    subregion,
    currencies,
    capital,
  } = country;

  const eng = Object.values(name.nativeName);
  const lang = Object.values(languages);
  const currencyArray = Object.values(currencies);

  return (
    <>
      <div className="grid min-h-0 min-w-0 grid-cols-1 md: lg:grid-cols-details gap-[40px] items-center p-10">
        <div className="h-full md:h-fit md:mb-auto flex flex-col gap-5">
          <Back />
          <Img
            src={svg}
            alt={alt || name.common}
            className="h-full min-w-full w-full"
          />
        </div>
        <div className="flex flex-col gap-7">
          <h2 className="text-2xl font-black  text-light_mode_text dark:text-dark_mode_white">
            {name.common}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-5">
              <b className="capitalize font-bold text-light_mode_text dark:text-dark_mode_white">
                Native name:{" "}
                <span className="text-light_mode_input">
                  {" "}
                  {eng.length > 1
                    ? eng.map((e) => {
                        return `${e.common}, `;
                      })
                    : eng[0].common}
                </span>
              </b>
              <b className="capitalize font-bold text-base text-light_mode_text dark:text-dark_mode_white">
                Population:{" "}
                <span className="text-light_mode_input">
                  {commaNumber(population)}
                </span>
              </b>
              <b className="capitalize font-bold text-base text-light_mode_text dark:text-dark_mode_white">
                region: <span className="text-light_mode_input"> {region}</span>
              </b>
              <b className="capitalize font-bold text-base text-light_mode_text dark:text-dark_mode_white">
                sub region:{" "}
                <span className="text-light_mode_input"> {subregion}</span>
              </b>
              <b className="capitalize font-bold text-base text-light_mode_text dark:text-dark_mode_white">
                capital:{" "}
                <span className="text-light_mode_input">
                  {" "}
                  {capital.length > 1
                    ? capital.map((cap) => {
                        return `${cap}, `;
                      })
                    : capital}
                </span>
              </b>
            </div>
            <div className="flex flex-col gap-5">
              <b className="capitalize font-bold text-base text-light_mode_text dark:text-dark_mode_white">
                top level domain:{" "}
                <span className="text-light_mode_input">{tld}</span>
              </b>
              <b className="capitalize font-bold text-base text-light_mode_text dark:text-dark_mode_white">
                currencies:{" "}
                <span className="text-light_mode_input">
                  {" "}
                  {currencyArray.length > 0
                    ? currencyArray.map((c) => {
                        return `${c.name} `;
                      })
                    : currencyArray[0].name}
                </span>
              </b>
              <b className="capitalize font-bold text-base text-light_mode_text dark:text-dark_mode_white">
                languages:{" "}
                <span className="text-light_mode_input">
                  {" "}
                  {lang.map((l) => {
                    return `${l}, `;
                  })}
                </span>
              </b>
            </div>
          </div>

          <div className="flex gap-5 flex-col sm:flex-row items-start">
            <h4 className="whitespace-nowrap text-light_mode_text dark:text-dark_mode_white capitalize">
              border countries:{" "}
            </h4>
            <div className="flex flex-wrap gap-3">
              {borders &&
                borders.map(async (b, index) => {
                  const borderName = await getCountryByName(b);
                  const { data } = borderName;

                  return (
                    <Link key={index} href={`/${b}`}>
                      <button className="bg-light_mode_bg h-fit dark:bg-dark_mode_elements shadow-country py-1 px-5 rounded-md ">
                        <span className="text-light_mode_input text-base dark:text-dark_mode_white">
                          {" "}
                          {data.common}
                        </span>
                      </button>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
