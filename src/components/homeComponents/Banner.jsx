
const Banner = () => {
    return (
      <div>
        <div 
          className="grid pb-[5rem] lg:grid-cols-2 items-center lg:gap-y-6 lg:pt-[16rem] pt-24 lg:pb-[21rem]"  style={{ backgroundImage: `linear-gradient(rgba(255, 0, 0, 0.7), rgba(255, 0, 0, 0.7)), url('/image/banner2.png')`}}
        
        >
          {/* Text Content on Mobile and Tablet */}
          <div className="text-center lg:text-left  p-4 sm:p-8 lg:p-12">
            <div>
            <h2 className="text-gray-200  lg:bg-gradient-to-l from-red-600 relative lg:absolute z-10 py-4 pr-5 lg:mt-36 lg:text-[5.03rem]  ml-6  lg:ml-0 leading-none text-3xl font-bold font-raleway uppercase">Taste the authentic <br /> <span className="flex mt-5 md:ml-[10rem] lg:ml-0">Saudi cuisine</span> </h2>
            </div>
            <div className="mt-[0.5rem] lg:mt-[25.5rem] text-left md:ml-[10rem] lg:ml-0">
              <p className="text-gray-100 lg:text-base text-left ml-6 lg:ml-0 font-normal font-roboto lg:mt-10 w-max ">
                Among the best Saudi chefs in the world, serving <br className="lg:block" /> you something beyond flavor.
              </p>
              <button className="bg-[#FEBF00] h-[44px]  w-[157px] mt-4 ml-6 lg:ml-0 uppercase font-roboto font-bold">
                Explore Menu
              </button>
            </div>
          </div>
  
          {/* Image Section -  on Mobile and Tablet */}
        <div className="flex items-center justify-center lg:h-[480px] relative mt-8 ">
              <div>
                <img src="/image/Vector.png" alt="" className="absolute right-[1.4rem] -top-[19px] lg:right-[0.5rem] lg:-top-[6rem] "/>
              </div>
            <img
              src="/image/Banner1.png"
              className="w-[369px] h-[22rem] ml-[0.75rem] md:w-[500px] md:ml-[10rem] lg:w-[710px] lg:h-[682px] lg:ml-[0.5rem] object-cover scale-x-[-1] lg:mt-20 lg:mr-10 "
              alt="Dining Experience"
            />
              <div>
                <img src="/image/Offer.png" alt="" className="absolute  bg-[#FEBF00] rounded-full p-2 bottom-[0rem] right-10 w-20 lg:-bottom-[9.2rem] lg:w-[7rem] lg:right-2"/>
              </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  


