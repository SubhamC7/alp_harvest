import React from "react";

const BigMenu1 = ({ classNames, smoothScroll }) => {
  return (
    <div className="flex items-center space-x-14">
      <a
        onClick={() => {
          smoothScroll("top");
        }}
      >
        <div className="flex items-center cursor-pointer transition-all duration-300">
          <div className={`headerLogo w-24 h-24 md:w-28 md:h-24`} />
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
  );
};

export default BigMenu1;
