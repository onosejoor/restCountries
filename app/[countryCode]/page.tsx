import { getCountryByCode } from "../lib/Functions";
import NotFound from "../not-found";
import Details from "../ui/Details";
import Error from "./error";

export default async function DetailsPage({
  params,
}: {
  params: Promise<{ countryCode: string }>;
}) {
  const id = (await params).countryCode;
  const find = await getCountryByCode(id);

  if (find.success) {
    const { data } = find;
    return <Details country={data} />;
  } else if (find.message?.includes("404 No country")) return <NotFound />;
  return <Error />;
}
