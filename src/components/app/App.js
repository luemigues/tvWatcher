import AppContainer from "./App-styles";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../navbar/Navbar";
import SearchSection from "../sections/search/Search";
import FavoritesSection from "../sections/favorites/Favorites";
import UpcomingSection from "../sections/upcoming/Upcoming";
import SelectedShow from "../sections/selectedShow/SelectedShow";

function App() {
  const favorites = useSelector((state) => state.favorites.value);
  const selectedShow = useSelector((state) => state.selectedShow.isSelected);

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
      {selectedShow && <SelectedShow />}
      </main>
    </AppContainer>
  );
}

export default App;
