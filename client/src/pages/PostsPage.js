import React from "react";
import { PostList } from "../components/posts";
import WithSideContent from "../hocs/WithSideContent";

const PostsPage = () => {
  return <PostList />;
};

export default WithSideContent(PostsPage);
