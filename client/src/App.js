import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import "./App.css";
import Footer from "./components/footer/footer";
import Homepage from "./components/homepage/homepage";
import DetailVideoPage from "./components/video/singlevideo";
import SubscriptionPage from "./components/subscription/subscriptionpage";
import UploadVideo from "./components/upload/uploadvideo";
import Login from "./components/auth/login";
import Signup from "./components/auth/signup";
import NProgress from "nprogress"


const App = () => {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();
  }, [location]);

  useEffect(() => {
    NProgress.done();
  }, [location]);

  return (

    <div>
      <Navbar />
      <Switch>
        <Route exact path="/video/upload" component={UploadVideo} />
        <Route exact path="/homepage" component={Homepage} />
        <Route exact path="/video" component={DetailVideoPage} />
        <Route exact path="/subscriptions" component={SubscriptionPage} />
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        {/* {<Route exact path="/login" component={Login} />} */}
        {/* <Route exact path="/signup" component={ } /> */}
        {/* {<Redirect exact from="/login" to="/homepage" />} */}
      </Switch>
      <Footer />
    </div>

  );
}

export default App;
