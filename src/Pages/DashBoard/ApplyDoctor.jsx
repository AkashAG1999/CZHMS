import React from 'react';
import Layout from './Layout';

const ApplyDoctor = () => {


    const doctors = [
        {
            id: 1,
            name: 'Dr. Michael Johnson',
            specialty: 'Cardiologist',
            summary: 'Expert in heart and blood vessel conditions with over 20 years of experience.',
            image: 'https://img.freepik.com/premium-photo/your-health-is-our-priority-cropped-shot-doctors-hospital_590464-21743.jpg'
        },

        
        // Add more doctors as needed
    ];

    return (
        <Layout>
            <div className="bg-gray-100 p-6 mt-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {doctors.map(doctor => (
                        <div key={doctor.id} className="bg-white rounded-lg shadow-lg p-4 text-center">
                            <img src={doctor.image} alt={doctor.name} className="w-16 h-16 object-cover rounded-full mx-auto mb-2" />
                            <h2 className="text-lg font-semibold mb-1">{doctor.name}</h2>
                            <p className="text-gray-600 mb-1">{doctor.specialty}</p>
                            <p className="text-gray-500 text-sm mb-2">{doctor.summary}</p>
                            <div className="flex justify-center space-x-2">
                                <button className="bg-blue-500 text-white px-2 py-1 text-sm rounded hover:bg-blue-600">
                                    Call Now
                                </button>
                                <a href='/chat/user' className="bg-green-500 text-white px-2 py-1 text-sm rounded hover:bg-green-600">
                                    Video Consultation
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export default ApplyDoctor;
