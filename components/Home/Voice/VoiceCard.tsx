import React from "react";
import Image from "next/image";

interface Props {
  title: string;
  detail: string;
  age: string;
  name: string;
}

const VoiceCard: React.FC<Props> = ({ title, detail, age, name }: Props) => {
  return (
    <div className="w-full h-full flex flex-col items-start justify-start gap-4 border-2 border-brand-main bg-white-main relative sm:p-6 p-4">
      <p className="text-brand-main text-left text-[22px] font-semibold">
        {title}
      </p>
      <p className="text-left text-black-main text-base font-medium">
        {detail}
      </p>
      <div className="w-full flex items-center justify-end">
        <p className="text-black-main text-left text-lg font-medium">
          <span className="text-[20px] font-semibold">{name}</span>
          {age}
        </p>
      </div>
      {/* top comma */}
      <div className="absolute -top-2 -left-2">
        <div className="relative h-[32px] w-[28px]">
          <Image
            src={"/Assets/Voice/leftcomma.jpg"}
            className="w-full h-full object-fill pointer-events-none"
            alt=""
            fill
          />
        </div>
      </div>

      {/* bottom comma */}
      <div className="absolute -bottom-2 -right-2">
        <div className="relative h-[32px] w-[28px]">
          <Image
            src={"/Assets/Voice/rightcomma.jpg"}
            className="w-full h-full object-fill pointer-events-none"
            alt=""
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default VoiceCard;
