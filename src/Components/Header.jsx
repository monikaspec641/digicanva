import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail} from 'react-icons/hi';
import {BsPersonLinesFill} from 'react-icons/bs'
import logo from './../Assest/logo.png';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [nav, setNav] = useState(false);

  const hamClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#060933] text-[#d8c6be]'>
      <div>
        {/* <img src={logo} alt="Logo Image" style={{ width: '300px' }} /> */}
      </div>

      {/* MENU */}
      <ul className='hidden md:flex'>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>About Me</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contacts</li>
      </ul>

      {/* Hamburger */}
      <div onClick={hamClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Hamburger Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#060933] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About Me</li>
        <li className='py-6 text-4xl'>Skills</li>
        <li className='py-6 text-4xl'> Work</li>
        <li className='py-6 text-4xl'>Contacts</li>
      </ul>

      {/* Social Icons */}
      <ul className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
          <a className='flex justify-between items-center w-full text-[#d8c6be]' href='https://www.linkedin.com/in/monika-rai-b817241a1/'>
            LinkedIn
            <FaLinkedin size={30} />
          </a>
        </li>

        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0e1116]'>
          <a className='flex justify-between items-center w-full text-[#d8c6be]' href='https://github.com/monikaspec641'>
            Github
            <FaGithub size={30} />
          </a>
        </li>

        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#c71610]'>
          <a className='flex justify-between items-center w-full text-[#d8c6be]' href='/'>
            EmailId
            <HiOutlineMail size={30} />
          </a>
        </li>

        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3a3333]'>
          <a className='flex justify-between items-center w-full text-[#d8c6be]' href='/'>
            Resume
            <BsPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};
