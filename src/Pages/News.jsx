import React from 'react'
import news from "../assets/News.jpg"
import news2 from "../assets/News2.jpg"

const News = () => {
    const team = [
        {
            avatar: news,
            date: "13 April 2024",
            desc: "Alba Hospital introduces a new state-of-the-art MRI machine to improve diagnostic accuracy.",

        },
        {
            avatar: news2,
            date: "14 April 2024",
            desc: "Our cardiology department performed a record number of successful surgeries this month.",

        },
        {
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            date: "15 April 2024",
            desc: "Join us for a free health checkup camp this weekend and get tips from our top doctors.",

        },
        {
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            date: "16 April 2024",
            desc: "Our recent blog post discusses the importance of mental health and wellness.",

        },
        {
            avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            date: "17 April 2024",
            desc: "Alba Hospital wins the Best Hospital award for outstanding patient care.",

        },
        {
            avatar: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
            date: "18 April 2024",
            desc: "Learn more about our new telemedicine services that bring healthcare to your doorstep.",

        },
    ]

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-full">
                    <h3 className="text-TopNavBg text-3xl font-semibold sm:text-4xl">
                        News, Events, and Blogs
                    </h3>
                    <p className="text-gray-600 mt-3">
                        Stay updated with the latest news, events, and blog posts from Alba Hospital. We are committed to bringing you the best healthcare information and updates.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                        {team.map((item, idx) => (
                            <li key={idx} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-white space-y-3 p-4 rounded-lg shadow-lg">
                                <div className="w-full h-60 sm:h-52 md:h-56">
                                    <img
                                        src={item.avatar}
                                        className="w-full h-full object-cover object-center shadow-md rounded-xl"
                                        alt="News"
                                    />
                                </div>
                                <div className="mt-4">
                                    <p className="text-TopNavBg">{item.date}</p>
                                    <p className="text-gray-600 mt-2">{item.desc}</p>
                                </div>
                                <a href={item.href} className="text-sm text-Button duration-150 hover:text-Hover font-medium inline-flex items-center gap-x-1">
                                    Learn more
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default News
