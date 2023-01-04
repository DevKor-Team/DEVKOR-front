import Image from "next/image";
import { SingleMenu } from "./HeaderItem";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full px-[9.375rem] flex bg-black justify-between items-center h-[5rem]">
      <section className="flex">
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
        <div className="flex items-center py-[1.875rem]">
          <SingleMenu title="Tech" />
          <SingleMenu title="Project" />
          <SingleMenu title="Study" />
          <SingleMenu title="Question" />
          <SingleMenu title="Members" />
          <SingleMenu title="Apply" />
        </div>
      </section>
      <section className="py-[1.875rem] flex items-center cursor-pointer">
        <Image
          src="/images/profile-logo.png"
          alt="profile"
          width="25"
          height="25"
          layout="fixed"
        />
      </section>
    </header>
  );
};

export default Header;
