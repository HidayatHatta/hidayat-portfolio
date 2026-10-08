import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="card">
      <h3>{p.title}</h3>
      <p>{p.summary}</p>
      <div className="tags">
        {p.stack.map((s) => <span className="tag mono" key={s}>{s}</span>)}
      </div>
      <div className="links">
        <Link className="btn primary" href={`/projects/${p.slug}`}>View project</Link>
        <a className="btn ghost" href={p.github} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </article>
  );
}
