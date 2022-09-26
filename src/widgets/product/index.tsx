import React from "react";

type Props = {
  animateClass1?: any;
  animateClass2?: any;
  smoothScroll?: any;
  data?: any;
};

const Product = ({
  animateClass1,
  animateClass2,
  smoothScroll,
  data,
}: Props) => {
  return (
    <div className="h-fit lg:h-screen w-full flex flex-wrap items-center justify-center">
      <div
        className={`${animateClass1} w-full lg:w-1/2 flex items-center justify-center lg:justify-end p-4`}
      >
        <img src={data.image} />
      </div>
      <div
        className={`${animateClass2} w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center space-y-5 p-4`}
      >
        <p className="text-5xl font-semibold text-yellow-800 font-serif">
          {data.name}
        </p>
        <p className="text-xl text-center lg:text-left font-semibold text-yellow-800 pb-4">
          {data.description}
        </p>
        <div className="flex flex-col items-center lg:items-start justify-start">
          <p className="tracking-wide text-2xl font-bold font-serif text-amber-700 border-b-2 border-amber-700 mb-3">
            Variants
          </p>
          {data.varieties.map((variety: any, index: any) => (
            <p key={index} className="font-semibold text-lg text-rose-500">
              {variety.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
