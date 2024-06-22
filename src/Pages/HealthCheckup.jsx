import React from 'react';
import MasterExecutive from "../assets/Features/MasterExecutive.jpg";
import DiabeticCheck from "../assets/Features/DiabeticCheck.jpg";
import Accessible from "../assets/Accessible.jpg";

const HealthCheckup = () => {
    const Health = [
        {
            avatar: MasterExecutive,
            title: "Master Executive",
            desc: "Our Master Executive health checkup offers a comprehensive assessment of your overall health, including advanced diagnostics and personalized consultations.",
            href: "javascript:void(0)"
        },
        {
            avatar: DiabeticCheck,
            title: "Diabetic Life Check",
            desc: "The Diabetic Life Check is tailored for individuals managing diabetes, focusing on critical parameters to help maintain optimal health and prevent complications.",
            href: "javascript:void(0)"
        },
        {
            avatar: Accessible,
            title: "Cardiac Lifecheck",
            desc: "Cardiac Lifecheck is designed to evaluate heart health, including screenings for common cardiovascular diseases and risk factors.",
            href: "javascript:void(0)"
        },
    ];

    return (
        <section className="py-8">
            <div className="max-w-screen-xl mx-auto px-4 text-white md:px-8">
                <div className="max-w-full">
                    <h3 className="text-TopNavBg text-3xl font-semibold sm:text-4xl">
                        Health Checkup
                    </h3>
                    <p className="text-gray-600 mt-3">
                        Our comprehensive health checkup packages are designed to provide a thorough evaluation of your health, tailored to your specific needs. From executive checkups to specialized screenings, we ensure you receive the best care possible.
                    </p>
                </div>
                <div className="mt-20">
                    <ul className="grid gap-y-4 gap-x-4 sm:grid-cols-2 lg:grid-cols-3">
                        {Health.map((item, idx) => (
                            <li key={idx} className="flex gap-x-4">
                                <div className="px-4 py-4 rounded-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105" style={{ backgroundImage: `url(${item.avatar})`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                                    <div className="h-56"></div>
                                    <h4 className="text-lg text-white font-semibold">
                                        {item.title}
                                    </h4>
                                    <p className="text-white text-sm">
                                        {item.desc}
                                    </p>
                                    <a href={item.href} className="text-lg mt-3 text-white duration-150 hover:text-Bg_Secondary font-regular inline-flex items-center gap-x-1">
                                        KNOW MORE
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default HealthCheckup;
