// import { func } from "prop-types";
import { useState, useEffect } from "react";
import Movie from "./components/Movie.js"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./routes/Home.js"
import Detail from "./routes/Detail.js";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )

}

export default App;
