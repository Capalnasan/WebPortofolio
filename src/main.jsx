import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Brush,
  Code2,
  Github,
  Instagram,
  Mail,
  MapPin,
  PanelsTopLeft,
  Sparkles,
  UserRound,
} from "lucide-react";
import "./styles.css";

const softwareProjects = [
  {
    title: "PasswordManager",
    tag: "Python",
    description: "Encrypted password manager focused on practical security basics and clean utility design.",
    href: "https://github.com/Capalnasan/PasswordManager",
  },
  {
    title: "Proiect_OS",
    tag: "C",
    description: "Operating Systems lab project, useful for demonstrating low-level thinking and process basics.",
    href: "https://github.com/Capalnasan/Proiect_OS",
  },
  {
    title: "DC_Benchmark_Project",
    tag: "Python",
    description: "Benchmark-style project for performance, data handling, and measurement-oriented work.",
    href: "https://github.com/Capalnasan/DC_Benchmark_Project",
  },
  {
    title: "StudentManager",
    tag: "App",
    description: "Student management project that can grow into a stronger CRUD and data modeling case study.",
    href: "https://github.com/Capalnasan/StudentManager",
  },
];

const designWork = [
  {
    title: "3 zile mr",
    type: "Poster / Social",
    size: "large",
    src: "https://raw.githubusercontent.com/Capalnasan/Graphic-Design-Portofolio/main/3%20zile%20mr-01.png",
  },
  {
    title: "Get to know night",
    type: "Event Visual",
    size: "wide",
    src: "https://raw.githubusercontent.com/Capalnasan/Graphic-Design-Portofolio/main/get_to_know_night-01.png",
  },
  {
    title: "BB_BS",
    type: "Brand / Layout",
    src: "https://raw.githubusercontent.com/Capalnasan/Graphic-Design-Portofolio/main/BB_BS.png",
  },
  {
    title: "BB_BS-FR",
    type: "Variant",
    src: "https://raw.githubusercontent.com/Capalnasan/Graphic-Design-Portofolio/main/BB_BS-FR.png",
  },
  {
    title: "Campus Quest",
    type: "Social Post",
    src: "https://raw.githubusercontent.com/Capalnasan/Graphic-Design-Portofolio/main/postare_campus_quest-01.png",
  },
  {
    title: "Start ETCTI",
    type: "Poster",
    src: "https://raw.githubusercontent.com/Capalnasan/Graphic-Design-Portofolio/main/start%20etcti-01.png",
  },
];

const skillGroups = [
  ["C", "C++", "Python", "Java", "SQL"],
  ["React", "HTML", "CSS", "GitHub", "Vercel"],
  ["Photoshop", "Illustrator", "Premiere Pro", "CapCut"],
];

const navItems = [
  ["Home", "#home"],
  ["Software", "#software"],
  ["Design", "#design"],
  ["Contact", "#contact"],
];

function ButtonLink({ href, children, variant = "primary", icon: Icon }) {
  return (
    <a className={`button ${variant}`} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      <span>{children}</span>
      {Icon ? <Icon size={18} strokeWidth={2.1} /> : null}
    </a>
  );
}

