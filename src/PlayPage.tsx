import type { ReactNode } from "react";

// "AI Playground" page, opened from Play in the menu. Temporary design copied
// from the "Mi portafolio con IA" Figma prototype: three placeholder project
// blocks that reuse the Moonrider copy, to be replaced with the real projects.

const jaro = "font-['Jaro:Regular'] [font-variation-settings:'opsz'_6]";

type PlayProject = {
  name: string;
  meta: { label: string; value: string; strong?: boolean }[];
  // First section heading: the first block uses "OBJECTIVES", the rest "RESEARCH".
  sectionTitle: string;
  showTeam: boolean;
};

const meta = [
  { label: "Sector", value: "Fashion", strong: true },
  { label: "Project type", value: "Refs image generation", strong: true },
  { label: "Tools", value: "Claude, Figr" },
];

const projects: PlayProject[] = [
  { name: "Name", meta, sectionTitle: "OBJECTIVES", showTeam: false },
  { name: "Name 2", meta, sectionTitle: "RESEARCH", showTeam: true },
  { name: "Name 3", meta, sectionTitle: "RESEARCH", showTeam: true },
];

const intro =
  "Our app helps young wheelchair users enjoy the nightlife in Barcelona in a comfortable, safe and efficient way, allowing them to integrate with other young people and be free and independent.";

const objectives = [
  "Help people with disabilities enjoy nightlife in Barcelona",
  "Promote inclusive social spaces",
  "Create a network of information and verification in real time",
  "Create and inclusive, efficient and trustable tool",
  "Create an user experience adapted to the needs and preferences of the user",
];

const team =
  "We were a team of four designers with different levels of expertise. Each one took one of two research topics that we synchronised at several times. All of us together took decisions on the user experience, interactions and visual design.";

const methods = [
  [
    "Observation of people with disabilities on public transport, the street and what they have to say on social media.",
    "Interviews with people with temporary or permanent disabilities",
  ],
  [
    "Desk research, reports and talks from associations and communities that fight for accessibility",
    "Benchmarking of digital services that operate in the leisure sector or have accessibility functionalities.",
  ],
];

function SectionTitle({ children }: { children: ReactNode }) {
  return <h3 className={`${jaro} text-[44px] uppercase leading-[1] text-black md:text-[64px]`}>{children}</h3>;
}

function Subtitle({ children }: { children: ReactNode }) {
  return <h4 className={`${jaro} text-[30px] leading-[1.1] text-black md:text-[52px]`}>{children}</h4>;
}

