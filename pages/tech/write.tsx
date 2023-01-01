import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { TagButton, TagList } from "../../components/Tags";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

import { TextState, TextAreaTextApi } from "@uiw/react-md-editor";

const markdownImage = {
  execute: (state: TextState, api: TextAreaTextApi) => {
    let imgurl = "";

    /* upload image to S3, and get image url */

    let modifyText = `![](${imgurl}) `;
    api.replaceSelection(modifyText);
  },
};

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

const Write: NextPage = () => {
  const [sectionIdx, setSectionIdx] = useState<number>(0);
  const [content, setContent] = useState<string>("");

  return (
    <div className="h-fit">
      <Head>
        <title>DEVKOR</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <div className="mt-10">
          <div className="inline-block">
            <h1 className="text-4xl font-bold">태그</h1>
            <p className="text-xl mt-3">
              글의 주제에 맞는 태그를 설정해 주세요!
            </p>
          </div>
        </div>
        <div className="subjects mt-4">
          <div className="flex items-center">
            {TagList.map((menu, idx) => (
              <TagButton
                name={menu}
                mapIdx={idx}
                sectionIdx={sectionIdx}
                setSectionIdx={setSectionIdx}
                key={idx}
              />
            ))}
          </div>
        </div>

        <div className="searchbar mt-10">
          <input
            className="text-4xl font-bold border-none bg-transparent focus:outline-none"
            placeholder="제목을 입력해주세요"
          />
        </div>
      </section>

      <section data-color-mode="dark" className="mt-6">
        <MDEditor
          value={content}
          onChange={(val) => {
            setContent(val!);
          }}
          textareaProps={{
            placeholder: "멋진 Tech 소식을 공유해주세요!",
          }}
          height={500}
          components={{
            toolbar: (command, disabled, executeCommand) => {
              if (command.keyCommand === "image") {
                console.log(command.groupName);
                return (
                  <button
                    aria-label="Insert code"
                    disabled={disabled}
                    onClick={(evn) => {
                      evn.stopPropagation();
                      executeCommand(markdownImage);

                      /* Upload Image to S3 and paste link */
                    }}
                  >
                    {command.icon}
                  </button>
                );
              }
            },
          }}
        />
      </section>

      <section className="flex justify-end align-center pb-10">
        <button className="mt-10 bg-button hover:bg-white hover:text-black font-bold w-32 py-2 px-4 rounded-full flex justify-center">
          등록하기
        </button>
      </section>
    </div>
  );
};

export default Write;
