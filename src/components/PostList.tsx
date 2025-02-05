import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

interface PostListProps {
  title: string;
  content: string;
  category: string;
}

const PostList: React.FC<PostListProps> = ({ title, content, category }) => {
  return (
    <Card variant="outlined" style={{ margin: "10px" }}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {category}
        </Typography>
        <Typography variant="body1">{content}</Typography>
      </CardContent>
    </Card>
  );
};

export default PostList;
