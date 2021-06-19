import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from '../src/components/auth/Login'
import NewAccount from '../src/components/auth/NewAccount'
import Projects from '../src/components/projects/Projects'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/new-account" component={NewAccount} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </Router>
  );
}

export default App;
