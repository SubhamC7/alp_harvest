import React from "react";

import aboutImg1 from "assets/images/cheesy-corn-dish.png";
import aboutImg2 from "assets/images/prawn-noodles.png";

type Props = { data: any; animateClass1: any; animateClass2: any };

const About = ({ data, animateClass1, animateClass2 }: Props) => {
  return (
    <div className="h-fit lg:h-[35rem] w-full flex flex-wrap items-center justify-center aboutBgImg">
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
          className={`${animateClass1} bg-[#9C774E] h-96 w-[22rem] sm:w-[25rem] lg:w-[35rem] flex flex-col items-center justify-center p-4 lg:p-14 text-white space-y-5`}
        >
          <p className="text-3xl lg:text-4xl font-semibold font-serif text-center">
            {/* About ITC Master Chef */}
            {data.title}
          </p>
          <p className="text-justify">
            {/* ITC Master Chef aims to inspire you to find your inner Master Chef.
            It brings a range of quality ingredients and ready to cook products
            that make cooking even more exciting. All ITC Master Chef products
            offer the best quality, reduce preparation time and come with the
            ease of cooking & storage. We offer you a range of quality products
            to make your every day special. */}
            {data.body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
