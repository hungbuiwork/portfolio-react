import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Project from "./Project";
import gameProjects from "../data/projectdata_game.jsx";
import softwareProjects from "../data/projectdata_software.jsx";
import Artwork from "./Artwork";
import ResumeGames from "../assets/resumes/HungBuiResumeGames.pdf";
import ResumeSoftware from "../assets/resumes/HungBuiResumeSoftware.pdf";

const Home = () => {
  const [tabMode, settabMode] = useState(0);
  const colorProjectsGames = "";
  const colorProjectsSoftware = "";

  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-t from-[#090b0f] to-[#0e1016]"
    >
      {/*Landing Section*/}
      <div id="home" className="relative bottom-6"></div>
      <div className="mx-full px-8 flex flex-col justify-center h-[100%] sporo bg-cover">
        <div className="place-self-center w-[80%]">
          <p className="text-emerald-400  text-3xl md:text-4xl font-bold">
            Hey, I'm{" "}
          </p>
          <h1 className="text-white text-6xl md:text-8xl font-bold text-center m-8 place-self-center">
            Hung Bui
          </h1>
          <h2 className="text-emerald-400 font-bold text-xl md:text-3xl text-end text-gray-300">
            Software<br></br>Game Dev<br></br>Digital Art
          </h2>
        </div>
      </div>

      {/*About Section*/}
      <div id="about" className="relative bottom-6"></div>
      <div className=" mx-2 mb-32 mt-16">
        <h1 className="text-white decoration-pink-500 underline font-extrabold text-6xl text-center mb-8 underline-offset-2">
          About Me
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="place-self-center text-white text-xl text-left ml-[10%] mr-[5%] w-[80%] md:w-[40%] md:max-w-[50%]">
            <div className="mx-auto w-48 h-48 me rounded-full bg-cover mb-6 hover:w-52 hover:h-52 hover:shadow-xl duration-300"></div>
            <p>
              <span className="text-2xl md:text-3xl font-extrabold text-pink-400">
                University of California, Irvine
              </span>
              <br></br>
              Computer Science(B.S.) & Computer Game Science(B.S.)<br></br>
              <br></br>
              GPA: 3.97<br></br>
              Sep 2020 -{" "}
              <span className="text-pink-400 font-bold">Jun 2024</span>
              <br></br>
              <br></br>
            </p>
          </div>
          <p className="text-gray-400 mr-[5%] text-xl place-self-center mb-16 drop-shadow-2xl w-[80%] md:w-[90%]">
            I'm a 3rd year at University of California, Irvine where I am
            currently studying to earn two degrees in computer science and
            computer-game science. I have a passion to create -- whether it be
            by painting, programming, or even just by conceptualizing worlds and
            characters in my head. Throughout high school, I used traditional
            art as a means to convey stories. As I've grown older, I found
            programming as a way to turn abstract ideas into actuality, while
            also challenging me to problem-solve.I have a dual passion for both
            programming and the arts, and making games and doing front-end
            development is how I create with my love for both.
          </p>
        </div>

        <h1 className="text-white text-center font-bold text-4xl underline decoration-pink-600">
          My Skills
        </h1>
        <div className="skills mx-[5%] flex flex-row justify-evenly border-white  bg-dark-2 rounded-md mt-4">
          <div className="flex flex-col">
            <h1>Languages</h1>
            <p>Python ★</p>
            <p>C++ ★</p>
            <p>C# ★</p>
            <p>HSLS</p>
          </div>
          <div className="flex flex-col">
            <h1>Web Dev</h1>
            <p>React ★</p>
            <p>Tailwind ★</p>
            <p>HTML,CSS, JS ★</p>
            <p>Angular</p>
            <p>SQL</p>
          </div>
          <div>
            <h1>Game Dev</h1>
            <p>Unity ★</p>
            <p>Unreal</p>
            <p>Shaderlab</p>
          </div>
          <div className="flex flex-col"></div>
        </div>
      </div>

      {/*Projects Section*/}
      <div id="projects" className="relative bottom-4"></div>
      <div className="mx-auto flex flex-wrap bg-dark-2 text-center place-content-center">
        <h1 className="text-6xl font-bold text-white underline decoration-purple-700 mt-16">
          Projects
        </h1>
        {/*Tabs*/}
        <div className="flex justify-center h-16 w-full mt-6 mx-[20%] bg-black rounded-3xl drop-shadow-2xl relative">
          <div
            onClick={() => settabMode(0)}
            className={
              "duration-200 tab rounded-l-3xl h-full w-full " +
              (tabMode == 0
                ? "bg-purple-500"
                : "bg-purple-500/[0.2] hover:bg-purple-500/[0.4] text-white/[0.7]")
            }
          >
            <p>Game Dev</p>
          </div>
          <div
            onClick={() => settabMode(1)}
            className={
              "duration-200 tab rounded-r-3xl h-full w-full " +
              (tabMode == 1
                ? "bg-blue-500"
                : "bg-blue-500/[0.2] hover:bg-blue-500/[0.4] text-white/[0.7]")
            }
          >
            <p>Software</p>
          </div>
        </div>

        <div className={tabMode == 0 ? "" : "hidden"}>
          {gameProjects.map((project) => (
            <Project project={project} color=" purple-gradient"></Project>
          ))}
        </div>
        <div className={tabMode == 1 ? "" : "hidden"}>
          {softwareProjects.map((project) => (
            <Project project={project} color=" blue-gradient"></Project>
          ))}
          <h1 className="text-white font-bold text-center">
            More projects will be added soon
          </h1>
        </div>
      </div>

      {/*Artwork*/}
      <div id="art" className="relative bottom-40"></div>
      <div className="p-[30%]">
        <h1 className="text-white font-bold text-center">
          Artwork will be added soon !
        </h1>
      </div>

      {/*Contact Me*/}
      <div id="contact" className="relative bottom-40"></div>
      <div className="bg-dark-2 h-screen w-full">
        <h1 className="text-white text-center font-bold text-4xl underline decoration-emerald-500 py-6">
          <a href="mailto: hungbuiwork@gmail.com ">Contact Me</a>
        </h1>
        <p className="text-gray-400 mr-[5%] text-xl place-self-center mb-6 drop-shadow-2xl text-center  mx-[10%]">
          I love collaboration, and am always on the hunt on projects to be a
          part of! I am also looking for opportunities/internships to apply my
          skills and learn in a professional setting! I would absolutely love to
          connect!
        </p>
        <h1 className="text-white text-xl text-center font-bold">
          <a href="mailto: hungbuiwork@gmail.com ">hungbuiwork@gmail.com</a>
        </h1>
        <div className="text-white place-self-center m-auto text-center w-64 py-3 text-2xl rounded-xl bg-purple-500 hover:text-gray-800 hover:bg-white duration-300 font-bold my-8 drop-shadow-2xl">
          <a href={ResumeGames} target="_blank">
            Resume(Game Dev)
          </a>
        </div>
        <div className="text-white place-self-center m-auto text-center w-64 py-3 text-2xl rounded-xl bg-blue-500 hover:text-gray-800 hover:bg-white duration-300 font-bold my-8 drop-shadow-2xl">
          <a href={ResumeSoftware} target="_blank">
            Resume(Software)
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
