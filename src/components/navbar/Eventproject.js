import React from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import member from "../../images/member.png";
import project from "../../images/project.png";
import event from "../../images/event.png";
const Eventproject = () => {
  const [counter, setCounter] = React.useState(false);

  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounter(true)}
        onExit={() => setCounter(false)}
      >
        <div className="grid grid-cols-3 gap-5 ">
          <div className=" parti inline-block mx-10 flex ">
            <img
              src={project}
              alt=""
              className=" inline-block h-20 max-sm:h-10 "
            />
            <div className="inline-block">
              <div className="block">
                <div className="text-6xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text ">
                  {counter && (
                    <CountUp start={0} end={6} duration={5} delay={0} />
                  )}
                  +
                </div>
                <h3 text-2xl> PROJECT </h3>
              </div>
            </div>
          </div>
          <div className=" parti inline-block mx-10 flex ">
            <img
              src={event}
              alt=""
              className=" inline-block h-20 max-sm:h-10 "
            />
            <div className="inline-block">
              <div className="block">
                <div className="text-6xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text ">
                  {counter && (
                    <CountUp start={0} end={10} duration={5} delay={0} />
                  )}
                  +
                </div>
                <h3 text-2xl> EVENTS </h3>
              </div>
            </div>
          </div>
          <div className=" parti inline-block mx-10 flex ">
            <img
              src={member}
              alt=""
              className=" inline-block h-20 max-sm:h-10 "
            />
            <div className="inline-block">
              <div className="block">
                <div className="text-6xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text ">
                  {counter && (
                    <CountUp start={0} end={600} duration={5} delay={0} />
                  )}
                  +
                </div>
                <h3 text-2xl>MEMBERS</h3>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
};

export default Eventproject;
