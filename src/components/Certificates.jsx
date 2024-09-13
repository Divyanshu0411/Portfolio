import React from "react";
import JS from "../assets/Certificates/Web Development Udemy.png";
import PS from "../assets/Certificates/Sql Certification.png";
import IBMAI from "../assets/Certificates/scalar C++.png";
import ReactJS from "../assets/Certificates/C++ udemy.png";
import IBMAI2 from "../assets/Certificates/software engg by jp morgan.png";

const Certificates = () => {
  return (
    <div
      name="certificates"
      className="bg-gradient-to-r from-sky-800 to-slate-950 text-sky-300 max-md:px-10  w-full min-h-screen py-8 pt-20 md:px-10"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Certifications
          </p>
          <p className="py-6">
            These are some of the certifications I've recieved :{" "}
          </p>
        </div>

        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${ReactJS})` }}
            className="shadow-xl shadow-black hover:scale-105 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <div className="text-xl font-bold text-white tracking-wider text-center">
                Course Completion : C++
              </div>
              <div className="text-xl text-center">
                <i>(Udemy)</i>
              </div>
              <div className="pt-8 text-center">
                <a
                  href="https://www.udemy.com/certificate/UC-03d5a39d-9abd-460d-a018-bb5986230b75/"
                  target="new"
                >
                  <button className="text-center rounded-xl px-3 py-2 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-95 duration-300">
                    Verify
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${IBMAI2})` }}
            className="shadow-xl shadow-black hover:scale-105 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-xl font-bold text-white">
                Badge : Software Engineering Job Simulation
              </span>
              <div className="text-xl text-center">
                <i>(Forage)</i>
              </div>
              <div className="pt-8 text-center">
                <a
                  href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_9PgrFc46Gk6xsgrgB_1725659548013_completion_certificate.pdf"
                  target="new"
                >
                  <button className="text-center rounded-xl px-3 py-2 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-95 duration-300">
                    Verify
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${IBMAI})` }}
            className="shadow-xl shadow-black hover:scale-105 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-xl font-bold text-white tracking-wider text-center">
                Course Completion : C++ Course: Learn the Essentials
              </span>
              <div className="text-xl text-center">
                <i>(Scaler)</i>
              </div>
              <div className="pt-8 text-center">
                <a
                  href="https://moonshot.scaler.com/s/sl/Wg3pZLMKxv?_gl=1*1mhxkcm*_gcl_au*MTcwNzMwNTA1My4xNzIyMzI0Mjc5*FPAU*NjYzNjgxMzUyLjE3MjIzMjM4OTY.*_ga*MTgwNDA3NDcyMi4xNzA1MjUzNTA3*_ga_53S71ZZG1X*MTcyNjIyNjE0Ni4xNS4xLjE3MjYyMjYxOTUuMjUuMC4xNzM1MTg2MTYw"
                  target="new"
                >
                  <button className="text-center rounded-xl px-3 py-2 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-95 duration-300">
                    Verify
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${PS})` }}
            className="shadow-xl shadow-black hover:scale-105 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <div className="text-xl font-bold text-white tracking-wider text-center">
                Course Completion : SQL for Begginers
              </div>
              <div className="text-xl text-center">
                <i>(Scaler)</i>
              </div>
              <div className="pt-8 text-center">
                <a
                  href="https://moonshot.scaler.com/s/sl/N044fc3tjp?_gl=1*1csas0g*_gcl_au*MTcwNzMwNTA1My4xNzIyMzI0Mjc5*FPAU*NjYzNjgxMzUyLjE3MjIzMjM4OTY.*_ga*MTgwNDA3NDcyMi4xNzA1MjUzNTA3*_ga_53S71ZZG1X*MTcyNjIyNjE0Ni4xNS4xLjE3MjYyMjYxOTUuMjUuMC4xNzM1MTg2MTYw"
                  target="new"
                >
                  <button className="text-center rounded-xl px-3 py-2 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-95 duration-300">
                    Verify
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${JS})` }}
            className="shadow-xl shadow-black hover:scale-105 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <div className="text-xl font-bold text-white tracking-wider text-center">
                Course Completion : Full Stack Web Development
              </div>
              <div className="text-xl text-center">
                <i>(Udemy)</i>
              </div>
              <div className="pt-8 text-center">
                <a
                  href="https://www.udemy.com/certificate/UC-30c87441-a30e-4aba-8b98-6b071bd24b6b/"
                  target="new"
                >
                  <button className="text-center rounded-xl px-3 py-2 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-95 duration-300">
                    Verify
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
