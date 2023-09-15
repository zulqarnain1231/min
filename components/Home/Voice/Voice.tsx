import React from "react";
import SectionTitle from "@/components/Shared/Typography/SectionTitle";
import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import * as Icons from "../../../constants/Svg/Icons";
import Image from "next/image";

const Voice = () => {
  return (
    <ComponentWrapper id="voice" style="lg:py-16 py-10">
      <div className="w-full flex flex-col items-center justify-start sm:gap-16 gap-10 ">
        <SectionTitle
          english="VOICE"
          japnese="お客様の声"
          englishStyle="text-[#E6FFE6]"
          japneseStyle="text-black-main"
        />
        <div className="lg:w-[90%] xl:w-[80%] w-full grid md:grid-cols-3 gap-6">
          <div className="w-full h-full flex flex-col items-start justify-start gap-4 border-2 border-brand-main bg-white-main relative sm:p-6 p-4">
            <p className="text-brand-main text-left text-[22px] font-semibold">
              帰りの電車にはもう出来てて
            </p>
            <p className="text-left text-black-main text-base font-medium">
              登記の書類を出しに法務局に向かった帰りだったんですが、たまたまこのサービスを知って、試しにと思ってチャットを開いてみたんです。聞かれる質問は登記の時に考えた内容でしたから最寄駅に着く前にはサイトができていました。
            </p>
            <div className="w-full flex items-center justify-end">
              <p className="text-black-main text-left text-lg font-medium">
                <span className="text-[20px] font-semibold">A.B様</span>
                （30代前半/男性）
              </p>
            </div>
            {/* top comma */}
            <div className="absolute -top-2 -left-2">
              <div className="relative h-[32px] w-[28px]">
                <Image
                  src={"/Assets/Voice/leftcomma.jpg"}
                  className="w-full h-full object-fill pointer-events-none"
                  alt=""
                  fill
                />
              </div>
            </div>

            {/* bottom comma */}
            <div className="absolute -bottom-2 -right-2">
              <div className="relative h-[32px] w-[28px]">
                <Image
                  src={"/Assets/Voice/rightcomma.jpg"}
                  className="w-full h-full object-fill pointer-events-none"
                  alt=""
                  fill
                />
              </div>
            </div>
          </div>
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
