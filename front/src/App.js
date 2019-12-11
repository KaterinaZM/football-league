import React from "react";
import TaskList from "./components/TaskList";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={TaskList} />
      </div>
    </Router>
  );
}

export default App;
