import React from "react";
import Image from "next/image";

interface Props {
  detail: string;
  picture: string;
}

const User: React.FC<Props> = ({ detail, picture }: Props) => {
  return (
    <div className="w-full flex flex-col items-center justify-start">
      <div className="h-[160px] w-[300px] flex items-start justify-start rounded-[10px] bg-white-main p-4 relative">
        <p className="text-black-main text-left text-2xl font-semibold">
          {detail}
        </p>
        <div className="absolute -bottom-8 right-[55%]">
          <div className="relative h-[40px] w-[40px]">
            <Image
              className="pointer-events-none h-full w-full object-contain"
              src={"/Assets/Recomendations/messege.png"}
              alt=""
              priority
              fill
            />
          </div>
        </div>
        <div className="absolute z-10 -bottom-36 right-0">
          <div className="relative h-[176px] w-[210px]">
            <Image
              className="w-full h-full object-contain"
              src={picture}
              alt=""
              priority
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
