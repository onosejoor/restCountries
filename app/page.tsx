import { getCountry } from "./lib/Functions";
import CountrySection from "./ui/CountriesSection";

export default async function Home() {
  const request = await getCountry();
  if (request.success) {
    const { data } = request;
    return (
      <>
        {" "}
        <main className=" px-[15px] sm:px-[30px] py-10">
          <CountrySection code={data} />
        </main>
      </>
    );
  }
}
