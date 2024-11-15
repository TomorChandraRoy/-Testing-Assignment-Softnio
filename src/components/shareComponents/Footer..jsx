const Footer = () => {
  return (
    <div className="relative bg-black-rgba py-16 font-[sans-serif]">
      <div className="absolute inset-0">
        <img
          src="/image/footer.png"
          alt="Background Image"
          className="w-full h-full object-cover opacity-20 backdrop-blur-[2px]"
        />
      </div>

      <div className="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-[#FFFFFF]">
        <h1 className="text-6xl md:text-5xl font-normal  font-bebasNeue mb-6">
          We ready to have you the best dining experiences
        </h1>
        <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4 gap-8 my-[4rem]">
          <div>
          <img className="mx-auto " src="/image/clock.png" alt="" />
            <h4 className="text-white text-2xl my-6 uppercase font-bebasNeue font-normal">Opening hours</h4>
            <ul className="">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white font-normal font-roboto text-base"
                >
                 Monday - Sunday
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white font-normal font-roboto text-base"
                >
                  9:00 AM to 11:30 PM
                </a>
              </li>
            </ul>
          </div>
          <div>
          <img className="mx-auto " src="/image/phone.png" alt="" />
            <h4 className="text-white text-2xl my-6 uppercase font-bebasNeue font-normal">{`LET'STALK`}</h4>
            <ul className="">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white font-normal font-roboto text-base"
                >
                 Phone: 1-800-222-4545
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white font-normal font-roboto text-base"
                >
                  Fax: 1-800-222-4545
                </a>
              </li>
            </ul>
          </div>
          <div>
          <img className="mx-auto " src="/image/mail.png" alt="" />
            <h4 className="text-white text-2xl my-6 uppercase font-bebasNeue font-normal">BOOK A TABLE</h4>
            <ul className="">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white font-normal font-roboto text-base"
                >
                 Email: demo@website.com
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white font-normal font-roboto text-base"
                >
                  Support: support@website.com
                </a>
              </li>
            </ul>
          </div>
          <div>
          <img className="mx-auto " src="/image/map-pin.png" alt="" />
            <h4 className="text-white text-2xl my-6 uppercase font-bebasNeue font-normal">Our Address</h4>
            <ul className="">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white font-normal font-roboto text-base"
                >
                 123 Stree New York City,
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white font-normal font-roboto text-base"
                >
                   United States Of America.
                </a>
              </li>
            </ul>
          </div>
        </div>

        <ul className="flex items-center justify-center flex-wrap gap-y-3 gap-x-6 mt-8">
          <li><a href="#">
           <img className="mx-auto " src="/image/facebook.png" alt="" />
          </a></li>
          <li><a href="#">
           <img className="mx-auto " src="/image/x.png" alt="" />
          </a></li>
          <li><a href="#">
           <img className="mx-auto " src="/image/ins.png" alt="" />
          </a></li>
          <li><a href="#">
           <img className="mx-auto " src="/image/lindin.png" alt="" />
          </a></li>
        </ul>
        <p className='text-gray-200 text-base font-roboto my-5'>© 2023 All Rights Reserved </p>
      </div>
    </div>
  );
};

export default Footer;
