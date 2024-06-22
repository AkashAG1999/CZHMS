import { Form, Input } from 'antd';
import React from 'react';
import logo from "../assets/Logo7.svg";
import { message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { showLoading, hideLoading } from '../redux/features/alertSlice';
import { setUser } from '../redux/features/userSlice';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Form handler
  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("http://localhost:8080/api/v1/user/login", values);
      dispatch(hideLoading());
      if (res.data.success) {
        console.log("User data received from API:", res.data.data); // Debugging log
        localStorage.setItem("token", res.data.token);
        dispatch(setUser(res.data.data)); // Set the user information in the Redux store
        message.success("Login Successfully");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something went wrong");
    }
  };
  

  return (
    <>
      <div className='mt-10 flex w-full items-center justify-center bg-gray-100'>
        <Form layout='vertical' onFinish={onfinishHandler} className="relative border border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-5">
          <div className="flex justify-center">
            <a href="/">
              <img src={logo} width={60} height={40} alt="logo" />
            </a>
          </div>
          <h1 className="mb-3 text-2xl font-semibold text-center">Alba Hospital Login Portal</h1>
          <p className="mb-6 text-gray-600 text-center">Enter your Login credentials</p>
          <Form.Item label="Email" name="email">
            <Input type='email' required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type='password' required />
          </Form.Item>
          <Link to={"/register"}>New user? Register here</Link>
          <button type='submit' className="mt-5 w-full rounded-full bg-Button hover:bg-Hover p-2 text-center font-semibold text-white">Login</button>
        </Form>
      </div>
    </>
  );
}

export default LoginForm;
