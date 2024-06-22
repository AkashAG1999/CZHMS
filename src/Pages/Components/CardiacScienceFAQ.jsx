import React from 'react'

const CardiacScienceFAQ = () => {
    return (
        <section className="mx-auto max-w-screen-xl px-4 py-12">
            <h2 className="mb-5 text-TopNavBg text-3xl font-semibold sm:text-4xl">Advanced Technology & Facilities</h2>
            <p className="mb-12 text-lg text-gray-600">Well equipped with the latest medical equipment, modern technology & infrastructure, Alba Hospital is one of the best hospitals in India.</p>
            <ul className="space-y-4">
                <li className="text-left">
                    <label htmlFor="accordion-1" className="relative flex flex-col rounded-md border border-gray-100 shadow-md">
                        <input className="peer hidden" type="checkbox" id="accordion-1" defaultChecked />
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                        <div className="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
                            <h3 className="text-sm text-NavBg lg:text-lg">Holter Monitoring</h3>
                        </div>
                        <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
                            <div className="p-5">
                                <p className="text-sm">It tracks heart rhythm to check and confirm any heart-related problems. Patients with an irregular heartbeat could be suffering from arrhythmia. Under this condition, the patient may experience rapid heartbeat or the heart may become slower-paced. It is a symptom that indicates that the electrical signal coordinating the heartbeat is not working. Arrhythmia is potentially fatal and causes severe complications. A cardiologist will recommend you to undergo an electrocardiogram (ECG or EKG), a common test to diagnose arrhythmia. Holter monitoring is a gift of medical technology that records your uneven heartbeat for 24 to 48 hours continuously. The device is a blessing for patients with a pacemaker as it enables the doctor to study the heart’s activity throughout the day. The cardiology department of the Aster Hospital is ahead of its time. It is equipped with the latest Holter monitor for a thorough examination of the heart and provides an accurate report for proper treatment.</p>
                            </div>
                        </div>
                    </label>
                </li>
                <li className="text-left">
                    <label htmlFor="accordion-2" className="relative flex flex-col rounded-md border border-gray-100 shadow-md">
                        <input className="peer hidden" type="checkbox" id="accordion-2" />
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                        <div className="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
                            <h3 className="text-sm text-NavBg lg:text-lg">Clinical Support</h3>
                        </div>
                        <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
                            <div className="p-5">
                                <p className="text-sm">3 Cath labs including FFR, IFR, IVUS, OCT and Rotablation
                                    <br />Advanced 3D and 4D ECHO machines
                                    <br /> Holter Monitoring</p>
                            </div>
                        </div>
                    </label>
                </li>
                <li className="text-left">
                    <label htmlFor="accordion-3" className="relative flex flex-col rounded-md border border-gray-100 shadow-md">
                        <input className="peer hidden" type="checkbox" id="accordion-3" />
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0 top-4 ml-auto mr-5 h-4 text-gray-500 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                        <div className="relative ml-4 cursor-pointer select-none items-center py-4 pr-12">
                            <h3 className="text-sm text-NavBg lg:text-lg">Cardiac Diagnosis</h3>
                        </div>
                        <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
                            <div className="p-5">
                                <p className="text-sm">Electrocardiography (ECG)
                                    <br></br>Treadmill testing
                                    <br /> 3D Echocardiography
                                    <br /> Holter monitoring (1 day, 3 day and long-term monitoring)
                                    <br /> CT Coronary Angiography (256 slice & 125 slice CT)</p>
                            </div>
                        </div>
                    </label>
                </li>

            </ul>

        </section>


    )
}

export default CardiacScienceFAQ