import React from "react";
import PropTypes from "prop-types";
import { formatDistanceToNow } from "date-fns";
import {
  Card,
  Pane,
  Text,
  Heading,
  Button,
  ThumbsUpIcon,
  Badge,
  Paragraph,
} from "evergreen-ui";

const Post = ({ post }) => {
  const { image, title, author, likes, tags, body, createdAt } = post;
  return (
    <Card
      width="100%"
      height="80vh"
      border="default"
      overflow="hidden"
      backgroundColor="#fff"
      elevation={1}
      display="flex"
      flexDirection="column"
      alignItems="center"
      overflowY="auto"
    >
      <img
        src={image}
        width="500px"
        maxWidth="1000px"
        height="auto"
        alt={title}
      />
      <Pane padding="5px">
        {tags.map((tag) => (
          <Badge color="neutral" marginRight={8}>
            {`#${tag}`}
          </Badge>
        ))}
      </Pane>
      <Pane
        width="50%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-evenly"
        padding="10px"
      >
        <Pane
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          padding="10px"
          position="sticky"
          top="0"
          backgroundColor="#fff"
          border="default"
          borderRadius="4px"
        >
          <Text color="muted">By {author.name}</Text>
          <Text color="muted">
            {formatDistanceToNow(createdAt, { addSuffix: true })}
          </Text>
          <Button iconBefore={ThumbsUpIcon} intent="success">
            {likes.length}
          </Button>
        </Pane>
        <Heading size={700} marginBottom="10px">
          {title}
        </Heading>
        <Paragraph>{body}</Paragraph>
      </Pane>
    </Card>
  );
};

Post.propType = {
  post: PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    image: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    likes: PropTypes.arrayOf(PropTypes.string),
    createdAt: PropTypes.string,
    author: PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
    }),
  }).isRequired,
};

export default Post;
