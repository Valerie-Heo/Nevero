import { BrowserRouter, Route, Switch } from "react-router-dom";
import DropPage from "../components/DropPage";
import SignIn from "../components/SignIn";
import NotFoundPage from "../components/NotFoundPage";
import Signup from "../components/SignUp";
import HomePage from "../components/HomePage";
import { AuthProvider } from "../actions/auth";
import PrivateRoute from "./PrivateRoute";
import Documentation from "../components/Documentation";
const appRouter = () => (
  <AuthProvider>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={DropPage} exact={true} />
          <Route path="/Documentation" component={Documentation} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/Signup" component={Signup} />
          <PrivateRoute path="/Home" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  </AuthProvider>
);

export default appRouter;
