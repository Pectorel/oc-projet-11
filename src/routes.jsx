import { createBrowserRouter, json } from "react-router-dom";
import ErrorPage from "./routes/error-page";
import Home from "./routes/home";
import Root from "./root";
import Location from "./routes/location";
import loaderUtilities from "./libraries/loader-utilities";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
