import SectionTitle from "@/components/Shared/Typography/SectionTitle";
import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import Image from "next/image";
import React from "react";
import FaqCard from "./FaqCard";
import { FiChevronDown } from "react-icons/fi";
import Data from "../../../constants/Data/Data.json";

const Faqs = () => {
  const { faqs } = Data;
  return (
    <ComponentWrapper id="faq" style="w-full lg:py-16 py-10 bg-black-secondary">
      <div className="w-full flex flex-col items-center justify-start gap-10">
        <SectionTitle
          english="SERVICE"
          japnese="よくある質問"
          englishStyle="text-[#454242]"
          japneseStyle="text-white-main"
        />
        <div className="w-full flex flex-col items-center justify-start gap-10 mt-8">
          {faqs.map((item: any, index: number) => (
            <FaqCard
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>

        <button className="h-[56px] sm:w-[250px] w-full flex items-center sm:justify-start justify-center px-5 sm:gap-6 gap-3 border-2 border-white-main text-white-main text-lg font-semibold bg-transparent rounded-[100px]">
          <FiChevronDown className="text-2xl text-white-main" />
          もっと見る
        </button>
      </div>
    </ComponentWrapper>
  );
};

export default Faqs;
