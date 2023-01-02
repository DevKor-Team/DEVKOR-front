import type { NextPage } from "next";
import { useRouter } from "next/router";
import { FiHeart, FiDownload } from "react-icons/fi";
import { FaHeart } from "react-icons/fa"; //꽉 찬 하트
import { IoChatbox } from "react-icons/io5";
import { PostTag } from "../../../components/Tags";

const PostView: NextPage = () => {
  const router = useRouter();
  const { postID } = router.query;

  return (
    <div className="flex justify-center">
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
        <h1 className="text-5xl font-bold mt-4">
          Next.js의 Hydration 파헤치기
        </h1>
      </section>
    </div>
  );
};

export default PostView;
