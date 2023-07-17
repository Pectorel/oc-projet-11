import { createBrowserRouter, json } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage";
import Home from "./routes/Home";
import App from "./App";
import Location from "./routes/Location";
import loaderUtilities from "./utils/loader-utilities";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Home />,
        index: true,
        loader: async () => {
          return await loaderUtilities.fetchJson("/data/data.json");
        },
      },
      {
        path: "/logement/:logementId",
        element: <Location />,
        loader: async ({ params }) => {
          let row = await loaderUtilities.checkData("/data/data.json", [
            {
              objectField: "id",
              paramField: params.logementId,
            },
          ]);
          if (row === null) {
            throw json(
              {
                errorCode: 1,
                errorMessage:
                  "Oups ! Le logement que vous cherchez est introuvable",
              },
              { status: 404 },
            );
          }
          return row;
        },
      },
      {
        path: "/a-propos",
        element: <div>Page A Propos</div>,
      },
    ],
  },
]);

export default router;
