import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import LearningEnv from "./Pages/LearningEnv/LearningEnv";
import Polidle from "./Pages/Polidle/Polidle";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LearningEnv" element={<LearningEnv />} />
        <Route path="/Polidle" element={<Polidle />} />
      </Routes>
    </Router>
  );
};

export default App;