function App() {
  return (
    <>
      <div className="ambient" aria-hidden="true">
        <span className="mesh meshOne" />
        <span className="mesh meshTwo" />
        <span className="mesh meshThree" />
        <span className="gridGlow" />
      </div>

      <header className="topbar">
        <a className="brand" href="#home" aria-label="Go to home">
          <span className="brandMark">VC</span>
          <span>Vlad Capalnasan</span>
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="heroCopy">
            <p className="eyebrow">Computer Engineering Student • Software + Visual Communication</p>
            <h1>Building clean software and sharp visuals with a practical, human feel.</h1>
            <p className="lead">
              I am Vlad-Gabriel Capalnasan, a Computer Engineering student at UPT in Timisoara.
              I work across code, design, student organization visuals, and small products that
              become stronger with every iteration.
            </p>
            <div className="heroActions">
              <ButtonLink href="#software" icon={Code2}>View software</ButtonLink>
              <ButtonLink href="#design" variant="secondary" icon={Brush}>View design</ButtonLink>
            </div>
          </div>

          <aside className="profilePanel" aria-label="Profile summary">
            <div className="avatarRing">
              <span>VC</span>
            </div>
            <div>
              <p className="panelLabel">Currently</p>
              <h2>Image Dept Coordinator at LSFETc</h2>
              <p>UPT CTI-EN, Oct 2023 to present</p>
            </div>
            <div className="facts">
              <span><MapPin size={16} /> Arad / Timisoara</span>
              <span><UserRound size={16} /> Software developer + designer</span>
              <span><Sparkles size={16} /> Branding, posters, social, tools</span>
            </div>
          </aside>
        </section>

        <section className="section split">
          <div>
            <p className="eyebrow">About</p>
            <h2>Two directions, one portfolio.</h2>
          </div>
          <p className="sectionText">
            The old portfolio separated software and graphic design into different pages. This
            React version keeps both strengths visible in one polished experience, with direct
            project links, visual work, skills, and contact paths ready for Vercel.
          </p>
        </section>

        <section id="software" className="section">
          <div className="sectionHeader">
            <div>
              <p className="eyebrow">Software</p>
              <h2>Featured projects</h2>
            </div>
            <ButtonLink href="https://github.com/Capalnasan?tab=repositories" variant="compact" icon={Github}>
              All repos
            </ButtonLink>
          </div>

          <div className="projectGrid">
            {softwareProjects.map((project) => (
              <article className="projectCard" key={project.title}>
                <div className="cardTop">
                  <Code2 size={20} />
                  <span>{project.tag}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a className="textLink" href={project.href} target="_blank" rel="noreferrer">
                  Repository <ArrowUpRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="design" className="section">
          <div className="sectionHeader">
            <div>
              <p className="eyebrow">Graphic Design</p>
              <h2>Selected visual work</h2>
            </div>
            <ButtonLink href="https://github.com/Capalnasan/Graphic-Design-Portofolio" variant="compact" icon={PanelsTopLeft}>
              Design repo
            </ButtonLink>
          </div>

          <div className="gallery">
            {designWork.map((item) => (
              <a
                className={`galleryItem ${item.size || ""}`}
                href="https://github.com/Capalnasan/Graphic-Design-Portofolio"
                target="_blank"
                rel="noreferrer"
                key={item.title}
              >
                <img src={item.src} alt={`${item.title} design work`} loading="lazy" />
                <span>
                  <strong>{item.title}</strong>
                  <small>{item.type}</small>
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="section infoGrid">
          <article className="infoPanel">
            <p className="eyebrow">Stack</p>
            <h2>Skills and tools</h2>
            <div className="skillRows">
              {skillGroups.map((group) => (
                <div className="chipRow" key={group.join("-")}>
                  {group.map((skill) => (
                    <span className="chip" key={skill}>{skill}</span>
                  ))}
                </div>
              ))}
            </div>
          </article>

          <article className="infoPanel">
            <p className="eyebrow">Workflow</p>
            <h2>How I approach work</h2>
            <div className="steps">
              <span><strong>01</strong> Understand the goal, audience, constraints, and deadline.</span>
              <span><strong>02</strong> Build a clear first version with strong structure and hierarchy.</span>
              <span><strong>03</strong> Refine details, test responsiveness, and prepare final delivery.</span>
            </div>
          </article>
        </section>

        <section id="contact" className="section contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Let’s build something useful and good-looking.</h2>
          </div>
          <div className="contactLinks">
            <a href="mailto:capalnasan04@gmail.com"><Mail size={19} /> capalnasan04@gmail.com</a>
            <a href="https://github.com/Capalnasan" target="_blank" rel="noreferrer"><Github size={19} /> GitHub</a>
            <a href="https://www.instagram.com/vlad.ro3/" target="_blank" rel="noreferrer"><Instagram size={19} /> Instagram</a>
          </div>
        </section>
      </main>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
