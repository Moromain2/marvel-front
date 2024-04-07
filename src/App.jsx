// Modules imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Routing
import { useState, useEffect } from "react";

// CSS imports
import './App.scss'

// Pages imports
import HomePage from "./pages/Home";
import CharactersPage from "./pages/Characters";
import SingleCharacterPage from "./pages/SingleCharcacter";
import ComicsPage from "./pages/Comics";
import SingleComicPage from "./pages/SingleComic";
import FavoritesPage from "./pages/Favorites";

// Components imports
import Header from "./components/Header";


function App() {
  // Search state
  const [search, setSearch] = useState("");

  return (
    <>
      <Router>
        <Header setSearch={setSearch} search={search} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters" element={<CharactersPage />} search={search} />
          <Route path="/character/:characterId" element={<SingleCharacterPage />} />
          <Route path="/comics" element={<ComicsPage />} search={search} />
          <Route path="/comic/:comicId" element={<SingleComicPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
