import React from "react";
import ComponentWrapper from "../../Shared/Wrappers/ComponentWrapper";
import User from "./User";

const Recomendation = () => {
  return (
    <ComponentWrapper
      id="recomendation"
      style="w-full lg:pt-16 lg:pb-28 py-10 bg-[url('/Assets/Recomendations/recomendation.png')] bg-no-repeat bg-fill bg-bottom"
    >
      <div className="w-full h-full flex flex-col items-center justify-start gap-10">
        <div className="w-full flex items-center justify-center gap-4">
          <h2 className="text-brand-main sm:text-4xl text-2xl font-semibold">
            \
          </h2>
          <h2 className="text-brand-main sm:text-4xl text-2xl font-semibold">
            こんな方におすすめです
          </h2>
          <h2 className="text-brand-main sm:text-4xl text-2xl font-semibold">
            /
          </h2>
        </div>
        <div className="w-full grid grid-cols-3 gap-4">
          <User />
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Recomendation;
