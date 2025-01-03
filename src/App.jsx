import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Game from "./components/Game";
import Activity from "./components/Activity";
import About from "./components/About";
import LoginAppwrite from "./components/LoginAppwrite";
import { useUser } from "./context/UserContext";

const App = () => {
  const { current: user } = useUser();

  return (
    <Router>
      <Routes>
        {!user ? (
          <Route path="*" element={<LoginAppwrite />} />
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/juego" element={<Game />} />
            <Route path="/actividades" element={<Activity />} />
            <Route path="/acerca-de" element={<About />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
