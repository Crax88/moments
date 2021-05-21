import React from "react";
import PropTypes from "prop-types";
import { Pane, Text, Link } from "evergreen-ui";
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
        <Text textAlign="center" size="50">
          No posts yet,{" "}
          <Link cursor="pointer" href="#" size="50">
            become the first creator!
          </Link>
        </Text>
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
