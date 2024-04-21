import React from "react";
import PromptCard from "./PromptCard";
import { useRouter } from "next/navigation";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  const router = useRouter();
  const handleTagClick = async (tag) => {
    router.push(`/tag/${tag}`);
  };
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="dec text-left mt-5">{desc}</p>
      <div className="mt-16 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
            handleClickTag={() => handleTagClick && handleTagClick(post.tag)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
