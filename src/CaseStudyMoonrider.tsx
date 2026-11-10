import { useEffect, useRef } from "react";

// App screen recordings (1280x720, phone centred on black), cropped to the phone.
export const videoOnboarding = "/assets/moonrider/onboarding.mp4";
export const videoAppNavigation = "/assets/moonrider/app-navigation.mp4";

// Muted looping video that only plays while on screen, to save data.
// With reduced motion it stays paused and shows controls instead.
export function PhoneVideo({ src, label, className }: { src: string; label: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    const video = ref.current;
    if (!video || reduceMotion) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.25 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [reduceMotion]);

  return (
    <video
      aria-label={label}
      className={`bg-black object-cover ${className ?? ""}`}
      controls={reduceMotion}
      loop
      muted
      playsInline
      preload="metadata"
      ref={ref}
      src={src}
    />
  );
}

// Purple/grey gradient behind the hero, shared with the mobile version.
export const heroBackground =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1412 634' preserveAspectRatio='none'><g transform='matrix(-5.825 -23.85 66.808 -16.317 706.25 312)'><foreignObject x='-368.15' y='-368.15' width='736.3' height='736.3'><div xmlns='http://www.w3.org/1999/xhtml' style='background-image: conic-gradient(from 90deg, rgb(0, 0, 0) -50%, rgb(6, 6, 6) -46.845%, rgb(13, 13, 13) -43.69%, rgb(26, 26, 26) -37.38%, rgb(51, 51, 51) -24.76%, rgb(77, 77, 77) -12.139%, rgb(102, 102, 102) 0.48077%, rgb(105, 77, 126) 6.3702%, rgb(108, 51, 149) 12.26%, rgb(111, 26, 173) 18.149%, rgb(113, 13, 184) 21.094%, rgb(114, 0, 196) 24.038%, rgb(86, 0, 147) 30.529%, rgb(57, 0, 98) 37.019%, rgb(43, 0, 74) 40.264%, rgb(29, 0, 49) 43.51%, rgb(14, 0, 25) 46.755%, rgb(7, 0, 12) 48.377%, rgb(0, 0, 0) 50%, rgb(6, 6, 6) 53.155%, rgb(13, 13, 13) 56.31%, rgb(26, 26, 26) 62.62%, rgb(51, 51, 51) 75.24%, rgb(77, 77, 77) 87.861%, rgb(102, 102, 102) 100.48%); opacity:0.800000011920929; height: 100%; width: 100%;'></div></foreignObject></g></svg>\")";

const assetPathPrefix = "/assets/moonrider";
const imgGroup = `${assetPathPrefix}/cc2d9.svg`;
const imgScreenRecording20230911At1316581 = `${assetPathPrefix}/12f74.png`;
const imgScreenRecording20230911At1316582 = `${assetPathPrefix}/32e3f.png`;
const imgScreenRecording20230911At1316583 = `${assetPathPrefix}/d64c7.png`;
const imgScreenRecording20230911At1316584 = `${assetPathPrefix}/6ee1d.png`;
const imgIPhone14Pro = `${assetPathPrefix}/18349.png`;
const imgImage17 = `${assetPathPrefix}/c0374.png`;
const imgImage10 = `${assetPathPrefix}/aaa9b.png`;
const imgImage59 = `${assetPathPrefix}/77c3d.png`;
const imgBenchmark1 = `${assetPathPrefix}/7dc09.png`;
const imgMemoriaIntro1 = `${assetPathPrefix}/a9532.png`;
const imgFrame1000003582 = `${assetPathPrefix}/fe872.png`;
const imgFrame1000003583 = `${assetPathPrefix}/abeda.png`;
const imgMemoriaIntro2 = `${assetPathPrefix}/8756c.png`;
const imgUserJourneyYMapaDeEmpatia1 = `${assetPathPrefix}/ca2e4.png`;
const imgSkylineCopia2 = `${assetPathPrefix}/15bee.png`;
const imgHomeAssna = `${assetPathPrefix}/6fc2f.png`;
const imgParrilla1 = `${assetPathPrefix}/cbb74.png`;
const imgAccesibilidad6 = `${assetPathPrefix}/5b59d.png`;
const imgImage58 = `${assetPathPrefix}/1e55a.png`;
const imgFront = `${assetPathPrefix}/0d7ae.png`;
const imgDesign1 = `${assetPathPrefix}/780f9.png`;
const imgDesign3 = `${assetPathPrefix}/d1c72.png`;
const imgDesign4 = `${assetPathPrefix}/f4b20.png`;
const imgLine2 = `${assetPathPrefix}/695f4.svg`;
const imgFrame293 = `${assetPathPrefix}/1576d.svg`;
const imgGroup1000003430 = `${assetPathPrefix}/d0d80.svg`;
const imgGroup235 = `${assetPathPrefix}/edea2.svg`;
const imgMerci = `${assetPathPrefix}/83016.svg`;
const imgEllipse1378 = `${assetPathPrefix}/704c9.svg`;
const imgEllipse1379 = `${assetPathPrefix}/9f50e.svg`;
const imgEllipse1381 = `${assetPathPrefix}/d5b7e.svg`;
const imgEllipse1380 = `${assetPathPrefix}/b10c0.svg`;
const imgEllipse1382 = `${assetPathPrefix}/e7569.svg`;
const imgEllipse1383 = `${assetPathPrefix}/ac6c8.svg`;
const imgEllipse1384 = `${assetPathPrefix}/a6a21.svg`;
const imgIconHome = `${assetPathPrefix}/24b83.svg`;
const imgIconHome1 = `${assetPathPrefix}/0fa78.svg`;
const imgIconHome2 = `${assetPathPrefix}/7489c.svg`;
const imgIconHome3 = `${assetPathPrefix}/d0501.svg`;
const imgIconHome4 = `${assetPathPrefix}/97cd8.svg`;
const imgIconHome5 = `${assetPathPrefix}/dc0cc.svg`;
const imgAccessibleForward = `${assetPathPrefix}/454d1.svg`;
const imgDesign = `${assetPathPrefix}/f6707.svg`;
const imgDesign2 = `${assetPathPrefix}/2fd7b.svg`;

function Awesome({ className }: { className?: string }) {
  return (
    <div
      className={className || "h-[121.061px] relative w-[120px]"}
      data-node-id="1:19"
      data-name="awesome"
    >
      <div
        className="absolute inset-[-19%_-14.17%_-9.07%_-14.17%]"
        data-node-id="1:20"
        data-name="Group"
      >
        <div className="absolute inset-[-0.32%_-0.32%_-0.32%_0]">
          <img alt="" className="block max-w-none size-full" src={imgGroup} />
        </div>
      </div>
    </div>
  );
}

