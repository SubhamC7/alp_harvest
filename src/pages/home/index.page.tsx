import React, { useEffect, useRef } from "react";

import Head from "next/head";
import { Component } from "react";
import {
  attributes,
  react as contentStorage,
} from "../../../content/content-storage.md";

import AppStore from "AppStore";
import Header from "widgets/header";
import MetaHead from "widgets/meta-head";
import Hero from "./hero";
import Product1 from "./product-1";
import Product2 from "./product-2";
import Product3 from "./product-3";
import Product4 from "./product-4";
import About from "./about";
import Footer from "widgets/footer";

import bgImg from "assets/images/frozen-snacks-bg-pattern.png";

type Props = {};

const Home = (props: Props) => {
  const [paddingClass] = AppStore("paddingClass");

  let { heroImage, aboutTitle, aboutText, productTypes } = attributes;

  const topRef: any = useRef(null);
  const aboutRef: any = useRef(null);
  const product1Ref: any = useRef(null);
  const product2Ref: any = useRef(null);
  const product3Ref: any = useRef(null);
  const product4Ref: any = useRef(null);

  const smoothScroll = (destination: string) => {
    console.log("destination", destination);
    switch (destination) {
      case "top":
        {
          window.scrollTo({
            top: topRef.current.offsetTop - 100,
            behavior: "smooth",
          });
        }
        break;
      case "about":
        {
          window.scrollTo({
            top: aboutRef.current.offsetTop - 100,
            behavior: "smooth",
          });
        }
        break;
      case "product1":
        {
          window.scrollTo({
            top: product1Ref.current.offsetTop + 780,
            behavior: "smooth",
          });
        }
        break;

      case "product2":
        {
          window.scrollTo({
            top: product2Ref.current.offsetTop + 780,
            behavior: "smooth",
          });
        }
        break;
      case "product3":
        {
          window.scrollTo({
            top: product3Ref.current.offsetTop + 780,
            behavior: "smooth",
          });
        }
        break;
      case "product4":
        {
          window.scrollTo({
            top: product4Ref.current.offsetTop + 780,
            behavior: "smooth",
          });
        }
        break;
    }
  };

  const reveal = () => {
    var elements1 = document.querySelectorAll(".holder1");

    elements1.forEach((element) => {
      var top = element.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        element.classList.add("fadeInUp");
      }
    });
    var elements2 = document.querySelectorAll(".holder2");

    elements2.forEach((element) => {
      var top = element.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        element.classList.add("fadeLeft");
      }
    });
    var elements3 = document.querySelectorAll(".holder3");

    elements3.forEach((element) => {
      var top = element.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        element.classList.add("fadeRight");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", reveal);
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <>
      <div className="fixed h-screen w-full bg-orange-200 overflow-hidden">
        <img
          className="h-full w-full lg:w-2/3 object-cover opacity-20"
          src={bgImg.src}
        />
      </div>
      <MetaHead title="Alp Harvest" />
      <Header smoothScroll={smoothScroll} />
      <div ref={topRef}>
        <Hero heroImage={heroImage} />
      </div>
      <div className={`z-10 relative overflow-hidden ${paddingClass}`}>
        <div ref={product1Ref}>
          <Product1
            animateClass1="holder2"
            animateClass2="holder3"
            smoothScroll={smoothScroll}
            data={productTypes[0]}
          />
        </div>
        <div ref={product2Ref}>
          <Product2
            animateClass1="holder2"
            animateClass2="holder3"
            smoothScroll={smoothScroll}
            data={productTypes[1]}
          />
        </div>
        <div ref={product3Ref}>
          <Product3
            animateClass1="holder2"
            animateClass2="holder3"
            smoothScroll={smoothScroll}
            data={productTypes[2]}
          />
        </div>
        {/* <div ref={product4Ref}>
          <Product4
            animateClass1="holder2"
            animateClass2="holder3"
            smoothScroll={smoothScroll}
            data={products[3]}
          />
        </div> */}
      </div>
      <div ref={aboutRef} className={`z-10 relative`}>
        <About
          data={{ title: aboutTitle, body: aboutText }}
          animateClass1="holder1"
          animateClass2="holder2"
        />
      </div>
      <Footer smoothScroll={smoothScroll} />
    </>
  );
};

export default Home;
