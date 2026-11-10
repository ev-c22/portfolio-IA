import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CaseStudyMoonrider from "./CaseStudyMoonrider";
import "./index.css";

// Minimal routing: /moonrider shows the case study, everything else the home page.
// vercel.json rewrites every path to index.html so these URLs load directly.
const path = window.location.pathname.replace(/\/+$/, "");
const Page = path === "/moonrider" ? CaseStudyMoonrider : App;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
);
