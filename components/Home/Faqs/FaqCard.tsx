import React from "react";
import Image from "next/image";

interface Props {
  question: string;
  answer: string;
}

const FaqCard: React.FC<Props> = ({ question, answer }: Props) => {
  return (
    <div className="md:w-[90%] xl:w-[80%] w-full flex flex-col items-start justify-start gap-4 bg-white-main rounded-[15px] md:p-6 p-4">
      <div className="w-full flex items-center justify-start gap-4">
        <div className="relative h-[42px] w-[42px] flex-shrink-0">
          <Image
            className="w-full h-full pointer-events-none object-contain"
            src={"/Assets/Faq/Q.png"}
            alt=""
            fill
          />
        </div>
        <p className="text-black-main text-left sm:text-2xl text-xl font-semibold">
          {question}
        </p>
      </div>
      <div className="w-full flex items-center justify-start gap-4">
        <div className="relative h-[42px] w-[42px] flex-shrink-0">
          <Image
            className="w-full h-full pointer-events-none object-contain"
            src={"/Assets/Faq/A.png"}
            alt=""
            fill
          />
        </div>
        <p className="text-black-main text-left sm:text-lg text-base font-medium">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FaqCard;
