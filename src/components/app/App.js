import AppContainer from "./App-styles";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../navbar/Navbar";
import SearchSection from "../sections/search/Search";
import FavoritesSection from "../sections/favorites/Favorites";
import UpcomingSection from "../sections/upcoming/Upcoming";

function App() {
  const favorites = useSelector((state) => state.favorites.value);

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
