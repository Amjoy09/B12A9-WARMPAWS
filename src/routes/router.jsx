import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/",
        element: <h2>Welcome Home...</h2>,
      },
    ],
  },
  {
    path: "/*",
    element: <p>404: Page not found</p>,
  },
]);

export default router;
