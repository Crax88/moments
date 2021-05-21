import React from "react";
import PropTypes from "prop-types";
import { Pane, Heading } from "evergreen-ui";
import PostItem from "./PostListItem";

const PostList = ({ posts }) => {
  return (
    <Pane
      width="100%"
      display="grid"
      gridTemplateColumns="repeat(auto-fit, minmax(320px, 1fr))"
      gridGap="10px"
    >
      {posts.length
        ? posts.map((post) => <PostItem post={post} key={post._id} />)
        : null}
      {!posts.length ? (
        <Heading textAlign="center" size={700} color="#2952CC">
          No posts yet, become the first creator!
        </Heading>
      ) : null}
    </Pane>
  );
};

PostList.propType = {
  post: PropTypes.array,
};

PostList.defaultProps = {
  posts: [],
};

export default PostList;
