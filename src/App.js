import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import SignIn from './components/SignIn/SignIn';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
        <Route to='/signIn'>
          <SignIn />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
