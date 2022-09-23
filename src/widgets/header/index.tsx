import React, { useEffect, useState } from "react";

import MenuIcon from "assets/svg/MenuIcon";
import CloseIcon from "assets/svg/CloseIcon";

import UseOutsideClick from "assets/hooks/useOutsideClick";

import AppStore from "AppStore";

type Props = { smoothScroll: any };

const classNames = {
  menu: "text-white font-semibold cursor-pointer hover:border-b-4 py-4 border-white transition-all duration-500",
};

const Header = ({ smoothScroll }: Props) => {
  const [paddingClass] = AppStore("paddingClass");
  const [isScroll, setIsScroll] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);

  const handleClickOutside = () => {
    setToggleNav(false);
  };
  const navRef: any = UseOutsideClick(handleClickOutside);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  return (
    <>
      <header
        className={`z-50 fixed top-0 right-0 h-24 w-full text-white flex items-center justify-between transition-colors duration-500 ${paddingClass} ${
          isScroll ? "bg-transparentD" : null
        }`}
      >
        <div className="flex items-center space-x-14">
          <a
            onClick={() => {
              smoothScroll("top");
            }}
          >
            <div className="flex items-center cursor-pointer transition-all duration-300">
              <div className={`headerLogo w-24 h-16 md:w-28 md:h-24`} />
              {/* <div
                className={`w-24 h-16 md:w-28 md:h-20 flex flex-col items-start justify-center overflow-hidden text-white hover:text-amber-400`}
              >
                <p className="text-4xl font-bold font-serif tracking-widest leading-8">
                  Alp
                </p>
                <p className="text-xl font-medium font-serif tracking-tighter">
                  HARVEST
                </p>
              </div> */}
            </div>
          </a>
          <div className="hidden text-sm xl:text-xl sm:flex items-center justify-center space-x-4 xl:space-x-6">
            <a
              onClick={() => {
                smoothScroll("top");
              }}
              className={classNames.menu}
            >
              Home
            </a>
            <a
              onClick={() => {
                smoothScroll("product1");
              }}
              className={classNames.menu}
            >
              Sea Foods
            </a>
            <a
              onClick={() => {
                smoothScroll("product2");
              }}
              className={classNames.menu}
            >
              Processed Meat
            </a>
            <a
              onClick={() => {
                smoothScroll("product3");
              }}
              className={classNames.menu}
            >
              Pickles
            </a>
            {/* <a
            onClick={() => {
              smoothScroll("product4");
            }}
            className={classNames.menu}
          >
            Dips & Spreads
          </a> */}
            <a
              onClick={() => {
                smoothScroll("about");
              }}
              className={classNames.menu}
            >
              About
            </a>
          </div>
        </div>

        <div className="flex sm:hidden">
          <div
            onClick={() => {
              setToggleNav(true);
            }}
            className="flex items-center justify-end"
          >
            {/* <div className={`headerLogoRight w-10 h-12 md:w-12 md:h-16`} /> */}
            <MenuIcon
              style={
                "h-10 w-10 text-white hover:text-amber-500 transition-all duration-500 cursor-pointer"
              }
            />
          </div>
        </div>
      </header>
      <section
        className={
          toggleNav
            ? "flex bg-transparentD justify-center items-center right-0 w-full h-screen sm:h-0 fixed z-50"
            : "-z-10"
        }
      >
        {/* <MobilePopOver /> */}
        <div
          ref={navRef}
          className={
            toggleNav
              ? "fixed bg-white rounded-l-xl z-50 top-0 right-0 p-4 pt-2 w-4/6 h-screen justify-center sm:hidden transition-all duration-500"
              : "fixed bg-white rounded-l-xl z-50 top-0 -right-full p-4 pt-2 w-4/6 h-screen justify-center sm:hidden transition-all duration-500"
          }
        >
          <div className="w-full h-8 mb-7 grid justify-items-end ">
            <div
              onClick={() => {
                setToggleNav(false);
              }}
            >
              <CloseIcon style="h-8 w-8 text-black xl:hover:cursor-pointer xl:hover:bg-blue-200 active:bg-blue-200 duration-900 rounded-full" />
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-start space-y-3">
            <a
              onClick={() => {
                smoothScroll("top");
                setToggleNav(false);
              }}
              className="text-xl text-black font-semibold cursor-pointer hover:text-amber-500 active:border-l-4 active:border-amber-500 active:pl-4 transition-all duration-500"
            >
              Home
            </a>
            <a
              onClick={() => {
                smoothScroll("product1");
                setToggleNav(false);
              }}
              className="text-xl text-black font-semibold cursor-pointer hover:text-amber-500 active:border-l-4 active:border-amber-500 active:pl-4 transition-all duration-500"
            >
              Sea Food
            </a>
            <a
              onClick={() => {
                smoothScroll("product2");
                setToggleNav(false);
              }}
              className="text-xl text-black font-semibold cursor-pointer hover:text-amber-500 active:border-l-4 active:border-amber-500 active:pl-4 transition-all duration-500"
            >
              Processed Meat
            </a>
            <a
              onClick={() => {
                smoothScroll("about");
                setToggleNav(false);
              }}
              className="text-xl text-black font-semibold cursor-pointer hover:text-amber-500 active:border-l-4 active:border-amber-500 active:pl-4 transition-all duration-500"
            >
              Pickles
            </a>
            <a
              onClick={() => {
                smoothScroll("about");
                setToggleNav(false);
              }}
              className="text-xl text-black font-semibold cursor-pointer hover:text-amber-500 active:border-l-4 active:border-amber-500 active:pl-4 transition-all duration-500"
            >
              About
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
