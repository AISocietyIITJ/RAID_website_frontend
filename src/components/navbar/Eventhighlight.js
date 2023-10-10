import React from "react";
import image from './bg_image.jpeg'
import '../../styles/highlight.css';
const Eventhighlight = () => {
  return (
    <>
      <h1 className="event text-4xl">Event highlight</h1>
      <div className=" flex ">
        <div className="card">
          <img src={image} alt="" />
          <div className="intro">
            <h1>ashutosh</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              fugiat nemo. Nulla asperiores pariatur dolor, accusamus magni
              impedit dolorem expedita.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eventhighlight;
