import Image from "next/image";
import { Tag } from "../components/Tag";
import { useForm } from "react-hook-form";
import { Inputs } from "../interface/inputs";
import Select from "react-select";
import { useState } from "react";

const MyPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();
    const [selectedPosition, setSelectedPosition] = useState<string>();
    const [selectedProject, setSelectedProject] = useState<string>();
    const positionOptions = [
        { value: "", label: "주요 포지션" },
        { value: "Frontend", label: "Frontend" },
        { value: "Backend", label: "Backend" },
        { value: "MachineLearning", label: "ML" },
    ];

    const projectOptions = [
        { value: "", label: "소속 스터디/프로젝트" },
        { value: "Frontend", label: "Frontend 스터디" },
        { value: "Express", label: "Backend-Express 스터디" },
        { value: "Nest", label: "Backend-Nest 스터디" },
        { value: "ML", label: "ML 스터디" },
        { value: "WebGL", label: "WebGL 스터디" },
        { value: "MobileApp", label: "앱(Flutter) 스터디" },
    ];

    const customStyles = {
        menu: () => ({
            background: "#222222",
        }),

        control: () => ({
            width: "100%",
            height: "3.5rem",
            display: "flex",
            background: "#222222",
            padding: "0.5rem",
            borderRadius: "0.5rem",
        }),
        valueContainer: () => ({
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }),
        singleValue: () => ({
            fontSize: "1.05rem",
            opacity: 0.6,
            letterSpacing: ".01rem",
            fontWeight: 400,
        }),
        indicatorsContainer: () => ({
            display: "flex",
            opacity: 0.6,
        }),
    };

    const customStyles2 = {
        menu: () => ({
            background: "#222222",
        }),

        control: () => ({
            width: "100%",
            height: "3.5rem",
            display: "flex",
            background: "#222222",
            padding: "0.5rem",
            borderRadius: "0.5rem",
        }),
        valueContainer: () => ({
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }),
        singleValue: () => ({
            fontSize: "1.05rem",
            opacity: 0.6,
            letterSpacing: ".01rem",
            fontWeight: 400,
        }),
        indicatorsContainer: () => ({
            display: "flex",
            opacity: 0.6,
        }),
    };

    const onSubmit = (data: Inputs) => {
        console.log("Submitted");
        console.log(data);
    };

    return (
        <div className="text-white">
            <h2 className="text-xl font-semibold my-5 mx-10">마이페이지</h2>
            <form className="mx-10" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-center">
                    <div className="bg-[#222222] w-[50%] rounded-lg mr-5 h-[25rem]">
                        <h4 className="text-lg px-8 py-5">프로필</h4>
                        <div className="flex flex-col items-center">
                            <div className="mb-10 mt-5">
                                <Image src="/images/ProfileDefault.jpg" alt="profile" width="120" height="120" className="rounded-full" />
                            </div>
                            <div className="flex flex-wrap justify-start w-[80%] items-end mb-5">
                                <Tag name="FE" />
                                <Tag name="UI/UX" />
                                <Tag name="CV" />
                                <Tag name="ML" />
                                <Tag name="the DEVKOR" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[50%] ml-5 h-[25rem]">
                        <div>
                            <Select
                                options={positionOptions}
                                styles={customStyles}
                                placeholder="주요 포지션"
                                isClearable={false}
                                isSearchable={false}
                                menuPosition={"fixed"}
                                theme={(theme) => ({
                                    ...theme,
                                    colors: {
                                        ...theme.colors,
                                        primary25: "#F6B55A",
                                        primary: "black",
                                    },
                                })}
                                onChange={(value) => {
                                    setSelectedPosition(value?.value);
                                }}
                            />
                        </div>
                        <div className="mt-8">
                            <Select
                                options={projectOptions}
                                styles={customStyles2}
                                placeholder="소속 스터디/프로젝트"
                                isClearable={false}
                                isSearchable={false}
                                theme={(theme) => ({
                                    ...theme,
                                    colors: {
                                        ...theme.colors,
                                        primary25: "#F6B55A",
                                        primary: "black",
                                    },
                                })}
                                onChange={(value) => {
                                    setSelectedProject(value?.value);
                                }}
                            />
                        </div>

                        <div className="mt-5">
                            <h2 className="">한줄 소개</h2>
                            <textarea name="" id="" className="bg-[#222222] rounded-lg w-[100%] h-[10rem] mt-5 p-5"></textarea>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-[50%] mr-5 flex flex-col my-10">
                        <input type="text" placeholder="이름" className="bg-black border-b-2 border-[#222222] my-10 p-2 opacity-60" {...register("name")} />
                        <input type="text" placeholder="학과" className="bg-black border-b-2 border-[#222222] my-10 p-2 opacity-60" {...register("major")} />
                        <input type="text" placeholder="GitHub" className="bg-black border-b-2 border-[#222222] my-10 p-2 opacity-60" {...register("github")} />
                        <input type="text" placeholder="Instagram" className="bg-black border-b-2 border-[#222222] my-10 p-2 opacity-60" {...register("instagram")} />
                        <input type="text" placeholder="Blog" className="bg-black border-b-2 border-[#222222] my-10 p-2 opacity-60" {...register("blog")} />
                    </div>
                    <div className="w-[50%] ml-5 flex flex-col my-10">
                        <input type="text" placeholder="생년월일" className="bg-black border-b-2 border-[#222222] my-10 p-2 opacity-60" {...register("birthday")} />
                        <input type="text" placeholder="학번" className="bg-black border-b-2 border-[#222222] my-10 p-2 opacity-60" {...register("studentNo")} />
                        <input type="text" placeholder="MBTI" className="bg-black border-b-2 border-[#222222] my-10 p-2 opacity-60" {...register("mbti")} />
                        <input type="text" placeholder="취미" className="bg-black border-b-2 border-[#222222] my-10 p-2 opacity-60" {...register("hobby")} />
                    </div>
                </div>
                <div className="pb-[10rem]">
                    <input type="submit" value="저장하기" className="bg-[#222222] rounded-xl flex mx-auto px-[4.5rem] py-4 text-lg font-medium cursor-pointer hover:bg-devkor hover:text-black" />
                </div>
            </form>
        </div>
    );
};

export default MyPage;
