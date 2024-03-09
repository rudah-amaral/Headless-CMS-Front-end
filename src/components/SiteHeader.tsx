import { NavLink, Outlet, ScrollRestoration } from "react-router-dom";

export default function SiteHeader() {
  return (
    <>
      <div className="site-header">
        <NavLink to="/">
          <h1>Ninja Reviews</h1>
        </NavLink>
      </div>
      <Outlet />
      <ScrollRestoration />
    </>
  );
}
