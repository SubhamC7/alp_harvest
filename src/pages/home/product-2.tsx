import React from "react";

type Props = {
  animateClass1: any;
  animateClass2: any;
  smoothScroll: any;
  data: any;
};

const Product2 = ({
  animateClass1,
  animateClass2,
  smoothScroll,
  data,
}: Props) => {
  return (
    <div className="h-screen w-full flex flex-wrap items-center justify-center">
      <div
        className={`${animateClass1} w-full lg:w-1/2 flex items-center justify-center lg:justify-end p-4`}
      >
        <img src={data.image} />
      </div>
      <div
        className={`${animateClass2} w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center space-y-5 p-4`}
      >
        <p className="text-4xl font-semibold text-yellow-800 font-serif">
          {data.name}
        </p>
        <p className="text-xl font-semibold text-yellow-800 pb-4">
          {data.description}
        </p>
        <button
          onClick={() => {
            smoothScroll("product3");
          }}
          className="w-52 h-16 bg-yellow-600 text-lg font-bold text-white rounded-xl cursor-pointer active:scale-95 transition-all duration-500"
        >
          Know More
        </button>
      </div>
    </div>
  );
};

export default Product2;
