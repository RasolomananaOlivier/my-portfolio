"use client";

import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { handleGetInTouch } from "@/utils/functions";

export default function Hero() {
  return (
    <>
      <section className="flex flex-col items-center justify-center space-y-4 pt-10 text-center">
        <h1 className="">
          It's <span className="font-bold">Olivier</span>, Your Full Stack
          Developer Partner.
        </h1>
        <p className="text-3xl md:text-5xl font-bold max-w-screen-md">
          <span className="text-violet-600"> Code. Design. Innovate.</span> Your
          Full-Stack Partner.
        </p>
        <p className="py-3 max-w-lg text-gray-700">
          A passionate developer crafting digital experiences one line of code
          at a time. With a blend of creativity and precision, I transform ideas
          into elegant solutions that leave a lasting impact.
        </p>
        <Button className="rounded-full px-8 py-5" onClick={handleGetInTouch}>
          Let's talk
        </Button>
      </section>
      <div className="flex flex-col items-center justify-center pt-10">
        <Image
          className="rounded-3xl object-cover"
          src={"/hero.png"}
          alt="hero"
          width={965}
          height={589}
        />
      </div>
    </>
  );
}
