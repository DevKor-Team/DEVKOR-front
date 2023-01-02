import type { NextPage } from "next";
import { useRouter } from "next/router";
import { FiHeart, FiDownload } from "react-icons/fi";
import { IoChatbox } from "react-icons/io";
import { TagButton } from "../../../components/Tags";

const PostView: NextPage = () => {
  const router = useRouter();
  const { postID } = router.query;

  return (
    <div className="flex justify-center">
      <section className="w-11/12 mt-24 flex flex-col justify-center">
        <div className="flex justify-between">
          <TagButton name="FrontEnd" />
        </div>
        <h1 className="text-5xl font-bold">Next.js의 Hydration 파헤치기</h1>
      </section>
    </div>
  );
};

export default PostView;
