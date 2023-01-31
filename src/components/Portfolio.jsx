import React from "react";
import github from "../assets/github.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: github,
      name: "Crowdfunding-API",
      url: "https://github.com/zafahreza/bwastartup",
    },
    {
      id: 2,
      src: github,
      name: "Category-API",
      url: "https://github.com/zafahreza/golangrestapi",
    },
    {
      id: 3,
      src: github,
      name: "Donations-API",
      url: "https://github.com/zafahreza/donation_user",
    },
    {
      id: 4,
      src: github,
      name: "Articles-API",
      url: "https://github.com/zafahreza/articles",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white h-fit md:h-screen pb-20"
    >
      <div name="porto-title" className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, name, url }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt={name}
                className="duration-200 hover:scale-105 mx-auto border-b-2 border-gray-500"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 py-3 m-2 duration-200 hover:scale-105">
                  {name}
                </button>
                <button className="w-1/2 py-3 m-2 duration-200 hover:scale-105">
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                >
                See on Github
                </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
