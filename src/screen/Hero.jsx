import React from "react";
import bgImg from "../asset/bgImg.jpeg";

function Hero() {
  return (
    <div className=" h-[750px]  ">
      <div
        className=""
        style={{
          backgroundImage: `url(${bgImg})`,
          height: "100%",
          width: "100%",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="h-full flex  justify-center items-center ">
          <div className=" flex justify-center flex-wrap gap-4 " >
              <button className="text-[23px] w-[clamp(80px,100vw,300px)] h-[50px] bg-red-500 text-white rounded-[20px] " > <strong>Need Blood</strong> </button>
              <button className="text-[23px] w-[clamp(80px,100vw,300px)] h-[50px] bg-red-500 text-white rounded-[20px] "><strong>Donate Your Blood</strong></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
