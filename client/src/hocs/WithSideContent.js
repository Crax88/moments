import React from "react";
import { Pane } from "evergreen-ui";
import { PostForm } from "../components/posts";

const WithSideContent = (Component) => (props) => {
  return (
    <>
      <Pane width="80%">
        <Component {...props} />
      </Pane>
      <Pane width="20%">
        <PostForm />
      </Pane>
    </>
  );
};

export default WithSideContent;
