import Pipeline from "@/components/Pipeline";
import ProjectCard from "@/components/ProjectCard";
import {
  profile,
  heroPipelineSteps,
  skillCategories,
  educationAndExperience,
  projects,
} from "@/data/projects";

export default function Home() {
  return (
    <main className="wrap">
      <header className="hero">
        <div>
          <h1>{profile.name}</h1>
          <p className="sub">{profile.role}</p>
          <p className="lead">{profile.tagline}</p>
          <div className="cta">
            <a href="#projects" className="btn primary">
              View Projects
            </a>
            <a href="#contact" className="btn ghost">
              Get in Touch
            </a>
          </div>
          <div className="social mono">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
            <a href={`mailto:${profile.email}`}>Email ↗</a>
          </div>
        </div>

        <div className="flow">
          <div className="bar">
            <i />
            <i />
            <i />
          </div>
          <Pipeline steps={heroPipelineSteps} highlight={[0, 2, 4]} />
          <code>{"// automated daily ingestion & analytical warehouse"}</code>
        </div>
      </header>

      <section id="about">
        <h2>About</h2>
        <div className="prose">
          <p>{profile.bio}</p>
          <p>
            Focused on crafting dependable data infrastructure — transforming raw, messy datasets
            into clean, well-modeled data warehouses ready for business intelligence and data-driven
            decision making.
          </p>
        </div>

        <div className="skills">
          {skillCategories.map((cat) => (
            <div key={cat.title}>
              <h3>{cat.title}</h3>
              <ul>
                {cat.skills.map((skill) => (
                  <li key={skill} className="mono">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} p={project} />
          ))}
        </div>
      </section>

      <section id="experience">
        <h2>Education &amp; Experience</h2>
        <div className="list">
          {educationAndExperience.map((item, idx) => (
            <div key={idx}>
              <b>{item.roleOrDegree}</b>
              <span>{item.details}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="contact">
        <div className="contact">
          <h2>Get in Touch</h2>
          <p>
            I am currently open to data engineering, data analytics, and software engineering
            opportunities. Feel free to connect or drop a message!
          </p>
          <div className="cta">
            <a href={`mailto:${profile.email}`} className="btn primary">
              Send an Email
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn ghost"
            >
              Connect on LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn ghost"
            >
              Follow on GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
