import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import Image from "next/image";

const Hero = () => {
  return (
    <ComponentWrapper id="hero" style="w-full h-full">
      <div className="w-full h-full flex flex-col items-center justify-start gap-4">
        <div className="w-full h-full grid lg:grid-cols-2 lg:gap-0 gap-8 place-items-center">
          <div className="w-full flex flex-col items-center justify-start gap-8 pt-5 lg:pt-0">
            <div className="lg:w-[470px] sm:w-[350px] w-[300px] lg:h-[72px] sm:h-[60px] h-[50px] relative">
              <Image
                className="h-full w-full object-contain"
                src={"/Assets/Hero/title.png"}
                alt=""
                fill
              />
            </div>
            <div className="lg:w-[470px] sm:w-[350px] w-[300px] lg:h-[96px] sm:h-[80px] h-[60px] relative">
              <Image
                className="h-full w-full object-contain"
                src={"/Assets/Hero/content-yellow.png"}
                alt=""
                fill
              />
            </div>
            <div className="lg:w-[470px] sm:w-[350px] w-[300px] lg:h-[68px] sm:h-[50px] h-[40px] relative">
              <Image
                className="h-full w-full object-contain"
                src={"/Assets/Hero/rounded-content.png"}
                alt=""
                fill
              />
            </div>
            <div className="lg:w-[470px] sm:w-[350px] w-[300px] lg:h-[100px sm:h-[80px] h-[60px] relative">
              <Image
                className="h-full w-full object-contain"
                src={"/Assets/Hero/price.png"}
                alt=""
                fill
              />
            </div>
          </div>
          <div className="w-full  sm:h-[400px] h-[300px] flex-shrink-0 relative">
            <Image
              className="w-full h-full md:object-fill object-contain"
              src={"/Assets/Hero/Hero.png"}
              alt=""
              fill
            />
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Hero;
