import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

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
          {
            path:"results",
            element:<MainContainer/>
          }
        ],
      },
    ],
  );
  return (
    <Provider store={appStore}>
  <RouterProvider router={appRoute} />
  </Provider>
  );
}

export default App;
