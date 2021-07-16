import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from '../src/components/auth/Login'
import NewAccount from '../src/components/auth/NewAccount'
import Projects from '../src/components/projects/Projects'
import ProjectState from './contex/projects/ProjectState'
import TaskState from './contex/tasks/TaskState'

function App() {
  return (
    <ProjectState>
      <TaskState>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/new-account" component={NewAccount} />
            <Route exact path="/projects" component={Projects} />
          </Switch>
        </Router>
      </TaskState>
    </ProjectState>
  );
}

export default App;
