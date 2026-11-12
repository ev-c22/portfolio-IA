import type { CSSProperties, ReactNode } from "react";

// Mojubá case study, built from the Figma frame "Mojubá" (node 91:1719).
// Desktop matches the 1440px design; below 768px everything stacks into one column.

const asset = (file: string) => `/assets/mojuba/${file}`;

const jaro = "font-['Jaro:Regular'] [font-variation-settings:'opsz'_6]";
const avenir = "font-[Avenir,'Avenir_Next',Inter,Arial,sans-serif]";
const condensed = "font-['Avenir_Next_Condensed','Sofia_Sans_Extra_Condensed:ExtraBold',Arial_Narrow,sans-serif] font-bold";
const bodyText = "text-[17px] leading-[1.45] tracking-[-0.53px] md:text-[24px] md:leading-[31px]";
const navLink = "rounded border px-2 py-0.5 md:px-[11px] md:py-1";

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
  ["Industry", "Hospitality"],
  ["Project type", "Marketing materials"],
  ["Role", "UX/UI Designer"],
  ["Organisation", "ELISAVA"],
  ["Location", "Barcelona"],
];

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className={`${jaro} px-4 pb-4 pt-10 text-[44px] leading-[1] text-black md:pt-16 md:text-[64px] md:leading-[84px]`}>
      {children}
    </h2>
  );
}

function EventTitle({ children }: { children: ReactNode }) {
  return <h3 className={`${condensed} text-[24px] leading-[1.3] text-black md:text-[28px] md:leading-[40px]`}>{children}</h3>;
}

