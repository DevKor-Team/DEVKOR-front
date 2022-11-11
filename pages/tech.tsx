import type { NextPage } from "next";
import Head from "next/head";
import React, { useState, SetStateAction } from "react";
import PostCard from "../components/PostCard";
import { GoSearch } from "react-icons/go";

// Menu Button Type Interface
interface MenuButtonType {
  name: string;
  mapIdx: number;
  sectionIdx: number;
  setSectionIdx: React.Dispatch<SetStateAction<number>>;
}

// Menu Button Component
const MenuButton = ({
  name,
  mapIdx,
  sectionIdx,
  setSectionIdx,
}: MenuButtonType) => {
  return (
    <button
      className={`${
        sectionIdx == mapIdx
          ? "bg-devkor text-black font-bold"
          : "bg-button text-white"
      } w-28 py-2 mr-4 rounded-full flex justify-center`}
      onClick={() => setSectionIdx(mapIdx)}
    >
      {name}
    </button>
  );
};

// MenuList
const MenuList = ["전체", "Frontend", "Backend", "ML", "DevOps", "기타"];

// Blog Page
const Blog: NextPage = () => {
  const [sectionIdx, setSectionIdx] = useState<number>(0);

  return (
    <div>
      <Head>
        <title>Blog Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <div className="mt-10">
          <div className="inline-block">
            <h1 className="text-4xl text-white font-bold">⚙️Tech Blog</h1>
            <p className="text-xl text-white mt-3">대충 멋진 설명</p>
          </div>
          <button className="bg-button hover:bg-white text-white hover:text-black font-bold w-40 py-2 px-4 rounded-full sm:float-right flex justify-center">
            새 글 작성
          </button>
        </div>
        <div className="subjects mt-10">
          <div className="flex items-center">
            {MenuList.map((menu, idx) => (
              <MenuButton
                name={menu}
                mapIdx={idx}
                sectionIdx={sectionIdx}
                setSectionIdx={setSectionIdx}
              />
            ))}
          </div>
        </div>
        <form className="searchbar mt-10">
          <div className="relative">
            <div className="searchicon flex absolute inset-y-0 left-0 items-center pl-5 pointer-events-none">
              <GoSearch size={24} fill="#F6B55A" />
            </div>
            <input
              type="search"
              className="block p-4 pl-16 w-full text-base text-white bg-transparent rounded-full border border-devkor outline-none"
              placeholder=""
            />
            <button
              type="submit"
              className="absolute right-2.5 bottom-2.5 bg-button text-white hover:bg-devkor hover:text-black font-medium rounded-full text-sm px-4 py-2"
            >
              {/* 이거 버튼 클릭시 흰검으로 할지 주검으로 할지 고민중*/}
              Search
            </button>
          </div>
        </form>
        <div className="bloglist mt-10 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 lg:gap-8">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </div>
      </body>
    </div>
  );
};

export default Blog;
