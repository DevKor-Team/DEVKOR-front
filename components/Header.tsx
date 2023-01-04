import Image from "next/image";
import { WebMenuBar, MobileHeaderDropdown } from "./HeaderItem";
import Link from "next/link";
import { useState } from "react";
import Hamburger from "hamburger-react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="w-full relative px-[1rem] md:px-[9.375rem] flex bg-black justify-between items-center h-[5rem]">
      <section className="flex">
        {/* 헤더 로고 */}
        <div className="flex items-center pr-[2rem] w-[6.75rem] h-[5.625rem] hover:cursor-pointer">
          <Link href="/">
            <Image
              src="/images/devkor-logo.svg"
              alt="devkor"
              width="108"
              height="90"
            ></Image>
          </Link>
        </div>
        {/* 메뉴 리스트 */}
        <nav className="items-center py-[1.875rem] hidden lg:flex">
          <WebMenuBar />
        </nav>
      </section>
      {/* 마이페이지 아이콘 or 햄버거(모바일)*/}
      <section className="py-[1.875rem] flex items-center cursor-pointer">
        <div className="hidden lg:flex">
          <Image
            src="/images/profile-logo.png"
            alt="profile"
            width="25"
            height="25"
            layout="fixed"
          />
        </div>
        <div className="flex lg:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={24}
            color={"#F6B55A"}
            rounded
            label="Show menu"
          />
        </div>
      </section>
      <MobileHeaderDropdown isOpen={isOpen} />
    </header>
  );
};

export default Header;
