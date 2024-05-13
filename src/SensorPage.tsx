import { useState } from "react";
import Header from "./Main/Header";
import Video from "./Main/temp.mov";

const SensorPage = () => {
  const [toggle, setToggle] = useState(false);
  const handleButton = (e: any) => {
    e.preventDefault();
    setToggle(!toggle);
  };

  return (
    <div className="flex flex-col">
      <Header />
      <div className="p-10 flex justify-center w-[100%] h-[100%]">
        <div className="transition-all duration-1000 ease-in-out hover:scale-105 hover:border-white hover:border-4 flex flex-col items-center center w-[550px] h-[700px] bg-red-400 rounded-xl">
          <h1 className="underline mt-2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Sensor Page
          </h1>
          <br className="mb-5" />
          <button
            onClick={(e) => handleButton(e)}
            className="transition-all duration-700 ease-in-out hover:bg-white hover:text-black bg-black rounded-xl w-[300px] h-[70px]"
          >
            <span className="font-extrabold text-2xl">
              Check Tempeture [Video]
            </span>
          </button>
          {toggle ? (
            <div className=" flex items-center center w-[500px] h-[500px]">
              <div className="flex flex-col items-center transtion-all duration-700 ease-in-out hover:scale-105 rounded-xl bg-slate-300 text-white w-[100%] h-[80%]">
                <video width={220} controls autoPlay>
                  <source src={Video} type="video/mp4"></source>
                </video>
                <h1 className="text-2xl font-bold text-white mt-4 border-1">
                  Video Of Sensor Tempeture Project
                </h1>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default SensorPage;
