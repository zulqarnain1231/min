import SectionTitle from "@/components/Shared/Typography/SectionTitle";
import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import React from "react";

const Services = () => {
  return (
    <ComponentWrapper
      id="services"
      style="lg:py-16 py-10 w-full bg-[url('/Assets/Services/servicebg.png')] bg-cover bg-no-repeat bg-top"
    >
      <div className="w-full flex flex-col items-center justify-start gap-10">
        <SectionTitle english="SERVICE" japnese=" サービスの特徴" />
      </div>
    </ComponentWrapper>
  );
};

export default Services;
