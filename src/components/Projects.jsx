import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      {projects.map((p) => (
        <article key={p.title}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          <p>{p.stack.join(" · ")}</p>
          {p.github && <a href={p.github} target="_blank">GitHub</a>}
        </article>
      ))}
    </section>
  );
}