import SectionTitle from "@/components/Shared/Typography/SectionTitle";
import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import Image from "next/image";
import React from "react";
import ServiceCard from "./ServiceCard";
import Data from "../../../constants/Data/Data.json";

const Services = () => {
  const { services } = Data;
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
              backgroundStyle={item.backgroundStyle}
              titleBackground={item.background}
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
