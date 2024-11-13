import { useState } from "react";
const Testimonial = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div>
      <div className="lg:p-12 p-6 font-[sans-serif] bg-blue-50 relative">
        <div className="max-w-6xl max-md:max-w-lg mx-auto">
          <div className="grid md:grid-cols-3 gap-4 lg:justify-center lg:items-center">
            <div className="col-span-2">
              <div className="flex justify-start items-center gap-4">
                <span className="bg-[#fc2e2e] block w-[10px] h-[10px] "></span>
                <h4 className="my-2 text-[#BD1F17] font-bold">
                  Crispy, Every Bite Taste
                </h4>
              </div>
              <h2 className="text-black font-bebasNeue mb-10 mt-4 text-2xl lg:text-5xl font-bold uppercase">
                What our happy client say
              </h2>
            </div>

            <div className="flex space-x-4 items-end justify-end">
              <div className="bg-white w-10 h-10 grid items-center justify-center rounded-full rotate-90 shrink-0 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 fill-[#070000] inline"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    clipRule="evenodd"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
              <div className="bg-[#ffffff] w-10 h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 fill-[#df0b0b] inline"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    clipRule="evenodd"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="my-4 font-[sans-serif]">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 items-center ">
                <div className="space-y-5 bg-[#FEBF00] py-[2.6rem] px-4 relative">
                  <div className="max-w-[26rem]  mx-auto">
                    <div className="flex items-center mx-auto py-[3.7rem]  max-w-md">
                      <p className="">
                        {" "}
                        You cant go wrong with Chicken Mandi, I had it twice.
                        The chicken was cooked perfectly, juicy & soft (usually
                        mandi chicken is a bit dry). I would defiantly recommend
                        it.
                      </p>
                    </div>
                    <div className="flex items-center rounded-3xl max-w-md my-7 gap-5">
                      <div className="mr-4">
                        <h4 className="text-gray-800 text-base font-bold">
                          Khalid Al Dawsry
                        </h4>
                        <p className="text-sm text-black mt-2">Jeddah, Saudi</p>
                      </div>
                      <img
                        src="https://readymadeui.com/profile_3.webp"
                        className="w-10 h-10 rounded-full ml-auto"
                      />
                    </div>
                    <div className="relative">
                      <span className="bg-[#e02929ef] block w-[44px] h-[4px] absolute right-0 bottom-0"></span>
                      <div className="border-b-2 w-full border-black"></div>
                    </div>
                  </div>
                  <img className="absolute left-0 bottom-4  h-10 lg:w-20 lg:h-20 lg:-left-[1.1rem]" src="/public/image/slider2.svg" alt="" />
                </div>

                <div className=" ">
                  <div
                    className="relative w-full h-[24rem] bg-cover bg-center"
                    style={{
                      backgroundImage: `url('/public/image/Video.png')`,
                    }}
                  >
                    {!isPlaying ? (
                      <button
                        onClick={handlePlay}
                        className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50"
                      >
                        <span className="text-yellow-500 text-5xl">▶️</span>
                      </button>
                    ) : (
                      <video
                        src="/public/image/Mutton curry recipe in Bangla - 720.mp4"
                        autoPlay
                        controls
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" absolute bottom-0 left-0 top-24 hidden lg:block">
          <img src="/image/test1.png" alt="" className="w-24 h-30" />
        </div>
        <div className="absolute right-0 top-[22rem] hidden lg:block">
          <img src="/image/test2.png" alt="" className="w-32 h-30 " />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
