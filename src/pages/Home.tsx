import React, { useState } from "react";
import PostsAllList from "../components/PostsAllList";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const posts = [
    { id: 1, title: "Пост 1", content: "Контент 1", category: "Фрукты" },
    {
      id: 2,
      title: "Пост 2",
      content: "Контент 2",
      category: "Овощи",
    },
    {
      id: 3,
      title: "Пост 3",
      content: "Контент 3",
      category: "Другое",
    },
    { id: 4, title: "Пост 4", content: "Контент 4", category: "Фрукты" },
  ];

  const categories = [...new Set(posts.map((post) => post.category))];

  const filteredPosts = posts.filter((post) => {
    return (
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory ? post.category === selectedCategory : true)
    );
  });

  return (
    <div style={{ padding: "20px" }}>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
      />
      <PostsAllList posts={filteredPosts} />
    </div>
  );
};

export default Home;
