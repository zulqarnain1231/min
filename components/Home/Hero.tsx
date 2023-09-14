import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import Image from "next/image";

import * as Icons from "../../constants/Svg/Icons";
const Hero = () => {
  return (
    <ComponentWrapper id="hero" style="w-full h-full">
      <div className="w-full h-full flex flex-col items-center justify-start gap-4">
        <div className="w-full lg:h-[80%] grid lg:grid-cols-2 lg:gap-0 gap-8 place-items-center">
          <div className="w-full flex flex-col items-center justify-start gap-8 pt-5 lg:pt-0">
            <div className="lg:w-[470px] sm:w-[350px] w-[300px] lg:h-[72px] sm:h-[60px] h-[50px] relative pointer-events-none">
              <Image
                className="h-full w-full object-contain"
                src={"/Assets/Hero/title.png"}
                alt=""
                priority
                fill
              />
            </div>
            <div className="lg:w-[470px] sm:w-[350px] w-[300px] lg:h-[96px] sm:h-[80px] h-[60px] relative pointer-events-none">
              <Image
                className="h-full w-full object-contain"
                src={"/Assets/Hero/content-yellow.png"}
                alt=""
                priority
                fill
              />
            </div>
            <div className="lg:w-[470px] sm:w-[350px] w-[300px] lg:h-[68px] sm:h-[50px] h-[40px] relative pointer-events-none">
              <Image
                className="h-full w-full object-contain"
                src={"/Assets/Hero/rounded-content.png"}
                alt=""
                priority
                fill
              />
            </div>
            <div className="lg:w-[470px] sm:w-[350px] w-[300px] lg:h-[100px sm:h-[80px] h-[60px] relative pointer-events-none">
              <Image
                className="h-full w-full object-contain"
                src={"/Assets/Hero/price.png"}
                alt=""
                priority
                fill
              />
            </div>
          </div>
          <div className="w-full  sm:h-[400px] h-[250px] flex-shrink-0 relative pointer-events-none">
            <Image
              className="w-full h-full object-fill"
              src={"/Assets/Hero/Hero.png"}
              alt=""
              priority
              fill
            />
          </div>
        </div>
        <button className="h-[70px] sm:w-[420px] w-full flex items-center justify-center gap-2 bg-brand-main rounded-[100px] text-white-main text-lg font-normal lg:-mt-8">
          <Icons.LineIcon ClassName="text-[28px]" fill="" stroke="" />
          LINEで今すぐデモ作成
        </button>
      </div>
    </ComponentWrapper>
  );
};

export default Hero;
