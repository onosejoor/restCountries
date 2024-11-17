const ImgSkeleton: React.FC = () => {
  return (
    <div className="w-[250px]  h-[400px] dark:shadow-none shadow-country rounded-md overflow-hidden bg-white dark:bg-dark_mode_elements">
      <div className="h-[200px] animate-pulse bg-light_mode_text"></div>
      <div className="p-5 flex flex-col gap-5">
        <h3 className="animate-pulse h-5 bg-light_mode_input dark:text-dark_mode_white text-2xl font-bold"></h3>

        <div className="flex flex-col gap-3">
          <p className="animate-pulse h-4 bg-light_mode_input text-light_mode_text capitalize dark:text-dark_mode_white"></p>
          <p className="animate-pulse h-4 bg-light_mode_input dark:text-dark_mode_white capitalize"></p>
          <p className="animate-pulse h-4 bg-light_mode_input dark:text-dark_mode_white capitalize"></p>
        </div>
      </div>
    </div>
  );
};

export default ImgSkeleton;
