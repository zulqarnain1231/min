"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import * as Icons from "../../../constants/Svg/Icons";
import { BiMenuAltRight } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Data from "../../../constants/Data/Data.json";
import { Link as Scrolling } from "react-scroll";

const Navbar = () => {
  const { menu } = Data;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDrawer = () => {
    setIsOpen((prevvalue) => !prevvalue);
  };
  return (
    <>
      <nav className="w-full h-[70px] bg-transparent flex items-center justify-between md:px-6 px-2 pt-4">
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
        <div className="h-full lg:flex hidden items-center justify-start gap-8">
          <div className="h-full flex justify-start items-center gap-4">
            {menu.map((item: any, index: number) => (
              <Scrolling
                key={index}
                activeClass="active"
                to={item.route}
                spy={true}
                smooth={true}
                hashSpy={true}
                duration={1000}
                href={item.route}
                className="text-black-main text-base font-normal"
              >
                {item.name}
              </Scrolling>
            ))}
          </div>
          <button className="h-[54px] w-[230px] flex items-center justify-center gap-2 bg-brand-main rounded-[100px] text-white-main text-base font-normal">
            <Icons.LineIcon ClassName="text-[24px]" fill="" stroke="" />
            LINEでデモ作成
          </button>
        </div>
        <button
          onClick={toggleDrawer}
          className="flex lg:hidden items-center justify-center bg-transparent"
        >
          <BiMenuAltRight className="text-[28px] text-black-main" />
        </button>
      </nav>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        style={{ width: "100%" }}
        className="bg-white-main/30"
      >
        <div className="w-full flex flex-col items-start justify-start bg-white-main/30">
          <div className="w-full flex items-center justify-end p-4 border-b-[2px]">
            <button onClick={toggleDrawer}>
              <ImCross className="text-[24px] text-black-main" />
            </button>
          </div>
          {menu.map((item: any, index: number) => (
            <Scrolling
              key={index}
              activeClass="active"
              to={item.route}
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={1000}
              href={item.route}
              onClick={toggleDrawer}
              className="text-black-main text-base font-normal"
            >
              {item.name}
            </Scrolling>
          ))}
          <div className="w-full flex items-center justify-center mt-8">
            <button className="h-[54px] w-[230px] flex items-center justify-center gap-2 bg-brand-main rounded-[100px] text-white-main text-base font-normal">
              <Icons.LineIcon ClassName="text-[24px]" fill="" stroke="" />
              LINEでデモ作成
            </button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
