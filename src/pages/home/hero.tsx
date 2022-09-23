import React from "react";

import heroCenter from "assets/images/itc-banner-1.png";

import AppStore from "AppStore";

type Props = {
  // homeAnimation: any;
  smoothScroll?: any;
  heroImage: any;
};

const Hero = ({ smoothScroll, heroImage }: Props) => {
  return (
    <section
      id="hero"
      className={`w-full h-screen flex justify-center items-center relative z-10`}
    >
      <img
        className="object-cover h-full w-full pointer-events-none"
        src={heroImage}
      />
      {/* <img
        className="absolute object-cover w-[20rem] sm:w-[30rem] lg:w-[40rem] pointer-events-none"
        src={heroCenter.src}
      /> */}
      <div className="absolute object-cover w-[20rem] sm:w-[30rem] h-[20rem] sm:h-[30rem] flex flex-col items-center justify-center">
        <div className="w-full h-1/3 border-x-[14px] border-t-[14px] border-black flex items-end justify-center p-4">
          <p className="text-black text-xl sm:text-2xl font-semibold text-center">
            Open up your palate to the tastiest wonders
          </p>
        </div>
        <div className="w-full h-1/3 flex flex-col items-center justify-center p-4 space-y-2">
          <p className="text-black text-5xl sm:text-7xl font-bold text-center font-serif">
            Alp
          </p>
          <p className="text-black text-4xl sm:text-5xl font-bold text-center font-serif">
            HARVEST
          </p>
        </div>
        <div className="w-full h-1/3 border-x-[14px] border-b-[14px] border-black flex items-start justify-center p-4">
          <p className="text-black text-xl sm:text-2xl font-semibold text-center">
            Heavenly Test is here!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
