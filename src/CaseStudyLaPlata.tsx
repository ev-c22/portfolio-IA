import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

// La Plata case study, built from the Figma frame "Case Study - La Plata" (node 85:1012).
// Desktop matches the 1440px design; below 768px everything stacks into one column.

const asset = (file: string) => `/assets/la-plata/${file}`;

const jaro = "font-['Jaro:Regular'] [font-variation-settings:'opsz'_6]";
const avenir = "font-[Avenir,'Avenir_Next',Inter,Arial,sans-serif]";
const condensed = "font-['Avenir_Next_Condensed','Sofia_Sans_Extra_Condensed:ExtraBold',Arial_Narrow,sans-serif] font-bold";
const bodyText = "text-[17px] leading-[1.45] tracking-[-0.53px] md:text-[24px] md:leading-[31px]";
const captionText = "font-[Avenir,'Inter'] font-light text-[14px] leading-[1.2] text-black md:text-[16px]";
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
  ["Project type", "App & web"],
  ["Role", "UX/UI Designer"],
  ["Organisation", "ELISAVA"],
  ["Location", "Barcelona"],
];

// Online queue: three screens cropped from one Behance board.
const queueScreens = [
  { alt: "Queue availability screen", ratio: "231 / 610", width: 231, crop: crop("525.13%", "149.13%", "-209.74%", "-4.47%") },
  { alt: "Queue position screen", ratio: "227 / 610", width: 227, crop: crop("533.33%", "149.13%", "-320.31%", "-4.27%") },
  { alt: "Queue customer details screen", ratio: "230 / 610", width: 230, crop: crop("527.84%", "149.13%", "-420.62%", "-4.47%") },
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

// Site map drawn at its 1408x787 design size, scaled down to fit narrower screens.
const SITEMAP_W = 1408;
const SITEMAP_H = 787;

function SiteMap() {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const update = () => setScale(Math.min(1, element.clientWidth / SITEMAP_W));
    update();
    const observer = new ResizeObserver(update);
    observer.observe(element);
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <figure className="w-full" ref={ref}>
      <div style={{ height: SITEMAP_H * scale }}>
        <div
          aria-label="Site map: Home links to La Plata, Tapas, Vermut, Hacer fila and Contacto, each with its content pages and external links"
          className="origin-top-left"
          role="img"
          style={{ width: SITEMAP_W, transform: `scale(${scale})` }}
        >
          <SiteMapDiagram />
        </div>
      </div>
    </figure>
  );
}

const poppins = "font-['Poppins'] text-[16px] leading-[22px]";
const page = "bg-[blue]";
const content = "bg-[#bdc5e4]";
const external = "border-2 border-dashed border-[#003cce]";
const cell = "col-start-1 row-start-1 relative";

function Line({ src, className, inset }: { src: string; className: string; inset: string }) {
  return (
    <div className={`${cell} ${className}`}>
      <div className="absolute" style={{ inset }}>
        <img alt="" className="block size-full max-w-none" src={asset(src)} />
      </div>
    </div>
  );
}

