import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-roter-dom';

function App() {
  return (
    <React.Fragment>
	  <Router> 
	    <Switch> 
	      <Route exact path="/" component={Home} />
	    </Switch>
	  </Router>
	</React.Fragment>
  );
}

export default App;
