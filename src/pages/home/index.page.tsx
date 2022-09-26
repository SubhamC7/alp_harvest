import React, { useEffect, useRef } from "react";

import Head from "next/head";
import { Component } from "react";
import {
  attributes,
  react as contentStorage,
} from "../../../content/content-storage.md";

import AppStore from "AppStore";

import { reveal } from "AppActions";

import Header from "widgets/header";
import MetaHead from "widgets/meta-head";
import Hero from "./hero";
import Product1 from "./product-1";
import Product2 from "./product-2";
import Product3 from "./product-3";
import About from "./about";
import Footer from "widgets/footer";

import bgImg from "assets/images/frozen-snacks-bg-pattern.png";
import bgImg2 from "assets/images/bgtry-1.jpeg";
import bgImg3 from "assets/images/bgtry-2.jpg";

type Props = {};

const Home = (props: Props) => {
  const [paddingClass] = AppStore("paddingClass");

  let { heroImage, aboutTitle, aboutText, productTypes } = attributes;

  const topRef: any = useRef(null);
  const aboutRef: any = useRef(null);
  const product1Ref: any = useRef(null);
  const product2Ref: any = useRef(null);
  const product3Ref: any = useRef(null);

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
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", reveal);
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <>
      <div className="fixed h-screen w-full bg-[#f2bd87] overflow-hidden">
        <img
          className="h-full w-full  object-cover opacity-[0.15]"
          src={bgImg2.src}
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
      </div>
      <div id="about" ref={aboutRef} className={`z-10 relative`}>
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
