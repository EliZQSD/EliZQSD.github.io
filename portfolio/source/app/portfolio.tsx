"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Project = {
  id: string;
  index: string;
  title: string;
  client: string;
  year: string;
  role: string[];
  context: string;
  execution: string;
  hero: string;
  heroAlt: string;
  gallery: { src: string; alt: string; label?: string }[];
  artist: string;
  artistUrl: string;
  sourceUrl: string;
  tone: string;
};

const projects: Project[] = [
  {
    id: "arcane",
    index: "01",
    title: "Arcane — Season 2",
    client: "Netflix France",
    year: "2024",
    role: ["Project Management", "Creative Coordination", "Delivery"],
    context:
      "A cinematic poster created around the second season of Arcane, bringing a high-visibility entertainment brief into a polished final campaign asset.",
    execution:
      "Coordination across brief, talent, production follow-up, feedback and delivery through ASH Talents.",
    hero: "/projects/arcane/arcane-01.webp",
    heroAlt: "Arcane Season 2 campaign poster featuring Jinx over Piltover",
    gallery: [
      {
        src: "/projects/arcane/arcane-02.webp",
        alt: "Wide Arcane Season 2 artwork showing Jinx and the city",
        label: "Final artwork — landscape adaptation",
      },
      {
        src: "/projects/arcane/arcane-01.webp",
        alt: "Vertical Arcane Season 2 poster",
        label: "Final poster",
      },
    ],
    artist: "NameJr & IlyasseL",
    artistUrl: "https://www.behance.net/gallery/186095503/Arcane-Saison-2-poster",
    sourceUrl: "https://www.behance.net/gallery/186095503/Arcane-Saison-2-poster",
    tone: "#9c172c",
  },
  {
    id: "gp-explorer",
    index: "02",
    title: "GP Explorer 2",
    client: "Squeezie",
    year: "2023",
    role: ["Project Management", "Talent Coordination", "Timeline & Delivery"],
    context:
      "A key visual for the second edition of GP Explorer, built to carry the scale, cast and energy of one of France’s largest creator-led live events.",
    execution:
      "Project operations around creative talent, milestones, feedback loops and final delivery through ASH Talents.",
    hero: "/projects/gp-explorer/gp-02.webp",
    heroAlt: "GP Explorer 2 event poster with drivers and fireworks",
    gallery: [
      {
        src: "/projects/gp-explorer/gp-01.webp",
        alt: "Wide crop of the GP Explorer 2 driver composition",
        label: "Campaign composition",
      },
      {
        src: "/projects/gp-explorer/gp-02.webp",
        alt: "Vertical GP Explorer 2 poster",
        label: "Final poster",
      },
    ],
    artist: "NameJr",
    artistUrl: "https://www.behance.net/gallery/172279039/GP-Explorer-Poster",
    sourceUrl: "https://www.behance.net/gallery/172279039/GP-Explorer-Poster",
    tone: "#183b5d",
  },
  {
    id: "brown-nike",
    index: "03",
    title: "Brown Wrestling × Nike",
    client: "Brown University",
    year: "2024",
    role: ["Client Coordination", "Project Follow-up", "Quality Control"],
    context:
      "A social identity system for Brown University Women’s Wrestling in partnership with Nike, designed for the speed and intensity of collegiate sport.",
    execution:
      "Coordination of the client-to-creative workflow, production follow-up and delivery through ASH Talents.",
    hero: "/projects/nike-brown/brown-01.webp",
    heroAlt: "Brown University wrestling social graphic for athlete Amit Elor",
    gallery: [
      { src: "/projects/nike-brown/brown-03.webp", alt: "Brown Wrestling takedown social media graphic", label: "Social campaign system" },
      { src: "/projects/nike-brown/brown-02.webp", alt: "Brown Wrestling match result graphic", label: "Score communication" },
      { src: "/projects/nike-brown/brown-04.webp", alt: "Brown Wrestling new season campaign graphic", label: "Season launch" },
      { src: "/projects/nike-brown/brown-05.webp", alt: "Aerial image of Brown University wrestling mat with Nike branding", label: "Event communication" },
      { src: "/projects/nike-brown/brown-06.webp", alt: "Brown Wrestling result graphic featuring two athletes", label: "Matchday output" },
    ],
    artist: "Noé Garsoux",
    artistUrl: "https://www.behance.net/gallery/205386093/Brown-Univeristy-WW-X-Nike",
    sourceUrl: "https://www.behance.net/gallery/205386093/Brown-Univeristy-WW-X-Nike",
    tone: "#c41230",
  },
];

