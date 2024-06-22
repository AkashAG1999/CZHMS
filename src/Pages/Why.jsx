import React from 'react'

import Doctor from "../assets/Doctor.jpg"
import Diagnosis from "../assets/Diagnosis.jpg"
import Pc from "../assets/PersonalizedCare.jpg"

const Why = () => {

    const features = [
        {
            avatar: Doctor,
            title: "World-class Doctors",
            desc: "Our team of highly experienced and globally recognized doctors ensures that you receive the best possible medical care.",
            href: "javascript:void(0)"
        },
        {
            avatar: Diagnosis,
            title: "The Right Diagnosis",
            desc: "We use advanced diagnostic tools and technologies to accurately identify your health issues and provide effective treatment plans.",
            href: "javascript:void(0)"
        },
        {
            avatar: Pc,
            title: "Personalized Care",
            desc: "We offer personalized care tailored to your specific needs, ensuring you receive the most appropriate and effective treatments.",
            href: "javascript:void(0)"
        },
    ];

    return (
        <section className="py-8 bg-gradient-to-r from-teal-500 to-blue-700">
            <div className="max-w-screen-xl mx-auto px-4 text-white md:px-8">
                <div className="space-y-3">
                    <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                        Why Choose Alba Hospital
                    </h3>
                    <p>
                        At Alba Hospitals, we provide the highest quality of care and a transformative experience for all your healthcare needs. With our network of multi-specialty hospitals, specialized doctors, and world-class technology, we bring global standards of medical care to our patients.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-4 gap-x-4 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((item, idx) => (
                            <li key={idx} className="flex gap-x-4">
                                <div className="px-4 py-4 rounded-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105" style={{ backgroundImage: `url(${item.avatar})`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                                    <div className="h-60"></div>
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
}

export default Why;
