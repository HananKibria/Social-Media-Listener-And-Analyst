import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Cluster from './components/ConversationCluster/Cluster'
import Sentiment from './components/SentimentAnalysis/Sentiment'
import Analytics from './components/Analytics/Analytics'
import Blogs from './components/Blogs/Blogs'
import Reports from './components/Reports/Reports'
import Pricing from './components/Pricing/Pricing'
import AboutUs from './components/AboutUs/AboutUs'
import Contact from './components/Contact/Contact'
import WOW from "wowjs";

import "./assets/css/mobster.css";
import "./assets/css/maicons.css";
import "./assets/vendor/animate/animate.css";

const App = () => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/conversationcluster" component={Cluster} />
          <Route exact path="/sentimentanalysis" component={Sentiment} />
          <Route exact path="/analytics" component={Analytics} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/reports" component={Reports} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/aboutus" component={AboutUs}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>
      </>
    </BrowserRouter>
  );
};

export default App;
