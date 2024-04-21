"use client";

import PromptCardList from "@/components/PromptCardList";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const TagPromptPage = () => {
  const [posts, setPosts] = useState([]);
  const params = useParams();
  const router = useRouter();
  const handleTagClick = async (tag) => {
    router.push(`/tag/${tag}`);
  };
  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`/api/prompt/list/${params.tag}`);
      const data = await response.json();
      console.log(response);
      setPosts(data);
    };
    if (params.tag) fetchPost();
  }, [params.tag]);
  return (
    <div className="feed">
      {" "}
      <PromptCardList data={posts} handleClickTag={handleTagClick} />
    </div>
  );
};

export default TagPromptPage;
