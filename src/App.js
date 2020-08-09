import React, {useEffect, useState} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/Home"

import './style.scss'
// import Admin from "./pages/Admin"
// import Login from "./pages/Login";
// import { AuthContext } from "./context/auth";
// import PrivateRoute from './PrivateRoute';
function App() {
  // const existingTokens = JSON.parse(localStorage.getItem("tokens")) || null;
  // const [authTokens, setAuthTokens] = useState(existingTokens);
  
  // const setTokens = (data) => {
  //   localStorage.setItem("tokens", JSON.stringify(data));
  //   setAuthTokens(data);
  // }
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    console.log('init')
    window.addEventListener('load', function() {
      setIsLoading(false)
      AOS.refresh();
    });
  });
  return (
    // <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
    <Router className="App">
        
        <div className="loading-screen" id={isLoading? 'loading-show': 'loading-hide'}>
            <img data-aos="fade-in"src={require("./svg/Double Ring-1s-200px.svg")} alt="logo"/>
            <p id="loading">Loading...</p>
        </div>
     
      <Switch>
        <Route path="/" component={Home}/>
        {/* <Route path="/login" component={Login} /> */}
        {/* <PrivateRoute path="/admin" component={Admin}/> */}
      </Switch>
    </Router>
    // </AuthContext.Provider>
  );
}

export default App;
