import React, { useState, SetStateAction } from "react";
// Tag Button Type Interface
export interface TagButtonType {
  name: string;
  mapIdx: number;
  sectionIdx: number;
  setSectionIdx: React.Dispatch<SetStateAction<number>>;
}

// Tag Button Component
export const TagButton = ({
  name,
  mapIdx,
  sectionIdx,
  setSectionIdx,
}: TagButtonType) => {
  return (
    <button
      className={`${
        sectionIdx == mapIdx ? "bg-devkor text-black font-bold" : "bg-button"
      } w-28 py-2 mr-4 rounded-full flex justify-center`}
      onClick={() => setSectionIdx(mapIdx)}
    >
      {name}
    </button>
  );
};

// PostView Tag
export const PostTag = ({ category }: { category: string }) => {
  return (
    <span className="bg-devkor text-black text-sm md:text-lg font-bold w-20 md:w-28 py-1 mr-4 rounded-full flex justify-center">
      {category}
    </span>
  );
};

// TagList
export const TagList = ["전체", "Frontend", "Backend", "ML", "DevOps", "기타"];
