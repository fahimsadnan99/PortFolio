import React, { useEffect, useState } from "react";
import ProfilePhoto from "../../../../assets/profilePhoto.jpeg";
import ReactjsImg from "../../../../assets/reactJs.webp";
import NodeJs from "../../../../assets/nodejs.webp";
import Express from "../../../../assets/express.webp";
import Mongodb from "../../../../assets/mongodb.webp";

import { TypeText } from "../../../../utils/TypeText.Js";

const HeroRightSide = () => {
  const [deg, setDeg] = useState(0);

  useEffect(() => {
    if (deg > 270) {
      setDeg(0);
    } else {
      const interval = setInterval(() => {
        setDeg(deg + 90);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [deg]);

  return (
    <div className=" w-full xs-px-18 flex items-center justify-around lg:h-screen xs:py-20 lg:py-0 lg:pt-16  xs:pt-10">
      <div className="w-32 sm:w-28 md:32  dark:text-purple-400 md:text-3xl sm:text-xl  font-semibold italic ">
        {TypeText(deg)}
      </div>
      <div className="relative sm:max-w-[400px] sm:max-h-[400px] xs:max-w-[200px] xs:max-h-[200px] ">
        <img
          src={ProfilePhoto}
          alt="photo"
          className="sm:w-52 sm:h-52 xs:w-32 xs:h-32  rounded-full "
        />
        <div
          className={`absolute sm:top-[-38px] sm:left-64 xs:top-[-30px] xs:left-[155px]`}
          style={{ display: `${deg > 271} ? "none" : "block" ` }}
        >
          <div
            className={`sm:w-72 sm:h-72 xs:w-48 xs:h-48   ring-1 rounded-full right-2  absolute duration-700 `}
            style={{ transform: `rotate(${deg}deg)` }}
          >
            <span className="absolute sm:top-32 sm:left-[-20px] xs:top-20 xs:left-[-10px] xs:w-10 xs:10 sm:w-18 sm:h-18">
              <img
                src={ReactjsImg}
                alt="reactJs"
                className="sm:w-8 sm:h-8 xs:w-6 xs:6"
                style={{ transform: deg == 0 ? "scale(2.5)" : "scale(1)" }}
              />
            </span>
            <span className="absolute sm:top-[270px] sm:left-32 xs:top-[180px] xs:left-20 sm:w-18 sm:h-18  xs:w-10 xs:10 rounded-full">
              <img
                src={Express}
                alt="ExpressJs"
                className="sm:w-8 sm:h-8 xs:w-6 xs:6"
                style={{
                  transform: deg == 90 ? "scale(2)" : "scale(1)",
                  rotate: `${deg - 180}deg`,
                }}
              />
            </span>
            <span className="absolute sm:top-[127px] sm:right-[-25px] xs:top-20 xs:right-[-25px] w-12 xs:w-10 ">
              <img
                src={NodeJs}
                alt="NodeJs"
                className="sm:w-8 sm:h-10 xs:w-6 xs:6"
                style={{
                  transform: deg == 180 ? "scale(2)" : "scale(1)",
                  rotate: deg == 180 ? `${deg - 360}deg` : `${deg - 90}deg`,
                }}
              />
            </span>
            <span className="absolute  sm:top-[-10px]   sm:left-[120px] xs:top-[-20px] xs:left-20 w-18 h-18 xs:w-10 xs:10 rounded-full">
              <img
                src={Mongodb}
                alt="Mongodb"
                className="w-8 h-8 xs:w-6 xs:6"
                style={{
                  transform: deg == 270 ? "scale(2)" : "scale(1)",
                  rotate: deg == 270 ? `${deg - 180}deg` : `${deg - 90}deg`,
                }}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroRightSide;
