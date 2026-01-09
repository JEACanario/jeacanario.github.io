import { useState } from "react";

type AccordionCard = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  textPrimary: string;
  textSecondary: string;
  link: string;
  website?: string;
};

export function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const cards: AccordionCard[] = [
    {
      imageSrc: "/images/coconut-landing.png",
      imageAlt: "Coconut Frontend",
      title: "Coconut Frontend",
      textPrimary: "Book Journaling App. Tracking notes, progress and insights while reading. The concept is to help readers retain more information and meta-information from their experience of reading of a book. Can be expanded to other forms of long-form content.",
      textSecondary: "Single Page Application built with React 19, Vite, HeroUI component library and Tailwind.\n The main goal was to explore the possibilities of modern web development and gain a sense for state management while creating a functional user interface.\n Future developments could include AI Speech Recognition for note taking and Book Report Generation.\n Currently deployed on GitHub Pages. Find it @ coconut.spot or https://www.coconut.spot \n Please allow some time for the backend API to spin up if it's the first visit of the day - I'm using a free-tier Azure plan for hosting.",
      link: "https://github.com/JEACanario/coconut-react-heroui-front-end",
      website: "http://www.coconut.spot",
    },
    {
      imageSrc: "/images/Coconut-working.png",
      imageAlt: "Coconut Working",
      title: "Coconut Backend API",
      textPrimary: "Coconut Backend service. RESTful API handling user authentication, book data management, note storage and other backend functionalities for the Coconut Journaling App.",
      textSecondary: "C# ASP.Net Core 9 Web API. Currently deployed to Azure and updating via GitHub Actions. \n MVC structured, utilizing Entity Framework for database interface with a PostgreSQL Server and Identity Framework for user authentication and authorization. \n The intention behind the project was to focus on creating a scalable backend service to support the Coconut Frontend application while allowing me to learn and experiment with backend technologies.",
      link: "https://github.com/JEACanario/coconut-asp-dotnet-back-end",
      website: "http://coconut.spot",
    },
    {
      imageSrc: "/images/hp.png",
      imageAlt: "Personal Homepage",
      title: "Personal Homepage",
      textPrimary: "Personal Homepage. This one! Showcasing my projects, skills and contact information.",
      textSecondary: "Just a (very) simple personal homepage project built with React Router and using VS Code's copilot in Agent mode. \n The purpose of the project was to develop a simple web page using AI tools with complete project access - which I generally refrain from.\n So far I've found that while making cookie-cooker sweeping changes is somewhat easier - say build a component or a view from scratch with these or those features - fine detail goes a bit out the window. The agent often makes weird - to me - choices in code structure and will absolutely not organize components etc without explicit instruction. Changing and maintaining visual consistency and CSS details quickly became a challenge, for instance.",

      link: "https://github.com/JEACanario/JEACanario.github.io",
      website: "https://jeacanario.github.io",
    },
    {
      imageSrc: "/images/bikepass.png",
      imageAlt: "Bike Pass",
      title: "Bicycle Passport",
      textPrimary: "Web App for Online Authenticity Validation of Bicycles, Bicycle Components, Maintenance Logs and Rides with a light Social Component via sharing of Bicycle Details and Ride sign-up. Developed from concept to deployment in a team of 4 using Agile methodologies.",
      textSecondary: " Developed over two weeks as part of a Web Application Development Bootcamp final project.\n Ruby on Rails  using Active Records to interface towards a SQL database on the backend, HTML and SCSS with a sprinkling of JavaScript  on front-end.\n Unfortunately currently not being hosted.",

      link: "https://github.com/NunoRVVS/bicycle_passport",
     
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full max-w-160 px-4 border border-gray-800/80 rounded-lg bg-[#060910] p-5 shadow-md">
      <h2 className="text-left text-lg font-semibold mb-4">Projects</h2>

      <div className="space-y-4">
        {cards.map((card, index) => {
          const isOpen = openIndex === index;
          return (
            <article
              key={card.title}
              className="rounded-lg border border-gray-800/70 bg-[#0a0e16] shadow-sm overflow-hidden"
            >
              <button
                className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f0e6c3] focus-visible:ring-offset-2 focus-visible:ring-offset-[#020408] hover:bg-gray-800/40 transition-colors"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                aria-controls={`accordion-panel-${index}`}
              >
                <div className="flex flex-col sm:flex-row gap-4 p-4">
                  <div className="sm:w-48 w-full h-40 sm:h-28 shrink-0 overflow-hidden rounded-lg bg-black/20">
                    <img
                      src={card.imageSrc}
                      alt={card.imageAlt || card.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-semibold leading-tight">{card.title}</h3>
                      <svg
                        className={`w-5 h-5 flex-none transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm mt-2 whitespace-pre-line text-left">{card.textPrimary}</p>
                  </div>
                </div>
              </button>

              <div
                id={`accordion-panel-${index}`}
                role="region"
                aria-labelledby={`accordion-header-${index}`}
                className={`grid transition-[grid-template-rows] duration-700 ease-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-4 pb-4 pt-0 text-sm whitespace-pre-line opacity-90 text-left">
                    {card.textSecondary}
                    <div className="mt-4 flex flex-wrap gap-4">
                      <a
                        href={card.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-[#f0e6c3] hover:underline"
                      >
                        View project
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h6m0 0v6m0-6L10 16" />
                        </svg>
                      </a>
                      {card.website && (
                        <a
                          href={card.website}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-[#f0e6c3] hover:underline"
                        >
                          Visit website
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h6m0 0v6m0-6L10 16" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
