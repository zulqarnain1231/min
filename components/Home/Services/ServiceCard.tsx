import React from "react";
import Image from "next/image";

interface Props {
  number: string;
  image: string;
  heading: string;
  detail: string;
}

const ServiceCard: React.FC<Props> = ({
  number,
  image,
  heading,
  detail,
}: Props) => {
  return (
    <div className="md:w-[90%] xl:w-[80%] w-full grid lg:place-items-start place-items-center lg:grid-cols-[1fr,3fr] lg:gap-2 gap-0 bg-white-main shadow-lg rounded-[20px] md:p-8 p-4">
      <div className="w-[168px] h-[170px] relative">
        <Image
          className="h-full w-full object-contain pointer-events-none"
          src={image}
          alt=""
          fill
        />
      </div>
      <div className="w-full flex flex-col items-center justify-start gap-2">
        <div className="w-full flex lg:flex-row flex-col lg:items-center items-start justify-start gap-2">
          <p className="text-[#22BA4F] text-left sm:text-7xl text-5xl font-semibold">
            {number}
          </p>
          <p className="text-black-main text-left sm:text-3xl text-2xl font-semibold">
            {heading}
          </p>
        </div>
        <p className="sm:text-lg text-base text-black-main text-left font-medium">
          {detail}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
