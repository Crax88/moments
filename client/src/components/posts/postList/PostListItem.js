import React from "react";
import PropTypes from "prop-types";
import { formatDistanceToNow } from "date-fns";
import { Link as RouterLink } from "react-router-dom";
import {
  Card,
  Pane,
  Link,
  Text,
  ThumbsUpIcon,
  Strong,
  Badge,
} from "evergreen-ui";

const PostListItem = ({ post }) => {
  const { _id, image, title, author, likes, createdAt, tags } = post;
  return (
    <Card
      width="320px"
      border="default"
      overflow="hidden"
      backgroundColor="#fff"
      elevation={1}
    >
      <Link is={RouterLink} to={`/posts/${_id}`}>
        <img src={image} width="320px" alt={title} />
      </Link>
      <Pane padding="5px">
        {tags.map((tag) => (
          <Badge color="neutral" marginRight={8}>
            {`#${tag}`}
          </Badge>
        ))}
      </Pane>
      <Pane
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        padding="10px"
        borderTop="1px solid #E6E8F0"
      >
        <Text color="muted">By {author.name}</Text>
        <Text color="muted">
          {formatDistanceToNow(createdAt, { addSuffix: true })}
        </Text>
        <Text>
          <ThumbsUpIcon color="muted" />
          <Strong marginLeft="2px" color="muted">
            {likes.length}
          </Strong>
        </Text>
      </Pane>
    </Card>
  );
};

PostListItem.propTypes = {
  post: PropTypes.shape({
    _id: PropTypes.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
    }).isRequired,
    image: PropTypes.string.isRequired,
    likes: PropTypes.array.isRequired,
    tags: PropTypes.array.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostListItem;
