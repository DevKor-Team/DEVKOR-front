import { HEADER_ITEMS_TEXT } from "../constants/text";
const HeaderItem = ({ onClick }: { onClick: any }) => {
  return (
    <div className="flex flex-row content-around pt-[30px] pl-[78px]">
      {HEADER_ITEMS_TEXT.map((item: string, index) => {
        return (
          <div
            className="text-[#F6B55A] font-noto"
            key={index}
            onClick={onClick}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default HeaderItem;
