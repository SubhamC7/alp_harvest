import React from "react";

type Props = {
  title?: any;
  heroImage?: any;
  animateClass?: any;
};

const Hero = ({ title, heroImage, animateClass }: Props) => {
  return (
    <section
      id="hero"
      className={`w-full h-screen flex justify-center items-center relative z-10`}
    >
      <img
        className="object-cover h-full w-full pointer-events-none bg-transparentD"
        src={heroImage}
      />
      <div className="absolute bg-[#00000075] h-full w-full"></div>
      <div
        className={`absolute object-cover w-[20rem] sm:w-[30rem] h-[20rem] sm:h-[30rem] bg-[#00000055] flex flex-col items-center justify-center ${animateClass}`}
      >
        <div className="w-full h-1/3 border-x-[14px] border-t-[14px] border-white flex items-end justify-center p-4">
          <p className="text-white text-xl sm:text-2xl font-semibold text-center">
            Open up your palate to the tastiest wonders
          </p>
        </div>
        <div className="w-full h-1/3 flex flex-col items-center justify-center p-4 space-y-2">
          <p className="text-white text-5xl sm:text-7xl font-bold text-center font-serif">
            {title}
          </p>
        </div>
        <div className="w-full h-1/3 border-x-[14px] border-b-[14px] border-white flex items-start justify-center p-4">
          <p className="text-white text-xl sm:text-2xl font-semibold text-center">
            Heavenly Test is here!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
