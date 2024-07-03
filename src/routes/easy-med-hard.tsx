import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function EasyMedHardPage() {
  return (
    <div className="bg-[#EEEEEE] w-screen h-screen">
      <h1 className="text-4xl text-[36px] font-sans-serif text-left pt-8 mx-10 p-5 text-black ">
        Learning Modes
      </h1>
      <h2 className="text-xl font-sans-serif text-left mx-[4rem] pb-10 text-[#8C8C91]">
        Explore the mode that suits you and your needs
      </h2>
      <div className="flex flex-row justify-center p-10">
        <Link to="/dashboard" className="w-1/3  mx-4">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 duration-300">
            <h2 className=" font-sans-serif text-black text-left mb-4 text-[36px]">
              Easy Mode
            </h2>
            <p className="text-gray-600 text-left mb-5 border-b ">
              For users who prefer to keep it light and breezy, while swimming
              through different language exercises by the use of mini-games.
            </p>
            <h4 className="text-[25px] text-black text-left py-2">
              Plan includes:{" "}
            </h4>
            <div className="text-[#8C8C91] text-left ">
              <p>
                <TiTick className="inline-block mr-2 text-[#1E40AF]" />
                Progress tracker
              </p>
              <p>
                <TiTick className="inline-block mr-2 text-[#1E40AF]" />
                Learning modules that cover basics of the language
              </p>
              <p>
                <TiTick className="inline-block mr-2 text-[#1E40AF]" />
                Mini-games after completion of every module
              </p>
            </div>
          </div>
        </Link>
        <Link to="/dashboard" className="w-1/3  mx-4">
          <div className="bg-yellow-100 rounded-xl shadow-xl p-6 hover:scale-105 duration-300">
            <h2 className=" font-sans-serif text-black text-left mb-4 text-[36px]">
              Medium Mode
            </h2>

            <p className="text-gray-600 text-left mb-5 border-b ">
              For users who have surpassed the easy mode and wish to take it up
              a notch! The tides get a little more difficult in this mode.
            </p>
            <h4 className="text-[25px] text-black text-left py-2">
              Plan includes:{" "}
            </h4>
            <div className="text-[#8C8C91] text-left ">
              <p>
                <TiTick className="inline-block mr-2 text-[#1E40AF]" />
                Progress tracker
              </p>
              <p>
                <TiTick className="inline-block mr-2 text-[#1E40AF]" />
                Learning modules that cover basics of the language
              </p>
              <p>
                <TiTick className="inline-block mr-2 text-[#1E40AF]" />
                Mini-games after completion of every module
              </p>
            </div>
          </div>
        </Link>
        <Link to="/dashboard" className="w-1/3  mx-4">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 duration-300">
            <h2 className=" font-sans-serif text-black text-left mb-4 text-[36px]">
              Hard Mode
            </h2>
            <p className="text-gray-600 text-left mb-5 border-b ">
              For users who have conquered the Easy and Meduim modes and are
              hungry for a challenge! be careful not to drown in this one.{" "}
            </p>
            <h4 className="text-[25px] text-black text-left py-2">
              Plan includes:{" "}
            </h4>
            <div className="text-[#8C8C91] text-left ">
              <p>
                <TiTick className="inline-block mr-2 text-[#1E40AF]" />
                Progress tracker
              </p>
              <p>
                <TiTick className="inline-block mr-2 text-[#1E40AF]" />
                Learning modules that cover basics of the language
              </p>
              <p>
                <TiTick className="inline-block mr-2 text-[#1E40AF]" />
                Mini-games after completion of every module
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
