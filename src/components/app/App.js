import AppContainer from "./App-styles";
import Navbar from "../navbar/Navbar";
import SearchSection from "../sections/search/Search";

function App() {
  return (
    <AppContainer>
      <Navbar />
      <SearchSection />
    </AppContainer>
  );
}

export default App;
