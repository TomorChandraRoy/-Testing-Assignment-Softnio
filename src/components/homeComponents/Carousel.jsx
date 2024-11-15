import { useEffect, useRef, useState } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

const Carousel = () => {
  const sliderRef = useRef(null);
  const keenSliderInstance = useRef(null);
  const [reviews, setReviews] = useState([]);

  // Fetch data from JSON file
  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  useEffect(() => {
    if (reviews.length > 0 && sliderRef.current) {
      if (keenSliderInstance.current) {
        keenSliderInstance.current.destroy();
      }
      keenSliderInstance.current = new KeenSlider(sliderRef.current, {
        loop: true,
        slides: {
          origin: "center",
          perView: 1,
          spacing: 16,
        },
        breakpoints: {
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 4,
              spacing: 32,
            },
          },
        },
      });
      // Autoplay functionality
      const autoplay = setInterval(() => {
        keenSliderInstance.current.next();
      }, 3000);

      return () => {
        keenSliderInstance.current.destroy();
        clearInterval(autoplay);
      };
    }
  }, [reviews]);

  return (
    <div>
      <div className="lg:p-12 p-6 bg-[#FBF7F2]  relative">
        <div className="max-w-6xl max-md:max-w-lg mx-auto">

          {/* text */}
          <div className="col-span-2">
            <div className="flex justify-start items-center gap-4">
              <span className="bg-[#fc2e2e] block w-[10px] h-[10px] "></span>
              <h4 className="my-2 text-[#BD1F17] font-bold font-roboto">
                Crispy, Every Bite Taste
              </h4>
            </div>
            <h2 className="text-6xl my-3 text-black font-bold font-bebasNeue">
              POPULAR FOOD ITEMS
            </h2>
          </div>

          {/* Arrow Button */}
          <div className="hidden md:flex space-x-4 items-end justify-start md:justify-end md:items-center md:mt-6 ">
            <div
              onClick={() => keenSliderInstance.current.prev()}
              className="bg-white w-10 h-10 grid items-center justify-center rounded-full rotate-90 shrink-0 cursor-pointer transition hover:bg-[#d8c6c6]"
            >
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
            <div
              onClick={() => keenSliderInstance.current.next()}
              className="bg-[#ffffff] w-10 h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0 cursor-pointer  transition hover:bg-[#d8c6c6]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 fill-[#d30c0c]  inline"
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

          {/* Carousel Content */}
          <div className="gap-6 mt-12 ">
            <div ref={sliderRef} className="keen-slider">
              {reviews?.map((item, index) => (
                <div key={index} className="keen-slider__slide">
                  <div className="p-6 rounded-lg bg-white shadow-md">
                    <div className="flex items-center justify-center">
                      <img src={item.image} className="w-[8rem] h-[6.5rem] " />
                    </div>
                    <div className="relative">
                      <span className="bg-[#e02929ef] block w-[44px] h-[4px] absolute  right-[9rem]  md:right-[20.1rem] lg:right-[3.1rem] min-[1366px]:right-[5.0rem]  -bottom-[19px]"></span>
                    </div>

                    <div className="flex flex-col justify-center items-center  mt-6">
                      <h1 className="text-2xl md:text-xl md:text-center lg:text-[1.5rem] xl:text-[1.2rem] text-black font-semibold uppercase mt-2">
                        {item.title}
                      </h1>
                      <p className="text-[17px] text-center">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Arrow button for sm screens - Only visible on sm screens */}
            <div className="flex space-x-4 items-center justify-center md:hidden mt-4">
              <div
                onClick={() => keenSliderInstance.current.prev()}
                className="bg-white w-10 h-10 grid items-center justify-center rounded-full rotate-90 shrink-0 cursor-pointer transition hover:bg-[#d8c6c6]"
              >
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
              <div
                onClick={() => keenSliderInstance.current.next()}
                className="bg-[#ffffff] w-10 h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0 cursor-pointer transition hover:bg-[#d8c6c6]"
              >
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
        </div>
        <div className=" absolute bottom-0 left-0 top-24 lg:top-[23rem] hidden lg:block">
          <img
            src="/image/caro.png"
            alt=""
            className=" h-30 2xl:w-[13rem] xl:w-[5rem] lg:w-[3.5rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
