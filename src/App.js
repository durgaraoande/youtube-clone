import { HashRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<MainContainer />} />
            <Route path="watch/:id" element={<WatchPage />} />
            <Route path="results" element={<MainContainer />} />
          </Route>
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;
