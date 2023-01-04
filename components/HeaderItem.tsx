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

export const MobileHeaderDropdown = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <nav
      className={`w-40 py-4 pl-1.5 pr-2.5 rounded-sm bg-[#1e1e1e] ${
        isOpen ? "flex" : "hidden"
      } z-10 lg:hidden absolute right-[1.7rem] md:right-[9.375rem] top-[4rem] flex-col space-y-3 justify-center items-start`}
    >
      {["MyPage"].concat(MenuList).map((menu) => (
        <SingleMenu title={menu} />
      ))}
    </nav>
  );
};
