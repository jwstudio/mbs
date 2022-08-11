import React from "react";
import Projects from "./pages/Projects";
import ProjectPost from "./pages/ProjectPost";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import NoPage from "./pages/nopage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";

export default class App extends React.PureComponent {
  render() {
    return (
      <React.StrictMode>
      <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            
            <Route path="/menu" exact component={Menu} />

            <Route path="/projects" exact component={Projects} />
            <Route path='/projects/:projectPost' component={ProjectPost} />

            <Route path='*' component={NoPage} />
        </Switch>
      </Router>
      </React.StrictMode>
    );
  }
}
