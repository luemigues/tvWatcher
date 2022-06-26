import AppContainer from "./App-styles";
import { Routes, Route } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import SearchSection from "../sections/search/Search";
import FavoritesSection from "../sections/favorites/Favorites";

function App() {
  return (
    <AppContainer>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<SearchSection />} exact />
          <Route path="/favorites" element={<FavoritesSection />} />
        </Routes>
      </main>
    </AppContainer>
  );
}

export default App;
