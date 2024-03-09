import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// Layouts
import SiteHeader from "./components/SiteHeader.tsx";

// Pages
import Homepage from "./pages/Homepage/Homepage.tsx";
import ReviewDetails from "./pages/ReviewDetails/ReviewDetails.tsx";
import Category from "./pages/Category/Category.tsx";

// loaders
import homepageLoader from "./pages/Homepage/loader.ts";
import reviewDetailsloader from "./pages/ReviewDetails/loader.ts";

// Errors
import HomepageError from "./pages/Homepage/Error.tsx";
import ReviewDetailsError from "./pages/ReviewDetails/Error.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SiteHeader />}>
      <Route
        index
        element={<Homepage />}
        loader={homepageLoader}
        errorElement={<HomepageError />}
      />
      <Route
        path="/details/:id"
        element={<ReviewDetails />}
        loader={reviewDetailsloader}
        errorElement={<ReviewDetailsError />}
      />
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
