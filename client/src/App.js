
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
import DetailVideoPage from "./components/video/detailvideopage";
import SubscriptionPage from "./components/subscription/subscriptionpage";
import Dashboard from "../src/components/login/dashboard/dashboard";
import Preferences from "../src/components/login/preferences/preferences";
import UploadVideo from "./components/upload/uploadvideo";
import Login from "./components/login/login";
import SignUp from "./components/signup/signup"



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/video/upload" component={UploadVideo} />
          <Route exact path="/homepage" component={Homepage} />
          <Route exact path="/video" component={DetailVideoPage} />
          <Route exact path="/subscriptions" component={SubscriptionPage} />
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          {/* <Route exact path="/login" component={Login} /> */}
          {/* <Route exact path="/signup" component={ } /> */}
          {/* <Redirect exact from="/login" to="/hompage" /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
