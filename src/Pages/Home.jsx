import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import Ban3 from "../assets/HeroSection/Ban3.jpg";
import Ban2 from "../assets/HeroSection/Ban2.jpg";

const Home = () => {

    const contactMethods = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
            ,
            contact: "Market Road, Marthandam, India, Tamil Nadu 629165.",
            title: "Location"
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
            ,
            contact: "+91 9834673827",
            title: "Phone"
        },

    ]
    return (
        <>
            <TECarousel showControls showIndicators ride="carousel">

                <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">

                    <TECarouselItem
                        itemID={1}
                        className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    >
                        <div className="absolute inset-x-[13%] top-8 py-5 text-white md:block">
                            <h2 className="text-white font-bold sm:text-xl md:text-4xl">Alba Multispeciality Hospital<br />now Opens in Bangalore.</h2>
                            <p className="text-white mt-4 text-xs sm:text-xs md:text-lg">Futuristic 500 bed hospital equipped<br />with advanced healthcare technology</p>
                            <a href="javascript:void()"
                                class="mt-5 px-4 py-2 text-white font-medium bg-Button hover:bg-Hover rounded-full inline-flex items-center
          text-sm md:text-base lg:text-lg
          md:px-4 lg:px-6
          md:py-1 lg:py-2">
                                Know More
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-1 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>

                        </div>
                        <img
                            src={Ban3}
                            className="object-cover w-full  h-auto sm:h-[600px] "
                            alt="..."
                        />
                    </TECarouselItem>
                    <TECarouselItem
                        itemID={2}
                        className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    >
                        <div className="absolute inset-x-[13%] top-8 py-5 text-white md:block">
                            <h2 className="text-black font-bold sm:text-xl md:text-4xl"></h2>

                        </div>
                        <img
                            src={Ban2}
                            className="object-cover w-full h-auto sm:h-[600px]"
                            alt="..."
                        />
                    </TECarouselItem>

                    <div className="absolute bg-slate-100 rounded-xl inset-x-[30%] top-[450px] py-2 text-white md:block sm:hidden mx-auto px-4  md:px-4 ">
                        <div>
                            <ul className="flex flex-wrap gap-x-4 gap-y-3 items-center lg:gap-x-20 md:gap-x-5 ">
                                {
                                    contactMethods.map((item, idx) => (
                                        <li key={idx}>
                                            <h4 className="text-black text-sm font-medium">{item.title}</h4>
                                            <div className="mt-3 flex items-center gap-x-3">
                                                <div className="flex-none text-Button">
                                                    {item.icon}
                                                </div>
                                                <p className="text-black text-xs">{item.contact}</p>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </TECarousel>
        </>
    );
};

export default Home;
