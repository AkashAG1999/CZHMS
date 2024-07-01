import React from 'react';
import { adminMenu, userMenu } from '../../Data/data';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { message, Dropdown, Menu } from 'antd';

// Function to determine the greeting based on the current time
const getGreeting = () => {
  const hours = new Date().getHours();
  return hours < 12 ? 'Good Morning 😍' : 'Good Evening 😍';
};

const Layout = ({ children }) => {
  const { user } = useSelector(state => state.user);
  const location = useLocation();
  const navigate = useNavigate();

  // Logout Function
  const handleLogout = () => {
    localStorage.clear();
    message.success('Logout Successfully');
    navigate('/login');
  };

  // Rendering menu list
  const SidebarMenu = user?.isAdmin ? adminMenu : userMenu;

  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  const greeting = getGreeting();

  return (
    <>
      <div className="bg-gray-100">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto">
            <div className="flex justify-between items-center p-4">
              <div>
                <h1 className="text-lg font-semibold text-gray-700">{greeting}</h1>
              </div>
              <div className="flex items-center">
                <i className="fa-solid fa-bell text-gray-700 mr-4"></i>
                <Dropdown overlay={menu} trigger={['click']}>
                  <a className="ant-dropdown-link text-gray-700" onClick={e => e.preventDefault()}>
                    {user?.name} <i className="fa fa-caret-down ml-2"></i>
                  </a>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
        {/* Sidebar */}
        <div className="container mx-auto">
          <div className="lg:flex lg:justify-between lg:p-4">
            <div className="flex justify-between items-center p-4">
              {/* Logo and Menu for Large Screens */}
              <div className="hidden lg:flex">
                {SidebarMenu.map((menu, idx) => {
                  const isActive = location.pathname === menu.path;
                  return (
                    <div key={idx} className="mr-4">
                      <Link
                        to={menu.path}
                        className={`text-TopNavBg hover:text-Hover relative ${isActive ? 'font-semibold'  : ''}`}
                      >
                        {menu.name}
                        {isActive && (
                          <span className="absolute left-0 bottom-0 h-0.5 bg-TopNavBg w-full transform translate-y-1 transition-transform duration-300"></span>
                        )}
                      </Link>
                    </div>
                  );
                })}
              </div>
              {/* Menu Icon for Small Screens */}
              <div className="lg:hidden">
                <Dropdown overlay={
                  <Menu>
                    {SidebarMenu.map((menu, idx) => (
                      <Menu.Item key={idx}>
                        <Link to={menu.path} className="text-gray-700">
                          <i className={`${menu.icon} mr-2`}></i>
                        </Link>
                      </Menu.Item>
                    ))}
                  </Menu>
                }>
                  <a className="ant-dropdown-link text-gray-700" onClick={e => e.preventDefault()}>
                    <i className="fa fa-bars"></i>
                  </a>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div className="container mx-auto bg-gray-100 p-4">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
