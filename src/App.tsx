import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// Components
import SiteHeader from "./components/SiteHeader.tsx";
import Homepage from "./pages/Homepage.tsx";
import ReviewDetails from "./pages/ReviewDetails.tsx";
import Category from "./pages/Category.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SiteHeader />}>
      <Route index element={<Homepage />} />
      <Route path="/details/:id" element={<ReviewDetails />} />
      <Route path="/category/:id" element={<Category />} />
    </Route>,
  ),
);

export default function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
