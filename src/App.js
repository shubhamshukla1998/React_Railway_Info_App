import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

//import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import TrainBwStationCont from "./components/TrainBwStation/TrainBwStationCont";
import LiveStatusContainer from "./components/LiveStatus/LiveStatusContainer";
import FareContainer from "./components/Fare/FareContainer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/About" component={About}/>
          <Route path="/LiveStatus">
            <LiveStatusContainer />
          </Route>
          <Route path="/Fare">
            <FareContainer />
          </Route>
          <Route path="/TrainBwStation">
            <TrainBwStationCont />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
