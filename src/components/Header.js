import React from "react";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <div>
      <nav class="flex justify-end py-4 mr-4 font-nav">
        <ul class="flex text-white">
          <li class="p-2 relative group px-5">
            <span class="absolute inset-0 bg-gradient-to-r from-reddish to-transparent w-0 group-hover:w-full transition-all duration-300 "></span>
            <a href="#about" class="relative">
              About
            </a>
          </li>
          <li class="p-2 relative group px-5">
            <span class="absolute inset-0 bg-gradient-to-r from-reddish to-transparent w-0 group-hover:w-full transition-all duration-300 "></span>
            <a href="/experience" class="relative">
              Experience
            </a>
          </li>
          <li class="p-2 relative group px-5">
            <span class="absolute inset-0 bg-gradient-to-r from-reddish to-transparent w-0 group-hover:w-full transition-all duration-300 "></span>
            <a href="/work" class="relative">
              Work
            </a>
          </li>
          <li class="p-2 relative group px-5">
            <span class="absolute inset-0 bg-gradient-to-r from-reddish to-transparent w-0 group-hover:w-full transition-all duration-300 "></span>
            <a href="/contact" class="relative">
              Contact
            </a>
          </li>
          <li class="py-2 px-5 relative group rounded bg-reddish hover:bg-transparent transition-all duration-200">
            <button class="">Resume</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