function SiteMapDiagram() {
  return (
    <div className="inline-grid w-full grid-rows-[max-content] place-items-start leading-[0]">
      <Line className="ml-[90.48%] mt-[153.7px] h-[217.263px] w-0" inset="0 -3.68px -0.23% -3.68px" src="0487c.svg" />
      <div className={`${cell} ml-0 mt-[91.3px] h-[62.405px] w-full rounded-[10px] bg-[#e7edf6]`} />
      <div className={`${cell} ${page} ml-[21.6%] mt-[102.85px] h-[38.137px] w-[18.11%]`} />
      <p className={`${cell} ${poppins} ml-[22.42%] mt-[109.79px] w-[16.58%] text-center text-white`}>Tapas</p>
      <div className={`${cell} ${content} ml-[1.23%] mt-[402.17px] h-[38.137px] w-[18.12%]`} />
      <p className={`${cell} ${poppins} ml-[2.05%] mt-[409.1px] w-[16.58%] text-center text-black`}>Quizz</p>
      <div className={`${cell} ${content} ml-[60.7%] mt-[168.73px] h-[38.137px] w-[18.11%]`} />
      <p className={`${cell} ${poppins} ml-[61.51%] mt-[175.66px] w-[16.59%] text-center text-black`}>Calendario</p>
      <div className={`${cell} ${content} ml-[60.7%] mt-[234.6px] h-[62.405px] w-[18.11%]`} />
      <p className={`${cell} ${poppins} ml-[60.7%] mt-[241.53px] w-[18.11%] text-center tracking-[-0.8px] text-black`}>
        Formulario de información del cliente
      </p>
      <div className={`${cell} ${page} ml-[41.15%] mt-0 h-[38.137px] w-[18.11%]`} />
      <p className={`${cell} ${poppins} ml-[41.97%] mt-[6.93px] w-[16.58%] text-center text-white`}>Home</p>
      <div className={`${cell} ${page} ml-[60.7%] mt-[102.85px] h-[38.137px] w-[18.11%]`} />
      <p className={`${cell} ${poppins} ml-[61.51%] mt-[109.79px] w-[16.59%] text-center text-white`}>Hacer fila</p>
      <div className={`${cell} ${page} ml-[1.23%] mt-[102.85px] h-[38.137px] w-[18.12%]`} />
      <p className={`${cell} ${poppins} ml-[2.05%] mt-[109.79px] w-[16.58%] text-center text-white`}>La Plata</p>
      <div className={`${cell} ${external} ml-[1.23%] mt-[468.04px] h-[61.25px] w-[18.12%]`} />
      <p className={`${cell} ${poppins} ml-[2.05%] mt-[474.97px] w-[16.58%] text-center text-black`}>
        Instagram: Galería de clientes
      </p>
      <div className={`${cell} ml-[81.37%] mt-[373.27px] inline-grid w-[18.12%] grid-rows-[max-content] place-items-start`}>
        <div className={`${cell} ${external} ml-0 mt-0 h-[38.137px] w-full`} />
        <p className={`${cell} ${poppins} ml-[4.52%] mt-[6.93px] w-[91.53%] text-center text-black`}>Facebook</p>
        <div className={`${cell} ${external} ml-0 mt-[65.87px] h-[38.137px] w-full`} />
        <p className={`${cell} ${poppins} ml-[4.52%] mt-[72.81px] w-[91.53%] text-center text-black`}>Instagram</p>
        <div className={`${cell} ${external} ml-0 mt-[131.74px] h-[38.137px] w-full`} />
        <p className={`${cell} ${poppins} ml-[4.52%] mt-[138.67px] w-[91.53%] text-center text-black`}>Goolge Maps</p>
      </div>
      <div className={`${cell} ${content} ml-[1.23%] mt-[168.73px] h-[204.551px] w-[18.12%]`} />
      <p className={`${cell} ${poppins} ml-[2.05%] mt-[179.13px] w-[16.58%] text-center tracking-[-0.8px] text-black`}>
        Espacio, Proveedores, Tapas, Bebidas, Personas famosas que han visitado, Comunidad de clientes (Galería
        <br aria-hidden />
        de Instagram)
      </p>
      <div className={`${cell} ${content} ml-[21.39%] mt-[168.73px] h-[70.495px] w-[18.12%]`} />
      <p className={`${cell} ${poppins} ml-[22.21%] mt-[179.13px] w-[16.58%] text-center text-black`}>Menú de tapas y bebidas</p>
      <Line className="ml-[50.15%] mt-[38.14px] h-[64.717px] w-0" inset="0 -0.5px" src="2a3c5.svg" />
      <Line className="ml-[10.34%] mt-[440.3px] h-[26.58px] w-0" inset="0 -3.68px -1.88% -3.68px" src="7bde9.svg" />
      <Line className="ml-[30.5%] mt-[140.99px] h-[27.736px] w-0" inset="0 -3.68px -1.8% -3.68px" src="32b88.svg" />
      <div className={`${cell} ml-[81.37%] mt-[102.85px] inline-grid w-[18.22%] grid-rows-[max-content] place-items-start`}>
        <div className={`${cell} ${page} ml-[0.56%] mt-0 h-[38.137px] w-[99.44%]`} />
        <div className={`${cell} ${content} ml-0 mt-[65.87px] h-[70.495px] w-[99.44%]`} />
        <p className={`${cell} ${poppins} ml-[4.5%] mt-[76.27px] w-[91.01%] text-center text-black`}>
          Horario, Ubicación, Redes Sociales
        </p>
        <p className={`${cell} ${poppins} ml-[5.06%] mt-[6.93px] w-[91.01%] text-center text-white`}>Contacto</p>
      </div>
      <Line className="ml-[10.34%] mt-[140.99px] h-[27.736px] w-0" inset="0 -3.68px -1.8% -3.68px" src="32b88.svg" />
      <Line className="ml-[10.34%] mt-[374.43px] h-[27.736px] w-0" inset="0 -0.5px" src="058e0.svg" />
      <Line className="ml-[50.15%] mt-[140.99px] h-[27.736px] w-0" inset="0 -3.68px -1.8% -3.68px" src="32b88.svg" />
      <Line className="ml-[69.81%] mt-[140.99px] h-[27.736px] w-0" inset="0 -3.68px -1.8% -3.68px" src="32b88.svg" />
      <Line className="ml-[69.81%] mt-[206.86px] h-[27.736px] w-0" inset="0 -0.5px" src="058e0.svg" />
      <div className={`${cell} ml-[41.15%] mt-[104.01px] inline-grid w-[18.11%] grid-rows-[max-content] place-items-start`}>
        <div className={`${cell} ${content} ml-0 mt-[65.87px] h-[38.137px] w-full`} />
        <p className={`${cell} ${poppins} ml-[4.52%] mt-[72.81px] w-[91.52%] text-center text-black`}>¿Qué es?</p>
        <div className={`${cell} ${page} ml-0 mt-[131.74px] h-[38.137px] w-full`} />
        <p className={`${cell} ${poppins} ml-[4.52%] mt-[138.68px] w-[91.52%] text-center text-white`}>Proceso de compra</p>
        <div className={`${cell} ${page} ml-0 mt-0 h-[38.137px] w-full`} />
        <p className={`${cell} ${poppins} ml-[4.52%] mt-[6.93px] w-[91.52%] text-center text-white`}>Vermut</p>
        <Line className="ml-[50.28%] mt-[38.14px] h-[27.736px] w-0" inset="0 -3.68px -1.8% -3.68px" src="32b88.svg" />
        <Line className="ml-[50.28%] mt-[104.01px] h-[27.736px] w-0" inset="0 -0.5px" src="058e0.svg" />
      </div>
      <Line className="ml-[10.34%] mt-[53.16px] h-[49.693px] w-0" inset="0 -0.5px" src="45cc0.svg" />
      <Line className="ml-[30.5%] mt-[53.16px] h-[49.693px] w-0" inset="0 -0.5px" src="45cc0.svg" />
      <Line className="ml-[69.81%] mt-[53.16px] h-[49.693px] w-0" inset="0 -0.5px" src="45cc0.svg" />
      <Line className="ml-[90.48%] mt-[53.16px] h-[49.693px] w-0" inset="0 -0.5px" src="45cc0.svg" />
      <Line className="ml-[10.34%] mt-[53.16px] h-0 w-[80.14%]" inset="-0.5px 0" src="aa192.svg" />
      {/* Legend */}
      <div className={`${cell} ml-[1.23%] mt-[583.61px] inline-grid w-[25.08%] grid-rows-[max-content] place-items-start`}>
        <div className={`${cell} ${content} ml-0 mt-[79.74px] h-[38.137px] w-[15.51%]`} />
        <div className={`${cell} ${page} ml-0 mt-[122.5px] h-[38.137px] w-[15.51%]`} />
        <div className={`${cell} ml-0 mt-0 h-[38.137px] w-[15.51%] bg-[#e7edf6]`} />
        <div className={`${cell} ${external} ml-0 mt-[165.26px] h-[38.137px] w-[15.51%] bg-white`} />
        <div className={`${cell} ml-[2.86%] mt-[58.94px] flex h-0 w-[9.79%] items-center justify-center`} style={{ containerType: "size" }}>
          <div className="h-[100cqw] w-0 flex-none -rotate-90">
            <div className="relative size-full">
              <div className="absolute" style={{ inset: "0 -3.68px -1.45% -3.68px" }}>
                <img alt="" className="block size-full max-w-none" src={asset("536c9.svg")} />
              </div>
            </div>
          </div>
        </div>
        <p className={`${cell} ${poppins} ml-[18.78%] mt-[86.67px] w-[73.06%] text-black`}>Contenido</p>
        <p className={`${cell} ${poppins} ml-[18.78%] mt-[128.28px] w-[73.06%] text-black`}>Página</p>
        <p className={`${cell} ${poppins} ml-[18.78%] mt-[46.23px] w-[81.22%] text-black`}>Conexión entre páginas</p>
        <p className={`${cell} ${poppins} ml-[18.78%] mt-[5.78px] w-[73.06%] text-black`}>Menú principal</p>
        <p className={`${cell} ${poppins} ml-[18.78%] mt-[169.88px] w-[73.06%] text-black`}>Link Externo</p>
      </div>
      <Line className="ml-[19.34%] mt-[120.77px] h-0 w-[2.26%]" inset="-3.68px -1.58% -3.68px 0" src="9ea86.svg" />
      <Line className="ml-[20.27%] mt-[121.34px] h-[219.574px] w-[20.83%]" inset="-1.68% -0.17% -0.23% -0.17%" src="31450.svg" />
      <Line className="ml-[40.53%] mt-[123.65px] h-[217.263px] w-[40.84%]" inset="-1.69% 0 -0.23% 0" src="9fd64.svg" />
      <Line className="ml-[34.8%] mt-[79.74px] h-[23.113px] w-1/4" inset="-2.16% 0 0 -0.14%" src="37ada.svg" />
      <Line className="ml-[59.26%] mt-[123.65px] h-0 w-[1.38%]" inset="-3.68px -2.57% -3.68px 0" src="c7597.svg" />
      <Line className="ml-[59.77%] mt-[79.74px] h-[21.957px] w-[26.72%]" inset="-2.28% -0.98% -2.28% 0" src="b8975.svg" />
      <Line className="ml-[64.48%] mt-[79.74px] h-[22.535px] w-0" inset="0 -3.68px -2.22% -3.68px" src="34208.svg" />
      <Line className="ml-[45.85%] mt-[79.74px] h-[23.113px] w-0" inset="0 -3.68px -2.16% -3.68px" src="9cf75.svg" />
    </div>
  );
}

