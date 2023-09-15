import React from "react";
import Image from "next/image";

interface Props {
  image: string;
  content: string;
}

const SampleCard: React.FC<Props> = ({ image, content }: Props) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-4">
      <div className="w-full h-[250px] relative">
        <Image
          className="w-full h-full object-fill pointer-events-none"
          src={image}
          alt=""
          fill
        />
      </div>
      <p className="text-black-main text-center sm:text-[22px] text-xl font-semibold">
        {content}
      </p>
    </div>
  );
};

export default SampleCard;
