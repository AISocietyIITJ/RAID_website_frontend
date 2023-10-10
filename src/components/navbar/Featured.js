import React from "react";

import Typewriter from "typewriter-effect";

const Featured = () => {
 
  return (
    <>
      <div
        className="box_featured relative z-0.5"
  
      >
        <h1 className="text-6xl inline-block  font-medium bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text
        max-sm:text-4xl
        ">
          <Typewriter
            options={{
              strings: ["FEATURED PAGE"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p
          className="text-2xl font-normal  "
         
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae maxime
          itaque magni dolores magnam vitae. Voluptates velit, molestias dolore
         
        </p>
        <button
          type="button"
          className=" my-10 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  w-24 rounded-lg text-2xl py-2"
        >
          ADD
        </button>
      </div>
    </>
  );
};

export default Featured;
