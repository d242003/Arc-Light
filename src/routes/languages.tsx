import { Link } from "react-router-dom";

const Languages: React.FC = () => {
  const languages = [
    "English",
    "Italian",
    "Korean",
    "German",
    "Spanish",
    "Chinese",
    "French",
    "Hindi",
    "Bengali",
    "Japanese",
  ];

  return (
    <div className="mx-auto">
      <div className="flex flex-col items-center justify-center h-screen mx-auto w-screen bg-[#EEEEEE]">
        <div className=" mx-auto w-[100] mb-4">
          <h1 className="mb-10 ml-[-10rem] text-[64px] font-normal font-sans-serif text-black justify-start py-5">
            Choose a language <br />
            <span className="ml-[16rem] p-3 ">you wish to start with.</span>
          </h1>
          <div className="justify-center items-center">
            <div className="grid grid-cols-3 gap-4 w-full">
              {languages.map((language) => (
                <Link
                  to={"/setup"}
                  key={language}
                  className={
                    "flex items-center justify-center font-sans-serif font-normal px-6 py-3 text-[24px] text-black bg-[#EDEEF2] rounded-full shadow-lg"
                  }
                >
                  {language}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
