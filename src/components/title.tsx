"use client";
import React from "react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
const title = () => {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Reach",
    },
  ];
  return;
  <div>
    <TypewriterEffectSmooth words={words} />
  </div>;
};

export default title;
