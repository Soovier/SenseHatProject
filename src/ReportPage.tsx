import Header from "./Main/Header";
// import f0 from "../reports/Final[0].jpg";
import f1 from "../reports/Final[1].jpg";
import f2 from "../reports/Final[2].jpg";
import f3 from "../reports/Final[3].jpg";
import f4 from "../reports/Final[4].jpg";
import f5 from "../reports/Final[5].jpg";
import f6 from "../reports/Final[6].jpg";
import v1 from "../reports/v1.jpg";
import v2 from "../reports/v2.jpg";
import v3 from "../reports/v3.jpg";
import v4 from "../reports/v4.jpg";
import v5 from "../reports/v5.jpg";
import v6 from "../reports/v6.jpg";
import v7 from "../reports/v7.png";

const ReportPage = () => {
  return (
    <div className="flex flex-col w-full h-full m-auto">
      <Header />
      <h1 className="mb-2 p-2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Final Paper | (From Left To Right) | Date: 5/11
      </h1>{" "}
      <div className="flex flex-wrap gap-2 w-full h-100% p-2">
        <img
          className="transition-all duration-700 ease-in-out hover:scale-105 rounded-xl hover:border-4 border-green-500 w-[30%] h-fit"
          src={f1}
          alt=""
        ></img>
        <img
          className="transition-all duration-700 ease-in-out hover:scale-105 rounded-xl hover:border-4 border-green-500 w-[30%] h-fit"
          src={f2}
          alt=""
        ></img>
        <img
          className="transition-all duration-700 ease-in-out hover:scale-105 rounded-xl hover:border-4 border-green-500 w-[30%] h-fit"
          src={f3}
          alt=""
        ></img>
        <img
          className="transition-all duration-700 ease-in-out hover:scale-105 rounded-xl hover:border-4 border-green-500 w-[30%] h-fit"
          src={f4}
          alt=""
        ></img>
        <img
          className="transition-all duration-700 ease-in-out hover:scale-105 rounded-xl hover:border-4 border-green-500 w-[30%] h-fit"
          src={f5}
          alt=""
        ></img>
        <img
          className="transition-all duration-700 ease-in-out hover:scale-105 rounded-xl hover:border-4 border-green-500 w-[30%] h-fit"
          src={f6}
          alt=""
        ></img>
      </div>
      <h1 className="mb-2 p-2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Weekly Progress Report | Date: 5/04/2024
      </h1>{" "}
      <img
        className="transition-all duration-700 ease-in-out hover:scale-105 rounded-xl hover:border-4 border-green-500 p-2 w-[30%]"
        src={v1}
      />
      <h1 className="mb-2 p-2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Weekly Progress Report | Date: 4/27/2024
      </h1>{" "}
      <img
        className="transition-all duration-700 ease-in-out hover:scale-105 rounded-xl hover:border-4 border-green-500 p-2 w-[30%]"
        src={v2}
      />
      <h1 className="mb-2 p-2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Weekly Progress Report | Date: 4/20/2024
      </h1>{" "}
      <img
        className="transition-all duration-700 ease-in-out hover:scale-105 rounded-xl hover:border-4 border-green-500 w-[30%]"
        src={v7}
        alt="4/20/2024"
      />
      <h1 className="mb-2 p-2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Weekly Progress Report | Date: 4/06/2024
      </h1>{" "}
      <div className="p-2 flex gap-2 ">
        <img
          className="transition-all duration-700 ease-in-out hover:scale-105 rounded-xl hover:border-4 border-green-500 w-[30%]"
          src={v3}
        />
        <img
          className="transition-all duration-700 ease-in-out hover:scale-105 rounded-xl hover:border-4 border-green-500 w-[30%]"
          src={v4}
        />
      </div>
      <h1 className="mb-2 p-2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Weekly Progress Report | Date: 3/30/2024
      </h1>{" "}
      <div className="p-2 flex gap-2">
        <img
          className="transition-all duration-700 ease-in-out hover:scale-105 rounded-xl hover:border-4 border-green-500 w-[30%]"
          src={v5}
        />
        <img
          className="transition-all duration-700 ease-in-out hover:scale-105 rounded-xl hover:border-4 border-green-500 w-[30%]"
          src={v6}
        />
      </div>
      <h1 className="mb-2 p-2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl">
        Reports Page By Stephen Osunkunle
      </h1>{" "}
    </div>
  );
};

export default ReportPage;
