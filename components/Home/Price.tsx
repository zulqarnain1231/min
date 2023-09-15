import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import SectionTitle from "../Shared/Typography/SectionTitle";

const Price = () => {
  return (
    <ComponentWrapper id="price" style="w-full lg:py-16 py-10 bg-white-off">
      <div className="w-full flex flex-col items-center justify-start gap-10">
        <SectionTitle
          english="PRICE"
          japnese="料金"
          englishStyle="text-white-main"
          japneseStyle="text-black-main"
        />
        <div className="xl:w-[50%] lg:w-[60%] md:w-[80%] mx-auto w-full flex flex-col items-center justify-start gap-4 bg-white-main border-[3px] border-brand-main rounded-[20px] p-6">
          <p className="text-center text-black-main sm:text-2xl text-xl font-semibold">
            初期費用はゼロ、シンプルな料金設定です。
          </p>
          <p className="text-center text-brand-main sm:text-2xl text-xl font-medium bg-[url('/Assets/Price/firstheading.png')] bg-contain bg-no-repeat bg-bottom">
            年額プラン ¥11,760 (税別)
          </p>
          <p className="text-black-main text-center text-xl font-semibold">
            1ヶ月あたり
          </p>
          <p className="text-brand-main text-center sm:text-5xl text-3xl font-semibold bg-[url('/Assets/Price/secondheading.png')] bg-contain bg-no-repeat bg-bottom">
            <span className="text-3xl">¥</span> 980{" "}
            <span className="text-xl"> (税別)</span>
          </p>
          <p className="text-black-main text-[17px] leading-6 text-center font-medium lg:w-[85%]">
            ドメインを新規に取得される場合は別途取得費用が発生します。
            サーバー費用、SSL証明書取得費用などはご利用料金に含まれます。
          </p>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Price;
