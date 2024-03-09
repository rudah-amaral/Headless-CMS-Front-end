import type { LoaderFunctionArgs } from "react-router-dom";
import type { APIResponse } from "../../types/types";
export type loaderData = Awaited<ReturnType<typeof loader>>;

export default async function loader({ params }: LoaderFunctionArgs) {
  const url = `http://localhost:1337/api/reviews/${params.id}`;
  const res = await fetch(url);

  // Throws if status not 2xx
  if (!res.ok) throw res;

  const { data }: APIResponse<"api::review.review"> = await res.json();

  return data;
}
