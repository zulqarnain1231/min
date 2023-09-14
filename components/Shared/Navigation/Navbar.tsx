import Link from "next/link";
import Image from "next/image";
import React from "react";
import * as Icons from "../../../constants/Svg/Icons";
import { BiMenuAltRight } from "react-icons/bi";
const Navbar = () => {
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
      name: "お客様の声",
      route: "#",
    },
    {
      name: "よくある質問",
      route: "#",
    },
  ];
  return (
    <nav className="w-full h-[70px] bg-transparent flex items-center justify-between md:px-6 px-2 pt-4">
      <Link
        href={"/"}
        className="md:h-[60px] h-[46px] md:w-[250px] w-[200px] relative"
      >
        <Image
          className="w-full h-full object-contain"
          src={"/Assets/Logo.png"}
          alt=""
          fill
        />
      </Link>
      <div className="h-full lg:flex hidden items-center justify-start gap-8">
        <div className="h-full flex justify-start items-center gap-4">
          {menu.map((item: any, index: number) => (
            <Link
              href={item.route}
              key={index}
              className="text-black-main text-base font-normal"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <button className="h-[54px] w-[230px] flex items-center justify-center gap-2 bg-brand-main rounded-[100px] text-white-main text-base font-normal">
          <Icons.LineIcon ClassName="text-[24px]" fill="" stroke="" />
          LINEでデモ作成
        </button>
      </div>
      <button className="flex lg:hidden items-center justify-center bg-transparent">
        <BiMenuAltRight className="text-[28px] text-black-main" />
      </button>
    </nav>
  );
};

export default Navbar;
