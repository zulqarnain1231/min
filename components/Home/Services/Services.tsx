import SectionTitle from "@/components/Shared/Typography/SectionTitle";
import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <ComponentWrapper
      id="services"
      style="lg:py-16 py-10 w-full bg-[url('/Assets/Services/servicebg.png')] bg-cover bg-no-repeat bg-top"
    >
      <div className="w-full flex flex-col items-center justify-start gap-16">
        <SectionTitle english="SERVICE" japnese=" サービスの特徴" />
        <div className="md:w-[90%] xl:w-[80%] w-full grid lg:place-items-start place-items-center lg:grid-cols-[1fr,3fr] lg:gap-2 gap-0 bg-white-main shadow-lg rounded-[20px] md:p-8 p-4">
          <div className="w-[168px] h-[170px] relative">
            <Image
              className="h-full w-full object-contain pointer-events-none"
              src={"/Assets/Services/watch.png"}
              alt=""
              fill
            />
          </div>
          <div className="w-full flex flex-col items-center justify-start gap-2">
            <div className="w-full flex lg:flex-row flex-col lg:items-center items-start justify-start gap-2">
              <p className="text-[#22BA4F] text-left sm:text-7xl text-5xl font-semibold">
                01
              </p>
              <p className="text-black-main text-left sm:text-3xl text-2xl font-semibold">
                最短即日で信頼感のあるコーポレートサイトを低価格で公開できます。
              </p>
            </div>
            <p className="sm:text-lg text-base text-black-main text-left font-medium">
              ミニッツは信頼感のあるコーポレートサイトを短時間で作成することが出来るサービスです。どんなサイトになるかイメージを確認してから購入できるので初めての方でも安心です。
            </p>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Services;
