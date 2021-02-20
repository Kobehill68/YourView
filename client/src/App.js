
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import "./App.css";
import Footer from "./components/footer/footer";
import Homepage from "./components/homepage/homepage";
import DetailVideoPage from "./components/video/etailideoage";
import SubscriptionPage from "./components/subscription/ubscriptionage";
import Dashboard from "../src/components/login/dashboard/dashboard";
import Preferences from "../src/components/login/preferences/preferences";
import UploadVideo from "./components/upload/ploadideoage";
// import Login from "./components/login/login"



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Homepage />
        <Switch>
          <Route exact path="/upload" component={UploadVideo} />
          {/* <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} /> */}
          {/* <Route exact path="/signup" component={ } /> */}
          {/* <Redirect exact from="/login" to="/hompage" /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
