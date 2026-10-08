type Step = { name: string; note: string };

export default function Pipeline({ steps, highlight = [0, -1] }: { steps: Step[]; highlight?: number[] }) {
  const on = highlight.map((i) => (i < 0 ? steps.length + i : i));
  return (
    <div className="pipeline mono">
      {steps.map((s, i) => (
        <div key={s.name}>
          {i > 0 && <div className="arrow">↓</div>}
          <div className={`step ${on.includes(i) ? "on" : ""}`}>
            {s.name} <small>{s.note}</small>
          </div>
        </div>
      ))}
    </div>
  );
}
