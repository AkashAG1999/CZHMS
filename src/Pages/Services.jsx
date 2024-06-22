import React from 'react';
import { useEffect } from "react";

import 'aos/dist/aos.css';
import Aos from 'aos';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import AccessToPharmacy from "../assets/Features/AccessToPharmacy.jpeg";
import DiagnosticLabs from "../assets/Features/DiagnosticLabs.jpeg";
import Emergency from "../assets/Features/Emergency.jpg";
import Packages from "../assets/Features/Packages.jpg"
import Physiotheraphy from "../assets/Features/Physiotherapy.jpg"


const Services = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const team = [
        {
            avatar: DiagnosticLabs,
            name: "Diagnostic Labs",
        },
        {
            avatar: AccessToPharmacy,
            name: "Access to Pharmacy",
        },
        {
            avatar: Physiotheraphy,
            name: "Physiotherapy",
        },
        {
            avatar: Packages,
            name: "Advanced Packages",
        },
        {
            avatar: Emergency,
            name: "Emergency services",
        },

    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 4,

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
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-full">
                    <h3 className="text-TopNavBg text-3xl font-semibold sm:text-4xl">
                        Services
                    </h3>
                    <p className="text-gray-600 mt-3">
                        Alba Hospital is dedicated to providing comprehensive healthcare services to meet your needs. Our Diagnostic Labs offer precise testing and analysis, while our Access to Pharmacy ensures you have convenient access to medications. We also offer specialized Physiotherapy services to aid in your recovery and rehabilitation. Explore our Advanced Packages for holistic health check-ups, and rely on our Emergency services for immediate medical attention. Your health and well-being are our top priorities.
                    </p>
                </div>
                <div className="mt-12 px-3">
                    <Slider {...settings} className="slick-container">
                        {team.map((item, idx) => (
                            <div key={idx} className="slick-slide ">
                                <div data-aos="zoom-in" className="w-full h-60 sm:h-52 md:h-56">
                                    <img
                                        src={item.avatar}
                                        className="w-full h-full object-cover  border-2 border-white bg-white shadow-xl rounded-xl"
                                        alt="Failed to load images.."
                                    />
                                </div>
                                <div className="mt-4">
                                    <h4 className="text-lg text-gray-700 font-semibold">{item.name}</h4>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Services;
