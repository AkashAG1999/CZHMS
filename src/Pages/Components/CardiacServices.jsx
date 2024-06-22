import React from 'react'
import { AiOutlineAlert } from 'react-icons/ai';
import { FaAmbulance } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { GiMedicalDrip } from "react-icons/gi";
import { LiaHeartbeatSolid } from "react-icons/lia";

const CardiacServices = () => {
    return (
        <section className="mx-auto max-w-screen-xl px-4 py-12">
            <div className="mb-12">
                <div className="mb-5 text-TopNavBg text-3xl font-semibold sm:text-4xl">Cardiac Services at Alba Hospital</div>
                <p className>Through our 25+ specialities, we provide in-depth expertise in the spectrum of advance medical and surgical interventions. Our specialties are integrated to provide a seamless experience.</p>
            </div>
            <div className=" max-w-screen-lg grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                <article className="justify-center text-center bg-white shadow-lg px-4 py-4 rounded-lg">
                    <div className="flex justify-center">
                        <AiOutlineAlert className="text-red-500 text-3xl mt-4" />
                    </div>
                    <div className="flex-1 p-4 justify-center ">
                        <p className="mb-4 text-sm font-bold">24/7 Emergency</p>
                    </div>
                </article>
                <article className="justify-center text-center bg-white shadow-lg px-4 py-4 rounded-lg">
                    <div className="flex justify-center">
                        <FaAmbulance className="text-red-500 text-3xl mt-4" />
                    </div>
                    <div className="flex-1 p-4 justify-center ">
                        <p className="mb-4 text-sm font-bold">24/7 Ambulance</p>
                    </div>
                </article>
                <article className="justify-center text-center bg-white shadow-lg px-4 py-4 rounded-lg">
                    <div className="flex justify-center">
                        <GiMedicines className="text-red-500 text-3xl mt-4" />
                    </div>
                    <div className="flex-1 p-4 justify-center ">
                        <p className="mb-4 text-sm font-bold">24/7 Pharmacy</p>
                    </div>
                </article>
                <article className="justify-center text-center bg-white shadow-lg px-4 py-4 rounded-lg">
                    <div className="flex justify-center">
                        <GiMedicalDrip className="text-red-500 text-3xl mt-4" />
                    </div>
                    <div className="flex-1 p-4 justify-center ">
                        <p className="mb-4 text-sm font-bold">ICU</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default CardiacServices