import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Browse, SignUp, SignIn } from "./pages";
import * as ROUTES from "./constants/index";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";
export default function App() {
  const { user } = useAuthListener();
  return (
    <Router>
      <Switch>
        {/* <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={"/"}
          exact
        >
          <Home />
        </IsUserRedirect> */}
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGNIN}
          exact
        >
          <SignIn />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGNUP}
          exact
        >
          <SignUp />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <Route exact path={ROUTES.BROWSE}>
          <Browse />
        </Route>

        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
          exact
        >
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}
