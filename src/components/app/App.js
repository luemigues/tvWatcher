import AppContainer from "./App-styles";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { removeSelectedShow } from "../../store/selectedShow.slice"
import Navbar from "../navbar/Navbar";
import SearchSection from "../sections/search/Search";
import FavoritesSection from "../sections/favorites/Favorites";
import UpcomingSection from "../sections/upcoming/Upcoming";

function App() {
  const favorites = useSelector((state) => state.favorites.value);
  const dispatch = useDispatch()
  const location = useLocation();

  useEffect(() => {
    dispatch(removeSelectedShow());
  }, [location, dispatch]);


  return (
    <AppContainer>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<SearchSection />} exact />
          <Route path="/favorites" element={<FavoritesSection />} />
          <Route
            path="/upcoming"
            element={<UpcomingSection favorites={favorites} />}
          />
        </Routes>
      </main>
    </AppContainer>
  );
}

export default App;
