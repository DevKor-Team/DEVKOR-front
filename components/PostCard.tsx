import Image from "next/image";
import blogDefault from "../public/images/BlogDefault.jpg";
import profileDefault from "../public/images/ProfileDefault.jpg";
import { FaComment, FaHeart } from "react-icons/fa";

const PostCard = () => {
  return (
    <div className="max-w-sm w-[19.5rem] rounded overflow-hidden shadow-lg cursor-pointer bg-button md:hover:-mt-5 md:hover:mb-5 transition-all">
      <div className="w-full aspect-[3/2] relative">
        <Image src={blogDefault} alt="BlogPost" layout="fill" />
      </div>
      <div className="px-4 py-4">
        <div className="font-bold text-white text-2xl break-normal mb-5 h-14">
          Next.js의 Hydration 파헤치기
        </div>
        <p className="text-divider">2022년 10월 7일</p>
      </div>
      <div className="info flex items-center mb-3 border-t-divider border-t">
        <div className="ml-4 mt-3 flex items-center">
          <Image
            className="rounded-full"
            src={profileDefault}
            alt="Avatar"
            width={20}
            height={20}
          />
        </div>
        <div className="text-sm ml-2 mt-3">
          <p className="text-white leading-none">by 노정훈</p>
        </div>
        <div className="response text-sm flex items-center justify-center mt-3 mr-4 ml-auto">
          <div className="likes flex items-center">
            <FaHeart fill="white" size={16} />
            <span className="text-white ml-2">36</span>
          </div>
          <div className="comments ml-4 flex items-center">
            <FaComment fill="white" size={16} />
            <span className="text-white ml-2">2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
