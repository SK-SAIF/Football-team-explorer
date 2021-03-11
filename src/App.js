import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import TeamCard from './Components/TeamCard/TeamCard';
import Teams from './Components/Teams/Teams';
import NotFound from './Components/NotFound/NotFound';
import TeamDetails from './Components/TeamDetails/TeamDetails';

import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
library.add(fab);


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/header">
            <Header></Header>
          </Route>
          <Route path="/Teams">
            <Teams></Teams>
          </Route>
          <Route path="/TeamDetails/:teamId">
            <TeamDetails></TeamDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

      </Router>
      {/* <Home></Home> */}

    </div>
  );
}

export default App;
