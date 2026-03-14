export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center bg-slate-800 text-white px-6 py-20">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="w-64 h-64 mx-auto rounded-2xl bg-purple-700 flex items-center justify-center text-8xl shadow-xl">
          👩🏾‍💻
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4 text-purple-400">About Me</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            I'm a frontend developer with a passion for building beautiful, responsive, and user-friendly web applications.
            I love turning ideas into reality using modern technologies.
          </p>
          <p className="text-slate-300 leading-relaxed mb-6">
            When I'm not coding, I enjoy learning new technologies, contributing to open source, and mentoring other developers.
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            {[
              ["🎓", "Computer Science Graduate"],
              ["📍", "Based in Africa"],
              ["💼", "Open to Opportunities"],
              ["🌍", "Remote Friendly"],
            ].map(([icon, text]) => (
              <div key={text} className="flex items-center gap-2 text-slate-300">
                <span>{icon}</span><span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
