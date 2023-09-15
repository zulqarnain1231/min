import React from "react";

interface Props {
  english: string;
  englishStyle?: string;
  japnese: string;
  japneseStyle?: string;
}
const SectionTitle: React.FC<Props> = ({
  english,
  japnese,
  englishStyle = "text-[#37902F]",
  japneseStyle = "text-white-main",
}: Props) => {
  return (
    <div className="w-full flex items-center justify-center relative">
      <p
        className={`${japneseStyle} text-center sm:text-4xl text-3xl font-semibold z-10`}
      >
        {japnese}
      </p>
      <h2
        className={`${englishStyle} absolute left-auto text-center  sm:text-8xl text-7xl font-semibold`}
      >
        {english}
      </h2>
    </div>
  );
};

export default SectionTitle;
