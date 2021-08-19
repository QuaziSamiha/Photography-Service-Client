import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import SignIn from './components/SignIn/SignIn';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
        <Route to='/signIn'>
          <SignIn />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='*'>
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