export default function CaseStudyMojuba() {
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
          {/* Hero: grey panel with three capoeira illustrations. */}
          <div className="relative mx-4 mt-4 aspect-[1412/634] rounded bg-[#b1b1b3] md:mx-[14px] md:mt-0">
            <div className="absolute" style={{ left: "30.52%", top: "4.57%", width: "36.05%" }}>
              <Crop
                alt="Capoeira player illustration"
                crop={crop("193.35%", "118.4%", "-45.62%", "-10.91%")}
                ratio="509 / 585"
                src={asset("b888e.png")}
              />
            </div>
            <div className="absolute" style={{ left: "13.53%", top: "27.6%", width: "23.65%" }}>
              <Crop alt="" crop={crop("147.82%", "100%", "0.09%", "0.08%")} ratio="334 / 348" src={asset("1da7c.png")} />
            </div>
            <div className="absolute" style={{ left: "60.91%", top: "31.55%", width: "24.72%" }}>
              <Crop alt="" crop={crop("177.32%", "130.21%", "-33.52%", "-15.98%")} ratio="349 / 335" src={asset("14e84.png")} />
            </div>
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
          <section className="mt-10 flex flex-col gap-4 px-4 md:mt-[53px] md:px-[19.5px]">
            <h1 className={`${jaro} text-[56px] uppercase leading-[0.9] md:text-[96px] md:leading-[84px]`}>Mojubá</h1>
            <p className={`${condensed} text-[30px] leading-[1.2] md:text-[44px] md:leading-[60px]`}>Promotional materials</p>
          </section>

          {/* Regular classes */}
          <section className="flex flex-col">
            <SectionTitle>REGULAR CLASSES</SectionTitle>
            <div className="flex flex-col gap-8 px-4 md:flex-row md:items-start">
              <p className={`${bodyText} md:w-[370px] md:shrink-0`}>
                Several promotional materials for the Mojubá Capoeira client, that was in need of printed posters and flyers,
                merchandise, as well as social media assets for their regular classes, workshops and events. Below is the
                poster and flyer for the regular classes.
              </p>
              <div className="flex flex-1 items-end">
                <Crop
                  alt="Regular classes flyer"
                  className="w-[53.82%]"
                  crop={crop("385.61%", "436.01%", "-174.27%", "-150.03%")}
                  ratio="550 / 430"
                  src={asset("11414.png")}
                />
                <Crop
                  alt="Regular classes poster"
                  className="w-[46.18%]"
                  crop={crop("305.56%", "188.28%", "-38.17%", "-11.1%")}
                  ratio="472 / 677"
                  src={asset("11414.png")}
                />
              </div>
            </div>
          </section>

          {/* Celebrating 20 years */}
          <section className="flex flex-col">
            <SectionTitle>CELEBRATING 20 YEARS</SectionTitle>
            <p className={`${bodyText} px-4 text-[#333] md:w-[621px] md:box-content`}>
              Set of promotional materials for the groups 20-year anniversary.
            </p>
            <Crop
              alt="20-year anniversary poster, flyers and website"
              className="mx-auto mt-8 w-[calc(100%-32px)] md:w-[1082px]"
              crop={crop("148.24%", "106.31%", "-11.37%", "-6.31%")}
              ratio="1082 / 1331"
              src={asset("3a611.png")}
            />
          </section>

          {/* Gira festival */}
          <section className="flex flex-col">
            <SectionTitle>GIRA FESTIVAL</SectionTitle>
            <p className={`${bodyText} px-4 md:w-[621px] md:box-content`}>
              Set of marketing material for one of their international events. To create these images I used hand-drawing,
              photo retouching and digital painting.
            </p>
            <img
              alt="Gira Festival posters, flyers and website"
              className="mt-8 aspect-[1424/1020] w-full object-contain md:ms-4 md:w-[calc(100%-16px)]"
              loading="lazy"
              src={asset("fcace.png")}
            />
          </section>

          {/* Social media */}
          <section className="flex flex-col">
            <SectionTitle>SOCIAL MEDIA</SectionTitle>
            <div className="flex flex-col gap-10 px-4 md:grid md:grid-cols-2 md:gap-[90px]">
              <div className="flex w-full max-w-[446px] flex-col gap-4 md:gap-8">
                <EventTitle>Coração Cantador</EventTitle>
                <div className="flex flex-col gap-4">
                  <img
                    alt="Coração Cantador Instagram post"
                    className="aspect-[436/435] w-full max-w-[436px] object-contain"
                    loading="lazy"
                    src={asset("2748a.jpg")}
                  />
                  <Crop
                    alt="Coração Cantador Instagram stories"
                    className="w-full max-w-[436px]"
                    crop={crop("262.92%", "344.22%", "-16.15%", "-174.83%")}
                    ratio="436 / 294"
                    src={asset("8e446.png")}
                  />
                </div>
              </div>
              <div className="flex w-full max-w-[446px] flex-col gap-4 md:gap-8">
                <EventTitle>Winter Event</EventTitle>
                <div className="flex flex-col gap-4">
                  <img
                    alt="Winter Event Instagram post"
                    className="aspect-square w-full max-w-[442px] object-cover"
                    loading="lazy"
                    src={asset("27848.jpg")}
                  />
                  <Crop
                    alt="Winter Event Instagram posts"
                    className="w-full max-w-[432px]"
                    crop={crop("265.35%", "674.67%", "-16.41%", "-43.33%")}
                    ratio="432 / 150"
                    src={asset("8e446.png")}
                  />
                </div>
              </div>
            </div>
            <p className={`${bodyText} mt-10 px-4 md:mt-16 md:w-[1082px] md:box-content`}>
              Here there is a selection of digital marketing assets, for Instagram particularly, of two of their events. All
              the information were presented as small chunks and released in a timely manner, so to improve audience
              engagement. The look and feel allowed to recognize the different posts as part of the same event, at the same
              time they vary a bit so they are not repetitive.
            </p>
          </section>

          {/* T-shirts */}
          <section className="mt-8 flex flex-col gap-6 px-4 pb-16 md:gap-8 md:pb-[72px]">
            <h2 className={`${condensed} text-[30px] leading-[1.2] md:text-[44px] md:leading-[60px]`}>T-shirts</h2>
            <p className={`${avenir} text-[17px] md:text-[24px]`}>A selection of different t-shirts created through time.</p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:w-[1264px] md:max-w-full md:gap-10">
              <img
                alt="Mojubá t-shirt with capoeira illustration"
                className="aspect-[741/762] w-full object-cover"
                loading="lazy"
                src={asset("353c3.png")}
              />
              <Crop
                alt="White Mojubá t-shirt"
                className="w-full"
                crop={crop("194.19%", "116.13%", "-47.91%", "-8.24%")}
                ratio="731 / 764"
                src={asset("f2960.png")}
              />
              <img
                alt="Orange Mojubá t-shirt"
                className="aspect-[740/761] w-full object-cover"
                loading="lazy"
                src={asset("27972.png")}
              />
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
