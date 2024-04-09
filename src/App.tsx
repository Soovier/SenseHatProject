import Header from "./Main/Header";

const SensorPage = () => {
  const handleButton = (e: any) => {
    e.preventDefault();
    console.log("Hit");
  };

  return (
    <div className="flex justify-center w-[100%] h-[100%]">
      <div className="transition-all duration-1000 ease-in-out hover:scale-105 hover:bg-green-500  hover:border-white hover:border-4 flex flex-col items-center center w-[550px] h-[700px] bg-red-400 rounded-xl">
        <h1 className="underline mt-2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Sensor Page
        </h1>
        <br className="mb-5" />
        <button
          onClick={(e) => handleButton(e)}
          className="transition-all duration-700 ease-in-out hover:bg-white hover:text-black bg-black rounded-xl w-[300px] h-[50px]"
        >
          <span className="font-extrabold text-2xl">Check Tempeture</span>
        </button>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="flex flex-col">
      <div className="w-[100%]">
        <Header />
        <SensorPage />
      </div>
    </div>
  );
}

export default App;
