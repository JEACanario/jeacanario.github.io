import { Accordion } from "./components/Accordion";
import { Technologies } from "./components/Technologies";

import "./App.css";
import { GitHubIcon, LinkedInIcon, ReactRouterIcon } from "./components/Icons";

function App() {
  const bkgUrl = "/images/235295234_d983d57949_o.jpg";
  return (
    <main className="flex flex-col items-center pb-4">
      <header className="full-bleed sticky isolate top-0 z-50 w-full flex flex-col items-center gap-9 pb-6 pt-6 shadow-md overflow-hidden bg-[#020408]">
        <div className="absolute inset-0">
          <div
            className="h-full w-full bg-cover bg-center opacity-60 "
            style={{ backgroundImage: `url(${bkgUrl})` }}
          ></div>
        </div>
        <div className=" relative z-10 flex flex-col items-center gap-2 backdrop-opacity-0 ">
          <h1 className="text-center text-4xl font-semibold tracking-tight ">
            José Canário
          </h1>
          <p className="text-center text-xl">Junior Full Stack Developer</p>
          <nav className="flex gap-6">
            {resources.slice(1).map(({ href, text, icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-800/50 transition-colors"
                title={text}
              >
                {icon}
              </a>
            ))}
          </nav>
        </div>
      </header>
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0 pt-8">
        <Accordion />
        <Technologies />
      </div>
    </main>
  );
}

const resources = [
  {
    href: "https://reactrouter.com/docs",
    text: "React Router Docs",
    icon: <ReactRouterIcon />,
  },
  {
    href: "https://www.linkedin.com/in/josecanario/",
    text: "Find me on LinkedIn",
    icon: <LinkedInIcon />,
  },
  {
    href: "https://github.com/JEACanario",
    text: "Github Profile",
    icon: <GitHubIcon />,
  },
];
export default App;
