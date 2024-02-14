"use client";

import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
// import { Button } from "@/components/ui/button";
import { Button } from "@/components/ui/moving-border";

const Page = () => {
  const words1 = [
    {
      text: "Build",
      className: "md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20",
    },
    {
      text: "awesome",
      className: "md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20",
    },
    {
      text: "Ads",
      className: "md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20",
    },
    {
      text: "with",
      className: "md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20",
    },
    {
      text: "Reach",
      className: "md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20",
    },
  ];
  return (
    <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        <TypewriterEffectSmooth words={words1} />
      </h1>

      <p className=" mt-10 md:text-md text-md lg:text-md font-bold text-center text-white relative z-20">
        welcome to the future of marketing
      </p>

      <div className="flex items-center justify-center mt-10">
        <Button  borderRadius="1.75rem" className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800">
          see our past work
        </Button>
      </div>

    </div>
  );
};

export default Page;