import ImgSkeleton from "./components/ImgSkeleton";

export default function Loading() {
  return (
    <>
      <main className="py-10 px-[15px] sm:px-[30px]">
        <div className="flex justify-between flex-col gap-10 sm:flex-row">
          <div className="px-5 py-3 h-fit flex gap-5 dark:bg-dark_mode_elements bg-white w-[400px] rounded-md">
            <span>
              <svg
                viewBox="0 0 24 24"
                className="fill-light_mode_input dark:fill-dark_mode_white"
                height={30}
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
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15 10.5C15 12.9853 12.9853 15 10.5 15C8.01472 15 6 12.9853 6 10.5C6 8.01472 8.01472 6 10.5 6C12.9853 6 15 8.01472 15 10.5ZM14.1793 15.2399C13.1632 16.0297 11.8865 16.5 10.5 16.5C7.18629 16.5 4.5 13.8137 4.5 10.5C4.5 7.18629 7.18629 4.5 10.5 4.5C13.8137 4.5 16.5 7.18629 16.5 10.5C16.5 11.8865 16.0297 13.1632 15.2399 14.1792L20.0304 18.9697L18.9697 20.0303L14.1793 15.2399Z"
                  ></path>{" "}
                </g>
              </svg>
            </span>
            <input
              type="text"
              className="w-full border-none outline-none bg-transparent text-light_mode_input  placeholder:text-light_mode_input dark:placeholder:text-dark_mode_white dark:text-dark_mode_white "
              placeholder="Search for a country"
            />
          </div>

          <div className="relative flex flex-col gap-5 w-fit sm:min-w-[220px]">
            <div className="h-[54px] p-3 bg-dark_mode_white dark:bg-dark_mode_elements rounded-md flex gap-10 w-full items-center justify-between">
              <b className="capitalize text-light_mode_text dark:text-dark_mode_white font-semibold">
                {"Filter by Region"}
              </b>
              <span role="button">
                <svg
                  viewBox="0 0 24 24"
                  height={25}
                  className={`fill-light_mode_input transition-transform duration-100 dark:fill-dark_mode_white `}
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
                    <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"></path>{" "}
                  </g>
                </svg>
              </span>
            </div>
            <div
              className={`absolute w-full top-full mt-5 px-1 py-3 shadow-country flex bg-white dark:*:text-dark_mode_white dark:bg-dark_mode_elements rounded-md flex-col ${"hidden"} transition`}
            ></div>
          </div>
        </div>
        <section className="flex flex-wrap  my-10 gap-[50px] justify-center sm:justify-between">
          {[...Array(100)].map((el: number, index: number) => {
            return <ImgSkeleton key={index || el} />;
          })}
        </section>
      </main>
    </>
  );
}
