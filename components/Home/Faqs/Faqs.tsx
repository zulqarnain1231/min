import SectionTitle from "@/components/Shared/Typography/SectionTitle";
import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import Image from "next/image";
import React from "react";
import FaqCard from "./FaqCard";
import { FiChevronDown } from "react-icons/fi";

const Faqs = () => {
  const faqs = [
    {
      question: "どれくらいでホームページを公開できますか？",
      answer: " 最短でお申込日〜3営業日程度で公開が可能です。",
    },
    {
      question: "支払い方法はどのようになりますか？",
      answer:
        " 請求書払いでございます、請求書は郵送またはメールで送付致します。",
    },
    {
      question: "最低契約期間はありますか？",
      answer: " 最低契約期間は1年です。",
    },
    {
      question: "自分でHPを更新できますか？",
      answer: " チャットからいつでも更新可能です。",
    },
    {
      question: "独自ドメインは使用できますか？",
      answer:
        "ミニッツで取得できるドメインは.com,.net,.info,.jpをはじめとした主要ドメインが取得可能です。 ※その他のドメインをご希望の場合はご自身で取得いただく必要がございます。",
    },
    {
      question: "解約すると作成したホームページはどうなりますか？",
      answer:
        "解約後、ホームページのコンテンツは削除され、閲覧できなくなります。 ドメインは「移管」または「廃止」のいずれかが選択可能です。",
    },
    {
      question: "お問い合わせフォームは利用できますか？",
      answer:
        "ご利用いただけます。メールフォームをお客様でカスタマイズが可能です。",
    },
  ];
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
