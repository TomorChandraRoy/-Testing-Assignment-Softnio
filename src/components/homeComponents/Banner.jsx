const Banner = () => {
  return (
    <div >
      <div
        className="grid pb-[5rem] lg:grid-cols-2 items-center lg:gap-y-6 pt-24"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 0, 0, 0.7), rgba(255, 0, 0, 0.7)), url('/image/banner2.png')`,
        }}
      >
        {/* Text Content on Mobile and Tablet */}
        <div className="text-center lg:text-left xl:ml-9">
          <div>
            <h2 className="text-gray-200 text-start lg:bg-gradient-to-l from-red-600 relative lg:absolute z-10 py-4 pr-5 md:text-[3rem] lg:ml-10 lg:mt-36 lg:text-[3.4rem] xl:text-[4.9rem] ml-6  text-3xl leading-[3rem] font-bold font-raleway uppercase">

              Taste the authentic <br /> <span className="flex mt-5  lg:ml-0">Saudi cuisine</span>

            </h2>
          </div>
          <div className="mt-[0.5rem] lg:mt-[25.5rem] text-left md:ml-0 lg:ml-0">
            <p className="text-gray-100 lg:text-base text-left ml-6  font-normal font-roboto lg:ml-[3rem] lg:-mt-[4.5rem] w-max ">
              Among the best Saudi chefs in the world, serving{" "}
              <br className="lg:block" /> you something beyond flavor.
            </p>
            <button className="bg-[#FEBF00] h-[44px]  w-[157px] mt-4 ml-6  uppercase font-roboto font-bold lg:ml-[3rem]">
              Explore Menu
            </button>
          </div>
        </div>

        {/* Image Section -  on Mobile and Tablet */}
         <div className="flex items-center justify-center lg:h-[480px]  relative mt-8 ">
            <div>
            <img src="/image/Vector.png" alt="" className="absolute right-[1.4rem] -top-[22px] xl:right-[3.5rem] xl:-top-[2.9rem]  lg:right-[0.5rem] lg:-top-[2rem] md:right-[8.25rem]"/>
            </div>
            <img
              src="/image/Banner1.png"
              className="object-cover scale-x-[-1] w-[369px] h-[22rem] md:w-[500px] md:h-[500px]"
              alt="Dining Experience"
            />
            <div>
                <img src="/image/Offer.png" alt="" className="absolute  bg-[#FEBF00] rounded-full p-2  w-20 bottom-[10px] right-10 md:right-[9rem] lg:right-3 lg:w-[6rem] xl:right-[5.75rem]"/>
              </div>
         </div>
      </div>
    </div>
  );
};

export default Banner;
