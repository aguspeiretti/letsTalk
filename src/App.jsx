import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Game from "./components/Game";
import Activity from "./components/Activity";
import About from "./components/About";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/juego" element={<Game />} />
        <Route path="/actividades" element={<Activity />} />
        <Route path="/acerca-de" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
