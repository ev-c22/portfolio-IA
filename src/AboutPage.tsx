import type { CSSProperties } from "react";

// About page, built from the "Mi portafolio con IA" Figma prototype:
// a photo mosaic, the About text and the footer. Responsive: on mobile the
// mosaic becomes two columns and the text a single column.

const jaro = "font-['Jaro:Regular'] [font-variation-settings:'opsz'_6]";

const asset = (file: string) => `/assets/about/${file}`;

type Tile = {
  // Grid placement on desktop (6 columns x 2 rows, as in the design).
  desktop: string;
  // Grid placement on mobile (2 columns); omitted tiles are hidden there.
  mobile?: string;
  image?: { file: string; alt: string; style: CSSProperties };
  // Fill colour for the plain tiles without a photo.
  color?: string;
};

// Crops tuned to match the framing of each photo in the Figma design.
const tiles: Tile[] = [
  {
    desktop: "md:col-span-2",
    mobile: "col-span-2",
    image: { file: "eva-portrait.jpg", alt: "Portrait of Eva Caldas", style: { objectPosition: "50% 51%" } },
  },
  {
    desktop: "md:row-span-2",
    mobile: "row-span-2",
    image: {
      file: "rabo-de-peixe.jpg",
      alt: "Detail of the Rabo de Peixe series poster",
      style: { objectPosition: "50% 30%", transform: "scale(1.55)", transformOrigin: "50% 25%" },
    },
  },
  { desktop: "" },
  {
    desktop: "",
    mobile: "",
    image: {
      file: "wednesday.jpg",
      alt: "Wednesday Addams",
      style: { objectPosition: "50% 30%", transform: "scale(1.12)", transformOrigin: "50% 100%" },
    },
  },
  {
    desktop: "",
    mobile: "",
    image: {
      file: "rio-de-janeiro.jpg",
      alt: "Ipanema beach in Rio de Janeiro",
      style: { objectPosition: "40% 50%", transform: "scale(1.35)", transformOrigin: "7% 30%" },
    },
  },
  { desktop: "", color: "#121212" },
  {
    desktop: "",
    mobile: "",
    image: {
      file: "painting.jpg",
      alt: "Painting of a woman with an octopus by the sea",
      style: { objectPosition: "50% 50%", transform: "scale(2.8)", transformOrigin: "62% 39%" },
    },
  },
  {
    desktop: "md:col-span-2",
    mobile: "col-span-2",
    image: {
      file: "kyoto.jpg",
      alt: "Temple and red bridge in Kyoto in autumn",
      style: { objectPosition: "50% 50%", transform: "scale(1.28)", transformOrigin: "38% 80%" },
    },
  },
  {
    desktop: "",
    mobile: "",
    image: {
      file: "paula-scher.jpg",
      alt: "Graphic designer Paula Scher in front of one of her map paintings",
      style: { objectPosition: "20% 50%", transform: "scale(1.15)", transformOrigin: "50% 35%" },
    },
  },
];

const paragraphs = [
  "I’ve always been a maker. As a child, I drew houses, dresses, cars, spaceships and even a watch-phone, then prototyped them in cardboard, though I didn’t know the word “prototype” yet. I loved imagining things that could be useful, fun or simply better. That instinct has evolved: today, I’m less interested in creating more and more interested in improving what already exists for users, society and the environment.",
  "I’m a visual thinker who likes turning ideas into something tangible, whether through a sketch, diagram, wireframe or prototype, so others can understand, question and build on them. Having lived in Spain, the UK and Portugal, and worked with colleagues across the US, Hong Kong and India, I’ve learned to embrace different perspectives and ways of doing things. Moving between cultures has made me curious, adaptable and more likely to question assumptions rather than take them for granted. I bring that same mindset to design, combining collaboration and playful ideation with research into what people actually need.",
  "I believe putting products, services and experiences into the world comes with responsibility. Accessibility and privacy are important parts of how I think about design. I’m especially drawn to areas with social impact, such as education, healthcare, environmental initiatives and public services. And when I’m not designing? I’m probably still making something—drawing, painting, ceramics, jewellery or crochet… or just chilling with Netflix.",
];

const navLink = "rounded border px-2 py-0.5 md:px-[11px] md:py-1";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-['Inter:Regular'] text-[#121212]">
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
            <a className={`${navLink} border-[#e6e6e6]`} href="/#play">
              Play
            </a>
            <a aria-current="page" className={`${navLink} border-[#121212] bg-[#121212] text-white`} href="/about">
              About
            </a>
            <a className={`${navLink} border-[#e6e6e6]`} href="#contact">
              Contact
            </a>
          </nav>
        </header>

        <main>
          {/* Photo mosaic */}
          <div className="grid grid-flow-dense auto-rows-[44vw] grid-cols-2 gap-2.5 px-4 pt-2.5 md:auto-rows-[min(21.4vw,308px)] md:grid-cols-6 md:gap-x-[17px] md:gap-y-[18px] md:px-[14px] md:pt-0">
            {tiles.map((tile, index) => (
              <div
                className={`relative overflow-hidden rounded ${tile.desktop} ${
                  tile.mobile === undefined ? "hidden md:block" : tile.mobile
                }`}
                key={index}
                style={{ backgroundColor: tile.color ?? "#000" }}
                aria-hidden={tile.image ? undefined : true}
              >
                {tile.image ? (
                  <img
                    alt={tile.image.alt}
                    className="absolute inset-0 size-full object-cover"
                    src={asset(tile.image.file)}
                    style={tile.image.style}
                  />
                ) : null}
              </div>
            ))}
          </div>

          {/* About text */}
          <section
            aria-labelledby="about-title"
            className="flex flex-col gap-6 px-4 pb-20 pt-16 md:flex-row md:justify-between md:gap-10 md:px-[20px] md:pb-[110px] md:pt-[176px]"
          >
            <h1 className={`${jaro} text-[64px] leading-[0.9] text-black md:text-[90px]`} id="about-title">
              ABOUT
            </h1>
            <div className="text-[18px] leading-[1.45] md:w-[871px] md:shrink-0 md:text-justify md:text-[26px] md:leading-[31px]">
              {paragraphs.map((text, index) => (
                <p className={index === 0 ? "indent-10" : undefined} key={index}>
                  {text}
                </p>
              ))}
            </div>
          </section>
        </main>

        <footer
          className="flex flex-col gap-10 bg-[#121212] px-4 pb-12 pt-4 text-[17px] text-white md:grid md:grid-cols-3 md:pb-16 md:text-[21px]"
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
