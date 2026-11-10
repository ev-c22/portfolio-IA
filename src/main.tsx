import React from "react";
import ReactDOM from "react-dom/client";
import AboutPage from "./AboutPage";
import App from "./App";
import CaseStudyTemplate from "./CaseStudyTemplate";
import { MoonriderPage } from "./CaseStudyMoonriderMobile";
import "./index.css";

// Minimal routing: each case study has its own path, everything else is the home page.
// vercel.json rewrites every path to index.html so these URLs load directly.
const routes: Record<string, () => React.JSX.Element> = {
  "/about": () => <AboutPage />,
  "/moonrider": () => <MoonriderPage />,
  // Placeholder pages until the real images and copy are ready.
  "/school-jam": () => <CaseStudyTemplate name="School Jam" />,
  "/la-plata": () => <CaseStudyTemplate name="La Plata" />,
};

const path = window.location.pathname.replace(/\/+$/, "");
const Page = routes[path] ?? App;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
);
