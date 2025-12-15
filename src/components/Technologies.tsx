import {
  AzureIcon,
  CSharpIcon,
  DotNetIcon,
  GitHubIcon,
  GitIcon,
  Html5Icon,
  ReactRouterIcon,
  RubyIcon,
  RubyOnRailsIcon,
  SqlIcon,
  TailwindIcon,
  TypeScriptIcon,
} from "./Icons";

export function Technologies() {
  return (
    <section className="w-full max-w-[640px] px-4">
      <div className="space-y-3">
        <h2 className="text-left text-lg font-semibold ">
          Technologies & Frameworks
        </h2>
        <ul className="grid gap-2 sm:grid-cols-4">
          {technologies.map(({ icon, text }) => (
            <li
              key={text}
              className="flex flex-col items-center gap-1 rounded-xl px-2 py-3 text-center transition-transform hover:shadow-sm hover:-translate-y-0.5"
            >
              <span className="[&>svg]:w-7 [&>svg]:h-7 sm:[&>svg]:w-8 sm:[&>svg]:h-8">
                {icon}
              </span>
              <span className="text-xs font-medium mt-0.5">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const technologies = [
  {
    text: "React",
    icon: <ReactRouterIcon />,
  },
  {
    text: "TypeScript",
    icon: <TypeScriptIcon />,
  },
  {
    text: "C#",
    icon: <CSharpIcon />,
  },
  {
    text: ".Net",
    icon: <DotNetIcon />,
  },
  {
    text: "Ruby",
    icon: <RubyIcon />,
  },
  {
    text: "HTML5",
    icon: <Html5Icon />,
  },
  {
    text: "Tailwind",
    icon: <TailwindIcon />,
  },
  {
    text: "Ruby on Rails",
    icon: <RubyOnRailsIcon />,
  },
  {
    text: "SQL",
    icon: <SqlIcon />,
  },
  {
    text: "Azure",
    icon: <AzureIcon />,
  },
  {
    text: "Git",
    icon: <GitIcon />,
  },
  {
    text: "GitHub",
    icon: <GitHubIcon />,
  },
];
