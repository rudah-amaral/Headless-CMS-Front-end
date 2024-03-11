import {
  NavLink,
  Outlet,
  ScrollRestoration,
  useLoaderData,
} from "react-router-dom";
import { loaderData } from "./loader";
import { useReadQuery } from "@apollo/client";

export default function SiteHeader() {
  const queryRef = useLoaderData() as loaderData;
  const response = useReadQuery(queryRef);

  if (response.error) throw response.error;
  const { data: categories } = response.data.categories;

  return (
    <>
      <div className="site-header">
        <NavLink to="/">
          <h1>Ninja Reviews</h1>
        </NavLink>
        <nav className="categories">
          <span>Filter reviews by category:</span>
          {categories.map((category) => (
            <NavLink key={category.id} to={`/category/${category.id}`}>
              {category.attributes.name}
            </NavLink>
          ))}
        </nav>
      </div>
      <Outlet />
      <ScrollRestoration />
    </>
  );
}
