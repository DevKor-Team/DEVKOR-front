import type { NextPage } from "next";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import VideoViewer from "../components/VideoViewer";
import Image from "next/image";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
    return (
        <div className="mb-5">
            <div className="flex flex-col items-center">
                <VideoViewer url="videos/LandingPageMain.mp4" width="1140px" height="588px" />
                <MdOutlineKeyboardArrowDown className="fill-devkor text-5xl mt-[2rem]" />
            </div>
            <div className="flex flex-col items-center">
                <Image src="/images/devkor-logo.svg" alt="devkor" width="194" height="102" />
                <h4 className="text-devkor font-semibold tracking-wide">고려대학교</h4>
                <h4 className="text-devkor font-semibold tracking-wide">소프트웨어 개발/연구 학회</h4>
            </div>
            <div className="my-[10rem]">목차</div>
            <div className="text-devkor font-semibold tracking-wide leading-10">
                <h4>현실의 문제를 다양한 관점에서 바라보고</h4>
                <h4>이를 소프트웨어로 해결하고자 하는 사람들의 모임</h4>
            </div>
        </div>
    );
};

export default Home;
