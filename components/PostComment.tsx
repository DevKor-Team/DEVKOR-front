import React from "react";
import Image from "next/image";

//Todo: 나중에 date, imgsrc 등도 props로 넘겨받아야 함.
export const PostComment = ({ children }: { children: string }) => {
  return (
    <div className="w-full py-6 border-b border-[#2A2A2A]">
      <div className="w-full mb-6 flex">
        <div className="md:hidden flex items-center">
          <Image
            src="/images/example-profile.png"
            width="45"
            height="45"
            layout="fixed"
            className="rounded-full"
          />
        </div>
        <div className="hidden md:block">
          <Image
            src="/images/example-profile.png"
            width="75"
            height="75"
            layout="fixed"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col justify-center ml-3 md:ml-6">
          <span className="font-bold text-base md:text-xl">안수진(OB)</span>
          <span className="text-sm md:text-base text-divider">
            2022년 12월 3일
          </span>
        </div>
      </div>
      <div className="w-full text-base md:text-lg my-[1.125rem]">
        {children}
      </div>
    </div>
  );
};
