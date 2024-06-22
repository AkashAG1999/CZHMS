import React from 'react'
import CS from '../../assets/cardiac_science.jpg'
import CardiacScienceFeatures from './CardiacScienceFeatures'
import CardiacServices from './CardiacServices'
import CardiacScienceFAQ from './CardiacScienceFAQ'
import Footer from '../Footer'

const CardiacSciences = () => {
    return (
        <div className="">
            <nav aria-label="Breadcrumb">
                <ol className="flex items-center gap-1 text-sm py-2 text-gray-600 justify-start">
                    <li>
                        <a href="/" className="block transition hover:text-gray-700">
                            <span className="sr-only"> Home </span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                            </svg>
                        </a>
                    </li>

                    <li className="rtl:rotate-180">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </li>

                    <li>
                        <a href="/specialities" className="block transition hover:text-gray-700"> Specialities </a>
                    </li>

                    <li className="rtl:rotate-180">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </li>

                    <li>
                        <a href="#" className="block transition hover:text-gray-700"> Cardiac-Science </a>
                    </li>
                </ol>
            </nav>
            <img
                src={CS}
                className="object-cover w-full h-auto sm:h-[580px]"
                alt="..."
            />
            <section className="max-w-screen-xl mx-auto py-4 px-4 md:px-8">
                <div className="max-w-full">
                    <div className="py-4">
                        <h3 className="mb-5 text-TopNavBg text-3xl font-semibold sm:text-4xl">
                            Cardiac Science
                        </h3>
                        <p className='font-bold'>Heart Care from the Heart.</p>
                        <p className="text-gray-500 leading-relaxed mt-3 text-justify">
                            Cardiac Sciences is one of the most revered Centre of Excellence at Alba Hospitals. Our stellar doctors are handpicked to represent the finest heart team in the healthcare industry. Our flawlessly perfected processes ensure they work in synergistic unison to deliver world-class cardiac care. Our technologies, infrastructure, and systems are comparable with the finest in their class and category.

                           <br></br>Our centre comprises Cardiology, Interventional Cardiology, Cardiothoracic Vascular Surgery, Cardiac Surgery, Heart Transplant and Cardiac Rehabilitation services for both adults and children. Our holistic cardiac care accessible under one roof differentiates our Cardiac Sciences Centre from other hospitals.

                           <br></br>Our doctors keep themselves abreast with new advancements in the field to improve the diagnosis and modalities for all our patients. Every day, our doctors & nurses demonstrate their commitment to personalised, advanced, and quality cardiovascular care to our patients so that they get the best possible treatment.

                           <br></br>In our hospitals, we diagnose and treat approximately 10,000 adults and children every year, including those with complex or rare conditions.

                           <br></br>We closely collaborate with departments like paediatrics, radiology, general surgery and critical care to bring you a truly holistic and seamless global healthcare experience.

                           <br></br>Regardless of your age – we offer you the latest and finest treatment in complete Cardiac Care.
                        </p>

                    </div>
                </div>
            </section>
            <CardiacServices />
            <CardiacScienceFeatures />
            <CardiacScienceFAQ />
            <Footer />
        </div>




    )
}

export default CardiacSciences