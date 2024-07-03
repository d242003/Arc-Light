import { Link } from "react-router-dom";
import { Icons } from "../components/Icons";
import { cn } from "../lib/utils";

const sidebar = {
  mainMenu: [
    {
      title: "Dashboard",
      href: "/Dashboard",
      icon: Icons.dashboard,
    },
    {
      title: "My Languages",
      href: "#",
      icon: Icons.myLanguages,
    },
    {
      title: "Lessons",
      href: "#",
      icon: Icons.lessons,
    },
    {
      title: "Modules",
      href: "#",
      icon: Icons.modules,
    },
  ],
  others: [
    {
      title: "Mini-Games",
      href: "#",
      icon: Icons.miniGames,
    },
    {
      title: "Quizzes",
      href: "#",
      icon: Icons.quizzes,
    },
  ],
  other: [
    {
      title: "Learn more",
      href: "#",
      icon: Icons.learnMore,
    },
    {
      title: "Contact us",
      href: "#",
      icon: Icons.contactUs,
    },
  ],
};

const myLanguages = [
  {
    name: "English",
    desc: "Continue learning!",
    progress: "70%",
    color: "#FBE9D0",
  },
  {
    name: "Spanish",
    desc: "Seguir aprendiendo!",
    progress: "34%",
    color: "#CFDEFC",
  },
  {
    name: "German",
    desc: "Weiter lernen!",
    progress: "55%",
    color: "#FBD0DB",
  },
  {
    name: "French",
    desc: "Continuer à apprendre!",
    progress: "30%",
    color: "#ECEDC4",
  },
];

export default function DashboardPage() {
  return (
    <div className="mx-4">
      <header className="flex w-full items-center justify-between px-4 py-2 gap-16">
        <img src="/logo.png" />

        <div className="h-12 flex w-[500px] items-center justify-around bg-[#E5E6EC]/20 shadow-xl rounded-3xl px-10">
          <p>Home</p>
          <p className="bg-[#1F1F1F]/5 rounded-lg border px-1">Dashboard</p>
          <p>Resources</p>
        </div>
        <div className="flex gap-4 px-12 py-4 items-center rounded-xl bg-white/40 shadow-xl">
          <div className="size-8 bg-[#E9F0F7] shadow-xl border rounded-full" />
          <p className="text-[#8F9BB2]">Username</p>
        </div>
      </header>

      <div className="grid grid-cols-5 mt-5 gap-20">
        <div className="border-t flex flex-col gap-8">
          <div className="flex mt-10 gap-1 flex-col text-[#0B0C14]">
            <span className="text-sm uppercase mb-4 text-[#8C8C91]">
              MAIN MENU
            </span>
            {sidebar.mainMenu.map((item, idx) => (
              <Link
                to={item.href}
                className={cn(
                  "flex w-full gap-2 items-center px-4 py-2 rounded-full opacity-75 hover:bg-[#1F1F1F]/5 hover:opacity-100",
                  {
                    "bg-[#1F1F1F]/5 opacity-100": idx === 0,
                  }
                )}
              >
                <item.icon className="" />
                {item.title}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-1 text-[#0B0C14]">
            <span className="text-sm uppercase mb-4 text-[#8C8C91]">
              Others
            </span>
            {sidebar.others.map((item) => (
              <Link
                to={item.href}
                className={cn(
                  "flex w-full gap-2 items-center px-4 py-2 rounded-full opacity-75 hover:bg-[#1F1F1F]/5 hover:opacity-100"
                )}
              >
                <item.icon className="" />
                {item.title}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-1 text-[#0B0C14]">
            <span className="text-sm uppercase mb-4 text-[#8C8C91]">other</span>
            {sidebar.other.map((item) => (
              <Link
                to={item.href}
                className={cn(
                  "flex w-full gap-2 items-center px-4 py-2 rounded-full opacity-75 hover:bg-[#1F1F1F]/5 hover:opacity-100"
                )}
              >
                <item.icon className="" />
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="col-span-3">
          <h1 className="text-5xl">Welcome back, user!</h1>
          <p className="text-lg mt-2 text-[#8C8C91]">
            Explore your progress and achievements here.
          </p>

          <div className="mt-10 flex flex-col">
            <h3 className="text-3xl">My languages</h3>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {myLanguages.map((lang) => (
                <div
                  className="h-56 flex flex-col items-start justify-between rounded-[2.5rem] px-8 py-8"
                  style={{
                    backgroundColor: lang.color,
                  }}
                >
                  <p className="flex flex-col gap-2">
                    <span className="text-2xl">{lang.name}</span>
                    <span className="text-lg">{lang.desc}</span>
                  </p>

                  <div className="flex items-center w-full justify-between">
                    <p className="text-6xl">{lang.progress}</p>
                    <button className="flex items-center justify-center size-16 bg-black text-white rounded-full">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                      >
                        <path
                          d="M9.16666 0.833374L0.833328 9.16671M9.16666 0.833374H1.66666M9.16666 0.833374V8.33337"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 pr-6">
          <span className="text-3xl">Statistics</span>
          <div className="flex flex-col gap-4">
            <div className="flex gap-6 bg-white/25 px-4 py-2 shadow-xl rounded-2xl items-end">
              <h4 className="text-2xl">Courses Completed</h4>
              <p>
                <span className="text-4xl">02</span>/<span>06</span>
              </p>
            </div>
            <div className="flex gap-6 bg-white/25 px-4 py-2 shadow-xl rounded-2xl items-end">
              <h4 className="text-2xl">Total points</h4>
              <p>
                <span className="text-4xl">48</span>/<span>200</span>
              </p>
            </div>
            <div className="flex gap-6 bg-white/25 px-4 py-2 shadow-xl rounded-2xl items-end">
              <h4 className="text-2xl">Courses in progress</h4>
              <p>
                <span className="text-4xl">04</span>/<span>06</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
