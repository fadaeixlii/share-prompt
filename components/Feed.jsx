"use client";

import React, { useEffect, useState } from "react";
import PromptCardList from "./PromptCardList";
import { useRouter } from "next/navigation";

const Feed = () => {
  const [searchValue, setSearchValue] = useState("");
  const [posts, setPosts] = useState([]);
  const handleSearch = (e) => setSearchValue(e.target.value);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(
        `/api/prompt${!!searchValue ? `?searchValue=${searchValue}` : ""}`
      );
      const data = await response.json();
      setPosts(data);
    };
    fetchPost();
  }, [searchValue]);

  const router = useRouter();
  const handleTagClick = async (tag) => {
    router.push(`/tag/${tag}`);
  };

  return (
    <div className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for prompt or tag or username"
          value={searchValue}
          onChange={handleSearch}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList data={posts} handleClickTag={handleTagClick} />
    </div>
  );
};

export default Feed;
