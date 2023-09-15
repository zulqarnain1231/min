import SectionTitle from "@/components/Shared/Typography/SectionTitle";
import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import Image from "next/image";
import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      number: "01",
      image: "/Assets/Services/watch.png",
      heading:
        " 最短即日で信頼感のあるコーポレートサイトを低価格で公開できます。",
      detail:
        "  ミニッツは信頼感のあるコーポレートサイトを短時間で作成することが出来るサービスです。どんなサイトになるかイメージを確認してから購入できるので初めての方でも安心です。",
    },
    {
      number: "02",
      image: "/Assets/Services/messege.png",
      heading: "デザインの知識も不要。 LINEで質問に答えるだけで完成！",
      detail:
        "  コーポレートサイト制作に必要な要素やデザインはミニッツにお任せください。質問にお答えいただくだけで信頼感のあるコーポレートサイトをご提案いたします。",
    },
    {
      number: "03",
      image: "/Assets/Services/app.png",
      heading: "サイトの更新もLINEで完結。 難しい操作は必要ありません。",
      detail:
        "  サイトの更新もLINEで。スマホがあればいつでもどこでもサイトを更新することが出来ます。（PCでも更新は可能です）こまめに情報発信をすることで検索結果の向上が期待できます。",
    },
    {
      number: "04",
      image: "/Assets/Services/settings.png",
      heading: " デザインは自動でアップデート。 放置していても古くなりません。",
      detail:
        "  一般的なウェブ制作では制作した時点でデザインのアップデートは止まります。ミニッツにデザインをお任せいただければ新しい技術やデザインのトレンドに併せて自動的にアップデートいたします。",
    },
  ];
  return (
    <ComponentWrapper
      id="services"
      style="lg:py-16 py-10 w-full bg-[url('/Assets/Services/servicebg.png')] bg-cover bg-no-repeat bg-top"
    >
      <div className="w-full flex flex-col items-center justify-start gap-16">
        <SectionTitle english="SERVICE" japnese=" サービスの特徴" />
        <div className="w-full flex flex-col items-center justify-start md:gap-10 sm:gap-6 gap-4">
          {services.map((item: any, index: number) => (
            <ServiceCard
              key={index}
              number={item.number}
              image={item.image}
              detail={item.detail}
              heading={item.heading}
            />
          ))}
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Services;
