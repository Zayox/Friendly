import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react';
import Create from "./components/Create";
import Posts from "./components/Posts";

function App() {
  return (
      <Router>
          <div className="App">
              <Navbar />
              <Switch>
                  <Route exact path="/">
                      <Posts />
                  </Route>
                  <Route path="/create">
                      <Create />
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
