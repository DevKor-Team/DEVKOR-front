import React from "react";
import { useRouter } from "next/router";

interface MenuProps {
  title: string;
}

export const MenuList = [
  "Tech",
  "Project",
  "Study",
  "Question",
  "Members",
  "Apply",
];

export const SingleMenu = ({ title }: MenuProps) => {
  const router = useRouter();
  const routerPath = title.toLowerCase();
  const handleClick = () => {
    router.push(`/${routerPath}`);
  };
  return (
    <div
      className="text-[#F6B55A] px-[1.3rem] xl:px-[1.8rem] text-lg cursor-pointer font-noto"
      onClick={handleClick}
    >
      {title}
    </div>
  );
};

export const WebMenuBar = () => {
  return (
    <>
      {MenuList.map((menu) => (
        <SingleMenu title={menu} />
      ))}
    </>
  );
};

export const MobileHeaderDropdown = () => {};
