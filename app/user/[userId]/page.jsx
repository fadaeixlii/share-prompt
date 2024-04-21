"use client";

import Profile from "@/components/Profile";
import PromptCardList from "@/components/PromptCardList";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const TagPromptPage = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`/api/users/${params.userId}/posts`);
      const data = await response.json();
      console.log(response);
      setPosts(data);
    };
    if (params.userId) fetchPost();
  }, [params.userId]);
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`/api/users/${params.userId}`);
      const data = await response.json();
      console.log(response);
      setUser(data);
    };
    if (params.userId) fetchUser();
  }, [params.userId]);
  return (
    <Profile
      name={user?.username ?? "other"}
      desc={user?.email ?? "description"}
      data={posts}
    />
  );
};

export default TagPromptPage;
