import React, { useEffect, useState } from "react";

import MenuIcon from "assets/svg/MenuIcon";
import CloseIcon from "assets/svg/CloseIcon";
import BigMenu1 from "./bigMenu1";
import BigMenu2 from "./bigMenu2";
import MobileMenu1 from "./mobileMenu1";
import MobileMenu2 from "./mobileMenu2";

import UseOutsideClick from "assets/hooks/useOutsideClick";

import AppStore from "AppStore";

type Props = { smoothScroll?: any };

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
          isScroll ? "bg-transparentD2" : null
        }`}
      >
        {smoothScroll ? (
          <BigMenu1 classNames={classNames} smoothScroll={smoothScroll} />
        ) : (
          <BigMenu2 classNames={classNames} />
        )}

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
      {smoothScroll ? (
        <MobileMenu1
          toggleNav={toggleNav}
          navRef={navRef}
          setToggleNav={setToggleNav}
          smoothScroll={smoothScroll}
        />
      ) : (
        <MobileMenu2
          toggleNav={toggleNav}
          navRef={navRef}
          setToggleNav={setToggleNav}
        />
      )}
    </>
  );
};

export default Header;
