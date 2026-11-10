import { useEffect, useState, type ReactNode } from "react";
import CaseStudyMoonrider, { heroBackground } from "./CaseStudyMoonrider";

// Mobile version of the Moonrider case study. Same content and images as the
// desktop page (exported from Figma Make), laid out in a single readable column.

const asset = (file: string) => `/assets/moonrider/${file}`;

const MOBILE_QUERY = "(max-width: 767px)";

// Picks the mobile layout on narrow screens and the desktop design otherwise.
export function MoonriderPage() {
  const [isMobile, setIsMobile] = useState(() => window.matchMedia(MOBILE_QUERY).matches);

  useEffect(() => {
    const media = window.matchMedia(MOBILE_QUERY);
    const update = () => setIsMobile(media.matches);
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return isMobile ? <CaseStudyMoonriderMobile /> : <CaseStudyMoonrider />;
}

const jaro = "font-['Jaro:Regular'] [font-variation-settings:'opsz'_6]";
const sofia = "font-['Sofia_Sans_Extra_Condensed:Medium'] uppercase";

const heroScreens = ["12f74.png", "32e3f.png", "d64c7.png", "6ee1d.png"];

const meta = [
  ["Industry", "Accesibility"],
  ["Project type", "App"],
  ["Role", "UX/UI Designer"],
  ["Organisation", "ELISAVA (University project)"],
  ["Location", "Barcelona"],
];

const objectives = [
  "Help people with disabilities enjoy nightlife in Barcelona",
  "Promote inclusive social spaces",
  "Create a network of information and verification in real time",
  "Create and inclusive, efficient and trustable tool",
  "Create an user experience adapted to the needs and preferences of the user",
];

const methods = [
  "Observation of people with disabilities on public transport, the street and what they have to say on social media.",
  "Interviews with people with temporary or permanent disabilities",
  "Desk research, reports and talks from associations and communities that fight for accessibility",
  "Benchmarking of digital services that operate in the leisure sector or have accessibility functionalities.",
];

// Research boards: detailed images, so each one opens full size on tap.
const researchBoards = [
  { file: "7dc09.png", alt: "Benchmark research comparing Moonrider with other apps" },
  { file: "a9532.png", alt: "Personas: Ana Amat (user) and Ruth Sánchez (collaborator)" },
  { file: "fe872.png", alt: "Ana's user flow" },
  { file: "abeda.png", alt: "Ruth's user flow" },
  { file: "8756c.png", alt: "Moonrider app flow diagram" },
  { file: "ca2e4.png", alt: "User journey and empathy map for Ana and Ruth" },
];

const insights = [
  "Current apps aren’t satisfying",
  "Gap between legislation and its application",
  "Negative emotions",
  "Wish to participate in the solutions",
  "Community is important to keep service updated but has limitations",
];

const functionalities = [
  "Custom profile",
  "Route and space visualisation",
  "Create and save plans",
  "Verified opinions",
  "Real time updates",
];

// Crops of the tall accessibility screen, matching the desktop design.
const accessibilityCrops = [
  { ratio: "248 / 516", height: "386.71%", top: "-3.43%" },
  { ratio: "248 / 336", height: "593.88%", top: "-158.85%" },
  { ratio: "248 / 397", height: "502.63%", top: "-221.09%" },
  { ratio: "251 / 442", height: "451.46%", top: "-289.3%" },
  { ratio: "251 / 254", height: "785.61%", top: "-678.63%" },
];

const primaryColors = ["#7200c4", "#444444", "#292929", "#040F0F"];
const secondaryColors = ["#86BBD8", "#9EE493", "#EB4C38"];
const componentIcons = ["24b83.svg", "0fa78.svg", "7489c.svg", "d0501.svg", "97cd8.svg", "dc0cc.svg", "454d1.svg"];

const improvements = [
  "Complete flows",
  "User tests",
  "Front/Back-end development",
  "Social aspect",
  "Accessibility for users with other types of disabilities",
  "Network of accessible venues",
  "AI for routes, suggestions and customer services",
  "Footprint optimization",
];

const outcomeScreens = ["780f9.png", "d1c72.png", "f4b20.png"];

function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className={`${jaro} text-[44px] leading-[1] text-black`}>{children}</h2>;
}

function Subtitle({ children }: { children: ReactNode }) {
  return <h3 className={`${jaro} text-[30px] leading-[1.1] text-black`}>{children}</h3>;
}

function Bullets({ items, ordered = false }: { items: string[]; ordered?: boolean }) {
  const List = ordered ? "ol" : "ul";
  return (
    <List className={`${ordered ? "list-decimal" : "list-disc"} space-y-1 ps-6`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </List>
  );
}

// Horizontal strip that scrolls sideways, snapping to each item.
function ScrollStrip({ children }: { children: ReactNode }) {
  return (
    <div className="-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none]">
      {children}
    </div>
  );
}

function BrandingLabel({ children }: { children: ReactNode }) {
  return <p className={`${sofia} text-[36px] leading-[1] text-black`}>{children}</p>;
}

function CaseStudyMoonriderMobile() {
  return (
    <div className="moonrider-page min-h-screen bg-white font-['Inter:Regular'] text-[17px] leading-[1.45] text-[#0e0d0d]">
      <header className="flex flex-col gap-3 border-b border-[#e6e6e6] px-4 pb-3 pt-3">
        <a
          aria-label="Eva Caldas, back to home"
          className={`${jaro} text-[44px] leading-[1] text-black`}
          href="/"
        >
          EVA&nbsp;&nbsp;CALDAS
        </a>
        <nav aria-label="Primary navigation" className="flex flex-wrap gap-1.5 text-[16px]">
          <a aria-current="page" className="rounded border border-[#121212] bg-[#121212] px-2 py-0.5 text-white" href="/">
            Work
          </a>
          <a className="rounded border border-[#e6e6e6] px-2 py-0.5" href="/#play">
            Play
          </a>
          <a className="rounded border border-[#e6e6e6] px-2 py-0.5" href="/#about">
            About
          </a>
          <a className="rounded border border-[#e6e6e6] px-2 py-0.5" href="#contact">
            Contact
          </a>
        </nav>
      </header>

      <main className="flex flex-col gap-14 px-4 pb-16 pt-4">
        {/* Hero */}
        <section aria-label="Moonrider app" className="flex flex-col gap-3">
          <div className="overflow-hidden rounded" style={{ backgroundImage: heroBackground, backgroundSize: "cover" }}>
            <img alt="Moonrider app on an iPhone" className="mx-auto w-[85%]" src={asset("18349.png")} />
          </div>
          <ScrollStrip>
            {heroScreens.map((file, index) => (
              <img
                alt={`Moonrider onboarding screen ${index + 1}`}
                className="w-[42%] shrink-0 snap-start rounded-[18px]"
                key={file}
                src={asset(file)}
              />
            ))}
          </ScrollStrip>
        </section>

        {/* Overview */}
        <section className="flex flex-col gap-6">
          <dl className="grid grid-cols-2 gap-x-4 gap-y-3 border-y border-[#e6e6e6] py-4 text-[15px]">
            {meta.map(([label, value]) => (
              <div key={label}>
                <dt className="text-black/50">{label}</dt>
                <dd className="font-[Arial,sans-serif] font-bold">{value}</dd>
              </div>
            ))}
          </dl>
          <h1 className={`${jaro} text-[64px] leading-[0.9] text-black`}>MOONRIDER</h1>
          <p className="text-[19px] leading-[1.4]">
            Our app helps young wheelchair users enjoy the nightlife in Barcelona in a comfortable, safe and
            efficient way, allowing them to integrate with other young people and be free and independent.
          </p>
        </section>

        {/* Research */}
        <section className="flex flex-col gap-8">
          <SectionTitle>RESEARCH</SectionTitle>

          <div className="flex flex-col gap-4">
            <Subtitle>Objectives and team</Subtitle>
            <Bullets items={objectives} ordered />
            <p>
              We were a team of four designers with different levels of expertise. Each one took one of two research
              topics that we synchronised at several times. All of us together took decisions on the user experience,
              interactions and visual design.
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-black/50">ODS</p>
              <div className="flex gap-3">
                {["c0374.png", "aaa9b.png", "77c3d.png"].map((file, index) => (
                  <img
                    alt={`Sustainable Development Goal ${[10, 11, 8][index]}`}
                    className="size-[72px] object-cover"
                    key={file}
                    src={asset(file)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Subtitle>Methods</Subtitle>
            <Bullets items={methods} />
          </div>

          <div className="flex flex-col gap-3">
            {researchBoards.map(({ file, alt }) => (
              <a className="block overflow-hidden rounded border border-[#e6e6e6]" href={asset(file)} key={file} target="_blank" rel="noreferrer">
                <img alt={alt} className="w-full" src={asset(file)} />
              </a>
            ))}
            <p className="text-[14px] text-black/50">Tap an image to see it full size.</p>
          </div>

          <div className="flex flex-col gap-4">
            <Subtitle>Insights</Subtitle>
            <Bullets items={insights} />
            <p className="font-['Inter:Medium'] font-medium">
              There is a need to design and develop better apps and improve awareness and empathy towards wheelchair
              users.
            </p>
          </div>

          <div className="relative h-[90px] overflow-hidden opacity-80" aria-hidden="true">
            <img
              alt=""
              className="absolute left-0 top-[-169.79%] h-[730.73%] w-full max-w-none opacity-30"
              src={asset("15bee.png")}
            />
          </div>
        </section>

        {/* Design */}
        <section className="flex flex-col gap-8">
          <SectionTitle>DESIGN</SectionTitle>

          <div className="flex flex-col gap-4">
            <Subtitle>Functionalities</Subtitle>
            <Bullets items={functionalities} />
            <ScrollStrip>
              <img alt="Moonrider home screen" className="w-[62%] shrink-0 snap-start rounded-[20px]" src={asset("6fc2f.png")} />
              <img alt="Moonrider venue list screen" className="w-[62%] shrink-0 snap-start rounded-[20px]" src={asset("cbb74.png")} />
            </ScrollStrip>
            <ScrollStrip>
              {accessibilityCrops.map(({ ratio, height, top }, index) => (
                <div
                  className="relative w-[48%] shrink-0 snap-start overflow-hidden rounded-[16px]"
                  key={index}
                  style={{ aspectRatio: ratio }}
                >
                  <img
                    alt={`Venue accessibility detail ${index + 1}`}
                    className="absolute left-0 w-full max-w-none"
                    src={asset("5b59d.png")}
                    style={{ height, top }}
                  />
                </div>
              ))}
            </ScrollStrip>
          </div>

          <div className="flex flex-col gap-4">
            <Subtitle>Branding</Subtitle>
            <p>
              Inspired by urban elements like doodles, graffiti, collage and stickers to create a dynamic, fresh and fun
              experience. Concepts: rebellion and juvenile spontaneity.
            </p>

            <div className="flex flex-col gap-10 rounded bg-[#e6e6e6] px-5 py-8">
              <div className="flex flex-col gap-3">
                <BrandingLabel>Tipografía</BrandingLabel>
                <div>
                  <p className="font-['Nunito:Bold'] text-[18px] font-bold">Sofia Sans Extra condensed</p>
                  <p className="font-['Sofia_Sans_Extra_Condensed:ExtraBold'] text-[56px] font-extrabold uppercase leading-[1] text-[#292929]">
                    ABCDE 1234
                  </p>
                </div>
                <div>
                  <p className="font-['Nunito:Bold'] text-[20px] font-bold">Nunito bold</p>
                  <p className="font-['Nunito:Bold'] text-[15px] font-bold text-[#292929]">ABCDE 1234</p>
                </div>
                <div>
                  <p className="font-['Nunito:Bold'] text-[20px] font-bold">Nunito regular</p>
                  <p className="font-['Nunito:Regular'] text-[15px] text-[#292929]">ABCDE 1234</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <BrandingLabel>Ilustración</BrandingLabel>
                <div className="flex flex-col gap-2">
                  <p className={`${sofia} text-[24px]`}>Garabatos</p>
                  <img alt="Doodles" className="w-[260px]" src={asset("1576d.svg")} />
                </div>
                <div className="flex flex-col gap-2">
                  <p className={`${sofia} text-[24px]`}>Pegatinas</p>
                  <p className="text-[14px]">Representativos</p>
                  <div className="flex items-center gap-2">
                    <img alt="Pizza sticker" className="w-[80px]" src={asset("d0d80.svg")} />
                    <img alt="Wheelchair user stickers" className="w-[180px] mix-blend-multiply" src={asset("1e55a.png")} />
                  </div>
                  <p className="text-[14px]">Experienciales</p>
                  <div className="flex items-center gap-3">
                    <img alt="Awesome sticker" className="w-[76px]" src={asset("cc2d9.svg")} />
                    <img alt="Yeah heart sticker" className="w-[84px]" src={asset("edea2.svg")} />
                    <img alt="Merci sticker" className="w-[76px]" src={asset("83016.svg")} />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <BrandingLabel>Colores</BrandingLabel>
                {[
                  ["Primarios", primaryColors],
                  ["Secundarios", secondaryColors],
                ].map(([label, colors]) => (
                  <div className="flex flex-col gap-2" key={label as string}>
                    <p className="font-['Nunito:Bold'] font-bold">{label as string}</p>
                    <div className="flex flex-wrap gap-4">
                      {(colors as string[]).map((color) => (
                        <div className="flex flex-col items-center gap-1" key={color}>
                          <span className="size-[52px] rounded-full" style={{ backgroundColor: color }} />
                          <span className="font-['Nunito:Medium'] text-[12px]">{color}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                <BrandingLabel>Componentes</BrandingLabel>
                <div className="flex gap-3">
                  <span className="rounded-full bg-[#7200c4] px-5 py-2 font-['Nunito:Bold'] text-[14px] font-bold text-white shadow-[2px_3px_0_#040f0f]">
                    Primario
                  </span>
                  <span className="rounded-full bg-[#292929] px-5 py-2 font-['Nunito:Bold'] text-[14px] font-bold text-white shadow-[2px_3px_0_#040f0f]">
                    Secundario
                  </span>
                </div>
                <div className="flex w-fit gap-3 rounded-lg bg-[#292929] px-3 py-2">
                  {componentIcons.map((file) => (
                    <img alt="" className="size-[22px]" key={file} src={asset(file)} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="flex flex-col gap-8">
          <SectionTitle>OUTCOMES &amp; LEARNINGS</SectionTitle>
          <div className="flex flex-col gap-4">
            <Subtitle>To improve</Subtitle>
            <Bullets items={improvements} />
          </div>
          <ScrollStrip>
            {outcomeScreens.map((file, index) => (
              <img
                alt={`Moonrider final design screen ${index + 1}`}
                className="w-[58%] shrink-0 snap-start rounded-[32px] border-[7px] border-[#1a1a1a]"
                key={file}
                src={asset(file)}
              />
            ))}
          </ScrollStrip>
        </section>
      </main>

      <footer className="flex flex-col gap-10 bg-[#121212] px-4 pb-12 pt-4 text-white" id="contact">
        <p>©2026</p>
        <div className="flex flex-col gap-4">
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
  );
}
