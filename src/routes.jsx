import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/home";
import FormPage from "./pages/form";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/formulario/:id",
    element: <FormPage />,
  },
]);

function Routes() {
  return (

      <RouterProvider router={router} />
  );
}

export default Routes;
