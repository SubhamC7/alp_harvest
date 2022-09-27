import Link from "next/link";
import React from "react";

const BigMenu2 = ({ classNames }) => {
  return (
    <div className="flex items-center space-x-14">
      <Link href={"/"}>
        <a className="flex items-center cursor-pointer transition-all duration-300">
          <div className={`headerLogo w-24 h-24 md:w-28 md:h-24`} />
        </a>
      </Link>
      <div className="hidden text-sm xl:text-xl sm:flex items-center justify-center space-x-4 xl:space-x-6">
        <Link href={"/"}>
          <a className={classNames.menu}>Home</a>
        </Link>
        <Link href={"/sea-food"}>
          <a className={classNames.menu}>Sea Foods</a>
        </Link>
        <Link href={"/processed-meat"}>
          <a className={classNames.menu}>Processed Meat</a>
        </Link>
        <Link href={"/pickles"}>
          <a className={classNames.menu}>Pickles</a>
        </Link>
        <Link href={"/home#about"}>
          <a className={classNames.menu}>About</a>
        </Link>
      </div>
    </div>
  );
};

export default BigMenu2;
