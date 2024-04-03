// Modules imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Routing

// CSS imports
import './App.css'

// Pages imports
import HomePage from "./pages/Home";
import CharactersPage from "./pages/Characters";
import ComicsPage from "./pages/Comics";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/comics" element={<ComicsPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
