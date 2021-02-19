
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import "./App.css";
import Footer from "./components/footer/footer";
import Homepage from "./components/homepage/homepage";
import UploadVideo from "./components/upload/UploadVideoPage";
import DetailVideoPage from "./components/video/DetailVideoPage";
import SubscriptionPage from "./components/subscription/SubscriptionPage";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Router>
        {/* <div> */}
        {/* <Route exact path="/" component={(login, false)} />
              <Route exact path="/signup" component={(signup, false)} /> */}
        {/* <Route exact path="/homepage" component={(null)} /> */}
        <Route exact path="/upload" component={UploadVideo} />
        {/* <Route exact path="/video/:videoId" component={(DetailVideoPage, null)} /> */}
        {/* <Route exact path="/subscription" component={SubscriptionPage} /> */}
        {/* </div> */}
      </Router>

      <Footer />
    </div>
  );
}

export default App;
