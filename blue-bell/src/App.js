import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Userinfo from './components/Userinfo';
import Contentarea from './components/Contentarea';
import Navarea from './components/Navarea';
import Home from './components/Home';
import Friendlist from './components/Friendlist';
import Newsfeed from './components/Newsfeed';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/Home'>Home</Link>
            </li>
            <li>
              <Link to='/Friendlist'>friends</Link>
            </li>
            <li>
              <Link to='/Newsfeed'>news</Link>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/Home'>
            <Home/>
          </Route>
          <Route path='/Friendlist'>
            <Friendlist/>
          </Route>
          <Route path='/Newsfeed'>
            <Newsfeed/>
          </Route>
        </Switch>
      </div>
    </Router>
      
      
    </div>
  );
}

export default App;
