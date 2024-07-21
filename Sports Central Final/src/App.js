import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Football from "./pages/Football";
import Volleyball from "./pages/Volleyball";
import Basketball from "./pages/Basketball";
import News from "./pages/News";
import Poll from "./pages/Poll";
import Rank from "./pages/Rank";
import Discussion from "./pages/Discussion";
import FacetedSearchBasketball from "./pages/FacetedSearchBasketball";
import FacetedSearchVolleyball from "./pages/FacetedSearchVolleyball";
import FacetedSearchFootball from "./pages/FacetedSearchFootball";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/football":
        title = "";
        metaDescription = "";
        break;
      case "/volleyball":
        title = "";
        metaDescription = "";
        break;
      case "/basketball":
        title = "";
        metaDescription = "";
        break;
      case "/news":
        title = "";
        metaDescription = "";
        break;
      case "/poll":
        title = "";
        metaDescription = "";
        break;
      case "/rank":
        title = "";
        metaDescription = "";
        break;
      case "/discussion":
        title = "";
        metaDescription = "";
        break;
      case "/faceted-search-basketball":
        title = "";
        metaDescription = "";
        break;
      case "/faceted-search-volleyball":
        title = "";
        metaDescription = "";
        break;
      case "/faceted-search-football":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/football" element={<Football />} />
      <Route path="/volleyball" element={<Volleyball />} />
      <Route path="/basketball" element={<Basketball />} />
      <Route path="/news" element={<News />} />
      <Route path="/poll" element={<Poll />} />
      <Route path="/rank" element={<Rank />} />
      <Route path="/discussion" element={<Discussion />} />
      <Route
        path="/faceted-search-basketball"
        element={<FacetedSearchBasketball />}
      />
      <Route
        path="/faceted-search-volleyball"
        element={<FacetedSearchVolleyball />}
      />
      <Route
        path="/faceted-search-football"
        element={<FacetedSearchFootball />}
      />
    </Routes>
  );
}
export default App;
