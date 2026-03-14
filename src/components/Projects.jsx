import { Card, CardContent, CardActions, Button, Chip } from "@mui/material";

const projects = [
  {
    title: "E-Commerce App",
    desc: "A full-stack shopping app with cart, auth, and payment integration.",
    tags: ["React", "Node.js", "MongoDB"],
    demo: "#",
    code: "#",
  },
  {
    title: "Weather Dashboard",
    desc: "Real-time weather app using OpenWeather API with beautiful UI.",
    tags: ["React", "API", "Tailwind"],
    demo: "#",
    code: "#",
  },
  {
    title: "Task Manager",
    desc: "A drag-and-drop task management app with local storage.",
    tags: ["JavaScript", "HTML", "CSS"],
    demo: "#",
    code: "#",
  },
  {
    title: "Portfolio Website",
    desc: "This portfolio built with React, MUI, Ant Design & Tailwind.",
    tags: ["React", "MUI", "Ant Design"],
    demo: "#",
    code: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-slate-800 text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-purple-400 mb-12">Projects</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map(({ title, desc, tags, demo, code }) => (
            <Card key={title} sx={{ background: "#0f172a", color: "white", borderRadius: 3 }}>
              <CardContent>
                <h3 className="text-xl font-bold text-purple-300 mb-2">{title}</h3>
                <p className="text-slate-400 text-sm mb-4">{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <Chip key={t} label={t} size="small" sx={{ background: "#4c1d95", color: "white" }} />
                  ))}
                </div>
              </CardContent>
              <CardActions>
                <Button size="small" href={demo} sx={{ color: "#a78bfa" }}>Live Demo</Button>
                <Button size="small" href={code} sx={{ color: "#a78bfa" }}>GitHub</Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
