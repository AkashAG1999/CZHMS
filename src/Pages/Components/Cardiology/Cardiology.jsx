import React from 'react'
import Footer from '../../Footer';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from "react";


const Cardiology = () => {
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
                        <a href="/specialities/cardiac-science" className="block transition hover:text-gray-700"> Cardiac-Science </a>
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
                        <a href="#" className="block transition hover:text-gray-700"> Cardiology </a>
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
                                    <h2 class=" text-TopNavBg text-3xl font-semibold sm:text-4xl">Cardiology</h2>
                                    <p class="pt-4 text-lg">Cardiology is a medical specialty and a branch of internal medicine that treats heart disease and abnormalities of the heart. Common heart conditions include congenital heart defects, coronary artery disease and heart failure</p>
                                    <div class="mt-6 flex flex-wrap">
                                        <p class="m-1 rounded-md text-blue-600 bg-gray-100 px-2 py-1 text-sm">Risk Factors : </p>
                                        <p class="m-1 rounded-md text-gray-600 bg-gray-100 px-2 py-1 text-sm">Smoking</p>
                                        <p class="m-1 rounded-md text-gray-600 bg-gray-100 px-2 py-1 text-sm">Diabetes</p>
                                        <p class="m-1 rounded-md text-gray-600 bg-gray-100 px-2 py-1 text-sm">Hiper Tension</p>
                                    </div>
                                </div>
                            </div>
                            <div class="m-8 lg:w-3/5 overflow-hidden rounded-xl sm:block">
                                <img class="object-cover w-full h-full" src="https://img.freepik.com/free-vector/human-internal-organ-with-heart_1308-108752.jpg?t=st=1715673534~exp=1715674134~hmac=2cee87b1cf5ad899ea6fcaeca2a4a33ce8a85b951ef3c2ddc7f3d924f068c15d" alt="" />
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

            <section className="mx-auto flex max-w-lg flex-col px-4 py-10 lg:max-w-screen-2xl lg:flex-row">
                <div className>
                    <h2 className="mb-10 max-w-lg text-3xl font-semibold leading-snug lg:text-3xl lg:leading-snug">Risk Factors in <span className="text-NavBg">Cardilogy</span></h2>
                    <div className="grid gap-y-12 gap-x-8 lg:grid-cols-2">

                        <div>
                            <p className="mb-6 border-l-4 border-NavBg pl-4 text-xl font-medium leading-10">Smoking</p>
                            <p className="text-lg text-gray-800">Tobacco use significantly increases the risk of heart disease.</p>
                        </div>
                        <div>
                            <p className="mb-6 border-l-4 border-NavBg pl-4 text-xl font-medium leading-10">High Blood Pressure (Hypertension)</p>
                            <p className="text-lg text-gray-800">Uncontrolled hypertension can lead to damage to the heart's arteries.</p>
                        </div>
                        <div>
                            <p className="mb-6 border-l-4 border-NavBg pl-4 text-xl font-medium leading-10">High Cholesterol</p>
                            <p className="text-lg text-gray-800">High levels of LDL (bad cholesterol) contribute to the buildup of plaques in arteries, leading to atherosclerosis.</p>
                        </div>
                        <div>
                            <p className="mb-6 border-l-4 border-NavBg pl-4 text-xl font-medium leading-10">Diabetes</p>
                            <p className="text-lg text-gray-800">Poorly controlled blood sugar levels can increase the risk of cardiovascular diseases.</p>
                        </div>
                        <div>
                            <p className="mb-6 border-l-4 border-NavBg pl-4 text-xl font-medium leading-10">Obesity</p>
                            <p className="text-lg text-gray-800">Excess body weight typically worsens other risk factors and can itself lead to heart disease.</p>
                        </div>
                        <div>
                            <p className="mb-6 border-l-4 border-NavBg pl-4 text-xl font-medium leading-10">Physical Inactivity</p>
                            <p className="text-lg text-gray-800">Lack of exercise is associated with many forms of heart disease and its risk factors.</p>
                        </div>
                        <div>
                            <p className="mb-6 border-l-4 border-NavBg pl-4 text-xl font-medium leading-10">Unhealthy Diet</p>
                            <p className="text-lg text-gray-800">Diets high in saturated fats, trans fats, salt, and sugars can contribute to heart disease.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-gradient-to-br from-emerald-400 to-blue-500 mx-auto py-10 grid max-w-screen-full grid-cols-1 text-white pl-6 pr-4 sm:px-20 lg:grid-cols-3">
                <div className="col-span-1 flex flex-col justify-center text-center sm:text-left md:pr-10">
                    <h1 className="mb-5 text-white text-3xl font-semibold sm:text-4xl">Symptoms &amp; Causes</h1>
                    <p className="text-white text-lg">
                        Cardiology is the branch of medicine that deals with disorders of the heart and the blood vessels. Symptoms of heart diseases can vary widely and may be subtle or pronounced, depending on the specific condition. Here’s an overview of common cardiology symptoms and their potential causes:</p>
                </div>
                <div className="col-span-2 mt-10 grid grid-cols-1 gap-6 rounded-2xl bg-TopNavBg p-5 sm:p-10 md:grid-cols-2 lg:mt-0">
                    <div data-aos="zoom-in" className="relative flex gap-5">
                        <div className="absolute -left-12 sm:left-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-lg text-gray-500 sm:relative md:bg-transparent md:text-5xl">01</div>
                        <div className>
                            <h3 className="text-xl font-semibold">Chest Pain or Discomfort</h3>
                            <p className="text-gray-400 mt-3">(i.e., stabbing sensation in the middle of the chest)</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="relative flex gap-5">
                        <div className="absolute -left-12 sm:left-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-lg text-gray-500 sm:relative md:bg-transparent md:text-5xl">02</div>
                        <div className>
                            <h3 className="text-xl font-semibold">Shortness of Breath</h3>
                            <p className="text-gray-400 mt-3"> Difficulty breathing or feeling winded, often during physical activity or at rest.</p>
                        </div>
                    </div>

                    <div data-aos="zoom-in" className="relative flex gap-5">
                        <div className="absolute -left-12 sm:left-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-lg text-gray-500 sm:relative md:bg-transparent md:text-5xl">03</div>
                        <div className>
                            <h3 className="text-xl font-semibold">Dizziness or Lightheadedness</h3>
                            <p className="text-gray-400 mt-3">Feeling faint, dizzy, or like you might pass out.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="relative flex gap-5">
                        <div className="absolute -left-12 sm:left-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-lg text-gray-500 sm:relative md:bg-transparent md:text-5xl">04</div>
                        <div className>
                            <h3 className="text-xl font-semibold">Swelling (Edema)</h3>
                            <p className="text-gray-400 mt-3">Swelling in the legs, ankles, feet, or abdomen.</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="relative flex gap-5">
                        <div className="absolute -left-12 sm:left-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-lg text-gray-500 sm:relative md:bg-transparent md:text-5xl">05</div>
                        <div className>
                            <h3 className="text-xl font-semibold">Fatigue</h3>
                            <p className="text-gray-400 mt-3">Unusual tiredness and lack of energy.</p>
                        </div>
                    </div>
                </div>
            </div>


            <section className="mx-auto flex max-w-lg flex-col px-4 py-10 lg:max-w-screen-2xl lg:flex-row">
                <div className>
                    <h2 className="mb-10 max-w-lg text-3xl font-semibold leading-snug lg:text-3xl lg:leading-snug">Test & Diagnosis in <span className="text-NavBg">Cardilogy</span></h2>
                    <h2 className="mb-10 max-w-lg text-3xl font-semibold leading-snug lg:text-3xl lg:leading-snug"><span className="text-NavBg">Non-Invasive Tests</span></h2>
                    <div className="grid gap-y-12 gap-x-8 lg:grid-cols-2">

                        <div>
                            <p className="mb-6 border-l-4 border-NavBg pl-4 text-xl font-medium leading-10">Electrocardiogram (ECG)</p>
                            <p className="text-lg text-gray-800">Measures the electrical activity of the heart to identify abnormal rhythms and detect heart damage.</p>
                        </div>
                        <div>
                            <p className="mb-6 border-l-4 border-NavBg pl-4 text-xl font-medium leading-10">Echocardiogram</p>
                            <p className="text-lg text-gray-800">Uses ultrasound to create images of the heart's chambers, valves, walls, and blood vessels</p>
                        </div>
                        <div>
                            <p className="mb-6 border-l-4 border-NavBg pl-4 text-xl font-medium leading-10">Stress Tests</p>
                            <p className="text-lg text-gray-800">Monitors the heart's activity during physical exertion or under drug-induced stress.</p>
                        </div>
                        <div>
                            <p className="mb-6 border-l-4 border-NavBg pl-4 text-xl font-medium leading-10">Cardiac Computerized Tomography (CT) Scan</p>
                            <p className="text-lg text-gray-800">A detailed 3D image of the heart that can help detect heart problems.</p>
                        </div>
                        <div>
                            <p className="mb-6 border-l-4 border-NavBg pl-4 text-xl font-medium leading-10">Cardiac Magnetic Resonance Imaging (MRI)</p>
                            <p className="text-lg text-gray-800">Provides detailed images of the heart's structure and function.</p>
                        </div>
                        <div>
                            <p className="mb-6 border-l-4 border-NavBg pl-4 text-xl font-medium leading-10">Continuous Glucose Monitoring (CGM)</p>
                            <p className="text-lg text-gray-800">Provides real-time glucose readings throughout the day and night using a sensor placed under the skin.</p>
                        </div>
                    </div>
                    <h2 className="py-10 mb-10 max-w-lg text-3xl font-semibold leading-snug lg:text-3xl lg:leading-snug"><span className="text-NavBg">Invasive Tests</span></h2>
                    <div className="grid gap-y-12 gap-x-8 lg:grid-cols-2">

                        <div>
                            <p className="mb-6 border-l-4 border-NavBg pl-4 text-xl font-medium leading-10">Coronary Angiography</p>
                            <p className="text-lg text-gray-800">Involves the use of a contrast dye and X-ray imaging to view the heart's blood vessels.</p>
                        </div>
                        <div>
                            <p className="mb-6 border-l-4 border-NavBg pl-4 text-xl font-medium leading-10">Cardiac Catheterization</p>
                            <p className="text-lg text-gray-800">A catheter is inserted into a blood vessel to measure pressure and flow in the heart's chambers.</p>
                        </div>
                    </div>
                    <h2 className="py-10 mb-10 max-w-lg text-3xl font-semibold leading-snug lg:text-3xl lg:leading-snug"><span className="text-NavBg">Blood Tests</span></h2>
                    <div className="grid gap-y-12 gap-x-8 lg:grid-cols-2">
                        <div>
                            <p className="mb-6 border-l-4 border-NavBg pl-4 text-xl font-medium leading-10">Lipid Profile</p>
                            <p className="text-lg text-gray-800">Measures cholesterol levels, including LDL, HDL, and triglycerides.</p>
                        </div>
                        <div>
                            <p className="mb-6 border-l-4 border-NavBg pl-4 text-xl font-medium leading-10">Cardiac Enzymes</p>
                            <p className="text-lg text-gray-800">Check for different enzymes, like troponin, that are released into the blood when the heart muscle is damaged.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-gradient-to-br from-emerald-400 to-blue-500 mx-auto py-10 grid max-w-screen-full grid-cols-1 text-white pl-6 pr-4 sm:px-20 lg:grid-cols-3">
                <div className="col-span-1 flex flex-col justify-center text-center sm:text-left md:pr-10">
                    <h1 className="mb-6 text-4xl">Treatments</h1>
                    <p className="text-white text-lg">
                        Cardiology, the branch of medicine that deals with disorders of the heart, encompasses a wide range of treatments. Here are some common treatments used in cardiology:</p>
                </div>
                <div className="col-span-2 mt-10 grid grid-cols-1 gap-6 rounded-2xl bg-TopNavBg p-5 sm:p-10 md:grid-cols-2 lg:mt-0">
                    <div data-aos="zoom-in" className="relative flex gap-5">
                        <div className="absolute -left-12 sm:left-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-lg text-gray-500 sm:relative md:bg-transparent md:text-5xl">01</div>
                        <div className>
                            <h3 className="text-xl font-semibold">Lifestyle Changes</h3>
                            <ul className="text-gray-400 mt-3 list-disc list-inside">
                                <li>Diet: Eating a heart-healthy diet that is low in saturated fats, cholesterol, and sodium.</li>
                                <li>Exercise: Regular physical activity to improve heart function and reduce stress.</li>
                                <li>Weight Management: Achieving and maintaining a healthy weight to reduce heart strain.</li>
                                <li>Smoking Cessation: Essential for reducing heart disease risk.</li>
                            </ul>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="relative flex gap-5">
                        <div className="absolute -left-12 sm:left-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-lg text-gray-500 sm:relative md:bg-transparent md:text-5xl">02</div>
                        <div className>
                            <h3 className="text-xl font-semibold">Medications(under prescription)</h3>
                            <ul className="text-gray-400 mt-3 list-disc list-inside">
                                <li>Statins: To lower cholesterol levels.</li>
                                <li>Beta-Blockers: To reduce blood pressure and heart rate.</li>
                                <li>ACE Inhibitors: To relax blood vessels and reduce blood pressure.</li>
                                <li>Antiplatelet Agents: To prevent the formation of blood clots.</li>
                            </ul>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="relative flex gap-5">
                        <div className="absolute -left-12 sm:left-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-lg text-gray-500 sm:relative md:bg-transparent md:text-5xl">03</div>
                        <div className>
                            <h3 className="text-xl font-semibold">Surgical Treatments</h3>
                            <ul className="text-gray-400 mt-3 list-disc list-inside">
                                <li>Angioplasty and Stent Placement: To open blocked arteries and restore normal blood flow.</li>
                                <li>Coronary Artery Bypass Grafting (CABG): A surgical procedure that uses arteries or veins from other parts of the body to bypass blocked coronary arteries.</li>
                                <li>Heart Valve Surgery: To repair or replace damaged heart valves.</li>
                                <li>Pacemakers and Defibrillators: Implanted devices to help control abnormal heart rhythms.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default Cardiology