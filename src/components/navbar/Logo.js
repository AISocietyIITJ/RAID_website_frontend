import React from "react";
import { motion } from "framer-motion";
import logopart1 from "./logopart1.png";
import logopart2 from "./logopart2.png";
import logopart3 from "./logopart3.png";
import logopart4 from "./logopart4.png";
import "../../styles/logo.css";
const Logo = () => {
  return (
    <>
      <div
      className="logo"
      >
        <motion.div
          // initial={{}}
          animate={{ x: [0, -340]  }}
          transition={{ duration: 1.5, delay: 2 }}
        >
          <motion.div
           animate={{ scale: [2, 1] }} transition={{ duration: 5 }}
          >
            <span className="span part1">
              <img  src={logopart1} alt="" />
            </span>
            <span className="span part2">
              <img src={logopart2} alt="" />
            </span>
            <span className="span part3">
              <img  src={logopart3} alt="" />
            </span>
            <span className="span part4">
              <img  src={logopart4} alt="" />
            </span>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Logo;
