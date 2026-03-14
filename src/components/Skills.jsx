import { Progress, Tag } from "antd";

const skills = [
  { name: "React", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "HTML & CSS", level: 90 },
  { name: "Tailwind CSS", level: 80 },
  { name: "Node.js", level: 65 },
  { name: "Python", level: 60 },
];

const tools = ["Git", "GitHub", "VS Code", "Figma", "REST APIs", "MUI", "Ant Design"];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen bg-slate-900 text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-purple-400 mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skills.map(({ name, level }) => (
            <div key={name}>
              <div className="flex justify-between mb-1 text-slate-300">
                <span>{name}</span><span>{level}%</span>
              </div>
              <Progress
                percent={level}
                showInfo={false}
                strokeColor="#7c3aed"
                trailColor="#1e293b"
              />
            </div>
          ))}
        </div>
        <h3 className="text-xl font-semibold text-slate-300 mb-4 text-center">Tools & Technologies</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {tools.map((t) => (
            <Tag key={t} color="purple" className="text-sm px-3 py-1">{t}</Tag>
          ))}
        </div>
      </div>
    </section>
  );
}
