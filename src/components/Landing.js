import React from "react";
import Image from "next/image";

export default function Landing() {
  return (
    <div
      class="h-screen flex flex-row px-32 pt-12"
      style={{ height: `calc(100vh - 40px)` }}
    >
      <div class="w-full flex flex-col">
        <h2 class="text-8xl text-white  font-name">HIZQEEL</h2>
        <br />
        <h2 class="text-8xl text-reddish  font-name">JAVED</h2>
        <h3 class="text-lg text-white mt-12 font-nav">
          I am a Full Stack Web Developer, passionate about creating efficient
          and scalable software solutions. With my ability to work in multiple
          languages and frameworks, I am able to adapt quickly to new
          technologies and deliver results that meet and exceed business
          objectives.
        </h3>
      </div>
      <div class="w-full mx-12">
        <img src="/johnny.png" class="object-cover h-3/4" />
      </div>
      <div class="flex flex-col">
        <div class="w-96 h-52 bg-gradient-to-r from-reddish to-transparent"></div>
        <div class="w-96 h-52 bg-gradient-to-l from-reddish to-transparent"></div>
      </div>
    </div>
  );
}
