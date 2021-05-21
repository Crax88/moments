import React from "react";
import { Pane } from "evergreen-ui";
import PostItem from "./PostListItem";
const posts = [
  {
    _id: "123",
    title: "Title 1",
    body: "Body 1",
    image:
      "https://www.elegantthemes.com/blog/wp-content/uploads/2017/01/sharing-wordpress-posts.jpg",
    likes: [],
    author: {
      _id: "123",
      name: "Nikita",
    },
    tags: ["history", "culture"],
  },
  {
    _id: "123",
    title: "Title 1",
    body: "Body 1",
    image:
      "https://www.elegantthemes.com/blog/wp-content/uploads/2017/01/sharing-wordpress-posts.jpg",
    likes: [],
    author: {
      _id: "123",
      name: "Nikita",
    },
    tags: ["history", "culture"],
  },
  {
    _id: "123",
    title: "Title 1",
    body: "Body 1",
    image:
      "https://www.elegantthemes.com/blog/wp-content/uploads/2017/01/sharing-wordpress-posts.jpg",
    likes: [],
    author: {
      _id: "123",
      name: "Nikita",
    },
    tags: ["history", "culture"],
  },
  {
    _id: "123",
    title: "Title 1",
    body: "Body 1",
    image:
      "https://www.elegantthemes.com/blog/wp-content/uploads/2017/01/sharing-wordpress-posts.jpg",
    likes: [],
    author: {
      _id: "123",
      name: "Nikita",
    },
    tags: ["history", "culture"],
  },
  {
    _id: "123",
    title: "Title 1",
    body: "Body 1",
    image:
      "https://www.elegantthemes.com/blog/wp-content/uploads/2017/01/sharing-wordpress-posts.jpg",
    likes: [],
    author: {
      _id: "123",
      name: "Nikita",
    },
    tags: ["history", "culture"],
  },
  {
    _id: "123",
    title: "Title 1",
    body: "Body 1",
    image:
      "https://www.elegantthemes.com/blog/wp-content/uploads/2017/01/sharing-wordpress-posts.jpg",
    likes: [],
    author: {
      _id: "123",
      name: "Nikita",
    },
    tags: ["history", "culture"],
  },
  {
    _id: "123",
    title: "Title 1",
    body: "Body 1",
    image:
      "https://www.elegantthemes.com/blog/wp-content/uploads/2017/01/sharing-wordpress-posts.jpg",
    likes: [],
    author: {
      _id: "123",
      name: "Nikita",
    },
    tags: [
      "history",
      "culture",
      "history",
      "culture",
      "history",
      "culture",
      "history",
      "culture",
      "history",
      "culture",
    ],
  },
];
const PostList = () => {
  return (
    <Pane
      width="100%"
      display="grid"
      gridTemplateColumns="repeat(auto-fit, minmax(320px, 1fr))"
      gridGap="10px"
    >
      {posts.map((post) => (
        <PostItem post={post} />
      ))}
    </Pane>
  );
};

export default PostList;
