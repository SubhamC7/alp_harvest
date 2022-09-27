import Router from "next/router";
import React from "react";
import Link from "next/link";

type Props = {
  animateClass1: any;
  animateClass2: any;
  smoothScroll: any;
  data: any;
};

const Product1 = ({
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
        <img
          style={{ filter: "drop-shadow(5px 5px 20px #333333a0)" }}
          src={data.image}
        />
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
        <Link href={"/sea-food"}>
          <a className="w-60 h-14 flex items-center justify-center bg-green-500 text-lg font-bold text-white rounded-xl cursor-pointer active:scale-95 transition-all duration-500">
            See All Products
          </a>
        </Link>

        <button
          onClick={() => {
            smoothScroll("product2");
          }}
          className="w-60 h-14 bg-yellow-600 text-lg font-bold text-white rounded-xl cursor-pointer active:scale-95 transition-all duration-500"
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default Product1;
