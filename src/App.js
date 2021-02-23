import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Project from "./pages/Project";
import "./style.css";

function App() {

  return (

      <Router>
        <div className="app">        
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/project/:name">
            <Project/>
          </Route>          
        </Switch>
        </div>
        <Footer/>
      </Router>

  );
}

export default App;
