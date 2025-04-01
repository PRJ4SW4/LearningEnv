import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import LearningEnv from "./Pages/LearningEnv/LearningEnv";
import Polidle from "./Pages/Polidle/Polidle";
// Importet gamemodes
import ClassicMode from "./Pages/Polidle/ClassicMode";
import CitatMode from "./Pages/Polidle/CitatMode";
import FotoBlurMode from "./Pages/Polidle/FotoBlurMode";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LearningEnv" element={<LearningEnv />} />
        <Route path="/Polidle" element={<Polidle />} />
        // gamemodes
        <Route path="/ClassicMode" element={<ClassicMode />} />
        <Route
          path="/CitatMode"
          element={
            <CitatMode
              citat="Sample Citat"
              correctPolitiker="Sample Politician"
            />
          }
        />
        <Route
          path="/FotoBlurMode"
          element={
            <FotoBlurMode
              imageUrl="sample-image-url.jpg"
              correctPolitiker="Sample Politician"
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
