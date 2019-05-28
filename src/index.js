import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

import { Router,Route,browserHistory } from 'react-router';
import BoardDisplay from "./Components/boardDisplay";

// const routing=(
//   <Router history = {browserHistory}>
//       <Route exact path="/" component={BoardDisplay}/>
//   </Router>
// )
ReactDOM.render(
 <BoardDisplay />,
  document.getElementById('root')
);
