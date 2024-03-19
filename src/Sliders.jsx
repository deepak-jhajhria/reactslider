import React from 'react'
import slidersofa1 from "./assets/images/first.png";
import slidersofa2 from "./assets/images/first.png";
import slidersofa3 from "./assets/images/first.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
const CustomPrevArrow = ({ onClick }) => (
    <button onClick={onClick} className='text-lg font-sans font-medium'>Prev</button>
);

const CustomNextArrow = ({ onClick }) => (
    <button onClick={onClick} className=" text-lg font-sans font-medium">Next</button>
);

const Sliders = () => {
    var settings = {
        dots: false,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1290,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },

            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },

        ]
    };
    const Mycard = [
        {
            id: 1,
            ProductImg: slidersofa1,
            ProductName: "Single Sofa",
            Description: "Lorem ip sumdolor",
            Price: "₹1200.00",
        },
        {
            id: 2,
            ProductImg: slidersofa2,
            ProductName: "Single Sofa",
            Description: "Lorem ip sumdolor",
            Price: "₹1200.00",
        },
        {
            id: 3,
            ProductImg: slidersofa3,
            ProductName: "Single Sofa",
            Description: "Lorem ip sumdolor",
            Price: "₹1200.00",
        },
        {
            id: 4,
            ProductImg: slidersofa3,
            ProductName: "Single Sofa",
            Description: "Lorem ip sumdolor",
            Price: "₹1200.00",
        },
        {
            id: 5,
            ProductImg: slidersofa3,
            ProductName: "Single Sofa",
            Description: "Lorem ip sumdolor",
            Price: "₹1200.00",
        },
    ];
    const slidercard = Mycard.map((mycard) => (
        <div className='!flex justify-center my-5'>
            <div className=" w-full max-w-[422px] sm:mx-3 max-h-[483px] hover:shadow-[6px_13px_38px_0px_rgba(0,0,0,0.12)] duration-300 bg-[#fff] py-5 px-6  group overflow-hidden" key={mycard.id}>
                <img className="w-full group-hover:scale-[0.9] duration-300  " src={mycard.ProductImg} alt="sofa1" />
                <div className=" flex justify-between pt-4">
                    <p className=" text-[20px] font-medium font-[poppins] text-black">{mycard.ProductName}</p>
                </div>
                <p className=" text-lg font-normal font-[poppins] text-[#4D4D4D] pt-4">{mycard.Description}</p>
                <div className=" flex justify-between pt-5 pb-[53px]">
                    <p className=" text-[28px] font-semibold font-[poppins] text-black ">{mycard.Price}</p>
                </div>
            </div>
        </div>
    ));
    return (
        <div className='overflow-hidden'>
            <div className=" max-w-[1320px] mx-auto px-3 pt-5 md:pt-12 lg:pt-24 relative">
                <h2 className="text-[#BD7D41] text-base max-lg:text-center sm:text-xl font-normal font-poppins relative before:absolute lg:before:w-[96px] before:h-[1px] before:bg-black before:left-0 before:top-[45%] lg:pl-[110px]">Shopping Store</h2>
                <div className=" flex justify-center pt-1 lg:justify-between sm:pb-7 lg:pb-14">
                    <p className="text-[#243040] text-xl sm:text-[35px] font-bold max-lg:text-center font-poppins">Our Products</p>
                </div>
                <Slider  {...settings}>{slidercard}</Slider>
            </div>

        </div>
    )
}

export default Sliders