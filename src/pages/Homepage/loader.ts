import type { APIResponseCollection } from "../../types/types";
export type loaderData = Awaited<ReturnType<typeof loader>>;

export default async function loader() {
  const url = "http://localhost:1337/api/reviews";
  const res = await fetch(url);

  // Throws if status not 2xx
  if (!res.ok) throw res;

  const { data }: APIResponseCollection<"api::review.review"> =
    await res.json();

  return data;
}
