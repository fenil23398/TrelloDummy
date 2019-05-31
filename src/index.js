import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import BoardDisplay from "./Components/boardDisplay";
import Header from "./Components/header";
import subHeader from "./Components/subHeader";
import DetailCardCompo from "./Components/detailCardCompo";

const routing=(
  <Router>
  <div>
  <Route exact path="/" component={BoardDisplay} />
  <Route path="/getHeader" component={Header} />
  <Route path="/subHeader" component={subHeader} />
  <Route path="/detailCardDisplay/:id" component={DetailCardCompo} />
  </div>
  </Router>
  )


ReactDOM.render(
 routing,
  document.getElementById('root')
);
