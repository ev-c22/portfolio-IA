import type { CSSProperties, ReactNode } from "react";

// Pinpoint case study, built from the Figma frame "Pinpoint" (node 91:1601).
// Desktop matches the 1440px design; below 768px everything stacks into one column.

const asset = (file: string) => `/assets/pinpoint/${file}`;

const jaro = "font-['Jaro:Regular'] [font-variation-settings:'opsz'_6]";
const avenir = "font-[Avenir,'Avenir_Next',Inter,Arial,sans-serif]";
const bodyText = "text-[17px] leading-[1.45] tracking-[-0.53px] md:text-[24px] md:leading-[31px]";
const captionText = "font-[Avenir,'Inter'] font-light text-[14px] leading-[1.2] text-black md:text-[16px]";
const navLink = "rounded border px-2 py-0.5 md:px-[11px] md:py-1";

// Diamond gradient behind the hero, exported from Figma.
const heroBackground =
  "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1412 634' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><g transform='matrix(47.55 109.1 -242.98 105.9 706 317)' opacity='1'><rect height='46.871' width='91.426' fill='url(%23grad)' id='quad' shape-rendering='crispEdges'/><use href='%23quad' transform='scale(1 -1)'/><use href='%23quad' transform='scale(-1 1)'/><use href='%23quad' transform='scale(-1 -1)'/></g><defs><linearGradient id='grad' gradientUnits='userSpaceOnUse' x2='5' y2='5'><stop stop-color='rgba(78,135,151,1)' offset='0'/><stop stop-color='rgba(63,110,123,1)' offset='0.26442'/><stop stop-color='rgba(44,77,86,1)' offset='0.63221'/><stop stop-color='rgba(25,44,49,1)' offset='1'/></linearGradient></defs></svg>\")";

type CropBox = { width: string; height: string; left: string; top: string };
const crop = (width: string, height: string, left: string, top: string): CropBox => ({ width, height, left, top });

// Shows the part of a large Figma image that the design frames, at any size.
function Crop({
  src,
  alt,
  ratio,
  crop: box,
  className = "",
  style,
}: {
  src: string;
  alt: string;
  ratio: string;
  crop: CropBox;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ aspectRatio: ratio, ...style }}>
      <img alt={alt} className="absolute max-w-none" decoding="async" loading="lazy" src={src} style={box} />
    </div>
  );
}

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

