import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about">
      <div class="flex justify-between bg-dark h-full">
        <div class="flex-shrink-0 w-1/2">
          <h1 class="text-6xl text-white ml-40 mt-20 font-name">ABOUT ME</h1>
          <h2 class="text-lg text-white ml-40 mt-10 mb-auto  font-nav">
            As a Full Stack Developer with experience in Web Development, I am
            passionate about creating efficient and scalable software solutions.
            With my ability to work in multiple languages and frameworks, I am
            able to adapt quickly to new technologies and deliver results that
            meet and exceed business objectives. Throughout my career, I have
            honed my skills in Full Stack Development, building robust
            applications from the front-end to the back-end. I have experience
            working with popular frameworks such as React, Next & Angular, as
            well as server-side technologies like Node.js, PHP & Flask. My
            expertise also extends to Cross Platform App Development, which
            includes experience with technologies such as React Native and
            Flutter. In addition to my technical skills, I am well-versed in
            Agile methodologies and have worked in an Agile environment
          </h2>
        </div>
        <div class="flex-shrink-0 mr-40 mt-40">
          <img src="/johnny.png" class="h-3/4" />
        </div>
      </div>
    </section>
  );
}
