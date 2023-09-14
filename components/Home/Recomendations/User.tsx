import React from "react";
import Image from "next/image";

const User = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start">
      <div className="w-full flex items-center justify-start rounded-[10px] bg-white-main p-3 relative">
        <p className="text-black-main text-left text-2xl font-semibold">
          会社の事を知ってもらえるよう 名刺の代わりにしたい
        </p>
        <div className="absolute -bottom-8 right-[50%]">
          <div className="relative h-[40px] w-[40px]">
            <Image
              className="pointer-events-none h-full w-full object-contain"
              src={"/Assets/Recomendations/messege.png"}
              alt=""
              fill
            />
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-end z-10 -mt-6">
        <div className="relative h-[176px] w-[210px]">
          <Image
            className="w-full h-full object-contain"
            src={"/Assets/Recomendations/user1.png"}
            alt=""
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default User;
