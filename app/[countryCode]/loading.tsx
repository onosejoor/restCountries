import Back from "../components/Back";

export default function Loading() {
  return (
    <>
      <main className="py-10 px-[15px] sm:px-[30px]">
        <section className="  flex flex-wrap  my-10 gap-[50px]  justify-start">
          <div className="grid min-h-0 min-w-0 grid-cols-1 md: lg:grid-cols-details gap-[40px] items-center p-10">
            <div className="h-full md:h-fit md:mb-auto flex flex-col gap-5">
              <Back />
              <div className="w-[300px] sm:w-[400px] h-[400px]  animate-pulse bg-light_mode_text rounded-md"></div>
            </div>
            <div className="flex flex-col gap-7">
              <h2 className="text-2xl font-black rounded-md  text-light_mode_text dark:text-dark_mode_white animate-pulse bg-light_mode_text h-5"></h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col gap-5">
                  <b className="capitalize font-bold animate-pulse rounded-md bg-light_mode_text h-5 text-light_mode_text dark:text-dark_mode_white"></b>
                  <b className="capitalize animate-pulse rounded-md bg-light_mode_text h-5 font-bold text-base text-light_mode_text dark:text-dark_mode_white"></b>
                  <b className="capitalize animate-pulse rounded-md bg-light_mode_text h-5 font-bold text-base text-light_mode_text dark:text-dark_mode_white"></b>
                  <b className="capitalize animate-pulse rounded-md bg-light_mode_text h-5 font-bold text-base text-light_mode_text dark:text-dark_mode_white"></b>
                  <b className="capitalize animate-pulse rounded-md bg-light_mode_text h-5 font-bold text-base text-light_mode_text dark:text-dark_mode_white"></b>
                </div>
                <div className="flex flex-col gap-5">
                  <b className="capitalize animate-pulse rounded-md bg-light_mode_text h-5 font-bold text-base text-light_mode_text dark:text-dark_mode_white"></b>
                  <b className="capitalize animate-pulse rounded-md bg-light_mode_text h-5 font-bold text-base text-light_mode_text dark:text-dark_mode_white"></b>
                  <b className="capitalize animate-pulse rounded-md bg-light_mode_text h-5 font-bold text-base text-light_mode_text dark:text-dark_mode_white"></b>
                </div>
              </div>

              <div className="flex gap-5 flex-col sm:flex-row items-start">
                <h4 className="whitespace-nowrap rounded-md  animate-pulse bg-light_mode_text h-5 text-light_mode_text dark:text-dark_mode_white capitalize"></h4>
                <div className="flex flex-wrap gap-3"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
