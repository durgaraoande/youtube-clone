import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

function App() {
  const appRoute = createBrowserRouter([
      {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "/",
            element: <MainContainer />,
          },
          {
            path: "/watch/:id",
            element: <WatchPage />,
          },
        ],
      },
    ],
  );
  return <RouterProvider router={appRoute} />;
}

export default App;
