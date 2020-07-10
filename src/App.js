import React from 'react';
import './css/App.css';
import "./css/animate.css"
import"./css/owl.carousel.min.css"
import"./css/owl.theme.default.min.css"
import"./css/magnific-popup.css"
import"./css/flaticon.css"
import"./css/style.css"
import Header from "./Components/header"
import Home from "./pages/Home"
import About from "./pages/About"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
   <Router>
      <Header/>
       <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
