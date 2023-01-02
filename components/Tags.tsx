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
    <button className="bg-devkor text-black font-bold w-28 py-2 mr-4 rounded-full flex justify-center">
      {category}
    </button>
  );
};

// TagList
export const TagList = ["전체", "Frontend", "Backend", "ML", "DevOps", "기타"];
