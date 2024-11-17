"use client";
import { useEffect, useState } from "react";

const Nav = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      return document.documentElement.classList.add("dark");
    }
    return document.documentElement.classList.remove("dark");
  });

  return (
    <>
      <nav className="bg-white dark:bg-dark_mode_elements  py-[20px]">
        <div className="flex justify-between px-5 sm:px-[50px] items-center">
          <h2 className="font-bold sm:text-2xl dark:text-dark_mode_white text-xl ">
            Where in the world?
          </h2>{" "}
          <button
            className="flex gap-3 whitespace-nowrap dark:text-dark_mode_white items-center text-light_mode_text"
            onClick={() => {
              setDark(!dark);
            }}
          >
            <span className=" text-light_mode_text">
              {!dark ? (
                <svg
                  fill="#000000"
                  height={20}
                  viewBox="0 0 35 35"
                  data-name="Layer 2"
                  id="Layer_2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M18.44,34.68a18.22,18.22,0,0,1-2.94-.24,18.18,18.18,0,0,1-15-20.86A18.06,18.06,0,0,1,9.59.63,2.42,2.42,0,0,1,12.2.79a2.39,2.39,0,0,1,1,2.41L11.9,3.1l1.23.22A15.66,15.66,0,0,0,23.34,21h0a15.82,15.82,0,0,0,8.47.53A2.44,2.44,0,0,1,34.47,25,18.18,18.18,0,0,1,18.44,34.68ZM10.67,2.89a15.67,15.67,0,0,0-5,22.77A15.66,15.66,0,0,0,32.18,24a18.49,18.49,0,0,1-9.65-.64A18.18,18.18,0,0,1,10.67,2.89Z"></path>
                  </g>
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="#ffffff" 
                  height={20}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g clipPath="url(#a)" >
                      {" "}
                      <path d="M12 0a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1ZM4.929 3.515a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 0 0 1.414-1.414L4.93 3.515ZM1 11a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H1ZM18 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM17.657 16.243a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 1 0 1.414-1.414l-2.828-2.828ZM7.757 17.657a1 1 0 1 0-1.414-1.414L3.515 19.07a1 1 0 1 0 1.414 1.414l2.828-2.828ZM20.485 4.929a1 1 0 0 0-1.414-1.414l-2.828 2.828a1 1 0 1 0 1.414 1.414l2.828-2.828ZM13 19a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"></path>{" "}
                    </g>{" "}
                    <defs>
                      {" "}
                      <clipPath id="a">
                        {" "}
                        <path d="M0 0h24v24H0z"></path>{" "}
                      </clipPath>{" "}
                    </defs>{" "}
                  </g>
                </svg>
              )}
            </span>
            {dark ? "Light Mode" : " Dark Mode"}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
