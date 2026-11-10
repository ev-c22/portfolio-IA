import { useEffect, useRef, useState } from "react";

type ViewMode = "grid" | "list";

type Project = {
  name: string;
  discipline: string;
  image?: string;
  imageClass?: string;
  background: string;
};

const projects: Project[] = [
  {
    name: "Moonrider",
    discipline: "Product Design",
    image: "/assets/34200.png",
    imageClass: "project-image--contain",
    background: "#9a948c",
  },
  {
    name: "School Jam",
    discipline: "UX/UI Design",
    image: "/assets/3515f.png",
    imageClass: "project-image--contain",
    background: "#d4ebe5",
  },
  {
    name: "La Plata",
    discipline: "Product Design",
    image: "/assets/04ba0.png",
    imageClass: "project-image--cover",
    background: "#ffffff",
  },
  {
    name: "Pinpoint",
    discipline: "Brand Identity",
    image: "/assets/1f504.png",
    imageClass: "project-image--pinpoint",
    background: "#e6e6e6",
  },
  {
    name: "Mojubá Capoeira",
    discipline: "Graphic Design",
    image: "/assets/11414.png",
    imageClass: "project-image--capoeira",
    background: "#aeaeae",
  },
  {
    name: "COMING SOON",
    discipline: "Product Design",
    background: "#e6e6e6",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card" style={{ backgroundColor: project.background }}>
      {project.image ? (
        <img
          alt={`${project.name} project`}
          className={`project-image ${project.imageClass ?? ""}`}
          src={project.image}
        />
      ) : null}
      <div className="project-caption">
        <div className="project-label">
          <h2>{project.name}</h2>
          <p>{project.discipline}</p>
        </div>
        <button aria-label={`More about ${project.name}`} className="more-button" type="button">
          <span />
          <span />
        </button>
      </div>
    </article>
  );
}

// Each list row shows 4 thumbnails. Only the first uses the project's image for now;
// the rest are grey placeholders to swap for real images later.
const LIST_THUMBNAILS = 4;

function ProjectRow({ project }: { project: Project }) {
  return (
    <article className="project-row">
      <div className="project-row-info">
        <h3>{project.name}</h3>
        <p>{project.discipline}</p>
      </div>
      <div className="project-row-media">
        {Array.from({ length: LIST_THUMBNAILS }, (_, index) => {
          const image = index === 0 ? project.image : undefined;
          return (
            <div
              className="project-thumb"
              key={index}
              style={image ? { backgroundColor: project.background } : undefined}
            >
              {image ? <img alt={`${project.name} project`} src={image} /> : null}
            </div>
          );
        })}
      </div>
    </article>
  );
}

// The first 3 projects are case studies; the rest are other projects.
const listGroups = [
  { title: "Case studies", projects: projects.slice(0, 3) },
  { title: "Other projects", projects: projects.slice(3) },
];

function ProjectList() {
  return (
    <div className="project-list">
      {listGroups.map((group) => (
        <div key={group.title}>
          <p className="project-list-header">{group.title}</p>
          {group.projects.map((project) => (
            <ProjectRow key={project.name} project={project} />
          ))}
        </div>
      ))}
    </div>
  );
}

const TITLE_MAX_SIZE = 298;

// Scales the header name so "EVA CALDAS" always fits the available width.
function FitTitle({ children }: { children: string }) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const text = textRef.current;
    if (!title || !text) return;

    const fit = () => {
      const styles = getComputedStyle(title);
      const available =
        title.clientWidth - parseFloat(styles.paddingLeft) - parseFloat(styles.paddingRight);
      // Measure at a reference size, then scale so the full name fits.
      title.style.setProperty("--title-size", "100px");
      const measured = text.getBoundingClientRect().width;
      if (!measured || available <= 0) return;
      let size = Math.min(TITLE_MAX_SIZE, (100 * available) / measured);
      title.style.setProperty("--title-size", `${size}px`);
      // Second pass: letter-spacing is in px, so it does not scale with font-size.
      const remeasured = text.getBoundingClientRect().width;
      size = Math.min(TITLE_MAX_SIZE, (size * available) / remeasured);
      title.style.setProperty("--title-size", `${Math.floor(size) - 1}px`);
    };

    fit();
    document.fonts?.ready.then(fit);
    const observer = new ResizeObserver(fit);
    observer.observe(title);
    return () => observer.disconnect();
  }, []);

  return (
    <h1 ref={titleRef}>
      <span ref={textRef} style={{ display: "inline-block" }}>
        {children}
      </span>
    </h1>
  );
}

export default function App() {
  const [view, setView] = useState<ViewMode>("grid");

  return (
    <div className="site-shell">
      <header className="site-header">
        <FitTitle>{"Eva\u00a0\u00a0Caldas"}</FitTitle>
        <div className="nav-row">
          <nav aria-label="Primary navigation">
            <a aria-current="page" className="active" href="#work">
              Work
            </a>
            <a href="#play">Play</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <p>Barcelona</p>
        </div>
      </header>

      <main>
        <section className="intro" id="about" aria-labelledby="intro-heading">
          <h2 className="sr-only" id="intro-heading">
            About
          </h2>
          <p>
            <span>UX/UI Designer and Researcher, </span>
            <span>with a background in graphic design </span>
            <span>and a focus on ethical design.</span>
          </p>
        </section>

        <section className="work-section" id="work" aria-labelledby="work-heading">
          <h2 className="sr-only" id="work-heading">
            Selected work
          </h2>
          <div className="view-switcher" role="group" aria-label="Project view">
            <button
              aria-pressed={view === "grid"}
              className={view === "grid" ? "selected" : ""}
              onClick={() => setView("grid")}
              type="button"
            >
              <img alt="" src="/assets/5749c.svg" />
              <span>Grid</span>
              <span className="switcher-spacer" />
            </button>
            <button
              aria-pressed={view === "list"}
              className={view === "list" ? "selected" : ""}
              onClick={() => setView("list")}
              type="button"
            >
              <span className="switcher-spacer" />
              <span>List</span>
              <img alt="" src="/assets/a140f.svg" />
            </button>
          </div>

          {view === "grid" ? (
            <div className="project-groups">
              {listGroups.map((group) => (
                <div key={group.title}>
                  <p className="project-list-header">{group.title}</p>
                  <div className="projects projects--grid">
                    {group.projects.map((project) => (
                      <ProjectCard key={project.name} project={project} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <ProjectList />
          )}
        </section>
        <span className="sr-only" id="play">
          Play
        </span>
      </main>

      <footer id="contact">
        <p>©2026</p>
        <div className="footer-contact">
          <div>
            <p>Interested to work with me?</p>
            <a href="mailto:ecaldas22@gmail.com">ecaldas22@gmail.com</a>
          </div>
          <div>
            <a href="https://www.behance.net/caldas" rel="noreferrer" target="_blank">
              Behance
            </a>
            <a href="https://www.linkedin.com/in/eva-caldas-58232515/" rel="noreferrer" target="_blank">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
