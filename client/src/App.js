import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import "./App.css";
import Footer from "./components/footer/footer";
import Home from "./pages/homepage/homepage";
import DetailVideoPage from "./components/video/singlevideo";
import SubscriptionPage from "./components/subscription/subscriptionpage";
import UploadVideo from "./pages/upload/uploadvideo";
import Login from "./components/auth/login";
import Signup from "./components/auth/signup";



const App = () => {


  return (

    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/upload" component={UploadVideo} />
          <Route exact path="/homepage" component={Home} />
          {/* <Route exact path="/video" component={DetailVideoPage} />
          <Route exact path="/subscriptions" component={SubscriptionPage} /> */}
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          {/* {<Route exact path="/login" component={Login} />} */}
          {/* <Route exact path="/signup" component={ } /> */}
          {/* {<Redirect exact from="/login" to="/homepage" />} */}
        </Switch>
      </Router>
      <Footer />
    </div>

  );
}

export default App;
