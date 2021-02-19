
import React from "react";
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import "./App.css";
import Footer from "./components/footer/footer";
import Homepage from "./components/homepage/homepage";
import DetailVideoPage from "./components/video/DetailVideoPage";
import SubscriptionPage from "./components/subscription/SubscriptionPage";
import Dashboard from "../src/components/login/dashboard/dashboard";
import Preferences from "../src/components/login/preferences/preferences";
import UploadVideo from "./components/upload/uploadvideopage";



function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route exact strict path='/'>
          <Homepage />
        </Route>
        <Route exact strict path="/upload">
          <UploadVideo />
        </Route>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
