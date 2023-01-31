import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-7xl font-bold text-white">
            I'm a Backend Engineer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have few years of experience developing Software.
            Currently, I love to work on Web Services using technologies like
            Golang, Rest API, PostgreSQL and Docker.
          </p>

          <div>
            <Link
              to="porto-title"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 mt-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto mt-auto w-3/5 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
