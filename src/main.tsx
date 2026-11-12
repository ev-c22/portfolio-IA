import React from "react";
import ReactDOM from "react-dom/client";
import AboutPage from "./AboutPage";
import App from "./App";
import CaseStudySchoolJam from "./CaseStudySchoolJam";
import CaseStudyLaPlata from "./CaseStudyLaPlata";
import CaseStudyPinpoint from "./CaseStudyPinpoint";
import { MoonriderPage } from "./CaseStudyMoonriderMobile";
import PlayPage from "./PlayPage";
import "./index.css";

// Minimal routing: each case study has its own path, everything else is the home page.
// vercel.json rewrites every path to index.html so these URLs load directly.
const routes: Record<string, () => React.JSX.Element> = {
  "/about": () => <AboutPage />,
  "/play": () => <PlayPage />,
  "/moonrider": () => <MoonriderPage />,
  "/school-jam": () => <CaseStudySchoolJam />,
  "/la-plata": () => <CaseStudyLaPlata />,
  "/pinpoint": () => <CaseStudyPinpoint />,
};

const path = window.location.pathname.replace(/\/+$/, "");
const Page = routes[path] ?? App;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
);
