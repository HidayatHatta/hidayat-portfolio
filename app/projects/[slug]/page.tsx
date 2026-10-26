import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Pipeline from "@/components/Pipeline";
import { projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export const instant = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return { title: p ? `${p.title} - Hidayat` : "Project not found", description: p?.summary };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <main className="wrap detail">
      <Link href="/#projects" className="back">← Back to projects</Link>
      <h1>{p.title}</h1>
      <p className="lead">{p.summary}</p>
      <div className="tags">
        {p.stack.map((s) => <span className="tag mono" key={s}>{s}</span>)}
      </div>

      <div className="dsec"><h2>Problem</h2><p>{p.problem}</p></div>
      <div className="dsec"><h2>Architecture</h2><Pipeline steps={p.architecture} /></div>
      <div className="dsec"><h2>What I learned</h2><ul>{p.learned.map((l) => <li key={l}>{l}</li>)}</ul></div>

      <div className="cta" style={{ marginTop: 40 }}>
        <a className="btn primary" href={p.github} target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
    </main>
  );
}
