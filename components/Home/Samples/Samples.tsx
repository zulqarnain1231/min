import SectionTitle from "@/components/Shared/Typography/SectionTitle";
import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import React from "react";
import * as Icons from "../../../constants/Svg/Icons";
import Image from "next/image";
const Samples = () => {
  return (
    <ComponentWrapper id="samples" style="w-full lg:py-28 py-16">
      <div className="w-full flex flex-col items-center justify-start gap-16">
        <SectionTitle
          english="SAMPLE"
          japnese="制作サンプル"
          englishStyle="text-[#ECFFEF]"
          japneseStyle="text-black-main"
        />
        <div className="md:w-[90%] xl:w-[80%] w-full grid grid-cols-3 gap-8">
          <div className="w-full h-full flex flex-col items-center justify-start gap-4">
            <div className="w-full h-[250px] relative">
              <Image
                className="w-full h-full object-fill pointer-events-none"
                src={"/Assets/Samples/sample1.png"}
                alt=""
                fill
              />
            </div>
            <p className="text-black-main text-center text-2xl font-semibold">
              ITスタートアップ系
            </p>
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

export default Samples;
