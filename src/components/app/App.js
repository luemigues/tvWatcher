import AppContainer from "./App-styles";
import Navbar from "../navbar/Navbar";
import SectionHeader from "../sectionContainer/SectionHeader";

function App() {
  return (
    <AppContainer>
      <Navbar />
      <SectionHeader title="Dont miss out on any updates from your favorite shows" />
    </AppContainer>
  );
}

export default App;
