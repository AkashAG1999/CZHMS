import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OurDoctors = () => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }, []);

    const handleButtonClick = () => {
        toast.info('You need to register to continue');
        setTimeout(() => {
            navigate('/register');
        }, 2000); // Delay to allow the toast
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
        <div className="bg-gray-100 p-6 mt-5">
            <ToastContainer />
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold">Our Doctors</h1>
                <p className="text-lg text-gray-600">Meet our team of highly skilled professionals</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {doctors.map(doctor => (
                    <div key={doctor.id} className="bg-white rounded-lg shadow-lg p-6 text-center">
                        <img src={doctor.image} alt={doctor.name} className="w-24 h-24 object-cover rounded-full mx-auto mb-4" />
                        <h2 className="text-xl font-semibold mb-2">{doctor.name}</h2>
                        <p className="text-gray-600 mb-2">{doctor.specialty}</p>
                        <p className="text-gray-500 text-sm mb-4">{doctor.summary}</p>
                        <div className="flex justify-center space-x-4">
                            <button
                                onClick={handleButtonClick}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            >
                                Call Now
                            </button>
                            <button
                                onClick={handleButtonClick}
                                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                            >
                                Video Consultation
                            </button>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurDoctors;