function ProjectCase({ project, close }: { project: Project; close: () => void }) {
  return (
    <div className="case" role="dialog" aria-modal="true" aria-label={`${project.title} case study`}>
      <button className="case-close" onClick={close} aria-label="Close case study">
        <span>Close</span><span aria-hidden="true">×</span>
      </button>
      <div className="case-hero" style={{ backgroundColor: project.tone }}>
        <Image src={project.hero} alt={project.heroAlt} fill priority sizes="100vw" className="case-hero-image" />
        <div className="case-hero-shade" />
        <div className="case-title-wrap">
          <p>{project.client} · {project.year}</p>
          <h2>{project.title}</h2>
        </div>
      </div>

      <div className="case-body">
        <section className="case-intro">
          <div>
            <p className="eyebrow">Role</p>
            <p className="role-stack">{project.role.join(" / ")}</p>
          </div>
          <div className="case-copy">
            <div><p className="eyebrow">01 — Context</p><p>{project.context}</p></div>
            <div><p className="eyebrow">02 — Execution</p><p>{project.execution}</p></div>
          </div>
        </section>

        <section className="case-gallery" aria-label="Final work">
          {project.gallery.map((image, index) => (
            <figure className={index === 0 ? "wide" : ""} key={image.src}>
              <div className="case-image-frame">
                <Image src={image.src} alt={image.alt} fill sizes={index === 0 ? "100vw" : "(max-width: 720px) 100vw, 50vw"} />
              </div>
              <figcaption><span>{String(index + 1).padStart(2, "0")}</span>{image.label}</figcaption>
            </figure>
          ))}
        </section>

        <section className="credits">
          <p className="eyebrow">Credits</p>
          <dl>
            <div><dt>Client</dt><dd>{project.client}</dd></div>
            <div><dt>Project management / Coordination</dt><dd>Elimane Sall — ASH Talents</dd></div>
            <div><dt>Creative / Design / 3D</dt><dd><a href={project.artistUrl} target="_blank" rel="noreferrer">{project.artist} ↗</a></dd></div>
            <div><dt>Artwork source</dt><dd><a href={project.sourceUrl} target="_blank" rel="noreferrer">Behance project ↗</a></dd></div>
          </dl>
        </section>
      </div>
    </div>
  );
}

export default function Home() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 }
    );
    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "";
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setActiveProject(null);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeProject]);

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Elimane Sall — home">ES<span>®</span></a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a>
        </nav>
        <p>Montréal · Paris · Remote</p>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-art" aria-hidden="true"><Image src="/projects/arcane/arcane-02.webp" alt="" fill priority sizes="100vw" /></div>
          <div className="hero-wash" />
          <div className="hero-topline"><span>Creative projects</span><span>Production & coordination</span></div>
          <h1><span>Elimane</span><span>Sall</span></h1>
          <div className="hero-bottom">
            <p>I manage the work<br />behind creative ideas.</p>
            <a href="#work">Selected work <span aria-hidden="true">↓</span></a>
          </div>
        </section>

        <section className="statement" data-reveal>
          <p className="eyebrow">Behind creative work, there is execution.</p>
          <h2>Client, talent, production, timelines and delivery — moving as one.</h2>
        </section>

        <section id="work" className="work">
          <div className="section-head"><p>Selected work</p><p>2023—2024</p></div>
          {projects.map((project) => (
            <button className="project" key={project.id} onClick={() => setActiveProject(project)} data-reveal aria-label={`Open ${project.title} case study`}>
              <div className="project-media" style={{ backgroundColor: project.tone }}>
                <Image src={project.hero} alt={project.heroAlt} fill sizes="100vw" />
                <div className="project-overlay" />
              </div>
              <div className="project-index">{project.index}</div>
              <div className="project-title"><span>{project.client} · {project.year}</span><h3>{project.title}</h3></div>
              <div className="project-role">{project.role.map((item) => <span key={item}>{item}</span>)}</div>
              <div className="project-open" aria-hidden="true">View case <span>↗</span></div>
            </button>
          ))}
        </section>

        <section className="process" data-reveal>
          <div className="section-head"><p>Project operations</p><p>From brief to delivery</p></div>
          <div className="process-grid">
            <div><span>01</span><h3>Align</h3><p>Translate the brief into a shared direction, scope and sequence.</p></div>
            <div><span>02</span><h3>Coordinate</h3><p>Keep client, creative talent and production moving together.</p></div>
            <div><span>03</span><h3>Deliver</h3><p>Protect the timeline, the quality bar and the final handoff.</p></div>
          </div>
        </section>

        <section className="about" id="about">
          <div className="about-kicker"><p>About</p><p>Montréal, QC</p></div>
          <div className="about-copy" data-reveal>
            <h2>Built around creatives.<br />Trained to think in systems.</h2>
            <div>
              <p>I started young, working around digital creators and high-visibility entertainment projects. At ASH Talents, that became project management: understanding the brief, coordinating talent, organizing delivery and making the work happen.</p>
              <p>Today, industrial engineering at Polytechnique Montréal adds a systems, process and analytical lens to the same instinct: turn complex ideas into work that ships.</p>
            </div>
          </div>
          <div className="experience" data-reveal>
            <div><span>2022—2024</span><strong>ASH Talents</strong><p>Project Manager</p></div>
            <div><span>2026—</span><strong>CLÉE — Polytechnique Montréal</strong><p>VP Partnerships</p></div>
            <div><span>2026</span><strong>Kruger</strong><p>Operations & Industrial Logistics</p></div>
            <div><span>2021</span><strong>CIDC / OIC</strong><p>Strategy & Data</p></div>
          </div>
        </section>

        <section className="contact" id="contact">
          <p className="eyebrow">Available for meaningful projects</p>
          <h2>Let’s build<br />something <em>real.</em></h2>
          <a href="mailto:elimanesall.eng@gmail.com">elimanesall.eng@gmail.com <span>↗</span></a>
          <div className="contact-foot"><p>Elimane Sall</p><p>Creative Project Management & Production</p><p>© 2026</p></div>
        </section>
      </main>

      {activeProject && <ProjectCase project={activeProject} close={() => setActiveProject(null)} />}
    </>
  );
}
