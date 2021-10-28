import React from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import Home from "./pages/Home";
import Experiences from "./pages/Experiences";
import Skills from "./pages/Skills";
import Parcours from "./pages/Parcours";
import Hobbies from "./pages/Hobbies";
import NotFound from "./pages/404";
import MouseMoove from "./components/animation/mouseMoove";

import { ThemeProvider } from "./components/ThemeContext";

export default function App() {


  return (
    <Router>
     <ThemeProvider>
      <MouseMoove/>
      <Switch>
        <Route exact path="/" component={Home}>
          <Home/>
        </Route>
        <Route exact path="/experiences" component={Experiences}>
          <Experiences/>
        </Route>
        <Route exact path="/skills" component={Skills}>
          <Skills/>
        </Route>
        <Route exact path="/parcours" component={Parcours}>
          <Parcours/>
        </Route>
        <Route exact path="/hobbies" component={Hobbies}>
         <Hobbies/>
        </Route>
        <Route component={NotFound}></Route>
      </Switch>
      </ThemeProvider>
    </Router>

  );
  }
