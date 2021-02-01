import { Route, Switch } from "react-router-dom";
import { HOME_URL, OFFERS_URL } from "../routes";
import Home from "./Home";
import Offers from "./Offers";
import { NotFound } from "./styles.";

const Content = () => {
  return (
    <div>
      <Switch>
        <Route exact path={HOME_URL}>
          <Home />
        </Route>
        <Route exact path={OFFERS_URL}>
          <Offers />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/">
          <NotFound>{"The page you are looking for doesn't exist"}</NotFound>
        </Route>
      </Switch>
    </div>
  );
};

export default Content;
