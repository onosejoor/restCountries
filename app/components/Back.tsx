'use client'
import { useRouter } from "next/navigation";

const Back: React.FC = () => {
  const route = useRouter();
  return (
    <button
      onClick={() => route.back()}
      className="bg-light_mode_bg w-fit dark:bg-dark_mode_elements flex gap-3 items-center py-2 px-5 rounded-md shadow-country text-light_mode_input"
    >
      <span>
        <svg
          className="fill-light_mode_text dark:fill-dark_mode_white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
          height={20}
          enableBackground="new 0 0 52 52"
          xmlSpace="preserve"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path d="M48.6,23H15.4c-0.9,0-1.3-1.1-0.7-1.7l9.6-9.6c0.6-0.6,0.6-1.5,0-2.1l-2.2-2.2c-0.6-0.6-1.5-0.6-2.1,0 L2.5,25c-0.6,0.6-0.6,1.5,0,2.1L20,44.6c0.6,0.6,1.5,0.6,2.1,0l2.1-2.1c0.6-0.6,0.6-1.5,0-2.1l-9.6-9.6C14,30.1,14.4,29,15.3,29 h33.2c0.8,0,1.5-0.6,1.5-1.4v-3C50,23.8,49.4,23,48.6,23z"></path>{" "}
          </g>
        </svg>
      </span>
      Back
    </button>
  );
};

export default Back