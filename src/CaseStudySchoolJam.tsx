import type { CSSProperties, ReactNode } from "react";
import { PhoneVideo } from "./CaseStudyMoonrider";

// School Jam case study, built from the Figma frame "Case Study - School Jam" (node 79:272).
// Desktop matches the 1440px design; below 768px everything stacks into one column.

const asset = (file: string) => `/assets/school-jam/${file}`;

const jaro = "font-['Jaro:Regular'] [font-variation-settings:'opsz'_6]";
const avenir = "font-[Avenir,'Avenir_Next',Inter,Arial,sans-serif]";
const bodyText = "text-[17px] leading-[1.45] tracking-[-0.53px] md:text-[24px] md:leading-[31px]";
const captionText = "font-['Inter'] font-light text-[14px] leading-[1.2] text-black md:text-[16px]";
const navLink = "rounded border px-2 py-0.5 md:px-[11px] md:py-1";

// Bold run inside body copy (the Figma Inter face only ships weight 400).
function B({ children }: { children: ReactNode }) {
  return <strong className="font-['Inter'] font-bold">{children}</strong>;
}

type CropBox = { width: string; height: string; left: string; top: string };

// Shows the part of a large Figma image that the design frames, at any size.
function Crop({
  src,
  alt,
  ratio,
  crop,
  className = "",
}: {
  src: string;
  alt: string;
  ratio: string;
  crop: CropBox;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ aspectRatio: ratio }}>
      <img alt={alt} className="absolute max-w-none" decoding="async" loading="lazy" src={src} style={crop} />
    </div>
  );
}

type Screen = { file: string; alt: string; ratio: string; crop: CropBox };

const crop = (width: string, height: string, left: string, top: string): CropBox => ({ width, height, left, top });

// App screens: each image is a phone mockup on a wide board, cropped to the phone.
const twoAudiences: Screen[] = [
  { file: "2fa30.png", alt: "School Jam navigation menu", ratio: "206 / 418", crop: crop("361.76%", "119.17%", "-128.31%", "-9.6%") },
  { file: "34075.png", alt: "Maths Help video for parents", ratio: "206 / 414", crop: crop("362.75%", "120.07%", "-129.34%", "-10.04%") },
];

const motivation: Screen[] = [
  { file: "a08dd.png", alt: "Well done screen after finishing an activity", ratio: "206 / 418", crop: crop("363.35%", "119.17%", "-128.87%", "-9.53%") },
  { file: "03732.png", alt: "Send to teacher screen", ratio: "211 / 414", crop: crop("353.99%", "120.07%", "-125.03%", "-10.05%") },
  { file: "a2b94.png", alt: "Achievements collection screen", ratio: "206 / 414", crop: crop("363.31%", "120.06%", "-129.67%", "-10.03%") },
];

const homeScreen: Screen = {
  file: "a9359.png",
  alt: "Home screen with the latest activities and videos from the teacher",
  ratio: "206 / 418",
  crop: crop("362.7%", "119.16%", "-129.51%", "-9.58%"),
};

const meta = [
  ["Industry", "Education"],
  ["Project type", "App"],
  ["Role", "UI Designer"],
  ["Organisation", "Pearson"],
  ["Location", "London"],
];

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className={`${jaro} px-4 pb-4 pt-10 text-[44px] leading-[1] text-black md:pt-16 md:text-[64px] md:leading-[84px]`}>
      {children}
    </h2>
  );
}

function Subtitle({ children }: { children: ReactNode }) {
  return <h3 className={`${jaro} text-[30px] leading-[1.1] text-black md:text-[52px] md:leading-[84px]`}>{children}</h3>;
}

// Each phone takes its design width (206 or 211px) as a share of the row.
function ScreenRow({ screens, caption, width }: { screens: Screen[]; caption: string; width: number }) {
  return (
    <figure className="flex w-full flex-col gap-2" style={{ maxWidth: width }}>
      <div className="flex items-start gap-3">
        {screens.map((screen) => (
          <div className="min-w-0" key={screen.file} style={{ flex: `${screen.ratio.split(" / ")[0]} 1 0` }}>
            <Crop alt={screen.alt} crop={screen.crop} ratio={screen.ratio} src={asset(screen.file)} />
          </div>
        ))}
      </div>
      <figcaption className={captionText}>{caption}</figcaption>
    </figure>
  );
}