export default function CaseStudyLaPlata() {
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
          {/* Hero: blue gradient panel with the phone mock-up. */}
          <div className="relative mx-4 mt-4 aspect-[1412/634] rounded bg-[linear-gradient(to_bottom,#3030f4_0%,#1c1c8e_41.346%,#040f0f_90.865%)] md:mx-[14px] md:mt-0">
            <div className="absolute overflow-hidden" style={{ left: "19.8%", top: "7.41%", width: "55.36%", height: "85.17%" }}>
              <img
                alt="La Plata website on a phone"
                className="absolute max-w-none"
                src={asset("c597c.png")}
                style={crop("100%", "108.57%", "0%", "-5.61%")}
              />
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
          <section className="mt-10 flex flex-col gap-6 px-4 md:mt-[53px] md:flex-row md:justify-between md:px-[19.5px]">
            <div className="flex flex-col gap-4 md:w-[755px]">
              <h1 className={`${jaro} text-[56px] uppercase leading-[0.9] md:text-[96px] md:leading-[84px]`}>La Plata</h1>
              <p className={`${condensed} text-[30px] leading-[1.2] md:text-[44px] md:leading-[60px]`}>
                Same traditional tavern but less chaotic
              </p>
            </div>
            <p className="font-['Inter:Medium'] text-[19px] font-medium leading-[1.35] tracking-[-0.53px] text-[#0e0d0d] md:w-[454px] md:text-justify md:text-[27px] md:leading-[31px] md:[text-indent:2.6em]">
              Class project to create a digital experience for an emblematic commerce in Barcelona. We chose La Plata, a
              tapas bar founded in 1945. It’s a tiny venue with a 6 tapas menu that also sells home-made wine and vermouth.
            </p>
          </section>

          {/* Animated prototype (still frame from the screen recording) */}
          <figure className="mx-auto mt-10 flex w-[72%] max-w-[367px] flex-col gap-2 md:mt-8 md:w-[367px]">
            <p className={captionText}>Onboarding (animation)</p>
            <div className="relative aspect-[367/756] overflow-hidden rounded-[48px] md:rounded-[60px]">
              <img
                alt="La Plata mobile home: The authentic Tapas Bar of Barcelona"
                className="absolute inset-0 size-full object-cover"
                loading="lazy"
                src={asset("prototype-frame.png")}
              />
            </div>
            <figcaption className={`${captionText} md:ms-[3px]`}>Animated prototype</figcaption>
          </figure>

          {/* Research */}
          <section className="mt-6 flex flex-col">
            <SectionTitle>RESEARCH</SectionTitle>
            <div className={`${bodyText} flex flex-col gap-4 px-4`}>
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-[244px]">
                <p className="md:w-[621px] md:shrink-0">
                  We observed La Plata over multiple visits and conducted six interviews with staff and customers. We
                  created a competitive benchmark, user personas, and user flows, which later guided the foundation for
                  the information architecture and wireframes.
                </p>
                <Crop
                  alt="Black and white photo of the Bodega La Plata entrance"
                  className="w-full md:w-[438px] md:shrink-0"
                  crop={crop("100.33%", "132.22%", "-0.16%", "-15.81%")}
                  ratio="438 / 329"
                  src={asset("567bc.png")}
                />
              </div>

              <Subtitle>Insights</Subtitle>
              <div className="md:w-[697px]">
                <p>
                  Customers value La Plata not only for its food, but for its rich history and authentic atmosphere, which
                  employees also take pride in preserving.
                </p>
                <p>
                  The bar's small size and popularity create long wait times and limited seating, impacting the overall
                  customer experience.
                </p>
              </div>
            </div>
          </section>

          {/* Value proposition and persona */}
          <section className="mt-6 flex flex-col gap-6 px-4 py-6 md:px-[90px] md:py-8">
            <p className="font-['Inter:Medium'] text-[19px] font-medium leading-[1.35] tracking-[-0.53px] md:text-[27px] md:leading-[31px]">
              Our value proposition is preserving the soul of Barcelona's iconic tapas culture through a digital experience
              that celebrates authenticity, heritage, and simplicity. Our website for La Plata translates the charm of a
              family-run tapas bar into an engaging online presence that showcases its history, iconic six-tapa menu, and
              house-made vermouth. A queuing feature enhances the experience by reducing visitors waiting time uncertainty.
            </p>
            <Crop
              alt="Persona 1: Turista, John, with motivations, frustrations and user flow"
              className="w-full border border-[#b1b1b3] bg-[#f6f5fe] md:w-[896px]"
              crop={crop("102.5%", "100%", "-1.98%", "0%")}
              ratio="896 / 1095"
              src={asset("8dced.png")}
            />
          </section>

          {/* Design */}
          <section className="flex flex-col">
            <SectionTitle>DESIGN</SectionTitle>
            <div className={`${bodyText} flex flex-col gap-4 px-4`}>
              <Subtitle>Online Queue</Subtitle>
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-[196px] md:pb-[66px]">
                <p className="md:w-[345px] md:shrink-0">
                  The most convenient feature was to give clients a tool to get a table and manage their time while waiting
                  to be seated.
                </p>
                <figure className="flex w-full flex-col gap-4 md:w-[716px]">
                  <div className="flex items-start justify-between gap-2">
                    {queueScreens.map((screen) => (
                      <div className="min-w-0" key={screen.alt} style={{ flex: `${screen.width} 1 0`, maxWidth: screen.width }}>
                        <Crop
                          alt={screen.alt}
                          className="border border-[#b1b1b3]"
                          crop={screen.crop}
                          ratio={screen.ratio}
                          src={asset("d35e7.png")}
                        />
                      </div>
                    ))}
                  </div>
                  <figcaption className={captionText}>Online queue mobile screens</figcaption>
                </figure>
              </div>

              <SiteMap />

              <Subtitle>Estrategy</Subtitle>
              <div className="md:w-[696px]">
                <p>
                  Guided by our research, we focused on extending La Plata's strong sense of community into the digital
                  experience while celebrating its history and authenticity. To encourage engagement and drive foot traffic,
                  we created a gamified campaign where users answer trivia about La Plata, share their results on social
                  media, and earn a free tapa.
                </p>
                <p className="mt-[31px]">
                  Clients can also check the menu and buy their home-made vermouth to take away or having it sent.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-10 md:mt-[62px] md:flex-row md:justify-end md:gap-[110px]">
                <figure className="flex w-full flex-col gap-4 md:w-[350px]">
                  <Crop
                    alt="Tapas and drinks menu mobile screen"
                    className="w-full"
                    crop={crop("348.7%", "286.65%", "-123.18%", "-1.95%")}
                    ratio="350 / 1686"
                    src={asset("17f32.png")}
                  />
                  <Crop
                    alt="Vermouth mobile screen"
                    className="w-full"
                    crop={crop("348.7%", "438.24%", "-227.45%", "-2.98%")}
                    ratio="350 / 1106"
                    src={asset("17f32.png")}
                  />
                  <figcaption className={captionText}>Menu and Vermouth mobile screens.</figcaption>
                </figure>
                <figure className="flex w-full flex-col gap-4 md:w-[619px]">
                  <img
                    alt="La Plata desktop home page"
                    className="aspect-[858/4096] w-full border border-[#b1b1b3] object-cover"
                    loading="lazy"
                    src={asset("0bfa1.png")}
                  />
                  <figcaption className={captionText}>Desktop home screen.</figcaption>
                </figure>
              </div>
            </div>
          </section>

          {/* Outcomes */}
          <section className="flex flex-col pb-16 md:pb-8">
            <SectionTitle>OUTCOMES &amp; LEARNINGS</SectionTitle>
            <div className={`${bodyText} flex flex-col gap-6 px-4 md:flex-row md:gap-[100px]`}>
              <p className="md:w-[604px]">Outcome and impact</p>
              <p className="md:w-[531px]">Learning</p>
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
