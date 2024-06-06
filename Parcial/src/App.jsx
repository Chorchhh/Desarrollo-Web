import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import PaginaPrincipal from "../pages/PaginaPrincipal";
import Info from "../pages/Info";

const App = () => {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<PaginaPrincipal/>} />
            <Route path="/games/:id" element={<Info/>} />
          </Routes>
    </Router>
  );
};

export default App;
