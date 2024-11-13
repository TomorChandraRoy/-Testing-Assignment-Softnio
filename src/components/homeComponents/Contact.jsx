const Contact = () => {


  return (
    <div
      className="w-full  bg-cover bg-no-repeat"
      style={{ backgroundImage: `url('/image/contact.png')` }}
    >
      <div className="max-w-7xl max-lg:max-w-3xl mx-auto p-4 text-white">
        <div className="p-8">
          <div className="flex justify-start items-center gap-4">
            <span className="bg-[#fc2e2e] block w-[10px] h-[10px] "></span>
            <h4 className="my-2 text-[#BD1F17] font-bold ">Book Now</h4>
          </div>
          <h2 className="text-6xl text-white font-bold font-bebasNeue">
            Book Your Table
          </h2>
          <p className="font-roboto font-normal text-lg my-5 max-w-[30rem]">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>

          {/* contect Form  */}
          <div className="grid lg:grid-cols-2 items-start gap-12 ">
            <form className="space-y-8">
              <div className="grid sm:grid-cols-2 mt-8 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name * "
                    className="w-full  py-2.5 px-4 border bg-transparent text-sm outline-[#007bff]"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full py-2.5 px-4 border bg-transparent text-sm outline-[#007bff]"
                  />
                </div>
                <div>
                  <input
                    type="date"
                    className="w-full py-2.5 px-4 border bg-transparent text-sm  outline-[#007bff]"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="Total People"
                    className="w-full py-2.5 px-4 border bg-transparent  text-sm outline-[#007bff]"
                  />
                </div>
              </div>
              <div>
                <textarea
                  type="text"
                  placeholder="Message"
                  className="w-full h-8  py-2.5 px-4 border bg-transparent border-gray-300 text-sm  outline-[#007bff]"
                />
              </div>
              <div className="flex items-center col-span-full"></div>
              <button
                type="button"
                className="text-white w-max font-roboto font-bold bg-[#007bff] hover:bg-blue-600  text-sm px-6 py-3 mt-4 tracking-wide"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
