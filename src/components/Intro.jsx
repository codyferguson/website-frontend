import React from "react";

function Intro() {
  return (
    // Check out Tailwindcss for help on these properties
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4x1 md:text-7x1 mb-1 md:mb-3 font-bold">
        Cody Ferguson
      </h1>
      <p className="text-base md:text-x1 md-3 font-medium">
        Software Engineer and Hobby Game Developer
      </p>
      <p className="text-sm max-w-x1 mb-6 font-bold">
        I&apos;m a Brookfield based Software Engineer. I am currently at Alaska
        Airline working on the Atlas Payment System.
        <br /> <br />
        Growing up, I always wanted to be an Engineer. Combined with my interest
        in computers, I pursued becoming a Software Engineer at The University
        of Wisconsin - Platteville. I enjoy experimenting with new technology
        and hobby game development while I am not working on DIY projects for my
        home.
      </p>
    </div>
  );
}

export default Intro;
