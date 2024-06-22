import emailjs from '@emailjs/browser';
import React, { useState, useEffect } from 'react';

const SERVICE_ID = "service_ab3id2o";
const TEMPLATE_ID = "template_9wro3yi";
const PUBLIC_KEY = "wAdscnlO-se83dQZW";

const AppointmentForm = () => {
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        submitted: false,
        firstName: "",
        lastName: ""
    });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }, []);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData(e.target);
        const firstName = formData.get('from_fname');
        const lastName = formData.get('from_sname');
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                setFormData({
                    submitted: true,
                    firstName: firstName,
                    lastName: lastName
                });
            }, (error) => {
                alert('Something went wrong!');
            })
            .finally(() => {
                setIsLoading(false);
            });
        e.target.reset();
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="py-2 text-blue-600">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                        <rect x="10" y="0" width="12" fill="currentColor">
                            <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0; 0.15; 1" values="20;100;20;" keySplines="0 0.5 0.5 1;0 0.5 0.25 1" begin="-0.2s"></animate>
                        </rect>
                        <rect x="45" y="0" width="12" fill="currentColor">
                            <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0; 0.15; 1" values="20;100;20;" keySplines="0 0.5 0.5 1;0 0.5 0.25 1" begin="-0.1s"></animate>
                        </rect>
                        <rect x="80" y="0" width="12" fill="currentColor">
                            <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0; 0.15; 1" values="20;100;20;" keySplines="0 0.5 0.5 1;0 0.5 0.25 1"></animate>
                        </rect>
                    </svg>
                </div>
            </div>
        );
    }

    return (
        <div className="lg:m-10">
            {!formData.submitted ? (
                <form onSubmit={handleOnSubmit} className="relative border border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10">
                    <h1 className="mb-6 text-xl font-semibold lg:text-2xl">Appointment</h1>
                    <div className="grid gap-3 md:grid-cols-2">
                        <div>
                            <label htmlFor="from_fname">First Name</label>
                            <input type="text" id="from_fname" name="from_fname" required placeholder="Your Name" className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
                        </div>
                        <div>
                            <label htmlFor="from_sname">Last Name</label>
                            <input type="text" id="from_sname" name="from_sname" required placeholder="Last Name" className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="from_email">Email Address</label>
                        <input type="email" id="from_email" name="from_email" required placeholder="info@example.com" className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
                    </div>
                    <div>
                        <label htmlFor="message">Reason for Appointment</label>
                        <textarea name="message" required placeholder="Please briefly describe the reason for your appointment..." rows="3" className="mt-2 h-24 w-full rounded-md bg-gray-100 px-3"></textarea>
                    </div>
                    <div>
                        <button type='submit' className={`mt-5 w-full rounded-full ${isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-Button hover:bg-Hover'} p-2 text-center font-semibold text-white`} disabled={isLoading}>
                            {isLoading ? (
                                <div className="flex justify-center">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                                </div>
                            ) : (
                                "Submit"
                            )}
                        </button>
                    </div>
                </form>
            ) : (
                <div className="text-center mt-10">
                    <h2 className="text-xl font-semibold mb-4">Hello 👋 ! {formData.firstName} {formData.lastName}</h2>
                    <p>Appointment Booked Successfully. <br/>We will get back to you shortly via email.</p>
                </div>
            )}
        </div>
    );
};

export default AppointmentForm;
