import { Button } from "@mui/material";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white text-center px-4">
      <div className="w-32 h-32 rounded-full bg-purple-500 mb-6 flex items-center justify-center text-5xl">👩🏾‍💻</div>
      <h1 className="text-4xl md:text-6xl font-bold mb-2">Hi, I'm <span className="text-purple-400">Lydie</span></h1>
      <p className="text-xl md:text-2xl text-slate-300 mb-6">
        I build{" "}
        <span className="text-purple-400 font-semibold">
          beautiful web experiences
        </span>
      </p>
      <p className="text-slate-400 max-w-md mb-8">
        A passionate frontend developer crafting clean, accessible, and modern web apps.
      </p>
      <div className="flex gap-4">
        <Button
          variant="contained"
          sx={{ background: "#7c3aed", "&:hover": { background: "#6d28d9" } }}
          onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
        >
          View Projects
        </Button>
        <Button
          variant="outlined"
          sx={{ borderColor: "#7c3aed", color: "#a78bfa", "&:hover": { borderColor: "#a78bfa" } }}
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          Contact Me
        </Button>
      </div>
    </section>
  );
}
