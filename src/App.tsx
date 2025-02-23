import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from "./Details";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default App;
