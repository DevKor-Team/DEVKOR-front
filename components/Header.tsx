import HeaderLogo from "../assets/HeaderLogo.svg";
import HeaderItem from "./HeaderItem";

const Header = () => {
  return (
    <div className="w-full h-[80px] bg-[#000000] flex flex-row justify-evenly">
      <HeaderLogo width="108" height="80" />
      <HeaderItem onClick={() => {}}></HeaderItem>
    </div>
  );
};

export default Header;
