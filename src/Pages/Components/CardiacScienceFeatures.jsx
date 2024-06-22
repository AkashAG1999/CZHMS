import React from 'react'
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from "react";

const CardiacScienceFeatures = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section className="mx-auto max-w-screen-xl px-4 py-12">
            <div className="mb-12">
                <div className="mb-5 text-TopNavBg text-3xl font-semibold sm:text-4xl">Our Specialities</div>
                <p className>Through our 25+ specialities, we provide in-depth expertise in the spectrum of advance medical and surgical interventions. Our specialties are integrated to provide a seamless experience.</p>
            </div>
            <div className=" max-w-screen-lg grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                <article className>
                    <a href="/specialities/cardiac-science/cardiology" className="flex flex-col rounded border bg-white transition hover:bg-Hover hover:text-white"><div className>
                    <img src="https://wallpaper.dog/large/5515467.jpg" alt='' className="w-full h-36 object-cover" />
                    </div>
                        <div className="flex-1 p-4">
                            <p className="mb-4 text-sm font-bold">Cardiology</p>
                            <p className="mb-4 text-xs">The department of cardiology at Alba Hospital is known for providing....</p>
                            <p className="mb-4 text-sm">Know More</p>
                        </div></a>
                </article>
                <article className>
                    <a href="/specialities/cardiac-science/cardiac-surgery" className="flex flex-col rounded border bg-white transition hover:bg-Hover hover:text-white"><div className>
                        <img src="https://th.bing.com/th/id/R.ede2431ae2709d5733cf6f253913927f?rik=xc7ImBWzAPPmVA&riu=http%3a%2f%2fskymedical.in%2fwp-content%2fuploads%2f2018%2f11%2fCardiac-Surgery.jpg&ehk=sdVVBXi4JvGefdKW1wn8B7I0pC9zKv%2fsDqcPVmj5E1c%3d&risl=&pid=ImgRaw&r=0" alt='' className="w-full h-36 object-cover" />
                    </div>
                        <div className="flex-1 p-4">
                            <p className="mb-4 text-sm font-bold">Cardiac Surgery</p>

                            <p className="mb-4 text-xs">The Department of Cardiothoric Surgery deals with the surgical manag.....</p>
                            <p className="mb-4 text-sm">Know More</p>
                        </div></a>
                </article>
                <article className>
                    <a href="/specialities/cardiac-science/heart-rhythm-centre" className="flex flex-col rounded border bg-white transition hover:bg-Hover hover:text-white"><div className>
                        <img src="https://foamed.ebmedicine.net/wp-content/uploads/2023/07/AdobeStock_277819835_resized.jpg" alt='' className="w-full h-36 object-cover" />
                    </div>
                        <div className="flex-1 p-4">
                            <p className="mb-4 text-sm font-bold">Heart Rhythm Centre</p>

                            <p className="mb-4 text-xs">Alba Heart Rhythm centre is a specialized cenre operating undet Alba......</p>
                            <p className="mb-4 text-sm">Know More</p>
                        </div></a>
                </article>


            </div>
        </section>



    )
}

export default CardiacScienceFeatures