// Case study page for Moonrider, exported from Figma Make.
export default function CaseStudyMoonrider() {
  // The design is a fixed 1440px layout: scale it down to fit narrower screens.
  useEffect(() => {
    const page = document.querySelector<HTMLElement>(".moonrider-page");
    if (!page) return;
    const fit = () => {
      const scale = Math.min(1, document.documentElement.clientWidth / 1440);
      page.style.width = scale < 1 ? "1440px" : "";
      page.style.zoom = scale < 1 ? String(scale) : "";
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  return (
    <div
      id="top"
      className="moonrider-page bg-white content-stretch flex min-h-screen w-full flex-col items-start relative"
      data-node-id="1:205"
      data-name="Case Study-Moonrider"
    >
      <div
        className="bg-white content-stretch flex w-full max-w-[1440px] mx-auto flex-col items-start relative shrink-0"
        data-node-id="1:206"
        data-name="Container"
      >
        <div
          className="content-stretch flex flex-col h-[66px] items-center relative shrink-0 w-full"
          data-node-id="1:207"
          data-name="Container"
        >
          <div
            className="border-[#e6e6e6] border-b border-solid content-stretch flex h-[66px] items-center justify-between pb-[14px] pt-[12px] px-[14px] relative shrink-0 w-full"
            data-node-id="1:208"
            data-name="Container"
          >
            <a
              href="/"
              aria-label="Eva Caldas, back to home"
              className="[word-break:break-word] flex flex-col font-['Jaro:Regular'] h-[62px] justify-center leading-[0] relative shrink-0 text-[52px] text-black text-center w-[257px]"
              data-node-id="1:209"
              style={{ fontVariationSettings: '"opsz" 6' }}
            >
              <p className="leading-[32px] whitespace-pre-wrap">{`EVA  CALDAS`}</p>
            </a>
            <div
              className="content-stretch flex gap-[6px] h-[40px] items-start relative shrink-0"
              data-node-id="1:210"
              data-name="Container"
            >
              <a href="/" aria-current="page"
                className="bg-[#121212] border border-[#121212] border-solid content-stretch flex flex-col items-start px-[11px] py-[4px] relative rounded-[4px] shrink-0"
                data-node-id="1:211"
                data-name="Container"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[21px] text-white whitespace-nowrap"
                  data-node-id="1:212"
                >
                  <p className="leading-[32px]">Work</p>
                </div>
              </a>
              <a href="/#play"
                className="border border-[#e6e6e6] border-solid content-stretch flex flex-col items-start px-[11px] py-[4px] relative rounded-[4px] shrink-0"
                data-node-id="1:213"
                data-name="Container"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[21px] whitespace-nowrap"
                  data-node-id="1:214"
                >
                  <p className="leading-[32px]">Play</p>
                </div>
              </a>
              <a href="/about"
                className="border border-[#e6e6e6] border-solid content-stretch flex flex-col items-start px-[11px] py-[4px] relative rounded-[4px] shrink-0"
                data-node-id="1:215"
                data-name="Container"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[21px] whitespace-nowrap"
                  data-node-id="1:216"
                >
                  <p className="leading-[32px]">About</p>
                </div>
              </a>
              <a href="#contact"
                className="border border-[#e6e6e6] border-solid content-stretch flex flex-col items-start px-[11px] py-[4px] relative rounded-[4px] shrink-0"
                data-node-id="1:217"
                data-name="Container"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#121212] text-[21px] whitespace-nowrap"
                  data-node-id="1:218"
                >
                  <p className="leading-[32px]">Contact</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div
          className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full"
          data-node-id="1:219"
        >
          <div className="relative w-full shrink-0 px-[14px] leading-[0]" data-node-id="1:220">
            <div
              className="relative h-[634px] w-full overflow-clip rounded-[4px]"
              data-node-id="1:221"
              style={{
                backgroundImage: heroBackground,
              }}
              data-name="Container"
            >
              <div
                className="absolute content-stretch flex gap-[16px] h-[401px] items-center left-[443px] top-[111px] w-[792px]"
                data-node-id="1:222"
              >
                <div
                  className="h-[353px] relative rounded-[26px] shrink-0 w-[164px]"
                  data-node-id="1:223"
                  data-name="Screen Recording 2023-09-11 at 13.16.58 1"
                >
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[26px] size-full"
                    src={imgScreenRecording20230911At1316581}
                  />
                </div>
                <div
                  className="h-[353px] relative rounded-[26px] shrink-0 w-[164px]"
                  data-node-id="1:224"
                  data-name="Screen Recording 2023-09-11 at 13.16.58 2"
                >
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[26px] size-full"
                    src={imgScreenRecording20230911At1316582}
                  />
                </div>
                <div
                  className="h-[353px] relative rounded-[26px] shrink-0 w-[164px]"
                  data-node-id="1:225"
                  data-name="Screen Recording 2023-09-11 at 13.16.58 3"
                >
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[26px] size-full"
                    src={imgScreenRecording20230911At1316583}
                  />
                </div>
                <div
                  className="h-[353px] relative rounded-[26px] shrink-0 w-[164px]"
                  data-node-id="1:226"
                  data-name="Screen Recording 2023-09-11 at 13.16.58 4"
                >
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[26px] size-full"
                    src={imgScreenRecording20230911At1316584}
                  />
                </div>
              </div>
              <div
                className="absolute h-[399px] left-[176px] top-[157px] w-[347px]"
                data-node-id="1:227"
                data-name="iPhone 14 Pro"
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img
                    alt=""
                    className="absolute h-[119.01%] left-[-40.7%] max-w-none top-[-9.7%] w-[182.62%]"
                    src={imgIPhone14Pro}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="content-between flex flex-wrap h-[82px] items-center justify-between relative shrink-0 w-[calc(100%-28px)]"
            data-node-id="1:228"
            data-name="overview info"
          >
            <div className="h-0 relative shrink-0 w-[calc(100%-28px)]" data-node-id="1:229">
              <div className="absolute inset-[-0.5px_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine2} />
              </div>
            </div>
            <div
              className="[word-break:break-word] font-['Avenir:Roman'] h-[70px] leading-[0] not-italic relative shrink-0 text-[0px] text-black w-[129px]"
              data-node-id="1:230"
            >
              <p className="leading-[32px] mb-0 text-[24px]">Industry</p>
              <p className="font-['Avenir:Heavy'] leading-[32px] text-[24px]">Accesibility</p>
            </div>
            <div
              className="[word-break:break-word] font-['Avenir:Roman'] h-[70px] leading-[0] not-italic relative shrink-0 text-[0px] text-black w-[134px]"
              data-node-id="1:231"
            >
              <p className="leading-[32px] mb-0 text-[24px]">Project type</p>
              <p className="font-['Avenir:Heavy'] leading-[32px] text-[24px]">App</p>
            </div>
            <div
              className="[word-break:break-word] font-['Avenir:Roman'] h-[70px] leading-[0] not-italic relative shrink-0 text-[0px] text-black w-[178px]"
              data-node-id="1:232"
            >
              <p className="leading-[32px] mb-0 text-[24px]">Role</p>
              <p className="font-['Avenir:Heavy'] leading-[32px] text-[24px]">UX/UI Designer</p>
            </div>
            <div
              className="[word-break:break-word] font-['Avenir:Roman'] h-[70px] leading-[0] not-italic relative shrink-0 text-[0px] text-black w-[304px]"
              data-node-id="1:233"
            >
              <p className="leading-[32px] mb-0 text-[24px]">Organisation</p>
              <p className="text-[24px]">
                <span className="[word-break:break-word] font-['Avenir:Heavy'] leading-[32px] not-italic">{`ELISAVA `}</span>
                <span className="leading-[32px]">(University project)</span>
              </p>
            </div>
            <div
              className="[word-break:break-word] font-['Avenir:Roman'] h-[70px] leading-[0] not-italic relative shrink-0 text-[0px] text-black w-[113px]"
              data-node-id="1:234"
            >
              <p className="leading-[32px] mb-0 text-[24px]">Location</p>
              <p className="font-['Avenir:Heavy'] leading-[32px] text-[24px]">Barcelona</p>
            </div>
            <div className="h-0 relative shrink-0 w-[calc(100%-28px)]" data-node-id="1:235">
              <div className="absolute inset-[-0.5px_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine2} />
              </div>
            </div>
          </div>
          <div
            className="[word-break:break-word] content-stretch flex gap-[333px] items-start leading-[0] pt-[16px] px-[16px] relative shrink-0 w-full"
            data-node-id="1:236"
            data-name="Section"
          >
            <div
              className="flex flex-col font-['Jaro:Regular'] h-[84px] justify-center relative shrink-0 text-[96px] text-black w-[621px]"
              data-node-id="1:237"
              style={{ fontVariationSettings: '"opsz" 6' }}
            >
              <p className="leading-[32px]">MOONRIDER</p>
            </div>
            <div
              className="flex flex-col font-['Inter:Medium'] font-medium justify-center not-italic relative shrink-0 text-[#0e0d0d] text-[27px] text-justify tracking-[-0.53px] w-[454px]"
              data-node-id="1:238"
            >
              <p className="leading-[31px] whitespace-pre-wrap">{`          Our app helps young wheelchair users enjoy the nightlife in Barcelona in a comfortable, safe and efficient way, allowing them to integrate with other young people and be free and independent.`}</p>
            </div>
          </div>
          <div
            className="content-stretch flex items-start pb-[16px] pt-[64px] px-[16px] relative shrink-0 w-full"
            data-node-id="1:239"
            data-name="Section"
          >
            <div
              className="[word-break:break-word] flex flex-col font-['Jaro:Regular'] h-[84px] justify-center leading-[0] relative shrink-0 text-[64px] text-black w-[621px]"
              data-node-id="1:240"
              style={{ fontVariationSettings: '"opsz" 6' }}
            >
              <p className="leading-[32px]">RESEARCH</p>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative shrink-0 w-full"
            data-node-id="1:241"
          >
            <div
              className="[word-break:break-word] flex flex-col font-['Jaro:Regular'] h-[84px] justify-center leading-[0] relative shrink-0 text-[52px] text-black w-full"
              data-node-id="1:242"
              style={{ fontVariationSettings: '"opsz" 6' }}
            >
              <p className="leading-[32px]">Objectives and team</p>
            </div>
            <div
              className="content-stretch flex gap-[95px] h-[349px] items-start relative shrink-0 w-full"
              data-node-id="1:243"
            >
              <div
                className="content-stretch flex flex-col items-start relative shrink-0 w-[697px]"
                data-node-id="1:244"
              >
                <div
                  className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular'] font-normal items-start not-italic relative shrink-0 text-[24px] tracking-[-0.53px] w-full"
                  data-node-id="1:245"
                >
                  <div
                    className="h-[220px] leading-[0] relative shrink-0 text-black w-full"
                    data-node-id="1:246"
                  >
                    <ol className="list-decimal mb-0" start="1">
                      <li className="mb-0 ms-[36px]">
                        <span className="leading-[31px]">
                          Help people with disabilities enjoy nightlife in Barcelona
                        </span>
                      </li>
                      <li className="mb-0 ms-[36px]">
                        <span className="leading-[31px]">Promote inclusive social spaces</span>
                      </li>
                      <li className="mb-0 ms-[36px]">
                        <span className="leading-[31px]">
                          Create a network of information and verification in real time
                        </span>
                      </li>
                      <li className="mb-0 ms-[36px]">
                        <span className="leading-[31px]">
                          Create and inclusive, efficient and trustable tool
                        </span>
                      </li>
                      <li className="ms-[36px]">
                        <span className="leading-[31px]">
                          Create an user experience adapted to the needs and preferences of the user
                        </span>
                      </li>
                    </ol>
                    <p className="leading-[31px]">​</p>
                  </div>
                  <p
                    className="h-[224px] leading-[31px] relative shrink-0 text-[#0e0d0d] w-full"
                    data-node-id="1:247"
                  >{`We were a team of four designers with different levels of expertise. Each one took one of two research topics that we synchronised at several times. All of us together took decisions on the user experience, interactions and visual design. `}</p>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col items-start relative shrink-0 w-[350px]"
                data-node-id="1:248"
                data-name="ODS"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.53px] whitespace-nowrap"
                  data-node-id="1:249"
                >
                  <p className="leading-[31px]">ODS</p>
                </div>
                <div
                  className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                  data-node-id="1:250"
                >
                  <div
                    className="content-stretch flex h-[129px] items-center justify-between relative shrink-0 w-full"
                    data-node-id="1:251"
                  >
                    <div
                      className="relative shrink-0 size-[101px]"
                      data-node-id="1:252"
                      data-name="image 17"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                        src={imgImage17}
                      />
                    </div>
                    <div
                      className="relative shrink-0 size-[101px]"
                      data-node-id="1:253"
                      data-name="image 10"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                        src={imgImage10}
                      />
                    </div>
                    <div
                      className="relative shrink-0 size-[101px]"
                      data-node-id="1:254"
                      data-name="image 59"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                        src={imgImage59}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="[word-break:break-word] flex flex-col font-['Jaro:Regular'] h-[84px] justify-center leading-[0] relative shrink-0 text-[52px] text-black w-full"
              data-node-id="1:255"
              style={{ fontVariationSettings: '"opsz" 6' }}
            >
              <p className="leading-[32px]">Methods</p>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col items-center relative shrink-0 w-[calc(100%-32px)]"
            data-node-id="1:256"
          >
            <div
              className="content-stretch flex flex-col items-start py-[16px] relative shrink-0 w-full"
              data-node-id="1:257"
            >
              <div
                className="[word-break:break-word] content-stretch flex items-start justify-between leading-[0] not-italic px-[32px] relative shrink-0 text-[#0e0d0d] w-full"
                data-node-id="1:258"
              >
                <div
                  className="font-['Avenir:Roman'] h-[172px] relative shrink-0 text-[0px] w-[622px]"
                  data-node-id="1:259"
                >
                  <ul className="list-disc mb-0">
                    <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
                      <span className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[31px] not-italic text-[24px] tracking-[-0.53px]">
                        Observation of people with disabilities on public transport, the street and
                        what they have to say on social media.
                      </span>
                    </li>
                    <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
                      <span className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[31px] not-italic text-[24px] tracking-[-0.53px]">{`Interviews with people with temporary or permanent disabilities `}</span>
                    </li>
                  </ul>
                  <p className="leading-[32px] mb-0 text-[24px] whitespace-pre-wrap">​</p>
                  <p className="leading-[32px] mb-0 text-[24px] whitespace-pre-wrap">​</p>
                  <p className="leading-[32px] text-[24px] whitespace-pre-wrap">​</p>
                </div>
                <ul
                  className="block font-['Inter:Regular'] font-normal h-[199px] list-disc relative shrink-0 text-[24px] tracking-[-0.53px] w-[622px]"
                  data-node-id="1:260"
                >
                  <li className="mb-0 ms-[36px]">
                    <span className="leading-[31px]">
                      Desk research, reports and talks from associations and communities that fight
                      for accessibility
                    </span>
                  </li>
                  <li className="ms-[36px]">
                    <span className="leading-[31px]">
                      Benchmarking of digital services that operate in the leisure sector or have
                      accessibility functionalities.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col items-center relative shrink-0 w-[1267px]"
            data-node-id="1:261"
          >
            <div
              className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
              data-node-id="1:262"
            >
              <div
                className="border border-black border-solid h-[664px] relative shrink-0 w-full"
                data-node-id="1:263"
                data-name="benchmark 1"
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img
                    alt=""
                    className="absolute h-[113.25%] left-[-2.84%] max-w-none top-[-3.16%] w-[105.68%]"
                    src={imgBenchmark1}
                  />
                </div>
              </div>
              <div
                className="content-center flex flex-wrap gap-[16px] items-center relative shrink-0 w-full"
                data-node-id="1:264"
              >
                <div
                  className="border border-black border-solid h-[792px] relative shrink-0 w-[1265px]"
                  data-node-id="1:265"
                  data-name="Memoria_intro-1"
                >
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                    src={imgMemoriaIntro1}
                  />
                </div>
                <div
                  className="border border-black border-solid h-[448px] relative shrink-0 w-[623px]"
                  data-node-id="1:266"
                >
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img
                      alt=""
                      className="absolute h-[108.26%] left-[0.01%] max-w-none top-0 w-[103.34%]"
                      src={imgFrame1000003582}
                    />
                  </div>
                </div>
                <div
                  className="border border-black border-solid h-[448px] relative shrink-0 w-[623px]"
                  data-node-id="1:267"
                >
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img
                      alt=""
                      className="absolute h-[108.26%] left-[0.01%] max-w-none top-0 w-[103.01%]"
                      src={imgFrame1000003583}
                    />
                  </div>
                </div>
                <div
                  className="border border-black border-solid h-[903px] relative shrink-0 w-[1262px]"
                  data-node-id="1:268"
                  data-name="Memoria_intro-2"
                >
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-contain pointer-events-none size-full"
                    src={imgMemoriaIntro2}
                  />
                </div>
                <div
                  className="border border-black border-solid flex-[1_0_0] h-[744px] min-w-px relative"
                  data-node-id="1:269"
                  data-name="user journey y mapa de empatia 1"
                >
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img
                      alt=""
                      className="absolute h-full left-[-2.34%] max-w-none top-0 w-[104.45%]"
                      src={imgUserJourneyYMapaDeEmpatia1}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full"
            data-node-id="1:270"
          >
            <div
              className="[word-break:break-word] flex flex-col font-['Jaro:Regular'] h-[84px] justify-center leading-[0] relative shrink-0 text-[52px] text-black w-[calc(100%-32px)]"
              data-node-id="1:271"
              style={{ fontVariationSettings: '"opsz" 6' }}
            >
              <p className="leading-[32px]">Insights</p>
            </div>
            <div
              className="content-stretch flex flex-col items-center relative shrink-0 w-[calc(100%-32px)]"
              data-node-id="1:272"
            >
              <div
                className="content-stretch flex flex-col items-start py-[16px] relative shrink-0 w-full"
                data-node-id="1:273"
              >
                <div
                  className="[word-break:break-word] content-stretch flex items-start justify-between not-italic px-[32px] relative shrink-0 text-[#0e0d0d] tracking-[-0.53px] w-full"
                  data-node-id="1:274"
                >
                  <div
                    className="font-['Inter:Regular'] font-normal h-[196px] leading-[0] relative shrink-0 text-[24px] w-[622px]"
                    data-node-id="1:275"
                  >
                    <ul className="list-disc mb-0">
                      <li className="mb-0 ms-[36px]">
                        <span className="leading-[31px]">Current apps aren’t satisfying</span>
                      </li>
                      <li className="mb-0 ms-[36px]">
                        <span className="leading-[31px]">
                          Gap between legislation and its application
                        </span>
                      </li>
                      <li className="mb-0 ms-[36px]">
                        <span className="leading-[31px]">Negative emotions</span>
                      </li>
                      <li className="mb-0 ms-[36px]">
                        <span className="leading-[31px]">{`Wish to participate in the solutions `}</span>
                      </li>
                      <li className="ms-[36px]">
                        <span className="leading-[31px]">{`Community is important to keep service updated but has limitations `}</span>
                      </li>
                    </ul>
                    <p className="leading-[31px] mb-0 whitespace-pre-wrap">​</p>
                    <p className="leading-[31px] mb-0 whitespace-pre-wrap">​</p>
                    <p className="leading-[31px] whitespace-pre-wrap">​</p>
                  </div>
                  <p
                    className="font-['Inter:Medium'] font-medium leading-[31px] relative self-stretch shrink-0 text-[27px] w-[622px] whitespace-pre-wrap"
                    data-node-id="1:276"
                  >{`There is a need to design and develop better apps  and improve awareness and empathy towards wheelchair users.`}</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="h-[717px] relative rounded-[60px] shrink-0 w-[346px]"
            data-node-id="1:277"
            data-name="Screen Recording 2023-07-03 at 17.17.24"
          >
            <PhoneVideo
              className="absolute inset-0 size-full rounded-[60px]"
              label="Moonrider onboarding and sign-up flow"
              src={videoOnboarding}
            />
          </div>
          <div
            className="h-[158px] opacity-80 relative shrink-0 w-[533px]"
            data-node-id="1:278"
            data-name="SKYLINE copia 2"
          >
            <div className="absolute inset-0 opacity-30 overflow-hidden pointer-events-none">
              <img
                alt=""
                className="absolute h-[730.73%] left-[-0.1%] max-w-none top-[-169.79%] w-[100.02%]"
                src={imgSkylineCopia2}
              />
            </div>
          </div>
          <div
            className="content-stretch flex items-start pb-[16px] pt-[64px] px-[16px] relative shrink-0 w-full"
            data-node-id="1:279"
            data-name="Section"
          >
            <div
              className="[word-break:break-word] flex flex-col font-['Jaro:Regular'] h-[84px] justify-center leading-[0] relative shrink-0 text-[64px] text-black w-[621px]"
              data-node-id="1:280"
              style={{ fontVariationSettings: '"opsz" 6' }}
            >
              <p className="leading-[32px]">DESIGN</p>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative shrink-0 w-full"
            data-node-id="1:281"
          >
            <div
              className="[word-break:break-word] flex flex-col font-['Jaro:Regular'] h-[84px] justify-center leading-[0] relative shrink-0 text-[52px] text-black w-full"
              data-node-id="1:282"
              style={{ fontVariationSettings: '"opsz" 6' }}
            >
              <p className="leading-[32px]">Functionalities</p>
            </div>
            <div
              className="content-stretch flex h-[966px] items-start justify-between relative shrink-0 w-full"
              data-node-id="1:283"
            >
              <ul
                className="[word-break:break-word] block font-['Inter:Regular'] font-normal h-[181px] leading-[0] list-disc not-italic relative shrink-0 text-[24px] text-black tracking-[-0.53px] w-[625px]"
                data-node-id="1:284"
              >
                <li className="mb-0 ms-[36px]">
                  <span className="leading-[31px]">Custom profile</span>
                </li>
                <li className="mb-0 ms-[36px]">
                  <span className="leading-[31px]">{`Route and space visualisation `}</span>
                </li>
                <li className="mb-0 ms-[36px]">
                  <span className="leading-[31px]">Create and save plans</span>
                </li>
                <li className="mb-0 ms-[36px]">
                  <span className="leading-[31px]">Verified opinions</span>
                </li>
                <li className="ms-[36px]">
                  <span className="leading-[31px]">Real time updates</span>
                </li>
              </ul>
              <div
                className="content-stretch flex h-[851px] items-start justify-end relative shrink-0"
                data-node-id="1:285"
              >
                <div
                  className="content-stretch flex h-[851px] items-start relative shrink-0"
                  data-node-id="1:286"
                >
                  <div
                    className="content-stretch flex gap-[16px] h-[851px] items-start relative shrink-0"
                    data-node-id="1:287"
                  >
                    <div
                      className="h-[966px] relative rounded-[20px] shrink-0 w-[347px]"
                      data-node-id="1:288"
                      data-name="Home Assna"
                    >
                      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
                        <img
                          alt=""
                          className="absolute h-[100.3%] left-0 max-w-none top-[-0.05%] w-full"
                          src={imgHomeAssna}
                        />
                      </div>
                    </div>
                    <div
                      className="h-[851px] relative rounded-[20px] shrink-0 w-[348px]"
                      data-node-id="1:289"
                      data-name="Parrilla-1"
                    >
                      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
                        <img
                          alt=""
                          className="absolute h-[102.65%] left-0 max-w-none top-[-2.69%] w-full"
                          src={imgParrilla1}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex gap-[16px] items-start relative shrink-0"
            data-node-id="1:290"
          >
            <div
              className="h-[516px] relative rounded-[20px] shrink-0 w-[248px]"
              data-node-id="1:291"
              data-name="accesibilidad 6"
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
                <img
                  alt=""
                  className="absolute h-[386.71%] left-0 max-w-none top-[-3.43%] w-full"
                  src={imgAccesibilidad6}
                />
              </div>
            </div>
            <div
              className="h-[336px] relative rounded-[20px] shrink-0 w-[248px]"
              data-node-id="1:292"
              data-name="accesibilidad 5"
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
                <img
                  alt=""
                  className="absolute h-[593.88%] left-0 max-w-none top-[-158.85%] w-full"
                  src={imgAccesibilidad6}
                />
              </div>
            </div>
            <div
              className="h-[397px] relative rounded-[20px] shrink-0 w-[248px]"
              data-node-id="1:293"
              data-name="accesibilidad 4"
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
                <img
                  alt=""
                  className="absolute h-[502.63%] left-0 max-w-none top-[-221.09%] w-full"
                  src={imgAccesibilidad6}
                />
              </div>
            </div>
            <div
              className="h-[442px] relative rounded-[20px] shrink-0 w-[251px]"
              data-node-id="1:294"
              data-name="accesibilidad 3"
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
                <img
                  alt=""
                  className="absolute h-[451.46%] left-0 max-w-none top-[-289.3%] w-full"
                  src={imgAccesibilidad6}
                />
              </div>
            </div>
            <div
              className="h-[254px] relative rounded-[20px] shrink-0 w-[251px]"
              data-node-id="1:295"
              data-name="accesibilidad 7"
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
                <img
                  alt=""
                  className="absolute h-[785.61%] left-0 max-w-none top-[-678.63%] w-full"
                  src={imgAccesibilidad6}
                />
              </div>
            </div>
          </div>
          <div
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
            data-node-id="1:296"
          >
            <div
              className="col-1 h-[719px] ml-0 mt-0 relative rounded-[60px] row-1 w-[347px]"
              data-node-id="1:297"
              data-name="Screen Recording 2023-07-03 at 17.32.35"
            >
              <PhoneVideo
                className="absolute inset-0 size-full rounded-[60px]"
                label="Navigating the Moonrider app: favourites, plans and challenges"
                src={videoAppNavigation}
              />
            </div>
          </div>
          <div
            className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative shrink-0 w-full"
            data-node-id="1:298"
          >
            <div
              className="[word-break:break-word] flex flex-col font-['Jaro:Regular'] h-[84px] justify-center leading-[0] min-w-full relative shrink-0 text-[52px] text-black w-[min-content]"
              data-node-id="1:299"
              style={{ fontVariationSettings: '"opsz" 6' }}
            >
              <p className="leading-[32px]">Branding</p>
            </div>
            <p
              className="[word-break:break-word] font-['Avenir:Roman'] h-[96px] leading-[32px] not-italic relative shrink-0 text-[24px] text-black w-[696px]"
              data-node-id="1:300"
            >
              Inspired by urban elements like doodles, graffiti, collage and stickers to create a
              dynamic, fresh and fun experience. Concepts: rebellion and juvenile spontaneity.
            </p>
            <div
              className="bg-[#d9d9d9] content-stretch flex flex-col items-start px-[32px] py-[64px] relative shrink-0 w-full"
              data-node-id="1:301"
            >
              <div
                className="content-stretch flex h-[680px] items-center justify-between relative shrink-0 w-full"
                data-node-id="1:302"
              >
                <div
                  className="content-stretch flex flex-col items-center relative shrink-0 w-[1344px]"
                  data-node-id="1:303"
                  data-name="Branding"
                >
                  <div
                    className="content-stretch flex flex-col items-center relative shrink-0 w-full"
                    data-node-id="1:304"
                  >
                    <div
                      className="content-stretch flex gap-[135px] items-start justify-center relative shrink-0 w-full"
                      data-node-id="1:305"
                    >
                      <div
                        className="[word-break:break-word] content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[348px]"
                        data-node-id="1:306"
                      >
                        <p
                          className="font-['Sofia_Sans_Extra_Condensed:Medium'] font-medium leading-[62px] min-w-full relative shrink-0 text-[56px] text-black uppercase w-[min-content]"
                          data-node-id="1:307"
                        >
                          TIPOGRAFÍA
                        </p>
                        <div
                          className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 whitespace-nowrap"
                          data-node-id="1:308"
                        >
                          <p
                            className="col-1 font-['Nunito:Bold'] font-bold leading-[27px] ml-0 mt-0 relative row-1 text-[22px] text-black"
                            data-node-id="1:309"
                          >
                            Sofia Sans Extra condensed
                          </p>
                          <p
                            className="col-1 font-['Nunito:Bold'] font-bold leading-[normal] ml-0 mt-[121px] relative row-1 text-[25px] text-black"
                            data-node-id="1:310"
                          >
                            Nunito bold
                          </p>
                          <p
                            className="col-1 font-['Nunito:Bold'] font-bold leading-[normal] ml-0 mt-[202px] relative row-1 text-[25px] text-black"
                            data-node-id="1:311"
                          >
                            Nunito regular
                          </p>
                          <p
                            className="col-1 font-['Sofia_Sans_Extra_Condensed:ExtraBold'] font-extrabold leading-[62.4px] ml-0 mt-[27px] relative row-1 text-[#292929] text-[71px] uppercase"
                            data-node-id="1:312"
                          >
                            ABCDE 1234
                          </p>
                          <p
                            className="col-1 font-['Nunito:Bold'] font-bold leading-[normal] ml-0 mt-[154px] relative row-1 text-[#292929] text-[16px]"
                            data-node-id="1:313"
                          >
                            ABCDE 1234
                          </p>
                          <p
                            className="col-1 font-['Nunito:Regular'] font-normal leading-[normal] ml-0 mt-[235px] relative row-1 text-[#292929] text-[16px]"
                            data-node-id="1:314"
                          >
                            ABCDE 1234
                          </p>
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col gap-[22px] items-start relative shrink-0 w-[344px]"
                        data-node-id="1:315"
                      >
                        <p
                          className="[word-break:break-word] font-['Sofia_Sans_Extra_Condensed:Medium'] font-medium leading-[62px] min-w-full relative shrink-0 text-[#0e0d0d] text-[56px] uppercase w-[min-content]"
                          data-node-id="1:316"
                        >
                          ILLUSTRACIÓN
                        </p>
                        <div
                          className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[322px]"
                          data-node-id="1:317"
                        >
                          <div
                            className="content-stretch flex flex-col gap-[14px] h-[156px] items-start relative shrink-0 w-[302px]"
                            data-node-id="1:318"
                          >
                            <p
                              className="[word-break:break-word] font-['Sofia_Sans_Extra_Condensed:Medium'] font-medium h-[46px] leading-[62.4px] relative shrink-0 text-[#0e0d0d] text-[38px] uppercase w-[259px]"
                              data-node-id="1:319"
                            >
                              Garabatos
                            </p>
                            <div
                              className="content-stretch flex flex-col h-[44px] items-start pr-[168px] relative shrink-0 w-full"
                              data-node-id="1:320"
                            >
                              <div
                                className="h-[86.329px] relative shrink-0 w-[302px]"
                                data-node-id="1:321"
                              >
                                <img
                                  alt=""
                                  className="absolute block inset-0 max-w-none size-full"
                                  src={imgFrame293}
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-full"
                            data-node-id="1:339"
                          >
                            <p
                              className="[word-break:break-word] font-['Sofia_Sans_Extra_Condensed:Medium'] font-medium h-[49px] leading-[62.4px] min-w-full relative shrink-0 text-[#0e0d0d] text-[38px] uppercase w-[min-content]"
                              data-node-id="1:340"
                            >
                              pegatinas
                            </p>
                            <p
                              className="[word-break:break-word] font-['Nunito:Medium'] font-medium h-[26px] leading-[normal] relative shrink-0 text-[16px] text-black w-[259px]"
                              data-node-id="1:341"
                            >
                              Representativos
                            </p>
                            <div
                              className="content-stretch flex items-center relative shrink-0"
                              data-node-id="1:342"
                            >
                              <div
                                className="h-[68.944px] relative shrink-0 w-[94px]"
                                data-node-id="1:343"
                              >
                                <img
                                  alt=""
                                  className="absolute block inset-0 max-w-none size-full"
                                  src={imgGroup1000003430}
                                />
                              </div>
                              <div
                                className="h-[148.906px] mix-blend-multiply relative shrink-0 w-[208px]"
                                data-node-id="1:357"
                                data-name="image 58"
                              >
                                <img
                                  alt=""
                                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                                  src={imgImage58}
                                />
                              </div>
                            </div>
                            <div
                              className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
                              data-node-id="1:358"
                            >
                              <div
                                className="col-1 content-stretch flex gap-[8px] h-[116px] items-center ml-[10px] mt-[49px] relative row-1 w-[312px]"
                                data-node-id="1:359"
                              >
                                <Awesome className="h-[82px] relative shrink-0 w-[81px]" />
                                <div
                                  className="h-[107px] relative shrink-0 w-[112px]"
                                  data-node-id="1:361"
                                  data-name="corazon yeah"
                                >
                                  <div
                                    className="absolute contents inset-[0_16.18%_7.75%_11.57%]"
                                    data-node-id="I1:361;2059:21414"
                                  >
                                    <div
                                      className="absolute inset-[0_16.18%_7.75%_11.57%]"
                                      data-node-id="I1:361;2059:21415"
                                    >
                                      <div className="absolute inset-[-0.51%_-0.62%_0_0]">
                                        <img
                                          alt=""
                                          className="block max-w-none size-full"
                                          src={imgGroup235}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="h-[62px] relative shrink-0 w-[83px]"
                                  data-node-id="1:362"
                                  data-name="merci"
                                >
                                  <div className="absolute inset-[-0.81%_-0.6%_-1.87%_-0.6%]">
                                    <img
                                      alt=""
                                      className="block max-w-none size-full"
                                      src={imgMerci}
                                    />
                                  </div>
                                </div>
                              </div>
                              <p
                                className="[word-break:break-word] col-1 font-['Nunito:Medium'] font-medium leading-[normal] ml-0 mt-0 relative row-1 text-[16px] text-black w-[261px]"
                                data-node-id="1:363"
                              >
                                Experienciales
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[353px]"
                        data-node-id="1:364"
                      >
                        <p
                          className="[word-break:break-word] font-['Sofia_Sans_Extra_Condensed:Medium'] font-medium leading-[62px] relative shrink-0 text-[56px] text-black uppercase w-full"
                          data-node-id="1:365"
                        >
                          ColorES
                        </p>
                        <div
                          className="content-stretch flex flex-col gap-[85px] items-start relative shrink-0 w-full"
                          data-node-id="1:366"
                        >
                          <div
                            className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[304px]"
                            data-node-id="1:367"
                          >
                            <div
                              className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
                              data-node-id="1:368"
                            >
                              <p
                                className="[word-break:break-word] font-['Nunito:Bold'] font-bold leading-[27px] relative shrink-0 text-[22px] text-black w-full"
                                data-node-id="1:369"
                              >
                                Primarios
                              </p>
                              <div
                                className="content-center flex flex-wrap gap-y-[23px] items-center justify-between relative shrink-0 w-full"
                                data-node-id="1:370"
                                data-name="colores primarios"
                              >
                                <div className="relative shrink-0 size-[60px]" data-node-id="1:371">
                                  <img
                                    alt=""
                                    className="absolute block inset-0 max-w-none size-full"
                                    src={imgEllipse1378}
                                  />
                                </div>
                                <div className="relative shrink-0 size-[60px]" data-node-id="1:372">
                                  <img
                                    alt=""
                                    className="absolute block inset-0 max-w-none size-full"
                                    src={imgEllipse1379}
                                  />
                                </div>
                                <div className="relative shrink-0 size-[60px]" data-node-id="1:373">
                                  <img
                                    alt=""
                                    className="absolute block inset-0 max-w-none size-full"
                                    src={imgEllipse1381}
                                  />
                                </div>
                                <div className="relative shrink-0 size-[60px]" data-node-id="1:374">
                                  <img
                                    alt=""
                                    className="absolute block inset-0 max-w-none size-full"
                                    src={imgEllipse1380}
                                  />
                                </div>
                                <p
                                  className="[word-break:break-word] font-['Nunito:Medium'] font-medium leading-[normal] relative shrink-0 text-[16px] text-black whitespace-nowrap"
                                  data-node-id="1:375"
                                >
                                  #7200c4
                                </p>
                                <p
                                  className="[word-break:break-word] font-['Nunito:Medium'] font-medium leading-[normal] relative shrink-0 text-[16px] text-black whitespace-nowrap"
                                  data-node-id="1:376"
                                >
                                  #444444
                                </p>
                                <p
                                  className="[word-break:break-word] font-['Nunito:Medium'] font-medium leading-[normal] relative shrink-0 text-[16px] text-black whitespace-nowrap"
                                  data-node-id="1:377"
                                >
                                  #292929
                                </p>
                                <p
                                  className="[word-break:break-word] font-['Nunito:Medium'] font-medium leading-[normal] relative shrink-0 text-[16px] text-black whitespace-nowrap"
                                  data-node-id="1:378"
                                >
                                  #040F0F
                                </p>
                              </div>
                            </div>
                            <div
                              className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[224px]"
                              data-node-id="1:379"
                            >
                              <p
                                className="[word-break:break-word] font-['Nunito:Bold'] font-bold leading-[27px] relative shrink-0 text-[22px] text-black w-full"
                                data-node-id="1:380"
                              >
                                Secundarios
                              </p>
                              <div
                                className="content-center flex flex-wrap gap-y-[17px] items-center justify-between relative shrink-0 w-full"
                                data-node-id="1:381"
                                data-name="colores secundarios"
                              >
                                <div className="relative shrink-0 size-[60px]" data-node-id="1:382">
                                  <img
                                    alt=""
                                    className="absolute block inset-0 max-w-none size-full"
                                    src={imgEllipse1382}
                                  />
                                </div>
                                <div className="relative shrink-0 size-[60px]" data-node-id="1:383">
                                  <img
                                    alt=""
                                    className="absolute block inset-0 max-w-none size-full"
                                    src={imgEllipse1383}
                                  />
                                </div>
                                <div className="relative shrink-0 size-[60px]" data-node-id="1:384">
                                  <img
                                    alt=""
                                    className="absolute block inset-0 max-w-none size-full"
                                    src={imgEllipse1384}
                                  />
                                </div>
                                <p
                                  className="[word-break:break-word] font-['Nunito:Medium'] font-medium leading-[normal] relative shrink-0 text-[16px] text-black whitespace-nowrap"
                                  data-node-id="1:385"
                                >
                                  #86BBD8
                                </p>
                                <p
                                  className="[word-break:break-word] font-['Nunito:Medium'] font-medium leading-[normal] relative shrink-0 text-[16px] text-black whitespace-nowrap"
                                  data-node-id="1:386"
                                >
                                  #9EE493
                                </p>
                                <p
                                  className="[word-break:break-word] font-['Nunito:Medium'] font-medium leading-[normal] relative shrink-0 text-[16px] text-black whitespace-nowrap"
                                  data-node-id="1:387"
                                >
                                  #EB4C38
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full"
                            data-node-id="1:388"
                          >
                            <p
                              className="[word-break:break-word] font-['Sofia_Sans_Extra_Condensed:Medium'] font-medium leading-[62px] min-w-full relative shrink-0 text-[56px] text-black uppercase w-[min-content]"
                              data-node-id="1:389"
                            >
                              COMPONENTES
                            </p>
                            <div
                              className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full"
                              data-node-id="1:390"
                            >
                              <button
                                type="button"
                                className="bg-[#7200c4] content-stretch drop-shadow-[3px_5px_0px_black] flex cursor-pointer items-center justify-center px-[18px] py-[10px] relative rounded-[50px] shrink-0 w-[167px]"
                                data-node-id="1:391"
                                data-name="boton morado"
                              >
                                <p
                                  className="[word-break:break-word] font-['Nunito:Bold'] font-bold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap"
                                  data-node-id="I1:391;1399:12857"
                                >
                                  Primario
                                </p>
                              </button>
                              <div
                                className="bg-[#292929] border border-solid border-white content-stretch flex items-center justify-center overflow-clip px-[18px] py-[10px] relative rounded-[60px] shadow-[3px_5px_0px_0px_black] shrink-0 w-[168px]"
                                data-node-id="1:392"
                                data-name="boton contorno"
                              >
                                <p
                                  className="[word-break:break-word] font-['Nunito:Bold'] font-bold leading-[normal] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap"
                                  data-node-id="I1:392;1399:12922"
                                >
                                  Secundario
                                </p>
                              </div>
                            </div>
                            <div
                              className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
                              data-node-id="1:393"
                            >
                              <div
                                className="bg-[#222] col-1 h-[51px] ml-0 mt-0 relative rounded-[13px] row-1 w-[256px]"
                                data-node-id="1:394"
                              />
                              <div
                                className="col-1 content-stretch flex gap-[8px] items-start ml-[15px] mt-[13px] relative row-1"
                                data-node-id="1:395"
                              >
                                <div
                                  className="relative shrink-0 size-[24px]"
                                  data-node-id="1:396"
                                  data-name="icon home"
                                >
                                  <img
                                    alt=""
                                    className="absolute block inset-0 max-w-none size-full"
                                    src={imgIconHome}
                                  />
                                </div>
                                <div
                                  className="relative shrink-0 size-[24px]"
                                  data-node-id="1:398"
                                  data-name="icon home"
                                >
                                  <img
                                    alt=""
                                    className="absolute block inset-0 max-w-none size-full"
                                    src={imgIconHome1}
                                  />
                                </div>
                                <div
                                  className="relative shrink-0 size-[24px]"
                                  data-node-id="1:400"
                                  data-name="icon home"
                                >
                                  <img
                                    alt=""
                                    className="absolute block inset-0 max-w-none size-full"
                                    src={imgIconHome2}
                                  />
                                </div>
                                <div
                                  className="relative shrink-0 size-[24px]"
                                  data-node-id="1:402"
                                  data-name="icon home"
                                >
                                  <img
                                    alt=""
                                    className="absolute block inset-0 max-w-none size-full"
                                    src={imgIconHome3}
                                  />
                                </div>
                                <div
                                  className="relative shrink-0 size-[24px]"
                                  data-node-id="1:404"
                                  data-name="icon home"
                                >
                                  <img
                                    alt=""
                                    className="absolute block inset-0 max-w-none size-full"
                                    src={imgIconHome4}
                                  />
                                </div>
                                <div
                                  className="relative shrink-0 size-[24px]"
                                  data-node-id="1:406"
                                  data-name="icon home"
                                >
                                  <img
                                    alt=""
                                    className="absolute block inset-0 max-w-none size-full"
                                    src={imgIconHome5}
                                  />
                                </div>
                                <div
                                  className="relative shrink-0 size-[24px]"
                                  data-node-id="1:408"
                                  data-name="accessible_forward"
                                >
                                  <img
                                    alt=""
                                    className="absolute block inset-0 max-w-none size-full"
                                    src={imgAccessibleForward}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex items-start pb-[16px] pt-[64px] px-[16px] relative shrink-0 w-full"
            data-node-id="1:409"
            data-name="Section"
          >
            <div
              className="[word-break:break-word] flex flex-col font-['Jaro:Regular'] h-[84px] justify-center leading-[0] relative shrink-0 text-[64px] text-black w-[621px]"
              data-node-id="1:410"
              style={{ fontVariationSettings: '"opsz" 6' }}
            >
              <p className="leading-[32px]">{`OUTCOMES & LEARNINGS`}</p>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative shrink-0 w-full"
            data-node-id="1:411"
          >
            <div
              className="[word-break:break-word] flex flex-col font-['Jaro:Regular'] h-[84px] justify-center leading-[0] min-w-full relative shrink-0 text-[52px] text-black w-[min-content]"
              data-node-id="1:412"
              style={{ fontVariationSettings: '"opsz" 6' }}
            >
              <p className="leading-[32px]">To improve</p>
            </div>
            <div
              className="content-stretch flex flex-col h-[628px] items-start relative shrink-0 w-[calc(100%-28px)]"
              data-node-id="1:413"
            >
              <div
                className="content-stretch flex h-[628px] items-start px-[13px] relative shrink-0 w-full"
                data-node-id="1:414"
              >
                <div
                  className="absolute content-stretch flex h-[628px] items-start left-0 top-0 w-[calc(100%-28px)]"
                  data-node-id="1:415"
                  data-name="mockups moonride"
                >
                  <div
                    className="content-stretch flex flex-[1_0_0] gap-[64px] items-start min-w-px py-[32px] relative"
                    data-node-id="1:416"
                  >
                    <ul
                      className="[word-break:break-word] block font-['Inter:Regular'] font-normal h-[439px] leading-[0] list-disc not-italic relative shrink-0 text-[#0e0d0d] text-[24px] tracking-[-0.53px] w-[452px]"
                      data-node-id="1:417"
                    >
                      <li className="mb-0 ms-[36px]">
                        <span className="leading-[31px]">{`Complete flows `}</span>
                      </li>
                      <li className="mb-0 ms-[36px]">
                        <span className="leading-[31px]">{`User tests `}</span>
                      </li>
                      <li className="mb-0 ms-[36px]">
                        <span className="leading-[31px]">Front/Back-end development</span>
                      </li>
                      <li className="mb-0 ms-[36px]">
                        <span className="leading-[31px]">Social aspect</span>
                      </li>
                      <li className="mb-0 ms-[36px]">
                        <span className="leading-[31px]">
                          Accessibility for users with other types of disabilities
                        </span>
                      </li>
                      <li className="mb-0 ms-[36px]">
                        <span className="leading-[31px]">{`Network of accessible venues `}</span>
                      </li>
                      <li className="mb-0 ms-[36px]">
                        <span className="leading-[31px]">
                          AI for routes, suggestions and customer services
                        </span>
                      </li>
                      <li className="ms-[36px]">
                        <span className="leading-[31px]">Footprint optimization</span>
                      </li>
                    </ul>
                    <div
                      className="content-stretch flex h-[564px] items-center justify-end pl-[12px] pr-[9px] py-[12px] relative shrink-0 w-[256px]"
                      data-node-id="1:418"
                      data-name="Front"
                    >
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          alt=""
                          className="absolute left-0 max-w-none size-full top-0"
                          src={imgFront}
                        />
                      </div>
                      <div
                        className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
                        data-node-id="1:419"
                        data-name="Mockup"
                      >
                        <div
                          className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1"
                          data-node-id="1:420"
                          data-name="Mask group"
                        >
                          <div
                            className="col-1 h-[540px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.138px_9.076px] mask-size-[234.94px_539.767px] ml-0 mt-[-9.02px] relative row-1 w-[232px]"
                            data-node-id="1:422"
                            style={{ maskImage: `url("${imgDesign}")` }}
                            data-name="Design"
                          >
                            <img
                              alt=""
                              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                              src={imgDesign1}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
                      data-node-id="1:423"
                      data-name="Front"
                    >
                      <div
                        className="col-1 h-[563.592px] ml-0 mt-0 relative row-1 w-[256px]"
                        data-node-id="1:424"
                        data-name="iPhone-14-Pro"
                      >
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <img
                            alt=""
                            className="absolute left-0 max-w-none size-full top-0"
                            src={imgFront}
                          />
                        </div>
                      </div>
                      <div
                        className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[13.43px] mt-[11.71px] place-items-start relative row-1"
                        data-node-id="1:425"
                        data-name="Mockup"
                      >
                        <div
                          className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1"
                          data-node-id="1:426"
                          data-name="Mask group"
                        >
                          <div
                            className="col-1 h-[502px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.433px_-28.083px] mask-size-[229.714px_539.845px] ml-[-1.43px] mt-[28.08px] relative row-1 w-[232px]"
                            data-node-id="1:428"
                            style={{ maskImage: `url("${imgDesign2}")` }}
                            data-name="Design"
                          >
                            <img
                              alt=""
                              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                              src={imgDesign3}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
                      data-node-id="1:429"
                      data-name="Front"
                    >
                      <div
                        className="col-1 h-[563.592px] ml-0 mt-0 relative row-1 w-[256px]"
                        data-node-id="1:430"
                        data-name="iPhone-14-Pro"
                      >
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <img
                            alt=""
                            className="absolute left-0 max-w-none size-full top-0"
                            src={imgFront}
                          />
                        </div>
                      </div>
                      <div
                        className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[13.43px] mt-[11.72px] place-items-start relative row-1"
                        data-node-id="1:431"
                        data-name="Mockup"
                      >
                        <div
                          className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1"
                          data-node-id="1:432"
                          data-name="Mask group"
                        >
                          <div
                            className="col-1 h-[527px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[5.434px_-0.284px] mask-size-[229.714px_539.845px] ml-[-5.43px] mt-[0.28px] relative row-1 w-[239px]"
                            data-node-id="1:434"
                            style={{ maskImage: `url("${imgDesign2}")` }}
                            data-name="Design"
                          >
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                              <img
                                alt=""
                                className="absolute h-[99.73%] left-0 max-w-none top-[0.33%] w-full"
                                src={imgDesign4}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="contact"
            className="bg-[#121212] content-stretch flex flex-col items-start p-[16px] relative shrink-0 w-full"
            data-node-id="1:435"
            data-name="Container"
          >
            <div
              className="content-stretch flex gap-[10px] items-start pb-[60px] relative shrink-0 w-full"
              data-node-id="1:436"
              data-name="Container"
            >
              <div
                className="content-stretch flex flex-col h-[152px] items-start pb-[120px] pr-[399px] relative shrink-0 w-[467px]"
                data-node-id="1:437"
                data-name="Paragraph"
              >
                <div
                  className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[21px] text-white whitespace-nowrap"
                  data-node-id="1:438"
                >
                  <p className="leading-[32px]">©2026</p>
                </div>
              </div>
              <div
                className="h-[152px] relative shrink-0 w-[467px]"
                data-node-id="1:439"
                data-name="Span"
              />
              <div
                className="content-stretch flex flex-col gap-[24px] h-[153px] items-start relative shrink-0 w-[467px]"
                data-node-id="1:440"
                data-name="Container"
              >
                <div
                  className="content-stretch flex flex-col items-start relative shrink-0 w-[467px]"
                  data-node-id="1:441"
                  data-name="Container"
                >
                  <div
                    className="content-stretch flex flex-col h-[32px] items-start pr-[202px] relative shrink-0 w-[467px]"
                    data-node-id="1:442"
                    data-name="Paragraph"
                  >
                    <div
                      className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[21px] text-white whitespace-nowrap"
                      data-node-id="1:443"
                    >
                      <p className="leading-[32px]">Interested to work with me?</p>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col h-[32px] items-start pr-[245px] relative shrink-0 w-[467px]"
                    data-node-id="1:444"
                    data-name="Paragraph"
                  >
                    <div
                      className="content-stretch flex flex-col h-[32px] items-start relative shrink-0 w-[222px]"
                      data-node-id="1:445"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[21px] text-white whitespace-nowrap"
                        data-node-id="1:446"
                      >
                        <a href="mailto:ecaldas22@gmail.com" className="block [text-underline-position:from-font] decoration-from-font decoration-solid leading-[32px] underline">
                          ecaldas22@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="content-stretch flex flex-col items-start relative shrink-0 w-[467px]"
                  data-node-id="1:447"
                  data-name="Container"
                >
                  <div
                    className="content-stretch flex flex-col h-[32px] items-start pr-[381px] relative shrink-0 w-[467px]"
                    data-node-id="1:448"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex flex-col h-[32px] items-start relative shrink-0 w-[86px]"
                      data-node-id="1:449"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[21px] text-white whitespace-nowrap"
                        data-node-id="1:450"
                      >
                        <a href="https://www.behance.net/caldas" target="_blank" rel="noreferrer" className="block [text-underline-position:from-font] decoration-from-font decoration-solid leading-[32px] underline">
                          Behance
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex flex-col h-[32px] items-start pr-[386px] relative shrink-0 w-[467px]"
                    data-node-id="1:451"
                    data-name="Container"
                  >
                    <div
                      className="content-stretch flex flex-col h-[32px] items-start relative shrink-0 w-[81px]"
                      data-node-id="1:452"
                      data-name="Container"
                    >
                      <div
                        className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[21px] text-white whitespace-nowrap"
                        data-node-id="1:453"
                      >
                        <a href="https://www.linkedin.com/in/eva-caldas-58232515/" target="_blank" rel="noreferrer" className="block [text-underline-position:from-font] decoration-from-font decoration-solid leading-[32px] underline">
                          LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
