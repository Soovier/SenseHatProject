import { Link } from "react-router-dom";
import berryPic from "../reports/berry.png";

const Intro = () => {
  return (
    <div className=" border-8 border-white flex flex-col gap-5 items-center justify-center w-full h-screen">
      <h1 className="transition-all duration-700 ease-in-out flex-start scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Digital Detectives Tempeture Raspberry PI Project
      </h1>
      <img className="w-1/12" src={berryPic} alt="Berry Pictures" />
      <h2 className="transition-all duration-700 ease-in-out scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Stephen, Alex, Aley, Erick, Gavin
      </h2>
      <button className="mb-2 transition-all duration-700 ease-in-out hover:scale-105 hover:bg-green-400 w-3/12 h-[5%] bg-green-500 rounded-xl font-extrabold">
        <Link to="/sensorpage" className="font-extrabold">
          Click Here To View Sensor Page
        </Link>
      </button>
      <h2 className="mt-3 mb-3 transition-all duration-700 ease-in-out scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
        About Project...
      </h2>
      <div className="transition-all duration-700 ease-in-out hover:scale-125 w-5/12">
        <p className="font-bold text-ellipsis overflow-hidden">
          The project involves creating a temperature sensing system using a
          Raspberry Pi, a popular single-board computer known for its
          versatility and accessibility. The core of the project is to monitor
          environmental temperatures, which could be applied in various settings
          such as homes, server rooms, or agricultural environments. The
          Raspberry Pi will be equipped with temperature sensors like the
          DS18B20 or DHT22, which are known for their accuracy and ease of use.
          Data collected by these sensors will be processed and displayed in
          real-time, allowing for immediate environmental assessments. This
          setup not only serves as a practical application in monitoring and
          controlling temperature but also acts as an educational tool,
          demonstrating the integration of hardware and software in real-world
          applications
        </p>
      </div>
    </div>
  );
};

export default Intro;
