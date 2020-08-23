import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { NoMatch } from "./pages/noMatch";
import Login from "./pages/login";
import Find from "./pages/find";
import Share from "./pages/share";

import Footer from "./components/footer";
import { TopBar, NavBar } from "./components/topbar";

import { selectCurrentUser } from "./redux/user/user.selector";

import "./App.css";

function App({ currentUser }) {
  return (
    <React.Fragment>
      <TopBar />
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/find" component={Find} />
          <Route exact path="/share" component={Share} />
          <Route
            exact
            path="/signin"
            render={() => (currentUser ? <Redirect to="/" /> : <Login />)}
          />
          <Route exact component={NoMatch} />
        </Switch>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, null)(App);
