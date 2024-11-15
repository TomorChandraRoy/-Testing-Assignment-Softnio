const About = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 md:gap-10 justify-center items-center gap-5 lg:gap-[3.5rem]">
        <div className="relative mt-5 md:mt-10 lg:mt-20">
          <img
            className="w-[24rem] h-[20rem] mx-auto  md:w-[43rem] lg:w-[43rem] lg:h-[30rem] lg:mx-10 object-cover"
            src="/image/about.png"
            alt="image"
          />
          <div>
            <p className="absolute bg-[#FFFFFF] rounded-3xl p-10 top-[2rem] left-[2.25rem] md:left-[3.25rem]  lg:left-20 right-10 w-[11rem] h-[6rem] lg:-bottom-[9.2rem] lg:w-[15rem] lg:h-[8rem] lg:right-2"></p>
            <div className="relative">
              <img
                src="/image/content (1).png"
                alt=""
                className="absolute  p-2 -top-[284px] left-[2.25rem] md:left-[3.25rem] lg:left-20 w-[11rem] lg:-bottom-[9.2rem] lg:-top-[27.4rem] lg:w-[14rem] lg:right-2"
              />
            </div>
          </div>
        </div>

        <div className="p-4 xl:mb-20">
          <ul className="flex ">
            <li
              id="homeTab"
              className="tab text-black font-bold text-base  hover:bg-red-500 hover:text-gray-100 py-3 px-6  cursor-pointer"
            >
              About
            </li>
            <li
              id="contentTab"
              className="tab text-black font-bold text-base text-center hover:bg-red-500 hover:text-gray-100 py-3 px-6  cursor-pointer"
            >
              Experience
            </li>
            <li
              id="profileTab"
              className="tab text-black font-bold text-base text-center hover:bg-red-500 hover:text-gray-100 py-3 px-6  cursor-pointer"
            >
              Contact
            </li>
          </ul>

          <div className="border-b-2 w-full border-red-600"></div>

          <div id="homeContent" className="tab-content max-w-2xl  mt-8 ">
            <p className="text-[2rem] lg:text-[1.6rem] font-bold text-black font-raleway uppercase my-5">
              Exceptional culinary <br /> experience and delicious food
            </p>
            <p className="text-base font-medium text-black my-5">
              Our chefs bring together ingredients from around the globe to
              create dishes that are both visually stunning and extraordinarily
              flavorful. Each plate is an artful blend of tradition and
              innovation, designed to satisfy and delight every palate.
            </p>
            <div className="flex justify-stretch items-center gap-5">
              <button className="bg-[#FEBF00] h-[44px] w-[157px] gap-[10px] border border-none uppercase font-roboto font-bold">
                Book a table
              </button>
              <div className="flex justify-center items-center gap-3">
                <img src="/image/call.png" alt="" />
                <p className="font-medium">+88 3426 739 485</p>
              </div>
            </div>
          </div>
          <div
            id="contentContent"
            className="tab-content max-w-2xl hidden mt-8"
          >
            <h4 className="text-lg font-bold text-gray-600">Content</h4>
            <p className="text-sm text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              auctor auctor arcu, at fermentum dui. Maecenas vestibulum a turpis
              in lacinia. Proin aliquam turpis at erat venenatis malesuada. Sed
              semper, justo vitae consequat fermentum, felis diam posuere ante,
              sed fermentum quam justo in dui.
            </p>
          </div>
          <div
            id="profileContent"
            className="tab-content max-w-2xl hidden mt-8"
          >
            <h4 className="text-lg font-bold text-gray-600">Profile</h4>
            <p className="text-sm text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              auctor auctor arcu, at fermentum dui. Maecenas vestibulum a turpis
              in lacinia.
            </p>
          </div>
        </div>
      </div>

      {/* about icon */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 lg:gap-[1.5rem] px-5 lg:my-[5rem] my-6 ">
        <div>
          <div className="flex items-center gap-5 ">
            <img
              src="/image/Vector 2.png"
              alt=""
              className=" border bg-white p-6 rounded-full"
            />
            <div>
              <h3 className="text-2xl font-bold mb-2 text-black uppercase font-raleway">
                fast delivery
              </h3>
              <p className="text-lg font-normal text-black font-roboto">
                Within 30 minutes
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex  items-center gap-5 ">
            <img
              src="/image/medal.png"
              alt=""
              className=" border bg-white p-6 rounded-full"
            />
            <div>
              <h3 className="text-2xl font-bold mb-2 text-black uppercase font-raleway">
                absolute dining
              </h3>
              <p className="text-lg font-normal text-black font-roboto">
                Best buffet restaurant
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-5 ">
            <img
              src="/image/bag.png"
              alt=""
              className=" border bg-white p-6 rounded-full"
            />
            <div>
              <h3 className="text-2xl font-bold mb-2 text-black uppercase font-raleway">
                pickup delivery
              </h3>
              <p className="text-lg font-normal text-black font-roboto">
                Grab your food order
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-[22rem] 2xl:top-[18rem] hidden lg:block lg:top-[27rem]">
        <img
          src="/public/image/aboout.png"
          alt=""
          className="w-32 h-30 2xl:w-[15rem] xl:w-[9rem] lg:w-[7.9rem] "
        />
      </div>
    </div>
  );
};

export default About;