// Hero illustrations, positioned as a share of the 1412x634 mint panel.
const heroPieces: { file: string; alt: string; box: CSSProperties; crop: CropBox }[] = [
  {
    file: "0d392.png",
    alt: "",
    box: { left: "65.08%", top: "15.14%", width: "16.15%", height: "36.28%" },
    crop: crop("435.27%", "608.84%", "-146.23%", "-496.17%"),
  },
  {
    file: "c8b2b.png",
    alt: "",
    box: { left: "25.85%", top: "44.79%", width: "11.47%", height: "31.7%" },
    crop: crop("477.54%", "273.76%", "-14.39%", "-173.76%"),
  },
  {
    file: "3515f.png",
    alt: "School Jam app on a phone",
    box: { left: "37.11%", top: "13.25%", width: "29.6%", height: "73.5%" },
    crop: crop("103.59%", "100%", "-7.35%", "0%"),
  },
];

export default function CaseStudySchoolJam() {
  return (
    <div className="min-h-screen bg-white font-['Inter:Regular'] text-black">
      <div className="mx-auto max-w-[1440px] overflow-x-clip">
        <header className="flex flex-col gap-3 border-b border-[#e6e6e6] px-4 py-3 md:h-[66px] md:flex-row md:items-center md:justify-between md:px-[14px] md:pb-[14px] md:pt-3">
          <a
            aria-label="Eva Caldas, back to home"
            className={`${jaro} text-[44px] leading-[1] text-black md:text-[52px]`}
            href="/"
          >
            EVA&nbsp;&nbsp;CALDAS
          </a>
          <nav aria-label="Primary navigation" className="flex flex-wrap gap-1.5 text-[16px] text-[#121212] md:text-[21px] md:leading-[32px]">
            <a aria-current="page" className={`${navLink} border-[#121212] bg-[#121212] text-white`} href="/">
              Work
            </a>
            <a className={`${navLink} border-[#e6e6e6]`} href="/play">
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

        <main className="flex flex-col">
          {/* Hero */}
          <div className="relative mx-4 mt-4 aspect-[1412/634] rounded bg-[#d4ebe5] md:mx-[14px] md:mt-0">
            {heroPieces.map((piece) => (
              <div className="absolute overflow-hidden" key={piece.file} style={piece.box}>
                <img alt={piece.alt} className="absolute max-w-none" src={asset(piece.file)} style={piece.crop} />
              </div>
            ))}
          </div>

          {/* Overview */}
          <dl
            className={`${avenir} mx-4 mt-8 grid grid-cols-2 gap-x-4 gap-y-3 py-3 text-[15px] leading-[1.35] md:mx-[19px] md:flex md:justify-between md:py-[6px] md:text-[24px] md:leading-[32px]`}
            style={{
              backgroundImage: `url(${asset("695f4.svg")}), url(${asset("695f4.svg")})`,
              backgroundPosition: "top, bottom",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 1px",
            }}
          >
            {meta.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd className="font-black md:font-[800]">{value}</dd>
              </div>
            ))}
          </dl>

          {/* Intro */}
          <section className="mt-10 flex flex-col gap-6 px-4 md:mt-[53px] md:flex-row md:justify-between md:px-[19.5px]">
            <div className="flex flex-col gap-4 md:w-[755px]">
              <h1 className={`${jaro} text-[56px] uppercase leading-[0.9] md:text-[96px] md:leading-[84px]`}>School Jam</h1>
              <div className="flex flex-col gap-6 md:gap-8">
                <p className="font-['Inter'] text-[24px] font-bold leading-[1.25] md:text-[36px] md:leading-[60px]">
                  Helping parents help their kids learn maths
                </p>
                <Crop
                  alt="School Jam app icon"
                  className="w-[121px]"
                  crop={crop("475.66%", "309.14%", "-7.34%", "-36.37%")}
                  ratio="121 / 131"
                  src={asset("28850.png")}
                />
              </div>
            </div>
            <div className="font-['Inter:Medium'] text-[19px] font-medium leading-[1.35] tracking-[-0.53px] text-[#0e0d0d] md:w-[454px] md:text-justify md:text-[27px] md:leading-[31px]">
              <p className="md:[text-indent:2.6em]">
                Parents of Reception and KS1 children (ages 4–7) want to help with maths, but the methods taught at school
                today are not the ones they learnt.
              </p>
              <p>
                Pearson created School Jam so teachers can send <B>short weekly activities and “Maths Help” videos home</B>,
                for families to do together.
              </p>
            </div>
          </section>

          {/* Onboarding animation */}
          <figure className="mx-auto mt-10 flex w-[72%] max-w-[350px] flex-col gap-2 md:mt-8 md:w-[350px]">
            <div className="overflow-hidden rounded-[36px] border-[10px] border-black md:rounded-[46px] md:border-[14px]">
              <PhoneVideo
                className="block aspect-[322/593] w-full !bg-white !object-contain"
                label="School Jam onboarding animation"
                poster={asset("onboarding-poster.jpg")}
                src={asset("onboarding.mp4")}
              />
            </div>
            <figcaption className={captionText}>Onboarding (animation)</figcaption>
          </figure>

          {/* Research */}
          <section className="mt-6 flex flex-col">
            <SectionTitle>RESEARCH</SectionTitle>
            <div className={`${bodyText} flex flex-col gap-4 px-4`}>
              <Subtitle>My Role</Subtitle>
              <div className="flex flex-col gap-6 md:grid md:grid-cols-[697fr_616fr] md:gap-[95px] md:pb-[31px]">
                <div>
                  <p>
                    <B>UI &amp; Visual Designer</B> in an international product team. UX decisions were led by the UX
                    designers; I owned the interface and the visual identity.
                  </p>
                  <ul className="list-disc ps-6 md:ps-[36px]">
                    <li>
                      <B>Research:</B> I was part of the team that interviewed early-years teachers about how they teach,
                      motivate and gamify learning. I added the questions that would inform design.
                    </li>
                    <li>
                      <B>Interface:</B> I designed the menu, onboarding, dashboard and achievements screens end to end, from
                      wireframes to high-fidelity prototypes and developer handoff.
                    </li>
                    <li>
                      <B>Identity:</B> I created the School Jam brand (logo, characters, illustrations) and the visual style
                      guide used by both the development team and the illustration team.
                    </li>
                    <li>I also supported brainstorming and naming.</li>
                  </ul>
                </div>
                <div>
                  <p>
                    We started by listening to teachers. From the team’s research, I moved from wireframes to high-fidelity
                    prototypes in Sketch and handed off through Zeplin.
                  </p>
                  <p>The style guide let developers and illustrators work from the same visual rules in parallel.</p>
                </div>
              </div>

              <Subtitle>Two audiences, one app</Subtitle>
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-[102px]">
                <div className="md:w-[697px] md:shrink-0">
                  <p>
                    Some screens were for the parent or guardian, some for the child, and some for both together. Rather
                    than splitting the app into an adult mode and a child mode, it stayed a single experience. That made the
                    interface carry the shift: clear and reassuring for adults, playful for children, without abrupt changes
                    in look and feel or tone of voice.
                  </p>
                  <p>
                    My part: illustrations and children’s characters belong to the child and shared screens. The Maths Help
                    videos for parents drop them entirely: they are filmed with real people, so adults get a clear, credible
                    explanation instead of a cartoon. The shared brand colours and typefaces keep both worlds recognisably
                    School Jam.
                  </p>
                </div>
                <ScreenRow
                  caption="Navigation menu, and the Maths Help videos for parents, filmed with real people."
                  screens={twoAudiences}
                  width={424}
                />
              </div>
            </div>
          </section>

          {/* Decisions intro */}
          <section className="mt-6 flex flex-col gap-4 px-4 py-6 md:mt-4 md:gap-6 md:px-[90px] md:py-8">
            <p className="font-['Inter'] text-[24px] font-bold leading-[1.25] md:max-w-[1085px] md:text-[36px] md:leading-[46px]">
              Bringing the product decisions to life in the interface
            </p>
            <p className="text-[17px] leading-[1.45] md:max-w-[1085px] md:text-[22px] md:leading-[32px]">
              The product and UX decisions below were made by the team. My job was to make them work visually, screen by
              screen.
            </p>
          </section>

          {/* Design */}
          <section className="flex flex-col">
            <SectionTitle>DESIGN</SectionTitle>
            <div className={`${bodyText} flex flex-col gap-4 px-4`}>
              <Subtitle>Motivation without competition</Subtitle>
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-[196px] md:pb-10">
                <div className="md:w-[518px] md:shrink-0">
                  <p>
                    Children this young should want to keep learning through play, without being put under pressure. The
                    team agreed there would be <B>no comparison with classmates</B>: each child only competes with
                    themselves.
                  </p>
                  <p>
                    The teacher interviews showed how much young children love collecting things, whether a sticker in
                    class or its digital equivalent. In the achievements screen I designed, children see the trophies they
                    have earned and the ones still to come: <B>a collection that grows with their own progress, not a ranking.</B>
                  </p>
                  <p>
                    Completing an activity is celebrated with <B>a photo of the child and their parent</B>, kept on the
                    phone. It turns the reward into a shared moment, which is the heart of the app’s appeal.
                  </p>
                </div>
                <ScreenRow
                  caption="Celebrating a finished activity, sharing it with the teacher, and the achievements collection."
                  screens={motivation}
                  width={647}
                />
              </div>

              <Subtitle>What families see first</Subtitle>
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-[241px]">
                <div className="md:w-[697px] md:shrink-0">
                  <p>
                    The dashboard opens on <B>what the teacher has just sent</B>: new activities and Maths Help videos.
                  </p>
                  <p>
                    Activities can be fully digital, or instructions for an offline activity that the family confirms with
                    a photo. The interface had to present both as <B>equally valid ways to do maths together</B>.
                  </p>
                </div>
                <figure className="flex w-[60%] max-w-[300px] flex-col gap-2 md:w-[300px]">
                  <Crop
                    alt={homeScreen.alt}
                    className="w-[68.67%]"
                    crop={homeScreen.crop}
                    ratio={homeScreen.ratio}
                    src={asset(homeScreen.file)}
                  />
                  <figcaption className={captionText}>Home screen: the latest activities and videos from the teacher.</figcaption>
                </figure>
              </div>

              <Subtitle>A brand of its own, inside Pearson’s</Subtitle>
              <div className="flex flex-col gap-6 md:grid md:grid-cols-[428fr_167fr_716fr] md:items-start md:gap-[58px]">
                <div>
                  <p>
                    Colours and typefaces come from <B>Pearson’s brand manual</B>, giving schools and families the trust of
                    a known publisher.
                  </p>
                  <p>
                    The logo, characters and illustrations were created for School Jam so young children experience it as{" "}
                    <B>play, not schoolwork</B>.
                  </p>
                </div>
                {/* Character detail: the board image turned 90°, as in the design. */}
                <div className="relative aspect-[167/111] w-[167px] overflow-hidden md:w-full">
                  <div
                    className="absolute left-1/2 top-1/2 h-[150.45%] w-[66.47%] -translate-x-1/2 -translate-y-1/2 rotate-90 overflow-hidden"
                  >
                    <img
                      alt="School Jam chameleon character"
                      className="absolute max-w-none"
                      loading="lazy"
                      src={asset("ed513.png")}
                      style={crop("888.83%", "419.87%", "-73.87%", "-305.45%")}
                    />
                  </div>
                </div>
                <Crop
                  alt="School Jam style guide: Open Sans typefaces, brand colours and logo versions"
                  className="rounded-[16px] bg-white md:rounded-[25px]"
                  crop={crop("137.79%", "120.89%", "-29.75%", "-17.43%")}
                  ratio="716 / 580"
                  src={asset("ed513.png")}
                />
              </div>
            </div>
          </section>

          {/* Outcomes */}
          <section className="flex flex-col pb-16 md:pb-8">
            <SectionTitle>OUTCOMES &amp; LEARNINGS</SectionTitle>
            <div className={`${bodyText} flex flex-col gap-6 px-4 md:flex-row md:gap-[100px]`}>
              <p className="md:w-[604px]">
                School Jam launched on iOS in 2019. Seven years on, it is still part of Pearson’s primary maths offer, sold
                to schools through ActiveLearn Primary alongside Power Maths and aligned with White Rose Maths.
              </p>
              <div className="md:w-[531px]">
                <p>
                  I would turn the style guide into a true design system. At the time we worked in Sketch and Zeplin, and
                  what I delivered was a set of visual rules, not reusable components or tokens.
                </p>
                <p>
                  Today I would build a shared component library between design and development from day one, so new
                  activities could be added without redrawing each screen.
                </p>
              </div>
            </div>
          </section>
        </main>

        <footer
          className="flex flex-col gap-10 bg-[#121212] px-4 pb-12 pt-4 text-white md:mt-0 md:grid md:min-h-[245px] md:grid-cols-3 md:gap-[10px] md:pb-16 md:text-[21px] md:leading-[32px]"
          id="contact"
        >
          <p>©2026</p>
          <div className="flex flex-col gap-6 md:col-start-3">
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
