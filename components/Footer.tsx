import Image from "next/image";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FiMail, FiInstagram } from "react-icons/fi";
import { SiNotion } from "react-icons/si";
import { useRouter } from "next/router";
import { DevKorApply } from "../constants/devkor";
import { useState } from "react";

export const Footer = () => {
    const router = useRouter();
    const [copied, setCopied] = useState<boolean>(false);
    return (
        <div className="border-t border-devkor text-devkor px-[9.375rem] pb-5">
            <div>
                <Image src="/images/devkor-logo.svg" alt="devkor-logo" width="100" height="100" />
            </div>
            <h4>문의</h4>
            <div className="flex pt-5">
                <RiKakaoTalkFill
                    className="mr-[0.6rem] text-2xl cursor-pointer"
                    onClick={() => {
                        router.push(DevKorApply.kakao);
                    }}
                />
                <FiMail
                    className="mx-[0.6rem] text-2xl cursor-pointer"
                    onClick={() => {
                        navigator.clipboard.writeText(DevKorApply.email);
                        setCopied(true);
                    }}
                />
                <SiNotion
                    className="mx-[0.6rem] text-2xl cursor-pointer"
                    onClick={() => {
                        router.push(DevKorApply.notion);
                    }}
                />
                <FiInstagram
                    className="ml-[0.6rem] text-2xl cursor-pointer"
                    onClick={() => {
                        router.push(DevKorApply.instagram);
                    }}
                />
            </div>
            <div className="border-b border-devkor mt-5 w-[30%]"></div>
            <p className="text-sm font-light mt-3">Copyright ⓒ DevKor. All Rights Reserved.</p>
        </div>
    );
};
