import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PostsPage from "./pages/PostsPage";
import PostPage from "./pages/PostsPage";

const Router = ({ auth }) => {
  if (auth.isAuth === null) {
    return null;
  }
  return (
    <Switch>
      <Route exact path="/" component={() => <Redirect to="/posts" />} />
      <Route
        path="/login"
        render={() => (auth.isAuth ? <Redirect to="/posts" /> : <LoginPage />)}
      />
      <Route
        path="/register"
        render={() =>
          auth.isAuth ? <Redirect to="/posts" /> : <RegisterPage />
        }
      />
      <Route path="/posts/:id" component={PostPage} />
      <Route path="/posts" component={PostsPage} />
    </Switch>
  );
};

export default Router;
