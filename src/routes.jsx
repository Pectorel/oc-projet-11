import { createBrowserRouter, json } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage";
import Home from "./routes/Home";
import App from "./App";
import Location from "./routes/Location";
import loaderUtilities from "./utils/loader-utilities";
import About from "./routes/About";

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
          return await locationLoader(params);
        },
      },
      {
        path: "/a-propos",
        element: <About />,
      },
    ],
  },
]);

/* Loader Logic of the Location Page*/
async function locationLoader(params) {
  // We first check if the given ID is present in database
  let row = await loaderUtilities.checkData("/data/data.json", [
    {
      objectField: "id",
      paramField: params["logementId"],
    },
  ]);
  // If not in DB, then throw error and send to Error Page
  if (row === null) {
    throw json(
      {
        errorCode: 1,
        errorMessage: "Oups ! Le logement que vous cherchez est introuvable",
      },
      { status: 404 },
    );
  }
  // Return Location infos if success
  return row;
}

export default router;
