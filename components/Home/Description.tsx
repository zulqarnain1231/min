import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import Image from "next/image";

const Description = () => {
  return (
    <ComponentWrapper id="description" style="lg:py-16 py-10">
      <div className="w-full flex items-center justify-center gap-4">
        <div className="relative h-[80px] w-[90px] md:inline-block hidden">
          <Image
            className="w-full h-full object-contain pointer-events-none"
            src={"/Assets/slashleft.png"}
            alt=""
            fill
          />
        </div>
        <div className="lg:w-[55%] flex items-center justify-center">
          <h2 className="text-black-main text-center sm:text-[40px] text-3xl leading-[48px] font-semibold">
            ミニッツはシンプルで手間いらずな コーポレートサイト制作サービスです
          </h2>
        </div>
        <div className="relative h-[80px] w-[90px] md:inline-block hidden">
          <Image
            className="w-full h-full object-contain pointer-events-none"
            src={"/Assets/slashright.png"}
            alt=""
            fill
          />
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Description;
