import SectionTitle from "@/components/Shared/Typography/SectionTitle";
import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import Image from "next/image";
import React from "react";

const Faqs = () => {
  return (
    <ComponentWrapper id="faq" style="w-full lg:py-16 py-10 bg-black-secondary">
      <div className="w-full flex flex-col items-center justify-start gap-10">
        <SectionTitle
          english="SERVICE"
          japnese="よくある質問"
          englishStyle="text-[#454242]"
          japneseStyle="text-white-main"
        />
        <div className="md:w-[90%] xl:w-[80%] w-full flex flex-col items-start justify-start gap-4 bg-white-main rounded-[15px] md:p-6 p-4">
          <div className="w-full flex items-center justify-start gap-4">
            <div className="relative h-[42px] w-[42px] flex-shrink-0">
              <Image
                className="w-full h-full pointer-events-none object-contain"
                src={"/Assets/Faq/Q.png"}
                alt=""
                fill
              />
            </div>
            <p className="text-black-main text-left sm:text-2xl text-xl font-semibold">
              どれくらいでホームページを公開できますか？
            </p>
          </div>
          <div className="w-full flex items-center justify-start gap-4">
            <div className="relative h-[42px] w-[42px] flex-shrink-0">
              <Image
                className="w-full h-full pointer-events-none object-contain"
                src={"/Assets/Faq/A.png"}
                alt=""
                fill
              />
            </div>
            <p className="text-black-main text-left sm:text-lg text-base font-medium">
              最短でお申込日〜3営業日程度で公開が可能です。
            </p>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Faqs;
