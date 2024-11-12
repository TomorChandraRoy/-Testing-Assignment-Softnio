
// const Banner = () => {

//     return (
//         <div>
//             <div className="grid lg:grid-cols-2 items-center lg:gap-y-6 h-[50rem]"  style={{ backgroundImage: `linear-gradient(rgba(255, 0, 0, 0.7), rgba(255, 0, 0, 0.7)), url('/src/utils/image/banner2.png')`}}>
//                     <div className="max-lg:order-1 max-lg:text-center sm:p-12 p-4">
//                         <div className="lg:bg-gradient-to-l from-red-500 absolute z-20 py-5 ml-[15.3rem] mt-36 ">
//                         <h2 className="text-gray-200 lg:text-5xl text-3xl font-bold font-raleway uppercase ">Taste the authentic <br /> Saudi cuisine</h2>
//                         </div>
//                         <div className="lg:ml-[15.2rem]">
//                         <p className="text-gray-100  text-base font-roboto mt-[20rem] ">Among the best Saudi chefs in the world, serving <br /> you something beyond flavor.</p>
//                         <button className="bg-[#FEBF00] h-[44px] w-[157px] gap-[10px] border border-none uppercase font-roboto font-bold my-4">Explore Menu</button>
//                         </div>
//                     </div>
//                     <div className="lg:h-[480px]  flex items-center relative">
//                         <div className="absolute z-[20] lg:ml-[32rem] lg:top-4">
//                             <img src="/src/utils/image/Vector.png" alt="ii" />
//                         </div>
//                         <img src="https://i.ibb.co.com/WHy9Ybg/Banner1.png" className="w-[530px] h-[450px] scale-x-[-1] object-cover mt-20" alt="Dining Experience" />
//                         <div className="absolute z-[20] lg:ml-[30rem] lg:-bottom-11 bg-[#FEBF00] rounded-full p-1">
//                             <img src="/src/utils/image/Offer.png" alt="ii" />
//                         </div>
//                     </div>
//                 </div>
//         </div>
        
//     );
// };

// export default Banner;

const Banner = () => {
    return (
      <div>
        <div 
          className="grid pb-[5rem] lg:grid-cols-2 items-center lg:gap-y-6 lg:pt-[16rem] pt-24 lg:pb-[21rem]"  style={{ backgroundImage: `linear-gradient(rgba(255, 0, 0, 0.7), rgba(255, 0, 0, 0.7)), url('/src/utils/image/banner2.png')`}}
        
        >
          {/* Text Content on Mobile and Tablet */}
          <div className="text-center lg:text-left  p-4 sm:p-8 lg:p-12">
            <div>
            <h2 className="text-gray-200  lg:bg-gradient-to-l from-red-600 relative lg:absolute z-10 py-4 pr-5 lg:mt-36 lg:text-[4.8rem]  ml-6  lg:ml-0 leading-none text-3xl font-bold font-raleway uppercase">Taste the authentic <br /> <span className="flex mt-5 md:ml-[10rem] lg:ml-0">Saudi cuisine</span> </h2>
            </div>
            <div className="mt-[0.5rem] lg:mt-[22rem] text-left md:ml-[10rem] lg:ml-0">
              <p className="text-gray-100 lg:text-base text-left ml-6 lg:ml-0 font-bold font-roboto lg:mt-10 w-max ">
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
                <img src="/src/utils/image/Vector.png" alt="" className="absolute right-[1.4rem] -top-[19px] lg:right-[0.5rem] lg:-top-[6rem] "/>
              </div>
            <img
              src="/src/utils/image/Banner1.png"
              className="w-[369px] h-[22rem] ml-[0.75rem] md:w-[500px] md:ml-[10rem] lg:w-[710px] lg:h-[682px] lg:ml-[0.5rem] object-cover scale-x-[-1] lg:mt-20 lg:mr-10 "
              alt="Dining Experience"
            />
              <div>
                <img src="/src/utils/image/Offer.png" alt="" className="absolute  bg-[#FEBF00] rounded-full p-2 bottom-[0rem] right-10 w-20 lg:-bottom-[9.2rem] lg:w-[7rem] lg:right-2"/>
              </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  


