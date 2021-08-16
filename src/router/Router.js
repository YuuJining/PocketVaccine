import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Community from "../page/Community";
import MyInfo from "../page/MyInfo";
import SignUp from "../page/SignUp";
import SignIn from "../page/SignIn";
import Observe from "../page/Observe";
import WriteReview from "../page/WriteReview";
import Situation from "../page/Situation";

const ComponentRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Community} />
      <Route exact path="/my" component={MyInfo} />
      <Route exact path="/observe" component={Observe} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/write" component={WriteReview} />
      <Route exact path="/situation" component={Situation} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default ComponentRouter;
