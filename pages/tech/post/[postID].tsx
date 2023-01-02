import type { NextPage } from "next";
import { useRouter } from "next/router";
import { FiHeart, FiDownload } from "react-icons/fi";
import { FaHeart } from "react-icons/fa"; //꽉 찬 하트
import { IoChatbox } from "react-icons/io5";
import { PostTag } from "../../../components/Tags";
import ReactDom from "react-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const PostView: NextPage = () => {
  const router = useRouter();
  const { postID } = router.query;

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

      {/* 포스트 본문 */}
      <article className="w-9/12 mt-16 block">
        <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />,
      </article>
    </div>
  );
};

export default PostView;
