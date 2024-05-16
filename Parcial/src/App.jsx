import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PaginaPrincipal from "./pages/PaginaPrincipal";
import SportDetailsPage from "./pages/Info";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact element={PaginaPrincipal} />
          <Route path="/games/:id" element={Info} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
