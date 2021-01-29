import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from 'react-router-dom';
import BubblePage from './components/BubblePage';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import './styles.scss';

function App() {
  return (
    <Router>
      <div className='App'>
      <nav>
          <ul>
            <li>
              <Link to='login'>Login</Link>
            </li>
            <li>
              <Link to='/bubbles'>Bubbles</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <PrivateRoute exact path='/bubbles' component={BubblePage} />
          <Redirect exact from='/bubbles/reload' to='/bubbles' />
          <Route exact path='/' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute