import { useState } from 'react';
import logo from "../assets/Logo7.svg";
import { useSelector } from 'react-redux';
import { message, Dropdown, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const { user } = useSelector(state => state.user);
    const navigate = useNavigate();

    // Logout Function
    const handleLogout = () => {
        localStorage.clear();
        message.success('Logout Successfully');
        navigate('/login');
        setTimeout(() => {
            window.location.reload();
        }, 1000); 
    };

    const [state, setState] = useState(false);
    const navigation = [
        { title: "Specialities", path: "/specialities" },
        { title: "Our Doctors", path: "/doctors" },
        { title: "Services", path: "/services" },
        { title: "Health CheckUp", path: "/Health_checkup" },
        { title: "Blogs", path: "/blogs" },
        { title: "Contact Us", path: "/contactus" }
    ];

    const menu = (
        <Menu>
            <Menu.Item key="1" onClick={handleLogout}>
                Logout
            </Menu.Item>
        </Menu>
    );

    return (
        <>
            <nav className="bg-NavBg shadow-md sticky top-0 z-50 w-full md:text-sm md:border-none">
                <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="/">
                            <img
                                src={logo}
                                width={60}
                                height={40}
                                alt="logo"
                            />
                        </a>
                        <div className="md:hidden">
                            <button className="text-white" onClick={() => setState(!state)}>
                                {state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 111.414 1.414L11.414 10l4.293 4.293a1 1 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 01-1.414-1.414L8.586 10 4.293 5.707a1 1 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                    <div className="text-start justify-start hidden md:block">
                        <h1 className="text-white text-base px-2 font-bold">Alba Hospital</h1>
                        <p className="text-slate-200 text-[9px] px-2">accredited by NABH and NABL</p>
                    </div>

                    <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                        <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                            {navigation.map((item, idx) => (
                                <li key={idx} className="font-medium text-white text-base hover:text-Button">
                                    <a href={item.path} className="block">
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                            <div className='hidden md:flex justify-end items-end space-y-3 gap-x-6 md:space-y-0'>
                                <li>
                                    <a href="/bookappointment" className="block py-2 px-4 font-medium text-center text-white bg-Button hover:bg-Hover active:bg-BlueActive active:shadow-none rounded-full shadow-md md:-scroll-mx-4">
                                        Book an appointment
                                    </a>
                                </li>
                                {user ? (
                                    <Dropdown overlay={menu} trigger={['click']}>
                                        <a className="ant-dropdown-link text-white block py-2 px-4 font-medium text-center bg-Button hover:bg-Hover active:bg-BlueActive active:shadow-none rounded-full shadow-md" onClick={e => e.preventDefault()}>
                                            {user.name} <i className="fa fa-caret-down"></i>
                                        </a>
                                    </Dropdown>
                                ) : (
                                    <li>
                                        <a href="/login" className="block py-2 px-4 font-medium text-center text-white bg-Button hover:bg-Hover active:bg-BlueActive active:shadow-none rounded-full shadow-md md:-scroll-mx-4">
                                            Login
                                        </a>
                                    </li>
                                )}
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Bottom Navigation for Mobile */}
            <nav className="fixed bottom-0 left-0 right-0 bg-NavBg shadow-t md:hidden z-50">
                <div className="grid grid-cols-2 divide-x">
                    <a href="/bookappointment" className="block py-3 font-medium text-center text-white hover:bg-Hover active:bg-BlueActive active:shadow-none">
                        Book an appointment
                    </a>
                    {user ? (
                        <button onClick={handleLogout} className="block py-3 font-medium text-center text-white hover:bg-Hover active:bg-BlueActive active:shadow-none">
                            Logout
                        </button>
                    ) : (
                        <a href="/login" className="block py-3 font-medium text-center text-white hover:bg-Hover active:bg-BlueActive active:shadow-none">
                            Login
                        </a>
                    )}
                </div>
            </nav>
        </>
    );
};

export default NavBar;
