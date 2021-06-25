import logo from './logo.svg';
import React, {Component} from "react";
import {BrowserRouter, Route, Switch, Link, withRouter, useLocation} from "react-router-dom"
import MainPage from "../src/component/MainPage/MainPage"
import HomePage from "../src/component/HomePage/HomePage"
import SlideRoutes from 'react-slide-routes';
import './App.css';
import ScorePage from './component/ScorePage/ScorePage';


function App () {


    // const location = useLocation();
  return (
    <div>
    <BrowserRouter>
    <Switch>
      {/* <h1>Enter if you dare!!</h1> */}
      {/* <SlideRoutes location={location}> */}
      <Route exact path="/" component={HomePage}/>
      <Route path="/trivia" component={MainPage}/>
      <Route path="/result" component={ScorePage}/>
      {/* </SlideRoutes> */}
    
    </Switch>
    </BrowserRouter>
    </div>
  );
  }



export default App;
