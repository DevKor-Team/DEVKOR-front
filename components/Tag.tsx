import { IoCloseOutline } from "react-icons/io5";

interface TagProps {
    name: string;
}

export const Tag = ({ name }: TagProps) => {
    return (
        <div className="rounded-[1.2rem] bg-devkor flex h-9 justify-evenly items-center mx-1 px-4 my-3">
            <p className="text-md">{name}</p>
            <IoCloseOutline className="text-xl" />
        </div>
    );
};
