import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import ItchIoLogo from "../assets/logos/itchio-logo-textless-white.png";
import Resume from "../assets/resumes/Bui_Hung.pdf";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div>
      <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-dark-2 bg-opacity-90 backdrop-blur-sm text-gray-300 z-50">
        <a className="flex nameLogo hover:cursor-pointer group" href = "#top">
          <p className="text-6xl font-bold">H</p>
          <p className="text-6xl font-bold relative right-5 group-hover:right-0 duration-200">
            B
          </p>
        </a>

        {/*menu*/}
        <ul className="hidden md:flex">
          <li className="top-nav">
            <a href="#home">Home</a>
          </li>
          <li className="top-nav">
            <a href="#about">About</a>
          </li>
          <li className="top-nav">
            <a href="#projects">Projects</a>
          </li>
          <li className="top-nav">
            <a href="#art">Art</a>
          </li>
          <li className="top-nav border-2 border-white rounded-md">
            <a href= "#contact">
              Contact Me
            </a>
          </li>
        </ul>

        {/*Hamburger*/}
        <div onClick={handleClick} className="md:hidden z-50">
          {!nav ? (
            <FaBars className="h-[30px] w-[30px]"></FaBars>
          ) : (
            <FaTimes className="h-[30px] w-[30px]"></FaTimes>
          )}
        </div>

        {/*Mobile Menu*/}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-dark-2 flex flex-col justify-center items-center bg-opacity-[0.97]"
          }
        >
          <li className="hover:border-b-4 hover:text-3xl text-gray-400 hover:text-white duration-100 py-4 text-2xl">
            <a href="#home" onClick={handleClick}>
              Home
            </a>
          </li>
          <li className="hover:border-b-4 hover:text-3xl text-gray-400 hover:text-white duration-100 py-4 text-2xl">
            <a href="#about" onClick={handleClick}>
              About
            </a>
          </li>
          <li className="hover:border-b-4 hover:text-3xl text-gray-400 hover:text-white duration-100 py-4 text-2xl">
            <a href="#projects" onClick={handleClick}>
              Projects
            </a>
          </li>
          <li className="hover:border-b-4 hover:text-3xl text-gray-400 hover:text-white duration-100 py-4 text-2xl">
            <a href="#art" onClick={handleClick}>
              Art
            </a>
          </li>
          <li className="hover:border-b-4 hover:text-3xl text-gray-400 hover:text-white duration-100 py-4 text-2xl border-2 border-white rounded-md">
            <a href="#contact"  onClick={handleClick}>
              Contact Me
            </a>
          </li>
        </ul>
      </div>
      
      <div
        className={
          nav ? "hidden" : "flex fixed flex-col bottom-[10%] left-0 z-50"
        }
      >
        <ul>
          <li className="side-nav bg-red-500 rounded-tr-lg">
            <a
              href="https://hungbui.itch.io/"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-50"
            >
              Itch.io <img src={ItchIoLogo} className="h-[30px] w-[30px]"></img>
            </a>
          </li>
          <li className="side-nav bg-purple-600">
            <a
              href="https://github.com/hungbuiwork/"
              target="blank"
              className="flex justify-between items-center w-full text-gray-50"
            >
              Github <FaGithub size={30}></FaGithub>
            </a>
          </li>
          <li className="side-nav bg-blue-600 rounded-br-lg">
            <a
              href="https://www.linkedin.com/in/hung-bui-06ab67208/"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-50"
            >
              LinkedIn <FaLinkedin size={30}></FaLinkedin>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
