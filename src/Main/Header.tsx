const Header = () => {
  return (
    <div className="flex w-[100%] h-[100%] mb-10">
      <div className="flex items-center justify-around w-screen h-[60px] bg-red-500 p-5">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl transition-all duration-700 ease-in-out hover:color-slate-500">
          Raspberry Pi Tempeture Project
        </h1>
        <div className="font-bold text-2xl">
          By: Stephen, Alex, Gavin, Aley, Erik
        </div>
      </div>
    </div>
  );
};

export default Header;
