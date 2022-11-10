import React from "react";
import { useRouter } from "next/router";

interface MenuProps {
    title: string;
}

export const SingleMenu = ({ title }: MenuProps) => {
    const router = useRouter();
    const routerPath = title.toLowerCase();
    const handleClick = () => {
        router.push(`/${routerPath}`);
    };
    return (
        <div className="text-[#F6B55A] px-[2rem] text-lg cursor-pointer font-noto" onClick={handleClick}>
            {title}
        </div>
    );
};
