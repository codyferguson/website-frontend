import React from "react";

function Intro() {
  return (
    // Check out Tailwindcss for help on these properties
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Cody Ferguson
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Software Engineer, Father, and Hobby Game Developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        I&apos;m a Brookfield based Software Engineer. I am currently at Alaska
        Airline working on the Atlas Payment System which enables internal
        clients to provide the future of payments at Alaska Airlines. I enjoy
        experimenting with new technology and game development while I am not
        spending time with my family. Some books I have read recently that I
        would recommend to other engineers are: The Pragmatic Programmer and
        Grokking Algorithms.
      </p>
    </div>
  );
}

export default Intro;
