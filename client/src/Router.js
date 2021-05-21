import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PostsPage from "./pages/PostsPage";
import PostPage from "./pages/PostsPage";

const Router = () => {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/posts/:id" component={PostPage} />
      <Route path="/posts" component={PostsPage} />
    </Switch>
  );
};

export default Router;
