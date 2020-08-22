import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './Home';
import {About} from './About';
import {Contact} from './Contact';
import {NoMatch} from './NoMatch';

function App() {
  return (
    <React.Fragment>
	  <Router> 
	    <Switch> 
	      <Route exact path="/" component={Home} />
	      <Route exact path="/about" component={About} />
	      <Route exact path="/contact" component={Contact} />
	      <Route exact component={NoMatch} />
	    </Switch>
	  </Router>
	</React.Fragment>
  );
}

export default App;
