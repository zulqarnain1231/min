import React from "react";
import ComponentWrapper from "../Wrappers/ComponentWrapper";
import Image from "next/image";
import Link from "next/link";
import * as Icons from "../../../constants/Svg/Icons";
const Footer = () => {
  const menu = [
    {
      name: "商品特徴",
      route: "#",
    },
    {
      name: "制作サンプル",
      route: "#",
    },
    {
      name: "料金",
      route: "fee",
    },
    {
      name: "お客様の声",
      route: "#",
    },

    {
      name: "よくある質問",
      route: "#",
    },
  ];
  return (
    <ComponentWrapper id="footer" style="bg-white-main py-10">
      <nav className="md:w-[90%] xl:w-[80%] w-full flex flex-col items-center justify-start gap-10 mx-auto">
        <div className="w-full md:grid flex flex-col-reverse items-center justify-start md:gap-0 gap-6  md:grid-cols-2">
          {/* left side */}
          <div className="w-full flex flex-col md:items-start items-center justify-start gap-6">
            <Link
              href={"/"}
              className="md:h-[60px] h-[46px] md:w-[250px] w-[200px] relative"
            >
              <Image
                className="w-full h-full object-contain"
                src={"/Assets/Logo.png"}
                alt=""
                priority
                fill
              />
            </Link>
            <div className="w-full flex lg:flex-nowrap flex-wrap items-center md:justify-start justify-center gap-4">
              <p className="text-black-main text-sm font-medium">運営会社</p>
              <p className="text-black-main text-sm font-medium">
                プライバシーポリシー
              </p>
              <p className="text-black-main text-sm font-medium">
                特定商取引法に関する表記
              </p>
            </div>
          </div>
          {/* right side */}
          <div className="w-full flex flex-col items-start justify-start gap-6">
            <div className="w-full grid xl:grid-cols-5 grid-cols-2 gap-2 place-items-center">
              {menu.map((item: any, index: number) => (
                <Link
                  key={index}
                  href={item.route}
                  className="text-black-main text-base font-semibold"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="w-full flex items-center md:justify-end justify-center">
              <button className="h-[54px] w-[230px] flex items-center justify-center gap-2 bg-brand-main rounded-[100px] text-white-main text-base font-normal">
                <Icons.LineIcon ClassName="text-[24px]" fill="" stroke="" />
                LINEでデモ作成
              </button>
            </div>
          </div>
        </div>
        <p className="text-center text-black-main text-sm font-normal">
          © min Co., Ltd. All Rights Reserved.
        </p>
      </nav>
    </ComponentWrapper>
  );
};

export default Footer;
