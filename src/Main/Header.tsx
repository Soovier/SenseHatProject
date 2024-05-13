import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" truncate flex w-[100%] h-[100%] mb-10">
      <div className="w-[100%] flex items-center justify-around w-screen h-[60px] bg-red-500 p-5">
        <Link
          to="/"
          className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl transition-all duration-700 ease-in-out hover:color-slate-500"
        >
          Raspberry Pi Tempeture Project
        </Link>
        <div className="font-bold text-2xl">
          By: Stephen, Alex, Gavin, Aley, Erick
        </div>
        <Link
          to="/reports"
          className="scroll-m-20 border-b pb-1 text-3xl font-bold tracking-tight first:mt-0"
        >
          Reports
        </Link>
      </div>
    </div>
  );
};

export default Header;
