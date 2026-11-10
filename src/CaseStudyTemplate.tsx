import type { ReactNode } from "react";

// Placeholder case study page with the same structure as Moonrider.
// Grey boxes stand in for images and videos, lorem ipsum for the text,
// until the real content is ready. Responsive: one column on mobile.

const jaro = "font-['Jaro:Regular'] [font-variation-settings:'opsz'_6]";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const LOREM_LONG =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const loremList = (count: number) =>
  [
    "Lorem ipsum dolor sit amet",
    "Consectetur adipiscing elit",
    "Sed do eiusmod tempor incididunt",
    "Ut labore et dolore magna aliqua",
    "Quis nostrud exercitation ullamco",
    "Duis aute irure dolor in reprehenderit",
    "Excepteur sint occaecat cupidatat",
    "Sunt in culpa qui officia deserunt",
  ].slice(0, count);

const metaLabels = ["Industry", "Project type", "Role", "Organisation", "Location"];

// Grey box standing in for an image or a video.
function Placeholder({
  kind = "image",
  className = "",
}: {
  kind?: "image" | "video";
  className?: string;
}) {
  return (
    <div
      aria-label={`${kind === "video" ? "Video" : "Image"} placeholder`}
      className={`flex items-center justify-center rounded bg-[#e6e6e6] text-[#9a9a9a] ${className}`}
      role="img"
    >
      {kind === "video" ? (
        <svg aria-hidden="true" className="size-12" viewBox="0 0 48 48">
          <circle cx="24" cy="24" fill="none" r="22" stroke="currentColor" strokeWidth="2" />
          <path d="M19 15l14 9-14 9z" fill="currentColor" />
        </svg>
      ) : (
        <svg aria-hidden="true" className="size-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 48 48">
          <rect height="32" rx="3" width="40" x="4" y="8" />
          <circle cx="16" cy="19" r="4" />
          <path d="M4 36l12-11 9 8 7-6 12 10" />
        </svg>
      )}
    </div>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className={`${jaro} text-[44px] leading-[1] text-black md:text-[64px]`}>{children}</h2>;
}

function Subtitle({ children }: { children: ReactNode }) {
  return <h3 className={`${jaro} text-[30px] leading-[1.1] text-black md:text-[52px]`}>{children}</h3>;
}

function Bullets({ items, ordered = false }: { items: string[]; ordered?: boolean }) {
  const List = ordered ? "ol" : "ul";
  return (
    <List className={`${ordered ? "list-decimal" : "list-disc"} space-y-1 ps-6 md:ps-9`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </List>
  );
}

const navLink = "rounded border px-2 py-0.5 md:px-[11px] md:py-1";

export default function CaseStudyTemplate({ name }: { name: string }) {
  return (
    <div className="min-h-screen bg-white font-['Inter:Regular'] text-[17px] leading-[1.45] text-[#0e0d0d] md:text-[24px] md:leading-[1.3]">
      <div className="mx-auto max-w-[1440px]">
        <header className="flex flex-col gap-3 border-b border-[#e6e6e6] px-4 py-3 md:flex-row md:items-center md:justify-between">
          <a
            aria-label="Eva Caldas, back to home"
            className={`${jaro} text-[44px] leading-[1] text-black md:text-[52px]`}
            href="/"
          >
            EVA&nbsp;&nbsp;CALDAS
          </a>
          <nav aria-label="Primary navigation" className="flex flex-wrap gap-1.5 text-[16px] md:text-[21px]">
            <a aria-current="page" className={`${navLink} border-[#121212] bg-[#121212] text-white`} href="/">
              Work
            </a>
            <a className={`${navLink} border-[#e6e6e6]`} href="/#play">
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

        <main className="flex flex-col gap-14 px-4 pb-16 pt-4 md:gap-20">
          {/* Hero */}
          <Placeholder className="aspect-[4/3] w-full md:aspect-auto md:h-[634px]" />

          {/* Overview */}
          <section className="flex flex-col gap-6 md:gap-10">
            <dl className="grid grid-cols-2 gap-x-4 gap-y-3 border-y border-[#e6e6e6] py-4 text-[15px] md:grid-cols-5 md:text-[24px]">
              {metaLabels.map((label) => (
                <div key={label}>
                  <dt className="text-black/50">{label}</dt>
                  <dd className="font-[Arial,sans-serif] font-bold">Lorem ipsum</dd>
                </div>
              ))}
            </dl>
            <div className="flex flex-col gap-6 md:flex-row md:justify-between">
              <h1 className={`${jaro} text-[56px] uppercase leading-[0.9] text-black md:text-[96px]`}>{name}</h1>
              <p className="text-[19px] leading-[1.4] md:max-w-[620px] md:text-[24px]">{LOREM_LONG}</p>
            </div>
          </section>

          {/* Research */}
          <section className="flex flex-col gap-10">
            <SectionTitle>RESEARCH</SectionTitle>

            <div className="flex flex-col gap-4">
              <Subtitle>Objectives and team</Subtitle>
              <div className="grid gap-6 md:grid-cols-2 md:gap-16">
                <div className="flex flex-col gap-4">
                  <Bullets items={loremList(5)} ordered />
                  <p>{LOREM_LONG}</p>
                </div>
                <div className="flex gap-3">
                  {[0, 1, 2].map((index) => (
                    <Placeholder className="size-[72px] md:size-[100px]" key={index} />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Subtitle>Methods</Subtitle>
              <div className="grid gap-4 md:grid-cols-2 md:gap-16">
                <Bullets items={loremList(2)} />
                <Bullets items={loremList(4).slice(2)} />
              </div>
            </div>

            <div className="flex flex-col gap-3 md:gap-4">
              {[0, 1, 2].map((index) => (
                <Placeholder className="aspect-[16/9] w-full" key={index} />
              ))}
              <div className="grid gap-3 md:grid-cols-2 md:gap-4">
                <Placeholder className="aspect-[4/3] w-full" />
                <Placeholder className="aspect-[4/3] w-full" />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Subtitle>Insights</Subtitle>
              <div className="grid gap-6 md:grid-cols-2 md:gap-16">
                <Bullets items={loremList(5)} />
                <p className="font-['Inter:Medium'] font-medium">{LOREM}</p>
              </div>
            </div>

            <Placeholder className="mx-auto aspect-[346/717] w-[72%] rounded-[44px] md:w-[346px] md:rounded-[60px]" kind="video" />
          </section>

          {/* Design */}
          <section className="flex flex-col gap-10">
            <SectionTitle>DESIGN</SectionTitle>

            <div className="flex flex-col gap-4">
              <Subtitle>Functionalities</Subtitle>
              <div className="grid gap-6 md:grid-cols-2 md:gap-16">
                <Bullets items={loremList(5)} />
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <Placeholder className="aspect-[9/19] w-full rounded-[20px]" />
                  <Placeholder className="aspect-[9/19] w-full rounded-[20px]" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
                {[0, 1, 2, 3, 4].map((index) => (
                  <Placeholder className="aspect-[1/2] w-full rounded-[16px]" key={index} />
                ))}
              </div>
            </div>

            <Placeholder className="mx-auto aspect-[346/717] w-[72%] rounded-[44px] md:w-[346px] md:rounded-[60px]" kind="video" />

            <div className="flex flex-col gap-4">
              <Subtitle>Branding</Subtitle>
              <p className="md:max-w-[700px]">{LOREM}</p>
              <div className="grid gap-3 md:grid-cols-3 md:gap-4">
                {[
                  ["Tipografía", "aspect-[4/3]"],
                  ["Ilustración", "aspect-[4/3]"],
                  ["Colores", "aspect-[4/3]"],
                ].map(([label, ratio]) => (
                  <div className="flex flex-col gap-2" key={label}>
                    <p className="font-['Sofia_Sans_Extra_Condensed:Medium'] text-[28px] uppercase leading-[1] md:text-[40px]">
                      {label}
                    </p>
                    <Placeholder className={`${ratio} w-full`} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Outcomes */}
          <section className="flex flex-col gap-10">
            <SectionTitle>OUTCOMES &amp; LEARNINGS</SectionTitle>
            <div className="flex flex-col gap-4">
              <Subtitle>To improve</Subtitle>
              <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-16">
                <Bullets items={loremList(8)} />
                <div className="grid grid-cols-3 gap-3 md:gap-6">
                  {[0, 1, 2].map((index) => (
                    <Placeholder className="aspect-[256/564] w-full rounded-[24px] md:rounded-[40px]" key={index} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer
          className="flex flex-col gap-10 bg-[#121212] px-4 pb-12 pt-4 text-white md:grid md:grid-cols-3 md:pb-16 md:text-[21px]"
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
