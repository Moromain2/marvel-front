// Modules imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Routing

// CSS imports
import './App.scss'

// Pages imports
import HomePage from "./pages/Home";
import CharactersPage from "./pages/Characters";
import SingleCharacterPage from "./pages/SingleCharcacter";
import ComicsPage from "./pages/Comics";
import SingleComicPage from "./pages/SingleComic";

// Components imports
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/character/:characterId" element={<SingleCharacterPage />} />
          <Route path="/comics" element={<ComicsPage />} />
          <Route path="/comic/:comicId" element={<SingleComicPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
