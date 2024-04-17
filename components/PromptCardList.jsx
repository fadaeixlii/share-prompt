import React from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleClickTag }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleClickTag={handleClickTag}
        />
      ))}
    </div>
  );
};

export default PromptCardList;
