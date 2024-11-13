import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const data = [
    {
      "image": "https://i.ibb.co/8s8qJ2D/Group.png",
      "title": "Delicious Cuisine",
      "description": "Experience the taste of world-class dishes prepared by top chefs."
    },
    {
      "image": "https://i.ibb.co/8s8qJ2D/Group.png",
      "title": "Elegant Ambiance",
      "description": "Enjoy your meal in a luxurious and comfortable environment."
    },
    {
      "image": "https://i.ibb.co/8s8qJ2D/Group.png",
      "title": "Elegant Ambiance",
      "description": "Enjoy your meal in a luxurious and comfortable environment."
    },
    {
      "image": "https://i.ibb.co/8s8qJ2D/Group.png",
      "title": "Elegant Ambiance",
      "description": "Enjoy your meal in a luxurious and comfortable environment."
    },
    {
      "image": "https://i.ibb.co/8s8qJ2D/Group.png",
      "title": "Fresh Ingredients",
      "description": "Only the freshest ingredients are used in all of our dishes."
    },
    {
        "image": "https://i.ibb.co/8s8qJ2D/Group.png",
        "title": "Fresh Ingredients",
        "description": "Only the freshest ingredients are used in all of our dishes."
    }
  ]
  

const Carousel = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div className="reletive">
          <div className="w-full bg-[#FBF7F2] h-fit flex flex-col px-4 py-10 lg:px-20 lg:py-20 gap-6  ">
            <div className="lg:ml-[4rem]">
            <p className="text-xl ">Crispy, Every Bite Taste.</p>
            <h1 className="text-6xl text-black font-bold ">POPULAR FOOD ITEMS</h1>
            </div>
            <div className="w-full h-fit p-8">
            <Slider {...settings}>
                {
                    data.map((singleData, index)=>(
                        <div id="slider-boxs" key={index} className="bg-white p-10 rounded-xl flex flex-col justify-center items-center ">
                            <div id="icon-box" className="">
                                <img src={singleData.image} alt="" className="w-[45px] h-[45px]"/>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-6 mt-6">
                                <h1 className="text-2xl text-black fonr-bold">{singleData.title}</h1>
                                <p className="text-[17px] text-center">{singleData.description}</p>
                            </div>
                        </div>
                    ))
                }
                </Slider> 
            </div>
          </div>
          <div className="absolute  lg:top-[145rem]">
                <img className="w-[50%] h-[50%]" src="/image/caro.png" alt="" />
            </div>
        </div>
    );
};

export default Carousel;