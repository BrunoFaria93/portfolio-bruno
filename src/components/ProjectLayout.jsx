import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import PhoneMockup from "./PhoneMockup";
const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function ProjectLayout({ project, darkMode }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    title,
    subtitle,
    heroImage,
    live,
    github,
    tags,
    stats,
    features,
    codeBlocks,
    stack,
  } = project;

  return (
    <div
      className={`${
        darkMode ? "bg-[#0a0a0a] text-white" : "bg-gray-50 text-gray-900"
      } font-sans selection:bg-pink-500 selection:text-white min-h-screen`}
    >
      {/* CRT overlay */}
      {darkMode && (
        <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
      )}

      {/* NAV */}
      <nav
        className={`fixed top-0 w-full z-[90] ${
          darkMode
            ? "bg-black/50 border-white/10"
            : "bg-white/90 border-gray-200"
        } backdrop-blur-md border-b`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-pink-500 transition-colors"
          >
            <ArrowLeft size={16} />
            Voltar
          </Link>
          <div className="text-3xl font-black tracking-tighter italic">
            B<span className="text-pink-500">DEV</span>
            <span
              className={`text-xs uppercase not-italic tracking-widest ml-2 ${
                darkMode ? "opacity-50" : "opacity-40"
              }`}
            >
              v.2026
            </span>
          </div>
          <div className="flex gap-3">
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 hover:bg-pink-700 px-4 py-2 text-xs font-black uppercase tracking-tighter transition-all text-white flex items-center gap-1"
              >
                <ExternalLink size={14} /> Ir para o site
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 text-xs font-black uppercase tracking-tighter transition-all flex items-center gap-1 border ${
                  darkMode
                    ? "border-white/20 hover:border-white text-white"
                    : "border-gray-300 hover:border-gray-900 text-gray-900"
                }`}
              >
                <Github size={14} /> GitHub
              </a>
            )}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-screen flex items-end overflow-hidden pt-16">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: darkMode
              ? "brightness(0.25) contrast(1.2)"
              : "brightness(0.4) contrast(1.1)",
          }}
        />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-8 md:pb-16">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tags?.map((tag) => (
              <span
                key={tag}
                className="border border-pink-500/60 text-pink-400 text-xs font-bold uppercase tracking-widest px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[15vw] md:text-[10vw] font-[900] leading-none tracking-tighter italic text-white mb-4"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm md:text-2xl text-gray-300 max-w-2xl font-medium leading-snug"
          >
            {subtitle}
          </motion.p>

          {/* Stats */}
          {stats?.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 md:gap-8 mt-6 md:mt-10"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">
                    {s.label}
                  </div>
                  <div className={`text-base font-black uppercase ${s.color}`}>
                    {s.value}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* FEATURES — alternando texto e imagem */}
      <section className={`${darkMode ? "bg-[#050505]" : "bg-white"} py-0`}>
        {features?.map((feature, i) => {
          const isEven = i % 2 === 0;
          const accent = [
            "text-pink-500",
            "text-orange-400",
            "text-cyan-400",
            "text-purple-400",
          ][i % 4];
          const borderAccent = [
            "border-pink-500",
            "border-orange-400",
            "border-cyan-400",
            "border-purple-400",
          ][i % 4];
          const bgAccent = [
            "bg-pink-600/20",
            "bg-orange-600/20",
            "bg-cyan-600/20",
            "bg-purple-600/20",
          ][i % 4];

          return (
            <motion.div
              key={i}
              {...fadeIn}
              className={`grid lg:grid-cols-2 min-h-[60vh] border-b ${
                darkMode ? "border-white/5" : "border-gray-100"
              }`}
            >
              {/* Texto */}
              <div
                className={`flex flex-col justify-center px-8 md:px-16 py-16 ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <span className={`font-mono font-bold text-sm mb-4 ${accent}`}>
                  {String(i + 1).padStart(2, "0")} — Feature
                </span>
                <h3
                  className={`text-4xl md:text-5xl font-black italic tracking-tighter mb-6 leading-tight border-l-4 ${borderAccent} pl-4`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-lg leading-relaxed ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  } max-w-md`}
                >
                  {feature.desc}
                </p>
              </div>

              {/* Imagem */}
              <div
                className={`relative overflow-hidden flex items-center justify-center h-[60vh] ${
                  project.phoneMockup
                    ? darkMode
                      ? "bg-[#0d0d0d]"
                      : "bg-gray-100"
                    : darkMode
                      ? "bg-[#111]"
                      : "bg-gray-900"
                } ${isEven ? "lg:order-2" : "lg:order-1"}`}
              >
                {feature.image ? (
                  <>
                    {project.phoneMockup ? (
                      <PhoneMockup src={feature.image} alt={feature.title} />
                    ) : (
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-contain p-4"
                      />
                    )}
                    {feature.caption && (
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                        <p className="text-white text-xs font-bold uppercase tracking-widest">
                          {feature.caption}
                        </p>
                      </div>
                    )}
                  </>
                ) : (
                  /* Fallback visual quando não tem imagem */
                  <div
                    className={`w-full h-full min-h-[360px] flex items-center justify-center ${
                      darkMode ? "bg-white/5" : "bg-gray-100"
                    }`}
                  >
                    <span
                      className={`text-[8rem] font-black italic opacity-10 ${accent}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* STACK */}
      {stack?.length > 0 && (
        <section
          className={`py-24 ${darkMode ? "bg-black" : "bg-gray-50"} border-t ${
            darkMode ? "border-white/5" : "border-gray-200"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-[2px] w-20 bg-pink-500" />
              <h2 className="text-4xl md:text-5xl font-[900] italic tracking-tighter uppercase">
                Tech Stack
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className={`px-5 py-3 border text-sm font-black uppercase tracking-widest transition-all hover:border-pink-500 hover:text-pink-500 ${
                    darkMode
                      ? "border-white/10 bg-white/5"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CODE BLOCKS */}
      {codeBlocks?.length > 0 && (
        <section
          className={`py-24 ${darkMode ? "bg-[#050505]" : "bg-white"} border-t ${
            darkMode ? "border-white/5" : "border-gray-200"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-[2px] w-20 bg-pink-500" />
              <h2 className="text-4xl md:text-5xl font-[900] italic tracking-tighter uppercase">
                Decisões Técnicas
              </h2>
            </div>
            <div className="space-y-12">
              {codeBlocks.map((block, i) => (
                <motion.div key={i} {...fadeIn}>
                  <div className="mb-3">
                    <span className="text-pink-500 font-mono text-xs font-bold uppercase tracking-widest">
                      {block.filename}
                    </span>
                    <h4 className="text-2xl font-black italic tracking-tight mt-1">
                      {block.title}
                    </h4>
                    {block.explanation && (
                      <p
                        className={`mt-2 text-sm leading-relaxed max-w-2xl ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {block.explanation}
                      </p>
                    )}
                  </div>
                  <pre
                    className={`overflow-x-auto rounded-sm p-6 text-sm font-mono leading-relaxed border ${
                      darkMode
                        ? "bg-white/5 border-white/10 text-gray-300"
                        : "bg-gray-950 border-gray-800 text-gray-200"
                    }`}
                  >
                    <code>{block.code}</code>
                  </pre>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FOOTER CTA */}
      <footer
        className={`py-20 ${
          darkMode ? "bg-black border-pink-600/50" : "bg-white border-pink-500"
        } border-t-4 text-center`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <p
            className={`text-xs font-bold uppercase tracking-[0.4em] mb-6 ${
              darkMode ? "text-gray-500" : "text-gray-400"
            }`}
          >
            Próximo projeto
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-3 text-4xl md:text-6xl font-black italic tracking-tighter hover:text-pink-500 transition-colors"
          >
            <ArrowLeft size={32} /> Voltar ao portfólio
          </Link>
        </div>
      </footer>
    </div>
  );
}
