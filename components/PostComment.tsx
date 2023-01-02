import React from "react";
import Image from "next/image";

//Todo: 나중에 date, imgsrc 등도 props로 넘겨받아야 함.
export const PostComment = ({ children }: { children: string }) => {
  return (
    <div className="w-full py-6 border-b border-[#2A2A2A]">
      <div className="w-full mb-6 flex space-x-6">
        <Image
          src="/images/example-profile.png"
          width="75"
          height="75"
          className="rounded-full"
        />
        <div className="flex flex-col justify-center">
          <span className="font-bold text-lg">안수진(OB)</span>
          <span className="text-base text-divider">2022년 12월 3일</span>
        </div>
      </div>
      <div className="w-full text-lg my-[1.125rem]">{children}</div>
    </div>
  );
};