export default function CaseStudyPinpoint() {
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
          {/* Hero: teal panel with the tablet mock-up and two characters. */}
          <div
            className="relative mx-4 mt-4 aspect-[1412/634] overflow-hidden rounded bg-[#2c4d56] md:mx-[14px] md:mt-0"
            style={{ backgroundImage: heroBackground, backgroundSize: "100% 100%" }}
          >
            <div className="absolute overflow-hidden" style={{ left: "32.58%", top: "0.79%", width: "36.26%", height: "92.59%" }}>
              <img
                alt="Pinpoint app on a tablet"
                className="absolute max-w-none"
                src={asset("0ef50.png")}
                style={crop("249.84%", "110.75%", "-28.44%", "0%")}
              />
            </div>
            <img
              alt=""
              className="absolute object-cover"
              src={asset("5c927.png")}
              style={{ left: "61.47%", top: "50.16%", width: "16.08%", height: "31.55%" }}
            />
            <img
              alt=""
              className="absolute object-cover"
              src={asset("3ec05.png")}
              style={{ left: "14.24%", top: "50.16%", width: "16.08%", height: "31.55%" }}
            />
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
              <h1 className={`${jaro} text-[56px] uppercase leading-[0.9] md:text-[96px] md:leading-[84px]`}>Pinpoint</h1>
              <p className={`${jaro} text-[32px] leading-[1.1] md:w-[824px] md:text-[52px] md:leading-[52px]`}>
                Branding for primary school resources
              </p>
            </div>
            <p className="font-['Inter:Medium'] text-[19px] font-medium leading-[1.35] tracking-[-0.53px] text-[#0e0d0d] md:w-[454px] md:text-justify md:text-[27px] md:leading-[31px] md:[text-indent:2.6em]">
              Visual identity for the new series of products for primary schools, Pinpoint, by Pearson. They are specific
              resources for teachers, starting with two subjects, English and Maths.
            </p>
          </section>

          <Crop
            alt="Pinpoint teacher resource book cover"
            className="mx-auto mt-8 w-[calc(100%-32px)] md:w-[754px]"
            crop={crop("169.41%", "213.05%", "-34.17%", "-50.02%")}
            ratio="754 / 450"
            src={asset("1f504.png")}
          />

          {/* Branding */}
          <section className="flex flex-col">
            <SectionTitle>BRANDING</SectionTitle>
            <div className="flex flex-col gap-4 px-4">
              <Subtitle>Logos</Subtitle>
              <p className={`${bodyText} md:w-[697px]`}>
                This series were in need of a base logo that could be adapted to each subcategory. The shape comes from the
                “p” of pinpoint and the shape of a pin on a map. It can be used on its own as an icon. However it’s most
                commonly seen with the word “pinpoint” next to it. Below it can be seen how it works in the covers of the
                different resources.
              </p>

              <div className="mx-auto mt-4 flex w-full max-w-[1082px] flex-col items-center gap-6 rounded bg-[#005d77] px-3 md:mt-0 md:gap-8 md:px-[23px]">
                <Crop
                  alt="Pinpoint logo"
                  className="w-full max-w-[900px]"
                  crop={crop("101.16%", "158.94%", "-0.58%", "-25.42%")}
                  ratio="900 / 358"
                  src={asset("ab3ee.png")}
                />
                <img
                  alt="Pinpoint logo variations for English and Maths"
                  className="aspect-[712/448] w-full max-w-[712px] object-contain"
                  loading="lazy"
                  src={asset("8857c.jpg")}
                />
                <Crop
                  alt="Pinpoint resource covers"
                  className="w-full"
                  crop={crop("109.65%", "100%", "-4.83%", "0%")}
                  ratio="1036 / 639"
                  src={asset("9c4cd.png")}
                />
              </div>

              <div className="mt-6 md:mt-0">
                <Subtitle>Style Guidelines</Subtitle>
              </div>
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-center md:gap-[102px]">
                <p className={`${bodyText} md:w-[438px] md:shrink-0`}>
                  I put together a style guide for the Pinpoint marketing materials and another for the teacher resources. I
                  also provided a library of characters and cover templates so any other designer could create them in the
                  future.
                </p>
                <Crop
                  alt="Pinpoint style guide spreads"
                  className="w-full md:w-[849px]"
                  crop={crop("132.26%", "164.48%", "-16.06%", "-37.67%")}
                  ratio="849 / 512"
                  src={asset("b7255.png")}
                />
              </div>
            </div>
          </section>

          {/* Characters, packaging and app */}
          <section className="mt-6 flex flex-col gap-4 px-4">
            <Subtitle>Characters</Subtitle>
            <div className="flex justify-center rounded-[25px] bg-[#005d77] px-4 py-10 md:py-[90px]">
              <div className="flex w-full max-w-[1082px] flex-col items-center">
                <Crop
                  alt="Pinpoint English characters"
                  className="w-full"
                  crop={crop("108.88%", "100.8%", "0%", "-1.42%")}
                  ratio="1082 / 246"
                  src={asset("c9ae0.png")}
                />
                <Crop
                  alt="Pinpoint Maths characters"
                  className="w-[81.24%]"
                  crop={crop("99.63%", "106.13%", "0.93%", "0%")}
                  ratio="879 / 245"
                  src={asset("a97db.png")}
                />
              </div>
            </div>

            <div className="mt-6 md:mt-0">
              <Subtitle>Packaging</Subtitle>
            </div>
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-[241px]">
              <p className={`${bodyText} md:w-[697px]`}>
                The resources also included cards and their box, which I designed and prepared the file for printing.
              </p>
              <Crop
                alt="Pinpoint Maths card box"
                className="mx-auto w-[80%] max-w-[424px] md:mx-0 md:w-[424px]"
                crop={crop("211.02%", "119.89%", "-47.25%", "-13.13%")}
                ratio="424 / 533"
                src={asset("5c311.png")}
              />
            </div>

            <div className="mt-6 md:mt-0">
              <Subtitle>App</Subtitle>
            </div>
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-[58px]">
              <p className={`${bodyText} md:w-[428px]`}>
                Because of a company internal competition, we designed a prototype for a Pinpoint digital product, a gamified
                learning experience for kids and their classmates.
              </p>
              <figure className="mx-auto flex w-[72%] max-w-[358px] flex-col gap-4 md:mx-0 md:w-[358px]">
                <div className="relative aspect-[358/621] overflow-hidden rounded-[25px] border border-black">
                  <img
                    alt="Pinpoint Play welcome screen"
                    className="absolute inset-0 size-full object-cover"
                    loading="lazy"
                    src={asset("prototype-frame.png")}
                  />
                </div>
                <figcaption className={`${captionText} text-center`}>Animated prototype</figcaption>
              </figure>
            </div>
          </section>

          {/* Outcomes */}
          <section className="flex flex-col pb-16 md:pb-8">
            <SectionTitle>OUTCOMES &amp; LEARNINGS</SectionTitle>
            <div className={`${bodyText} flex flex-col gap-6 px-4 md:flex-row md:gap-[100px]`}>
              <p className="md:w-[602px]">
                School Jam launched on iOS in 2019. Seven years on, it is still part of Pearson’s primary maths offer, sold to
                schools through ActiveLearn Primary alongside Power Maths and aligned with White Rose Maths.
              </p>
              <div className="flex flex-col md:w-[531px]">
                <p>
                  I would turn the style guide into a true design system. At the time we worked in Sketch and Zeplin, and what
                  I delivered was a set of visual rules, not reusable components or tokens.
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
          className="flex flex-col gap-10 bg-[#121212] px-4 pb-12 pt-4 text-white md:grid md:min-h-[211px] md:grid-cols-3 md:gap-[10px] md:pb-16 md:text-[21px] md:leading-[32px]"
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
