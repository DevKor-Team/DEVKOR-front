import type { NextPage } from "next";
import { useRouter } from "next/router";

const PostView: NextPage = () => {
  const router = useRouter();
  const { postID } = router.query;

  return <div>포스트뷰</div>;
};

export default PostView;
