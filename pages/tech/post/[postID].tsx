import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import { PostTag } from "../../../components/Tags";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import React, { useState } from "react";
import { PostComment } from "../../../components/PostComment";
import PostCard from "../../../components/PostCard";
import {
  EmptyHeartIcon,
  DownloadIcon,
  ChatboxIcon,
} from "../../../components/Icons";

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
    <div className="w-full flex justify-center">
      <div className="flex flex-col justify-center items-center w-10/12 lg:w-9/12">
        {/* 포스트 기본 정보(태그, 아이콘, 제목, 작성자, 수정/삭제 버튼) 섹션 */}
        <section className="w-full mt-10 lg:mt-24 flex flex-col justify-center">
          <div className="flex justify-between">
            <PostTag category="FrontEnd" />
            <div className="flex items-center space-x-4">
              <EmptyHeartIcon />
              <DownloadIcon />
              <ChatboxIcon />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl leading-snug md:leading-snug md:text-5xl font-bold font-noto mt-6">
            Next.js의 Hydration 파헤치기
          </h1>
          <div className="mt-10 flex justify-between">
            <div className="flex jusfity-between space-x-3">
              <span className="text-sm md:text-base text-devkor font-semibold">
                by 노정훈회장님
              </span>
              <span className="text-sm md:text-base text-divider font-semibold">
                2023년 1월 2일
              </span>
            </div>
            {/* TODO: 본인일 경우에만 수정 및 삭제 버튼 노출하기 */}
            <div className="flex space-x-2 md:space-x-3">
              <button className="text-sm md:text-base text-divider font-semibold hover:text-white hover:cursor-pointer">
                수정
              </button>
              <button className="text-sm md:text-base text-divider font-semibold hover:text-white hover:cursor-pointer">
                삭제
              </button>
            </div>
          </div>
        </section>

        {/* 포스트 본문 영역 */}
        <article className="w-full mt-16 block">
          <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />,
        </article>

        {/* 작성자 프로필 영역 */}
        <section className="w-full pb-5 h-fit mt-32 flex border-b border-[#d9d9d9]">
          <div className="md:hidden flex items-center">
            <Image
              src="/images/example-profile.png"
              width="65"
              height="65"
              className="rounded-full"
              layout="fixed"
            />
          </div>
          <div className="hidden md:block">
            <Image
              src="/images/example-profile.png"
              width="125"
              height="125"
              className="rounded-full"
              layout="fixed"
            />
          </div>
          <div className="flex flex-col justify-center ml-4 md:ml-8">
            <span className="font-bold text-xl md:text-2xl hover:underline hover:underline-offset-4 hover:cursor-pointer">
              노정훈회장님
            </span>
            <p className="mt-2 text-sm md:text-xl">
              한 줄 소개 한 줄 소개 한 줄 소개 한 줄 소개 한 줄 소개
            </p>
          </div>
        </section>

        {/* 하단 댓글정보 및 댓글작성 영역 */}
        <section className="w-full mt-24">
          <div id="comment-count">
            <span className="text-xl md:text-3xl font-bold text-devkor">3</span>
            <span className="text-xl md:text-3xl font-bold">개의 댓글</span>
          </div>
          <div id="comment-write" className="mt-4 md:mt-8">
            <textarea
              className="w-full h-24 min-h-24 mb-4 text-base md:text-lg resize-none rounded-[4px] bg-[#1e1e1e] focus:outline-none py-[1rem] px-[1.5rem]"
              placeholder="댓글로 의견을 나눠보세요"
            />
          </div>
          <div className="flex justify-end">
            <button className="bg-devkor text-black font-bold text-base md:text-xl w-24 md:w-32 h-10 rounded-md">
              댓글 작성
            </button>
          </div>
        </section>

        {/* 댓글 리스트 영역 */}
        <section className="mt-28 w-full">
          <PostComment>댓글 댓글 댓글 댓글 댓글 댓글</PostComment>
          <PostComment>댓글 댓글 댓글 댓글 댓글 댓글</PostComment>
          <PostComment>댓글 댓글 댓글 댓글 댓글 댓글</PostComment>
          <PostComment>댓글 댓글 댓글 댓글 댓글 댓글</PostComment>
          <PostComment>댓글 댓글 댓글 댓글 댓글 댓글</PostComment>
          <PostComment>댓글 댓글 댓글 댓글 댓글 댓글</PostComment>
        </section>

        {/* 다른 주제의 포스트 영역 3개까지 추천 */}
        <section className="mt-28 w-full">
          <div className="flex justify-center lg:justify-start">
            <span className="text-xl md:text-2xl font-bold text-devkor">
              FrontEnd
            </span>
            <span className="text-xl md:text-2xl font-bold ml-1.5">
              주제의 다른 포스트
            </span>
          </div>
          <div className="flex flex-col items-center space-y-6 lg:space-y-0 lg:flex-row md:justify-between w-full mt-10 mb-32">
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </section>
      </div>
    </div>
  );
};

export default PostView;
