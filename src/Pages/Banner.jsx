import React from 'react'
import { FaAmbulance } from "react-icons/fa";

const Banner = () => {
    return (
        <div style={{ backgroundColor: '#164289' }} className="hidden md:block px-2 py-2">
            <div className="max-w-screen-2xl mx-auto px-2 py-1 flex items-start justify-end text-white md:px-8">
                <div className="flex gap-x-4 items-center">
                    <p className="py-1 font-regular text-xs">Need Help?</p>
                    <span className='hidden w-px h-6 bg- md:block'></span>
                    <p className="py-1 font-regular text-xs">Leave Feedback</p>
                    <span className='hidden w-px h-6 bg-gray-300 md:block'></span>
                    <div className="flex-none rounded-lg flex items-end justify-end">
                        <FaAmbulance />
                    </div>
                    <p className="font-regular text-xs">Emergency: <span>+91 9078657657</span></p>
                </div>
            </div>
        </div>
    )
}

export default Banner