function ProjectBlock({ project }: { project: PlayProject }) {
  return (
    <article aria-label={project.name} className="flex flex-col">
      <dl className="flex flex-col gap-3 border-y border-[#575757] py-3 font-[Arial,sans-serif] text-[16px] md:flex-row md:justify-between md:py-[10px] md:text-[22px] md:leading-[31px]">
        {project.meta.map(({ label, value, strong }) => (
          <div className="md:min-w-[160px]" key={label}>
            <dt>{label}</dt>
            <dd className={strong ? "font-bold" : undefined}>{value}</dd>
          </div>
        ))}
      </dl>

      <div className="flex flex-col gap-6 pt-8 md:flex-row md:justify-between md:pt-[56px]">
        <h2 className={`${jaro} text-[56px] uppercase leading-[0.9] text-black md:text-[96px]`}>{project.name}</h2>
        <p className="indent-10 text-[18px] leading-[1.4] md:w-[454px] md:indent-[166px] md:text-justify md:text-[26px] md:leading-[31px]">
          {intro}
        </p>
      </div>

      <div className="flex flex-col gap-6 pt-16 md:gap-8 md:pt-[110px]">
        <SectionTitle>{project.sectionTitle}</SectionTitle>
        <div className="flex flex-col gap-5 md:max-w-[690px]">
          <Subtitle>Objectives and team</Subtitle>
          <ol className="list-decimal ps-6 md:ps-9">
            {objectives.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
          {project.showTeam ? <p>{team}</p> : null}
        </div>
        <div className="flex flex-col gap-5">
          <Subtitle>Methods</Subtitle>
          <div className="grid gap-4 md:grid-cols-2 md:gap-16 md:pt-10">
            {methods.map((column, index) => (
              <ul className="list-disc ps-6 md:ps-[68px] md:pe-8" key={index}>
                {column.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-16 pb-10 pt-20 md:gap-[150px] md:pb-[60px] md:pt-[180px]">
        <SectionTitle>Process</SectionTitle>
        <SectionTitle>Conclusions</SectionTitle>
      </div>
    </article>
  );
}

// Phone mockup with the Moonrider venue screen, scrollable inside the frame.
function PhoneScreen() {
  return (
    <div className="mx-auto w-[280px] rounded-[48px] bg-[#1a1a1a] p-[10px] shadow-[0_0_0_2px_#3a3a3a] md:w-[345px] md:rounded-[56px] md:p-[12px]">
      <div className="relative overflow-hidden rounded-[38px] bg-[#232323] md:rounded-[44px]">
        <div aria-hidden="true" className="absolute left-1/2 top-[8px] z-10 h-[26px] w-[110px] -translate-x-1/2 rounded-full bg-black" />
        <div
          aria-label="Moonrider venue screen, scroll to explore"
          className="h-[560px] overflow-y-auto overscroll-contain [scrollbar-width:none] md:h-[700px]"
          role="region"
          tabIndex={0}
        >
          <img
            alt="Moonrider venue detail for Can Pizza: accessibility, reviews, directions and busy times"
            className="w-full"
            src="/assets/moonrider/5b59d.png"
          />
        </div>
      </div>
    </div>
  );
}

const navLink = "rounded border px-2 py-0.5 md:px-[11px] md:py-1";

export default function PlayPage() {
  return (
    <div className="min-h-screen bg-[#aeaeae] font-['Inter:Regular'] text-[17px] leading-[1.45] text-black md:text-[24px] md:leading-[31px]">
      <div className="mx-auto max-w-[1440px]">
        <header className="flex flex-col gap-3 border-b border-[#e6e6e6] px-4 py-3 md:flex-row md:items-center md:justify-between md:px-[14px]">
          <a
            aria-label="Eva Caldas, back to home"
            className={`${jaro} text-[44px] leading-[1] text-black md:text-[52px]`}
            href="/"
          >
            EVA&nbsp;&nbsp;CALDAS
          </a>
          <nav aria-label="Primary navigation" className="flex flex-wrap gap-1.5 text-[16px] md:text-[21px]">
            <a className={`${navLink} border-[#e6e6e6]`} href="/">
              Work
            </a>
            <a aria-current="page" className={`${navLink} border-[#121212] bg-[#121212] text-white`} href="/play">
              Play
            </a>
            <a className={`${navLink} border-[#e6e6e6]`} href="/about">
              About
            </a>
            <a className={`${navLink} border-[#e6e6e6]`} href="#contact">
              Contact
            </a>
          </nav>
        </header>

        <main className="flex flex-col px-4 pb-16 md:px-[14px] md:pb-8">
          <div className="relative mt-2.5 flex aspect-[4/3] items-center justify-center overflow-hidden rounded md:mt-0 md:aspect-auto md:h-[634px]">
            <img
              alt=""
              className="absolute inset-0 size-full object-cover"
              src="/assets/play/cutting-mat.jpg"
              style={{ transform: "scale(2.6) rotate(-8deg)", transformOrigin: "40% 75%" }}
            />
            <h1 className={`${jaro} relative text-center text-[52px] leading-[0.9] text-white md:text-[168px]`}>
              AI PLAYGROUND
            </h1>
          </div>

          <div className="mt-8 flex flex-col md:mt-8">
            {projects.map((project) => (
              <ProjectBlock key={project.name} project={project} />
            ))}
          </div>

          <PhoneScreen />
        </main>

        <footer
          className="mt-10 flex flex-col gap-10 bg-[#121212] px-4 pb-12 pt-4 text-[17px] text-white md:mt-8 md:grid md:grid-cols-3 md:pb-16 md:text-[21px]"
          id="contact"
        >
          <p>©2026</p>
          <div className="flex flex-col gap-4 md:col-start-3">
            <div>
              <p>Interested to work with me?</p>
              <a className="underline" href="mailto:ecaldas22@gmail.com">
                ecaldas22@gmail.com
              </a>
            </div>
            <div className="flex flex-col">
              <a className="w-fit underline" href="https://www.behance.net/caldas" rel="noreferrer" target="_blank">
                Behance
              </a>
              <a
                className="w-fit underline"
                href="https://www.linkedin.com/in/eva-caldas-58232515/"
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
