import Navbar from "./components/Navbar";
import Create from "./components/Create";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
      <Router>
          <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
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
