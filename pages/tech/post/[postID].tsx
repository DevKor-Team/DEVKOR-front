import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import { FiHeart, FiDownload } from "react-icons/fi";
import { FaHeart } from "react-icons/fa"; //꽉 찬 하트
import { IoChatbox } from "react-icons/io5";
import { PostTag } from "../../../components/Tags";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import React, { useState } from "react";
import { PostComment } from "../../../components/PostComment";
import PostCard from "../../../components/PostCard";

const PostView: NextPage = () => {
  const router = useRouter();
  const { postID } = router.query;
  /* content: 나중에 fetch해서 마크다운 내용 받을 state*/
  // const [content, setContent] = useState<string>('');

  const markdown = `
  # 제목이다.
  ## 제목2이다.

  A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

\`code\`

### 리스트들
* Lists
* todo
* done

|A|B|
|--|--|
|ghgh|hjh|

`;

  return (
    <div className="flex flex-col justify-center items-center">
      {/* 포스트 기본 정보(태그, 아이콘, 제목, 작성자, 수정/삭제 버튼) 섹션 */}
      <section className="w-9/12 mt-24 flex flex-col justify-center">
        <div className="flex justify-between">
          <PostTag category="FrontEnd" />
          <div className="flex items-center space-x-4">
            <FiHeart
              stroke="#F6B55A"
              size="24"
              className="hover:cursor-pointer"
            />
            <FiDownload
              stroke="#F6B55A"
              size="24"
              className="hover:cursor-pointer"
            />
            <IoChatbox
              fill="#F6B55A"
              size="24"
              className="hover:cursor-pointer"
            />
          </div>
        </div>
        <h1 className="text-5xl font-bold font-noto mt-6">
          Next.js의 Hydration 파헤치기
        </h1>
        <div className="mt-10 flex justify-between">
          <div className="flex jusfity-between space-x-3">
            <span className="text-base text-devkor font-semibold">
              by 노정훈회장님
            </span>
            <span className="text-base text-divider font-semibold">
              2023년 1월 2일
            </span>
          </div>
          {/* TODO: 본인일 경우에만 수정 및 삭제 버튼 노출하기 */}
          <div className="flex space-x-3">
            <button className="text-base text-divider font-semibold hover:text-white hover:cursor-pointer">
              수정
            </button>
            <button className="text-base text-divider font-semibold hover:text-white hover:cursor-pointer">
              삭제
            </button>
          </div>
        </div>
      </section>

      {/* 포스트 본문 영역 */}
      <article className="w-9/12 mt-16 block">
        <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />,
      </article>

      {/* 작성자 프로필 영역 */}
      <section className="w-9/12 pb-5 h-fit mt-32 flex border-b border-[#d9d9d9]">
        <Image
          src="/images/example-profile.png"
          width="125"
          height="125"
          className="rounded-full"
        />
        <div className="flex flex-col justify-center ml-8">
          <span className="font-bold text-2xl hover:underline hover:underline-offset-4 hover:cursor-pointer">
            노정훈회장님
          </span>
          <p className="mt-2 text-xl">
            한 줄 소개 한 줄 소개 한 줄 소개 한 줄 소개 한 줄 소개
          </p>
        </div>
      </section>

      {/* 하단 댓글정보 및 댓글작성 영역 */}
      <section className="w-9/12 mt-24">
        <div id="comment-count">
          <span className="text-3xl font-bold text-devkor">3</span>
          <span className="text-3xl font-bold">개의 댓글</span>
        </div>
        <div id="comment-write" className="mt-8">
          <textarea
            className="w-full h-24 min-h-24 mb-4 text-lg resize-none rounded-[4px] bg-[#1e1e1e] focus:outline-none py-[1rem] px-[1.5rem]"
            placeholder="댓글로 의견을 나눠보세요"
          />
        </div>
        <div className="flex justify-end">
          <button className="bg-devkor text-black font-bold text-xl w-32 h-10 rounded-md">
            댓글 작성
          </button>
        </div>
      </section>

      {/* 댓글 리스트 영역 */}
      <section className="mt-28 w-9/12">
        <PostComment>댓글 댓글 댓글 댓글 댓글 댓글</PostComment>
        <PostComment>댓글 댓글 댓글 댓글 댓글 댓글</PostComment>
        <PostComment>댓글 댓글 댓글 댓글 댓글 댓글</PostComment>
        <PostComment>댓글 댓글 댓글 댓글 댓글 댓글</PostComment>
        <PostComment>댓글 댓글 댓글 댓글 댓글 댓글</PostComment>
        <PostComment>댓글 댓글 댓글 댓글 댓글 댓글</PostComment>
      </section>

      {/* 다른 주제의 포스트 영역 3개까지 추천 */}
      <section className="mt-28 w-9/12">
        <div>
          <span className="text-2xl font-bold text-devkor">FrontEnd</span>
          <span className="text-2xl font-bold"> 주제의 다른 포스트</span>
        </div>
        <div className="flex justify-between w-full mt-10 mb-32">
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </section>
    </div>
  );
};

export default PostView;
