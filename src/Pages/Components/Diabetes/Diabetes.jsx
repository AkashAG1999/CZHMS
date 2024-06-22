import React from 'react'
import Footer from '../../Footer';

import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from "react";

const Diabetes = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    
    const doctors = [
        {
            id: 1,
            name: 'Dr. Michael Johnson',
            specialty: 'Cardiologist',
            summary: 'Expert in heart and blood vessel conditions with over 20 years of experience.',
            image: 'https://img.freepik.com/premium-photo/your-health-is-our-priority-cropped-shot-doctors-hospital_590464-21743.jpg'
        },
        {
            id: 2,
            name: 'Dr. Emily Brown',
            specialty: 'Neurologist',
            summary: 'Specializes in treating disorders of the nervous system.',
            image: 'https://th.bing.com/th/id/R.044b1a21e29cfc3729d710073724fe9a?rik=vxQLnRUsgI8gjg&riu=http%3a%2f%2fglobalcounsellor.in%2fimages%2fservices%2fmmbs.jpg&ehk=nVPkxXeDD0bAh9LG48AdiCwZ3%2bmpstwq28GYIDQqTIw%3d&risl=&pid=ImgRaw&r=0'
        },
        {
            id: 3,
            name: 'Dr. David Miller',
            specialty: 'Orthopedic Surgeon',
            summary: 'Specializes in surgical and nonsurgical treatment of musculoskeletal system disorders.',
            image: 'https://images.fineartamerica.com/images-medium-large-5/mature-male-doctor-wearing-glasses-science-photo-library.jpg'
        },
        {
            id: 4,
            name: 'Dr. Sophia Clark',
            specialty: 'Dermatologist',
            summary: 'Specializes in diagnosing and treating conditions related to the skin, hair, and nails.',
            image: 'https://th.bing.com/th/id/OIP.Q7WTEZ4_gTzDLJ7S8lAUHAAAAA?w=463&h=587&rs=1&pid=ImgDetMain'
        },
        // Add more doctors as needed
    ];



    return (
        <div>
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
                        <a href="/specialities/diabetes#" className="block transition hover:text-gray-700"> Diabetes </a>
                    </li>

                </ol>
            </nav>


            <section class="">
                <div class="relative mx-auto">
                    <div class="absolute inset-0 bottom-56 bg-TopNavBg"></div>
                    <div class="relative pt-10 mx-auto w-full max-w-screen-2xl  text-left sm:px-10">
                        <div class="rounded-xl bg-white shadow-lg lg:flex">
                            <div class="flex flex-col p-4 pb-6 sm:p-10 sm:pt-14 ">
                                <div class="flex-auto">
                                    <h2 class=" text-TopNavBg text-3xl font-semibold sm:text-4xl">Diabetes</h2>
                                    <p class="pt-4 text-lg">Diabetes is a chronic medical condition characterized by high levels of sugar (glucose) in the blood. It occurs when the body either cannot produce enough insulin (a hormone that regulates blood sugar) or cannot effectively use the insulin it produces.</p>
                                    <div class="mt-6 flex flex-wrap">
                                        <p class="m-1 rounded-md text-blue-600 bg-gray-100 px-2 py-1 text-sm">Risk Factors : </p>
                                        <p class="m-1 rounded-md text-gray-600 bg-gray-100 px-2 py-1 text-sm">Family History</p>
                                        <p class="m-1 rounded-md text-gray-600 bg-gray-100 px-2 py-1 text-sm">Genetics</p>
                                        <p class="m-1 rounded-md text-gray-600 bg-gray-100 px-2 py-1 text-sm">Geography</p>
                                        <p class="m-1 rounded-md text-gray-600 bg-gray-100 px-2 py-1 text-sm">Environmental Factors</p>
                                        <p class="m-1 rounded-md text-gray-600 bg-gray-100 px-2 py-1 text-sm">Weight</p>
                                    </div>
                                </div>
                            </div>
                            <div class="m-8 lg:w-3/5 overflow-hidden rounded-xl sm:block">
                                <img class="object-cover w-full h-full" src="https://img.freepik.com/free-vector/diabetes-flat-composition-medical-with-patient-symptoms-complications-blood-sugar-meter-treatments-medication_1284-28998.jpg?t=st=1715831508~exp=1715835108~hmac=739d92b853cbbdd31a580a8918af5398ea4f031752d362dd59b364b65fe6d371&w=740" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="bg-gray-100 p-6 mt-5">
                <div className="text-center mb-8">
                    <h1 className=" text-TopNavBg text-3xl font-semibold sm:text-4xl">Our Doctors</h1>
                    <p className="text-lg text-gray-600">Meet our team of highly skilled professionals</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {doctors.map(doctor => (
                        <div key={doctor.id} data-aos="zoom-in" className="bg-white rounded-lg shadow-lg p-6 text-center">
                            <img src={doctor.image} alt={doctor.name} className="w-24 h-24 object-cover rounded-full mx-auto mb-4" />
                            <h2 className="text-xl font-semibold mb-2">{doctor.name}</h2>
                            <p className="text-gray-600 mb-2">{doctor.specialty}</p>
                            <p className="text-gray-500 text-sm">{doctor.summary}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-gradient-to-bl from-emerald-400 to-blue-400 mx-auto py-10 grid max-w-screen-full grid-cols-1 text-white pl-6 pr-4 sm:px-20 lg:grid-cols-3">
                <div className="col-span-1 flex flex-col justify-center text-center sm:text-left md:pr-10">
                    <h1 className="mb-6 text-4xl">Symptoms &amp; Causes</h1>
                </div>
                <div data-aos="zoom-in" className="col-span-2 mt-10 grid grid-cols-1 gap-6 rounded-2xl bg-TopNavBg p-5 sm:p-10 md:grid-cols-2 lg:mt-0">
                    <div className="relative flex gap-5">
                        <div className="absolute -left-12 sm:left-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-lg text-gray-500 sm:relative md:bg-transparent md:text-5xl">01</div>
                        <div data-aos="zoom-in" className>
                            <h3 className="text-xl font-semibold">Increased Thirst (Polydipsia)</h3>
                            <p className="text-gray-400 mt-3"> Frequent urge to drink water.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="relative flex gap-5">
                        <div className="absolute -left-12 sm:left-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-lg text-gray-500 sm:relative md:bg-transparent md:text-5xl">02</div>
                        <div className>
                            <h3 className="text-xl font-semibold">Frequent Urination (Polyuria)</h3>
                            <p className="text-gray-400 mt-3"> Needing to urinate often, especially at night.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="relative flex gap-5">
                        <div className="absolute -left-12 sm:left-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-lg text-gray-500 sm:relative md:bg-transparent md:text-5xl">03</div>
                        <div className>
                            <h3 className="text-xl font-semibold">Extreme Hunger (Polyphagia)</h3>
                            <p className="text-gray-400 mt-3"> Feeling very hungry even after eating.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="relative flex gap-5">
                        <div className="absolute -left-12 sm:left-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-lg text-gray-500 sm:relative md:bg-transparent md:text-5xl">04</div>
                        <div className>
                            <h3 className="text-xl font-semibold">Unexplained Weight Loss</h3>
                            <p className="text-gray-400 mt-3">Losing weight without trying.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="relative flex gap-5">
                        <div className="absolute -left-12 sm:left-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-lg text-gray-500 sm:relative md:bg-transparent md:text-5xl">05</div>
                        <div className>
                            <h3 className="text-xl font-semibold">Fatigue</h3>
                            <p className="text-gray-400 mt-3">Feeling unusually tired and weak.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="relative flex gap-5">
                        <div className="absolute -left-12 sm:left-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-lg text-gray-500 sm:relative md:bg-transparent md:text-5xl">06</div>
                        <div className>
                            <h3 className="text-xl font-semibold">Blurred Vision</h3>
                            <p className="text-gray-400 mt-3"> Difficulty seeing clearly.</p>
                        </div>
                    </div>
                </div>
            </div>


            <section className="mx-auto flex max-w-lg flex-col px-4 py-10 lg:max-w-screen-2xl lg:flex-row">
                
                <div className>
                    <h2 className="mb-10 max-w-lg text-3xl font-semibold leading-snug lg:text-3xl lg:leading-snug">Test & Diagnosis in <span className="text-NavBg">Diabetes</span></h2>
                    <div className="grid gap-y-12 gap-x-8 lg:grid-cols-2">
                        <div>
                            <p className="mb-6 border-l-4 border-NavBg pl-4 text-xl font-medium leading-10">Fasting Plasma Glucose (FPG) Test</p>
                            <p className="text-lg text-gray-800">Measures blood glucose after an overnight fast (at least 8 hours). Helps diagnose diabetes and prediabetes.</p>
                        </div>
                        <div>
                            <p className="mb-6 border-l-4 border-NavBg pl-4 text-xl font-medium leading-10">Oral Glucose Tolerance Test (OGTT)</p>
                            <p className="text-lg text-gray-800">Measures blood glucose before and 2 hours after drinking a glucose-containing beverage to diagnose diabetes and prediabetes.</p>
                        </div>
                        <div>
                            <p className="mb-6 border-l-4 border-NavBg pl-4 text-xl font-medium leading-10">Hemoglobin A1c (HbA1c) Test</p>
                            <p className="text-lg text-gray-800">Reflects average blood glucose levels over the past 2-3 months to diagnose diabetes and monitor long-term glucose control.</p>
                        </div>
                        <div>
                            <p className="mb-6 border-l-4 border-NavBg pl-4 text-xl font-medium leading-10">Random Plasma Glucose Test</p>
                            <p className="text-lg text-gray-800">Measures blood glucose at any time, regardless of when you last ate, to diagnose diabetes, especially if accompanied by symptoms.</p>
                        </div>
                        <div>
                            <p className="mb-6 border-l-4 border-NavBg pl-4 text-xl font-medium leading-10">C-Peptide Test</p>
                            <p className="text-lg text-gray-800">Measures the level of C-peptide in the blood, reflecting insulin production, useful in distinguishing between Type 1 and Type 2 diabetes.</p>
                        </div>
                        <div>
                            <p className="mb-6 border-l-4 border-NavBg pl-4 text-xl font-medium leading-10">Continuous Glucose Monitoring (CGM)</p>
                            <p className="text-lg text-gray-800">Provides real-time glucose readings throughout the day and night using a sensor placed under the skin.</p>
                        </div>
                    </div>
                </div>
            </section>


            <div className="bg-gradient-to-br from-emerald-400 to-blue-400 mx-auto py-10 grid max-w-screen-full grid-cols-1 text-white pl-6 pr-4 sm:px-20 lg:grid-cols-3">
                <div className="col-span-1 flex flex-col justify-center text-center sm:text-left md:pr-10">
                    <h1 className="mb-6 text-4xl">Treatments and Technologies</h1>
                    <p className="text-white text-lg">
                    Diabetes is a chronic condition characterized by high levels of blood glucose (sugar) due to the body's inability to produce or effectively use insulin. Treatment varies based on the type of diabetes and individual patient needs but generally includes a combination of lifestyle changes, medications, and monitoring. </p>
                </div>
                <div data-aos="zoom-in" className="col-span-2 mt-10 grid grid-cols-1 gap-6 rounded-2xl bg-TopNavBg p-5 sm:p-10 md:grid-cols-2 lg:mt-0">
                    <div data-aos="zoom-in" className="relative flex gap-5">
                        <div className="absolute -left-12 sm:left-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-lg text-gray-500 sm:relative md:bg-transparent md:text-5xl">01</div>
                        <div className>
                            <h3 className="text-xl font-semibold">Continuous Glucose Monitors (CGMs)</h3>
                            <p className="text-gray-400 mt-3">Devices that track blood glucose levels throughout the day and night.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="relative flex gap-5">
                        <div className="absolute -left-12 sm:left-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-lg text-gray-500 sm:relative md:bg-transparent md:text-5xl">02</div>
                        <div className>
                            <h3 className="text-xl font-semibold">Insulin Pumps</h3>
                            <p className="text-gray-400 mt-3">Devices that deliver a continuous supply of insulin to the body through a catheter placed under the skin.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="relative flex gap-5">
                        <div className="absolute -left-12 sm:left-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-lg text-gray-500 sm:relative md:bg-transparent md:text-5xl">03</div>
                        <div className>
                            <h3 className="text-xl font-semibold">Bariatric Surgery</h3>
                            <p className="text-gray-400 mt-3">For individuals with Type 2 diabetes who are obese, surgery can be an effective option to improve blood sugar control.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="relative flex gap-5">
                        <div className="absolute -left-12 sm:left-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-lg text-gray-500 sm:relative md:bg-transparent md:text-5xl">04</div>
                        <div className>
                            <h3 className="text-xl font-semibold">Artificial Pancreas Systems</h3>
                            <p className="text-gray-400 mt-3"> These systems automatically monitor blood glucose and adjust insulin delivery.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default Diabetes