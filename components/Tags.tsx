import React, { useState, SetStateAction } from "react";
// Tag Button Type Interface
export interface TagButtonType {
    name: string;
    mapIdx: number;
    sectionIdx: number;
    setSectionIdx: React.Dispatch<SetStateAction<number>>;
  }
  
  // Menu Button Component
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
  
  // MenuList
  export const TagList = ["전체", "Frontend", "Backend", "ML", "DevOps", "기타"];
