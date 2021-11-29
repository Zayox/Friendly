import './App.css';
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './components/Create';


function App() {
  return (
      <Router>
          <div className="App">
                <Navbar />
        <Switch>
            <Route exact path='/'>
                <Posts />
            </Route>

            <Route path='/create'>
                <Create />
            </Route>
        </Switch>

    </div>
      </Router>
  );
}

export default App;
