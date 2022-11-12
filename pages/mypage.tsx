import Image from "next/image";
import { Tag } from "../components/Tag";
import { useForm } from "react-hook-form";
import { Inputs } from "../interface/inputs";
import Select from "react-select";
import { useEffect, useState } from "react";
import { positionOptions } from "../constants/positionOption";
import { projectOptions } from "../constants/projectOption";
import { customSelectStyle } from "../styles/selectStyle";
import { useRecoilState } from "recoil";
import { profileRecoilState } from "../recoil/profileState";

const MyPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();
    const [selectedList, setSelectedList] = useState<string[]>();
    const [profileState, setProfileState] = useRecoilState(profileRecoilState);
    const onRemove = (selectedLabel: string) => {
        setSelectedList(selectedList?.filter((label) => label !== selectedLabel));
    };

    const onSubmit = (data: Inputs) => {
        setProfileState(data);
    };

    useEffect(() => {
        console.log(profileState);
    }, [profileState]);

    return (
        <div className="text-white">
            <div className="text-xl font-semibold my-10 mx-[10%] flex justify-start">마이페이지</div>
            <form className="mx-10" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-center h-[36rem]">
                    <div className="bg-[#222222] w-[40%] rounded-lg mr-10 h-full">
                        <h4 className="text-lg px-8 pt-5 h-[10%] ">프로필</h4>
                        <div className="flex flex-col items-center h-[90%]">
                            <div className="pt-8 h-[50%]">
                                <Image src="/images/ProfileDefault.jpg" alt="profile" width="160" height="160" className="rounded-full" />
                            </div>
                            <div className="flex flex-wrap justify-center w-[80%] items-end mb-5">
                                {selectedList?.map((x, idx) => {
                                    return <Tag name={x} onRemove={onRemove} key={idx} />;
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="w-[40%] ml-10">
                        <div className="h-[40%]">
                            <div>
                                <Select
                                    options={positionOptions}
                                    styles={customSelectStyle}
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
                                        console.log(value);
                                        console.log(value?.value);
                                        if (selectedList && value && value.value !== "" && !selectedList.includes(value.value)) {
                                            setSelectedList([...selectedList, value.value]);
                                        } else if (value && value.value !== "" && !selectedList?.includes(value.value)) {
                                            setSelectedList([value.value]);
                                        }
                                    }}
                                />
                            </div>
                            <div className="mt-8">
                                <Select
                                    options={projectOptions}
                                    styles={customSelectStyle}
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
                                        if (selectedList && value && value.value !== "" && !selectedList.includes(value.value)) {
                                            setSelectedList([...selectedList, value?.value]);
                                        } else if (value && value.value !== "" && !selectedList?.includes(value.value)) {
                                            setSelectedList([value.value]);
                                        }
                                    }}
                                />
                            </div>
                        </div>
                        <div className="h-[10%] tracking-wide p-1 text-lg">한줄 소개</div>
                        <div className="h-[50%]">
                            <textarea name="" id="" className="bg-[#222222] rounded-lg w-[100%] h-full p-5"></textarea>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center my-10">
                    <div className="w-[40%] mr-10 flex flex-col">
                        <input
                            type="text"
                            placeholder="이름"
                            className="bg-black border-b-2 border-[#222222] mt-[5rem] p-2 opacity-60 focus:border-white focus:outline-none"
                            {...register("name", { required: true })}
                        />
                        {errors.name ? <p className="p-2 text-[#FF5050] text-sm">이름을 입력해주세요</p> : null}

                        <input type="text" placeholder="학과" className="bg-black border-b-2 border-[#222222] mt-[5rem] p-2 opacity-60 focus:border-white focus:outline-none" {...register("major")} />
                        <input
                            type="text"
                            placeholder="GitHub"
                            className="bg-black border-b-2 border-[#222222] mt-[5rem] p-2 opacity-60 focus:border-white focus:outline-none"
                            {...register("github")}
                        />
                        <input
                            type="text"
                            placeholder="Instagram"
                            className="bg-black border-b-2 border-[#222222] mt-[5rem] p-2 opacity-60 focus:border-white focus:outline-none"
                            {...register("instagram")}
                        />
                        <input type="text" placeholder="Blog" className="bg-black border-b-2 border-[#222222] mt-[5rem] p-2 opacity-60 focus:border-white focus:outline-none" {...register("blog")} />
                    </div>
                    <div className="w-[40%] ml-10 flex flex-col">
                        <input
                            type="text"
                            placeholder="생년월일"
                            className="bg-black border-b-2 border-[#222222] mt-[5rem] p-2 opacity-60 focus:border-white focus:outline-none"
                            {...register("birthday")}
                        />
                        <input
                            type="text"
                            placeholder="학번"
                            className="bg-black border-b-2 border-[#222222] mt-[5rem] p-2 opacity-60 focus:border-white focus:outline-none"
                            {...register("studentNo")}
                        />
                        <input type="text" placeholder="MBTI" className="bg-black border-b-2 border-[#222222] mt-[5rem] p-2 opacity-60 focus:border-white focus:outline-none" {...register("mbti")} />
                        <input type="text" placeholder="취미" className="bg-black border-b-2 border-[#222222] mt-[5rem] p-2 opacity-60 focus:border-white focus:outline-none" {...register("hobby")} />
                    </div>
                </div>
                <div className="pb-[10rem] mt-[8rem]">
                    <input type="submit" value="저장하기" className="bg-[#222222] rounded-xl flex mx-auto px-[4.5rem] py-4 text-lg font-medium cursor-pointer hover:bg-devkor hover:text-black" />
                </div>
            </form>
        </div>
    );
};

export default MyPage;
