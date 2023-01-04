import { FiHeart, FiDownload } from "react-icons/fi";
import { FaHeart } from "react-icons/fa"; //꽉 찬 하트
import { IoChatbox } from "react-icons/io5";

export const EmptyHeartIcon = () => {
  return (
    <FiHeart
      stroke="#F6B55A"
      className="hover:cursor-pointer w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
    />
  );
};

export const DownloadIcon = () => {
  return (
    <FiDownload
      stroke="#F6B55A"
      className="hover:cursor-pointer w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
    />
  );
};

export const ChatboxIcon = () => {
  return (
    <IoChatbox
      fill="#F6B55A"
      className="hover:cursor-pointer w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
    />
  );
};
