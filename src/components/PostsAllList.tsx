import React from "react";
import PostList from "./PostList";

interface Post {
  id: number;
  title: string;
  content: string;
  category: string;
}

interface PostsAllListProps {
  posts: Post[];
}

const PostsAllList: React.FC<PostsAllListProps> = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <PostList
          key={post.id}
          title={post.title}
          content={post.content}
          category={post.category}
        />
      ))}
    </div>
  );
};

export default PostsAllList;
