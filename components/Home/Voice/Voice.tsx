import React from "react";
import SectionTitle from "@/components/Shared/Typography/SectionTitle";
import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import * as Icons from "../../../constants/Svg/Icons";
import Image from "next/image";
import VoiceCard from "./VoiceCard";

const Voice = () => {
  const voices = [
    {
      name: "A.B様",
      age: "（30代前半/男性）",
      title: "帰りの電車にはもう出来てて",
      detail:
        "登記の書類を出しに法務局に向かった帰りだったんですが、たまたまこのサービスを知って、試しにと思ってチャットを開いてみたんです。聞かれる質問は登記の時に考えた内容でしたから最寄駅に着く前にはサイトができていました。",
    },
    {
      name: "A.B様",
      age: "（30代前半/男性）",
      title: "サイト綺麗ですね！って言われます",
      detail:
        "取引先から言われた時はリップサービスかなって思ってたんですが娘も「お父さんの会社のサイトカッコいいね」って言われて、今まで会社の事なんて興味持たなかったんですが「こんな事してるんだー」とか、自然に会話されるようになりました。",
    },
    {
      name: "A.B様",
      age: "（30代前半/男性）",
      title: "帰りの電車にはもう出来てて",
      detail:
        "登記の書類を出しに法務局に向かった帰りだったんですが、たまたまこのサービスを知って、試しにと思ってチャットを開いてみたんです。聞かれる質問は登記の時に考えた内容でしたから最寄駅に着く前にはサイトができていました。",
    },
  ];
  return (
    <ComponentWrapper id="voice" style="lg:py-16 py-10">
      <div className="w-full flex flex-col items-center justify-start sm:gap-16 gap-10 ">
        <SectionTitle
          english="VOICE"
          japnese="お客様の声"
          englishStyle="text-[#E6FFE6]"
          japneseStyle="text-black-main"
        />
        <div className="lg:w-[90%] xl:w-[80%] w-full grid md:grid-cols-3 md:gap-6 gap-8">
          {voices.map((item: any, index: number) => (
            <VoiceCard
              key={index}
              name={item.name}
              age={item.age}
              title={item.title}
              detail={item.detail}
            />
          ))}
        </div>
        <button className="h-[78px] sm:w-[410px] w-full flex items-center justify-center gap-2 bg-brand-main rounded-[100px] text-white-main sm:text-2xl text-xl font-normal">
          <Icons.LineIcon ClassName="h-[60px] w-[60px]" fill="" stroke="" />
          LINEで今すぐデモ作成
        </button>
      </div>
    </ComponentWrapper>
  );
};

export default Voice;
