import { CgArrowTopRight } from "react-icons/cg";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="mx-4 relative h-screen">
      <header className="flex w-full items-center px-4 py-2 gap-96">
        <img src="/logo.png" />

        <div className="h-12 flex w-[500px] items-center justify-around bg-[#E5E6EC]/20 shadow-xl rounded-3xl px-10">
          <p className="bg-[#1F1F1F]/5 rounded-lg border px-1">Home</p>
          <p>Dashboard</p>
          <p>Resources</p>
        </div>
      </header>

      <div className="flex flex-col items-start px-44 mt-20 gap-20">
        <div className="">
          <h1 className="text-7xl leading-tight">
            <span>Explore a better way</span>
            <br />
            <span className="ml-10">of learning languages.</span>
          </h1>

          <div className="mt-10 flex gap-4 w-full items-center justify-center text-xl">
            <Link
              to="/languages"
              className="bg-[#EDEEF2] opacity-80 shadow-xl flex gap-2 items-center px-10 py-4 rounded-full"
            >
              Sign In <CgArrowTopRight className="size-6" />
            </Link>
            <Link
              to="/languages"
              className="bg-[#EDEEF2] opacity-80 shadow-xl flex gap-2 items-center px-10 py-4 rounded-full"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <img src="/hero.png" className="absolute right-32 bottom-20" />
    </div>
  );
}
