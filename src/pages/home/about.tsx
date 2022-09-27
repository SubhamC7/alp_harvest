import React from "react";

import aboutImg1 from "../../../public/assets/cheesy-corn-dish.png";
import aboutImg2 from "../../../public/assets/prawn-noodles.png";

type Props = { data: any; animateClass1: any; animateClass2: any };

const About = ({ data, animateClass1, animateClass2 }: Props) => {
  return (
    <div className="h-fit lg:h-[35rem] w-full flex flex-wrap items-center justify-center aboutBgImg bg-[#f7c156e2]">
      <div
        className={`${animateClass2} w-full lg:w-2/5 h-96 flex flex-wrap items-center justify-center p-4 lg:p-8`}
      >
        <div className="w-1/2 lg:w-full h-full lg:h-1/2 flex items-center justify-center lg:justify-end">
          <img className="w-40 object-cover" src={aboutImg1.src} />
        </div>
        <div className="w-1/2 lg:w-full h-full lg:h-1/2 flex items-center justify-center lg:justify-end">
          <img className="w-40 object-cover" src={aboutImg2.src} />
        </div>
      </div>
      <div className="w-full lg:w-3/5 h-96 flex items-center justify-center lg:justify-start p-4 lg:p-8">
        <div
          className={`${animateClass1} bg-[#aa7942] h-96 w-[22rem] sm:w-[25rem] lg:w-[35rem] flex flex-col items-center justify-center p-4 lg:p-14 text-white space-y-7`}
        >
          <p className="text-3xl lg:text-4xl font-semibold font-serif text-center">
            {data.title}
          </p>
          <p className="text-justify">{data.body}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
