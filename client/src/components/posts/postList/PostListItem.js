import React from "react";
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
  const { image, title, author, likes, createdAt, tags } = post;
  return (
    <Card
      width="320px"
      border="default"
      overflow="hidden"
      backgroundColor="#fff"
      elevation={1}
    >
      <Link href="#">
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
        <Text color="muted">6 hours ago</Text>
        {/* do something with created date */}
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

export default PostListItem;
