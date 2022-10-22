import Image from "next/image";
import blogDefault from "../public/images/BlogDefault.jpg";
import profileDefault from "../public/images/ProfileDefault.jpg";

const PostCard = () => {
  return (
    <div className="max-w-sm ml-auto mr-auto rounded overflow-hidden shadow-lg bg-button md:hover:-mt-5 md:hover:mb-5">
      <div className="w-full aspect-[3/2] relative">
        <Image src={blogDefault} alt="BlogPost" layout="fill" />
      </div>
      <div className="px-4 py-4">
        <div className="font-bold text-xl break-normal mb-5 h-14">
          Next.js의 Hydration 파헤치기
        </div>
        <p className="text-divider">2022년 10월 7일</p>
      </div>
      <div className="info flex items-center mb-3 border-t-divider border-t">
        <div className="ml-4 mt-3">
          <Image
            className="rounded-full"
            src={profileDefault}
            alt="Avatar"
            width={20}
            height={20}
          />
        </div>
        <div className="text-sm ml-2 mt-3">
          <p className="text-white leading-none">by 노정훈회장님</p>
        </div>
        <div className="response text-sm inline-block float-right mt-3 mr-4 ml-auto">
          <div className="likes inline-block">
            <svg
              className="likes h-4 w-4 text-white inline-block align-top"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" />
            </svg>
            <span>36</span>
          </div>
          <div className="comments ml-2 inline-block">
            <svg
              className="h-4 w-4 text-white inline-block align-top"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            <span>2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
