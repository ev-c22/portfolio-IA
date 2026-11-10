import { useState } from "react";

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

export default function App() {
  const [view, setView] = useState<ViewMode>("grid");

  return (
    <div className="site-shell">
      <header className="site-header">
        <h1>Eva&nbsp;&nbsp;Caldas</h1>
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

          <div className={`projects projects--${view}`}>
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
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
            <a href="https://www.behance.net/" rel="noreferrer" target="_blank">
              Behance
            </a>
            <a href="https://www.linkedin.com/" rel="noreferrer" target="_blank">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
