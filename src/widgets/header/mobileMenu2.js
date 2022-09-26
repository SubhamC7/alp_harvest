import CloseIcon from "assets/svg/CloseIcon";
import Link from "next/link";
import React from "react";

const MobileMenu2 = ({ toggleNav, navRef, setToggleNav }) => {
  return (
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
          <Link href={"/"}>
            <a
              onClick={() => {
                setToggleNav(false);
              }}
              className="text-xl text-black font-semibold cursor-pointer hover:text-amber-500 active:border-l-4 active:border-amber-500 active:pl-4 transition-all duration-500"
            >
              Home
            </a>
          </Link>
          <Link href={"/sea-food"}>
            <a
              onClick={() => {
                setToggleNav(false);
              }}
              className="text-xl text-black font-semibold cursor-pointer hover:text-amber-500 active:border-l-4 active:border-amber-500 active:pl-4 transition-all duration-500"
            >
              Sea Food
            </a>
          </Link>
          <Link href={"/processed-meat"}>
            <a
              onClick={() => {
                setToggleNav(false);
              }}
              className="text-xl text-black font-semibold cursor-pointer hover:text-amber-500 active:border-l-4 active:border-amber-500 active:pl-4 transition-all duration-500"
            >
              Processed Meat
            </a>
          </Link>
          <Link href={"/pickles"}>
            <a
              onClick={() => {
                setToggleNav(false);
              }}
              className="text-xl text-black font-semibold cursor-pointer hover:text-amber-500 active:border-l-4 active:border-amber-500 active:pl-4 transition-all duration-500"
            >
              Pickles
            </a>
          </Link>
          <Link href={"/home#about"}>
            <a
              onClick={() => {
                setToggleNav(false);
              }}
              className="text-xl text-black font-semibold cursor-pointer hover:text-amber-500 active:border-l-4 active:border-amber-500 active:pl-4 transition-all duration-500"
            >
              About
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MobileMenu2;
