import React from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { NoMatch } from "./pages/noMatch";
import Login from "./pages/login";

import { Layout } from "./components/layout";
import Footer from "./components/footer";
import TopBar from "./components/topbar";

function App() {
  return (
    <React.Fragment>
      <TopBar />
      {/* <Navigation /> */}
      {/* <Layout> */}
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/signin" component={Login} />
          <Route exact component={NoMatch} />
        </Switch>
      </Router>
      {/* </Layout> */}
      <Footer />
    </React.Fragment>
  );
}

export default App;
