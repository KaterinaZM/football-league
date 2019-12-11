import React from "react";
import League from "./components/League";
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
        <Route exact path="/" component={League} />
      </div>
    </Router>
  );
}

export default App;
