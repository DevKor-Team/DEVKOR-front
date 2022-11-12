import { IoCloseOutline } from "react-icons/io5";
import { useRecoilState } from "recoil";
import { profileRecoilState } from "../recoil/profileState";

interface TagProps {
    name: string;
    onRemove: (selectedLabel: string) => void;
}

export const Tag = ({ name, onRemove }: TagProps) => {
    const [profileState, setProfileState] = useRecoilState(profileRecoilState);
    return (
        <div
            className="rounded-[1.2rem] bg-devkor flex h-9 justify-evenly items-center mx-1 px-4 my-3 cursor-pointer"
            onClick={() => {
                onRemove(name);
            }}
        >
            <p className="text-md">{name}</p>
            <IoCloseOutline className="text-xl" />
        </div>
    );
};
