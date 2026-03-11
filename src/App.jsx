import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import myway from "./assets/myway.png";
import blitzbee from "./assets/blitzbee.png";
import poke from "./assets/poke.png";
import {
  Github,
  Linkedin,
  Mail,
  Cpu,
  Globe,
  Sun,
  Moon,
  Languages,
} from "lucide-react";

export default function GTA6Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState("pt");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  };

  const translations = {
    pt: {
      nav: {
        experience: "Experiência",
        stack: "Stack",
        education: "Formação",
        whatsapp: "WhatsApp",
        downloadCV: "Baixar CV",
      },
      hero: {
        role: "Desenvolvedor FullStack",
      },
      about: {
        title1: "CÓDIGO QUE",
        title2: "CONVERTE",
        description:
          "Vue.js, React.js, Next.js. Performance, UI/UX, Node.js e código limpo.",
        remote: "Remoto",
        global: "Global",
        relocation: "Relocação",
        years: "ANOS",
        experience: "Experiência Real",
      },
      career: {
        title: "Carreira",
        diven: {
          role: "Dev Front-end Pleno",
          desc1:
            "Desenvolvimento de sistema CRM para o Beach Park, unificando 4 sistemas legados em uma plataforma robusta.",
          desc2:
            "Implementação de Chat em Tempo Real via Chatwoot API e WebSockets para gestão de reservas.",
          desc3:
            "Trabalho em ambiente ágil com alinhamento direto com stakeholders e design system via Figma.",
        },
        deway: {
          role: "Dev Front-end",
          desc1:
            "Desenvolvimento de portais web e aplicações mobile para empresas de grande porte em todo o Brasil.",
          desc2:
            "Foco total em performance e integração fluida entre camadas Front e Back-end.",
        },
        dmuza: {
          role: "Dev Front-end",
          desc1:
            "Criação de novas funcionalidades para plataforma de vendas online.",
          desc2:
            "Redesign completo de páginas com melhorias de layout, estilo e otimização de performance.",
          desc3:
            "Implementação de técnicas de SEO para melhorar visibilidade nos motores de busca.",
        },
        muzie: {
          role: "Dev Front-end",
          desc1:
            "Desenvolvimento de rede social com funcionalidades de chat em tempo real e feed de fotos.",
          desc2:
            "Implementação de sistema de pagamentos integrado à plataforma.",
          desc3:
            "Refatoração de código, otimização de performance e implementação de técnicas de SEO.",
        },
        kenzie: {
          role: "Peer Coach (Monitor)",
          desc1:
            "Suporte técnico a alunos na correção de testes e esclarecimento de dúvidas em HTML, CSS e JavaScript.",
          desc2:
            "Revisão constante de conteúdo técnico, reforçando o aprendizado dos estudantes.",
          desc3:
            "Desenvolvimento de soft skills como comunicação, autonomia e gestão de tempo.",
        },
      },
      skills: {
        title: "TECH STACK",
      },
      education: {
        title: "Educação",
        languages: "Idiomas",
        english: "Inglês",
        level: "B2 — Intermediário Superior",
        present: "Presente",
        postGrad: "Pós Full Stack",
        postGradInst: "Faculdade Descomplica",
        ads: "Análise e Desenv. de Sistemas",
        adsInst: "Uninassau",
        fullStack: "Dev Full Stack",
        fullStackInst: "Kenzie Academy Brasil",
      },
      footer: {
        title: "VAMOS CONVERSAR",
        email: "E-mail",
        location: "Fortaleza, Ceará — Brasil",
      },
    },
    en: {
      nav: {
        experience: "Experience",
        stack: "Stack",
        education: "Education",
        whatsapp: "WhatsApp",
        downloadCV: "Download CV",
      },
      hero: {
        role: "FullStack Developer",
      },
      about: {
        title1: "CODE THAT",
        title2: "CONVERTS",
        description:
          "Vue.js, React and Next.js. Performance, UI/UX, Node.js and clean code.",
        remote: "Remote",
        global: "Global",
        relocation: "Relocation",
        years: "YEARS",
        experience: "Real Experience",
      },
      career: {
        title: "Career",
        diven: {
          role: "Mid-Level Front-end Dev",
          desc1:
            "Development of CRM system for Beach Park, unifying 4 legacy systems into a robust platform.",
          desc2:
            "Implementation of Real-Time Chat via Chatwoot API and WebSockets for reservation management.",
          desc3:
            "Worked in agile environment with direct stakeholder alignment and design system via Figma.",
        },
        deway: {
          role: "Front-end Dev",
          desc1:
            "Development of web portals and mobile applications for large companies throughout Brazil.",
          desc2:
            "Total focus on performance and smooth integration between Front and Back-end layers.",
        },
        dmuza: {
          role: "Front-end Dev",
          desc1: "Creation of new features for online sales platform.",
          desc2:
            "Complete page redesign with layout, style and performance optimization improvements.",
          desc3:
            "Implementation of SEO techniques to improve visibility in search engines.",
        },
        muzie: {
          role: "Front-end Dev",
          desc1:
            "Development of social network with real-time chat features and photo feed.",
          desc2:
            "Implementation of payment system integrated into the platform.",
          desc3:
            "Code refactoring, performance optimization and implementation of SEO techniques.",
        },
        kenzie: {
          role: "Peer Coach (Monitor)",
          desc1:
            "Technical support for students in test correction and clarifying doubts in HTML, CSS and JavaScript.",
          desc2:
            "Constant review of technical content, reinforcing student learning.",
          desc3:
            "Development of soft skills such as communication, autonomy and time management.",
        },
      },
      skills: {
        title: "TECH STACK",
      },
      education: {
        title: "Education",
        languages: "Languages",
        english: "English",
        level: "B2 — Upper Intermediate",
        present: "Present",
        postGrad: "Full Stack Post-Graduation",
        postGradInst: "Descomplica University",
        ads: "Systems Analysis and Development",
        adsInst: "Uninassau",
        fullStack: "Full Stack Dev",
        fullStackInst: "Kenzie Academy Brazil",
      },
      footer: {
        title: "LET'S CONNECT",
        email: "E-mail",
        location: "Fortaleza, Ceará — Brazil",
      },
    },
  };
  const t = translations[language];
  return (
    <div
      className={`${darkMode ? "bg-[#0a0a0a] text-white" : "bg-gray-50 text-gray-900"} font-sans selection:bg-pink-500 selection:text-white transition-colors duration-300`}
    >
      {darkMode && (
        <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
      )}

      {/* ─── NAVBAR ─────────────────────────────────────────────
          DESKTOP: igual ao original (hidden md:flex para links)
          MOBILE:  logo + dark/lang + whatsapp + cv (sem links de nav)
      ──────────────────────────────────────────────────────── */}
      <nav
        className={`fixed top-0 w-full z-[90] ${darkMode ? "bg-black/50 border-white/10" : "bg-white/90 border-gray-200"} backdrop-blur-md border-b`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
          {/* Logo — igual desktop */}
          <div className="text-3xl font-black tracking-tighter italic">
            B<span className="text-pink-500">DEV</span>{" "}
            <span
              className={`text-xs uppercase not-italic tracking-widest ml-2 ${darkMode ? "opacity-50" : "opacity-40"}`}
            >
              v.2026
            </span>
          </div>

          {/* Links de navegação — só desktop (sem alteração) */}
          <div className="hidden md:flex gap-8 text-sm font-bold tracking-widest uppercase">
            <a
              href="#experiencia"
              className="hover:text-pink-500 transition-colors"
            >
              {t.nav.experience}
            </a>
            <a href="#skills" className="hover:text-pink-500 transition-colors">
              {t.nav.stack}
            </a>
            <a
              href="#projetos"
              className="hover:text-pink-500 transition-colors"
            >
              {language === "pt" ? "Projetos" : "Projects"}
            </a>
            <a
              href="#formacao"
              className="hover:text-pink-500 transition-colors"
            >
              {t.nav.education}
            </a>
          </div>

          {/* Ações */}
          <div className="flex gap-2 md:gap-3 items-center">
            {/* Dark/Light — visível em todos os tamanhos */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded ${darkMode ? "bg-white/10 hover:bg-white/20" : "bg-gray-200 hover:bg-gray-300"} transition-colors`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Idioma — visível em todos os tamanhos */}
            <button
              onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
              className={`px-2 md:px-3 py-2 rounded text-xs font-bold uppercase ${darkMode ? "bg-white/10 hover:bg-white/20" : "bg-gray-200 hover:bg-gray-300"} transition-colors flex items-center gap-1`}
            >
              <Languages size={16} />
              {language === "pt" ? "EN" : "PT"}
            </button>

            {/* WhatsApp — texto reduzido no mobile */}
            <a
              href="https://wa.me/5585996056772"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 px-2 md:px-4 py-2 text-xs font-black uppercase tracking-tighter transition-all text-white"
            >
              <span className="hidden md:inline">{t.nav.whatsapp}</span>
              <span className="md:hidden">WA</span>
            </a>

            {/* CV */}
            <a
              href="/Currículo Bruno Faria.pdf"
              download
              className="bg-pink-600 hover:bg-pink-700 px-2 md:px-4 py-2 text-xs font-black uppercase tracking-tighter transition-all text-white"
            >
              <span className="hidden md:inline">{t.nav.downloadCV}</span>
              <span className="md:hidden">CV</span>
            </a>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── sem alteração visual, só mantém text-white fixo ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `scale(${1 + scrollY * 0.0005})`,
            filter: darkMode
              ? "brightness(0.3) contrast(1.2)"
              : "brightness(0.5) contrast(1.1)",
          }}
        />
        <div className="relative z-10 text-center w-full px-4">
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-[18vw] mb-5 md:text-[14vw] font-[900] leading-none tracking-tighter italic text-white"
          >
            BRUNO
          </motion.h1>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-[-2vw]"
          >
            <h2 className="text-2xl md:text-5xl font-black italic uppercase tracking-tighter text-white drop-shadow-lg">
              {language === "pt" ? (
                <>
                  <span className="text-pink-500">Desenvolvedor</span> FullStack
                </>
              ) : (
                <>
                  FullStack <span className="text-pink-500">Developer</span>
                </>
              )}
            </h2>
            <p className="text-gray-300 mt-4 tracking-[0.3em] uppercase text-xs md:text-sm font-bold">
              Vue.js • React • Next.js • TypeScript • Node.js • Banco de Dados
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── ABOUT ─── sem alteração ── */}
      <section
        className={`relative ${darkMode ? "bg-black border-white/5" : "bg-white border-gray-200"} py-32 overflow-hidden border-y`}
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black leading-tight italic tracking-tight mb-4">
              {t.about.title1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600">
                {t.about.title2}
              </span>
            </h2>
            <p
              className={`text-base md:text-xl lg:text-2xl font-medium ${darkMode ? "text-gray-300" : "text-gray-700"} leading-snug mb-6`}
            >
              {t.about.description}
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wider">
              <span className="bg-pink-600/20 text-pink-400 px-3 py-1.5 border border-pink-600/50">
                {t.about.remote}
              </span>
              <span className="bg-purple-600/20 text-purple-400 px-3 py-1.5 border border-purple-600/50">
                {t.about.global}
              </span>
              <span className="bg-orange-600/20 text-orange-400 px-3 py-1.5 border border-orange-600/50">
                {t.about.relocation}
              </span>
            </div>
          </motion.div>
          <motion.div
            {...fadeIn}
            className={`relative aspect-video ${darkMode ? "bg-gray-900" : "bg-gray-200"} overflow-hidden rounded-sm group`}
          >
            <img
              src="https://images.unsplash.com/photo-1480694313141-fce5e697ee25?q=80&w=2070"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
              alt="Technology"
            />
            <div className="absolute inset-0 flex items-center justify-center p-8 bg-gradient-to-t from-black via-transparent to-transparent">
              <div className="text-center">
                <div className="text-7xl font-black italic text-pink-500 mb-2">
                  4+ {t.about.years}
                </div>
                <div className="text-xl font-bold uppercase tracking-widest text-white">
                  {t.about.experience}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CARREIRA ───────────────────────────────────────────────────
          DESKTOP: grid-cols-12, sticky, space-y-40 — IDÊNTICO ao original
          MOBILE:  layout em coluna simples, sem sticky, títulos menores,
                   espaçamentos reduzidos
      ─────────────────────────────────────────────────────────────── */}
      <section
        id="experiencia"
        className={`py-16 md:py-32 ${darkMode ? "bg-[#050505]" : "bg-gray-100"}`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center gap-4 mb-12 md:mb-20">
            <div className="h-[2px] w-20 bg-pink-500"></div>
            <h2 className="text-4xl md:text-5xl font-[900] italic tracking-tighter uppercase underline decoration-pink-500 underline-offset-8">
              {t.career.title}
            </h2>
          </div>

          <div className="space-y-16 md:space-y-40">
            {/* ── DIVEN ── */}
            <div className="grid lg:grid-cols-12 gap-6 md:gap-12 items-start">
              {/* Info — no mobile vem primeiro e SEM sticky */}
              <div className="lg:col-span-5 lg:sticky lg:top-32">
                <span className="text-pink-500 font-mono font-bold text-sm md:text-base">
                  SET 2024 — OUT 2025
                </span>
                <h3 className="text-4xl md:text-6xl font-black italic tracking-tighter mt-2">
                  DIVEN <br />
                  TECNOLOGIA
                </h3>
                <p className="text-lg md:text-xl text-pink-500 font-bold uppercase mt-2">
                  {t.career.diven.role}
                </p>
                <div className="flex flex-wrap gap-2 mt-4 md:mt-6">
                  {[
                    "Vue.js",
                    "Styled Components",
                    "WebSockets",
                    "REST API",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className={`${darkMode ? "bg-white/5 border-white/10" : "bg-white border-gray-300"} border px-3 py-1 text-xs font-bold uppercase tracking-widest`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-7 space-y-6 md:space-y-8">
                <div
                  className={`relative aspect-video overflow-hidden border ${darkMode ? "border-white/10" : "border-gray-300"} group`}
                >
                  <img
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt="CRM"
                  />
                  <div className="absolute inset-0 bg-pink-600/20 mix-blend-overlay"></div>
                </div>
                <ul
                  className={`space-y-4 md:space-y-6 text-base md:text-xl ${darkMode ? "text-gray-400" : "text-gray-700"}`}
                >
                  <li className="flex gap-4">
                    <span className="text-pink-500 font-black italic min-w-[2rem]">
                      01
                    </span>
                    <span>{t.career.diven.desc1}</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-pink-500 font-black italic min-w-[2rem]">
                      02
                    </span>
                    <span>{t.career.diven.desc2}</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-pink-500 font-black italic min-w-[2rem]">
                      03
                    </span>
                    <span>{t.career.diven.desc3}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* ── DEWAY ── */}
            <div
              className={`grid lg:grid-cols-12 gap-6 md:gap-12 items-start pt-10 md:pt-20 border-t ${darkMode ? "border-white/5" : "border-gray-300"}`}
            >
              <div className="lg:col-span-5 lg:order-2 lg:sticky lg:top-32">
                <span className="text-orange-500 font-mono font-bold text-sm md:text-base">
                  FEV — OUT 2024
                </span>
                <h3 className="text-4xl md:text-6xl font-black italic tracking-tighter mt-2">
                  DEWAY
                </h3>
                <p className="text-lg md:text-xl text-orange-500 font-bold uppercase mt-2">
                  {t.career.deway.role}
                </p>
                <div className="flex flex-wrap gap-2 mt-4 md:mt-6">
                  {["Next.js", "React Native", "Tailwind"].map((tech) => (
                    <span
                      key={tech}
                      className={`${darkMode ? "bg-white/5 border-white/10" : "bg-white border-gray-300"} border px-3 py-1 text-xs font-bold uppercase tracking-widest`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-7 lg:order-1 space-y-6 md:space-y-8">
                <div
                  className={`relative aspect-video overflow-hidden border ${darkMode ? "border-white/10" : "border-gray-300"} group`}
                >
                  <img
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt="Mobile"
                  />
                  <div className="absolute inset-0 bg-orange-600/20 mix-blend-overlay"></div>
                </div>
                <ul
                  className={`space-y-4 md:space-y-6 text-base md:text-xl ${darkMode ? "text-gray-400" : "text-gray-700"}`}
                >
                  <li className="flex gap-4">
                    <span className="text-orange-500 font-black italic min-w-[2rem]">
                      01
                    </span>
                    <span>{t.career.deway.desc1}</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-orange-500 font-black italic min-w-[2rem]">
                      02
                    </span>
                    <span>{t.career.deway.desc2}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* ── DMUZA ── */}
            <div
              className={`grid lg:grid-cols-12 gap-6 md:gap-12 items-start pt-10 md:pt-20 border-t ${darkMode ? "border-white/5" : "border-gray-300"}`}
            >
              <div className="lg:col-span-5 lg:sticky lg:top-32">
                <span className="text-cyan-500 font-mono font-bold text-sm md:text-base">
                  SET 2022 — FEV 2023
                </span>
                <h3 className="text-4xl md:text-6xl font-black italic tracking-tighter mt-2">
                  DMUZA
                </h3>
                <p className="text-lg md:text-xl text-cyan-500 font-bold uppercase mt-2">
                  {t.career.dmuza.role}
                </p>
                <div className="flex flex-wrap gap-2 mt-4 md:mt-6">
                  {["React.js", "Tailwind", "Firebase", "SEO"].map((tech) => (
                    <span
                      key={tech}
                      className={`${darkMode ? "bg-white/5 border-white/10" : "bg-white border-gray-300"} border px-3 py-1 text-xs font-bold uppercase tracking-widest`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-7 space-y-6 md:space-y-8">
                <div
                  className={`relative aspect-video overflow-hidden border ${darkMode ? "border-white/10" : "border-gray-300"} group`}
                >
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt="Ecommerce"
                  />
                  <div className="absolute inset-0 bg-cyan-600/20 mix-blend-overlay"></div>
                </div>
                <ul
                  className={`space-y-4 md:space-y-6 text-base md:text-xl ${darkMode ? "text-gray-400" : "text-gray-700"}`}
                >
                  <li className="flex gap-4">
                    <span className="text-cyan-500 font-black italic min-w-[2rem]">
                      01
                    </span>
                    <span>{t.career.dmuza.desc1}</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-cyan-500 font-black italic min-w-[2rem]">
                      02
                    </span>
                    <span>{t.career.dmuza.desc2}</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-cyan-500 font-black italic min-w-[2rem]">
                      03
                    </span>
                    <span>{t.career.dmuza.desc3}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* ── MUZIE ── */}
            <div
              className={`grid lg:grid-cols-12 gap-6 md:gap-12 items-start pt-10 md:pt-20 border-t ${darkMode ? "border-white/5" : "border-gray-300"}`}
            >
              <div className="lg:col-span-5 lg:order-2 lg:sticky lg:top-32">
                <span className="text-purple-500 font-mono font-bold text-sm md:text-base">
                  MAR 2022 — FEV 2023
                </span>
                <h3 className="text-4xl md:text-6xl font-black italic tracking-tighter mt-2">
                  MUZIE <br />
                  ONLINE
                </h3>
                <p className="text-lg md:text-xl text-purple-500 font-bold uppercase mt-2">
                  {t.career.muzie.role}
                </p>
                <div className="flex flex-wrap gap-2 mt-4 md:mt-6">
                  {["Next.js", "Tailwind", "Node.js", "SEO"].map((tech) => (
                    <span
                      key={tech}
                      className={`${darkMode ? "bg-white/5 border-white/10" : "bg-white border-gray-300"} border px-3 py-1 text-xs font-bold uppercase tracking-widest`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-7 lg:order-1 space-y-6 md:space-y-8">
                <div
                  className={`relative aspect-video overflow-hidden border ${darkMode ? "border-white/10" : "border-gray-300"} group`}
                >
                  <img
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt="Social"
                  />
                  <div className="absolute inset-0 bg-purple-600/20 mix-blend-overlay"></div>
                </div>
                <ul
                  className={`space-y-4 md:space-y-6 text-base md:text-xl ${darkMode ? "text-gray-400" : "text-gray-700"}`}
                >
                  <li className="flex gap-4">
                    <span className="text-purple-500 font-black italic min-w-[2rem]">
                      01
                    </span>
                    <span>{t.career.muzie.desc1}</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-purple-500 font-black italic min-w-[2rem]">
                      02
                    </span>
                    <span>{t.career.muzie.desc2}</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-purple-500 font-black italic min-w-[2rem]">
                      03
                    </span>
                    <span>{t.career.muzie.desc3}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* ── KENZIE ── */}
            <div
              className={`grid lg:grid-cols-12 gap-6 md:gap-12 items-start pt-10 md:pt-20 border-t ${darkMode ? "border-white/5" : "border-gray-300"}`}
            >
              <div className="lg:col-span-5 lg:sticky lg:top-32">
                <span className="text-green-500 font-mono font-bold text-sm md:text-base">
                  OUT 2021 — FEV 2022
                </span>
                <h3 className="text-4xl md:text-6xl font-black italic tracking-tighter mt-2">
                  KENZIE <br />
                  ACADEMY
                </h3>
                <p className="text-lg md:text-xl text-green-500 font-bold uppercase mt-2">
                  {t.career.kenzie.role}
                </p>
                <div className="flex flex-wrap gap-2 mt-4 md:mt-6">
                  {["HTML5", "CSS3", "JavaScript", "Mentoria"].map((tech) => (
                    <span
                      key={tech}
                      className={`${darkMode ? "bg-white/5 border-white/10" : "bg-white border-gray-300"} border px-3 py-1 text-xs font-bold uppercase tracking-widest`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-7 space-y-6 md:space-y-8">
                <div
                  className={`relative aspect-video overflow-hidden border ${darkMode ? "border-white/10" : "border-gray-300"} group`}
                >
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt="Teaching"
                  />
                  <div className="absolute inset-0 bg-green-600/20 mix-blend-overlay"></div>
                </div>
                <ul
                  className={`space-y-4 md:space-y-6 text-base md:text-xl ${darkMode ? "text-gray-400" : "text-gray-700"}`}
                >
                  <li className="flex gap-4">
                    <span className="text-green-500 font-black italic min-w-[2rem]">
                      01
                    </span>
                    <span>{t.career.kenzie.desc1}</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-green-500 font-black italic min-w-[2rem]">
                      02
                    </span>
                    <span>{t.career.kenzie.desc2}</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-green-500 font-black italic min-w-[2rem]">
                      03
                    </span>
                    <span>{t.career.kenzie.desc3}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SKILLS ─── sem alteração visual ── */}
      <section
        id="skills"
        className={`py-32 ${darkMode ? "bg-black" : "bg-white"}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className={`text-8xl font-black italic tracking-tighter mb-20 text-center ${darkMode ? "opacity-10" : "opacity-20"}`}
          >
            {t.skills.title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Vue.js", color: "border-green-500 text-green-500" },
              { name: "React.js", color: "border-blue-400 text-blue-400" },
              {
                name: "Next.js",
                color: darkMode
                  ? "border-white text-white"
                  : "border-gray-900 text-gray-900",
              },
              {
                name: "React Native",
                color: "border-purple-400 text-purple-400",
              },
              { name: "TypeScript", color: "border-blue-600 text-blue-600" },
              { name: "Tailwind", color: "border-cyan-400 text-cyan-400" },
              {
                name: "WebSockets",
                color: "border-yellow-500 text-yellow-500",
              },
              { name: "Node.js", color: "border-green-600 text-green-600" },
              { name: "Firebase", color: "border-orange-500 text-orange-500" },
            ].map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className={`p-8 md:p-10 border-2 ${skill.color} ${darkMode ? "bg-white/5" : "bg-white/80"} backdrop-blur-sm flex items-center justify-center gap-3 md:gap-4 transition-all rounded-sm`}
              >
                <div className="font-black italic text-xl md:text-2xl tracking-tighter uppercase text-center">
                  {skill.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJETOS ─── sem alteração visual ── */}
      <section
        id="projetos"
        className={`py-32 ${darkMode ? "bg-[#0a0a0a]" : "bg-gray-50"} border-t ${darkMode ? "border-white/5" : "border-gray-200"}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-20">
            <div className="h-[2px] w-20 bg-pink-500"></div>
            <h2 className="text-5xl font-[900] italic tracking-tighter uppercase underline decoration-pink-500 underline-offset-8">
              {language === "pt" ? "Projetos Pessoais" : "Personal Projects"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "MyWay Flats",
                desc:
                  language === "pt"
                    ? "Plataforma web completa para gestão de apartamentos de temporada, com site público de reservas, pagamento online via cartão e PIX e sincronização automática com Airbnb e Booking via iCal.\n\nPainel administrativo com gestão financeira, relatórios em PDF/Excel e controle de disponibilidade em tempo real.\n\nTecnologias utilizadas: React, TypeScript, Tailwind CSS, Node.js, Express, Prisma ORM, PostgreSQL, Stripe, Resend e deploy em produção na plataforma Render."
                    : "Full-stack vacation rental management platform with a public booking site, online payments via card and PIX and automatic sync with Airbnb and Booking via iCal. \n\nAdmin dashboard with financial management, PDF/Excel reports, and real-time availability control. \n\nTechnologies used: React, TypeScript, Tailwind CSS, Node.js, Express, Prisma ORM, PostgreSQL, Stripe, Resend, and production deployment on the Render platform.",
                img: myway,
                link: "https://the-flat-finder.onrender.com/",
              },
              {
                title: "BlitzBee",
                desc:
                  language === "pt"
                    ? "Rede social completa, onde você pode criar sua conta, postar fotos, curtir, comentar e seguir outras pessoas. Possui um feed exclusivo com publicações de quem você segue e uma área interativa que destaca os posts mais populares da plataforma. \n\nTecnologias utilizadas: Next.js, Tailwind, Firebase"
                    : "Complete social network where you can create an account, post photos, like, comment, and follow other users. It features a personalized feed with posts from people you follow and an interactive section highlighting the most popular posts on the platform. \n\nTechnologies used: Next.js, Tailwind, Firebase",
                img: blitzbee,
                link: "https://blitzbee-l2hxtxh1n-brunofaria93.vercel.app/",
              },
              {
                title: "Pokédex",
                desc:
                  language === "pt"
                    ? "Aplicação simples de Pokédex que utiliza a PokéAPI para buscar e exibir Pokémon, mostrando imagens, tipos e informações básicas em uma interface interativa.\n\nTecnologias utilizadas: React, React Router, Tailwind CSS e PokéAPI."
                    : "Simple Pokédex application that uses the PokéAPI to fetch and display Pokémon, showing images, types and basic information in an interactive interface.\n\nTechnologies used: React, React Router, Tailwind CSS and PokéAPI.",
                img: poke,
                link: "https://pokedex-eosin-two.vercel.app/",
              },
            ].map((project, i) => (
              <a
                key={i}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block overflow-hidden rounded-sm border ${darkMode ? "border-white/10 hover:border-pink-500/50" : "border-gray-200 hover:border-pink-500"} transition-all duration-300 ${darkMode ? "bg-white/5" : "bg-white"}`}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-black italic tracking-tight mb-2 group-hover:text-pink-500 transition-colors">
                    {project.title}
                  </h3>
                  <p
                    className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-sm whitespace-pre-line`}
                  >
                    {project.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EDUCAÇÃO ─── sem alteração visual ── */}
      <section
        id="formacao"
        className={`py-32 ${darkMode ? "bg-[#0a0a0a]" : "bg-gray-50"} border-t ${darkMode ? "border-white/5" : "border-gray-200"}`}
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 lg:gap-24">
          <motion.div {...fadeIn}>
            <h2 className="text-5xl md:text-6xl font-black italic tracking-tighter mb-12 flex items-center gap-4">
              <Cpu size={36} className="text-pink-500" /> {t.education.title}
            </h2>
            <div className="space-y-10 border-l-2 border-pink-500/30 pl-6 md:pl-8">
              <div>
                <span
                  className={`font-mono font-bold ${darkMode ? "text-pink-400" : "text-pink-600"}`}
                >
                  2025 — {t.education.present}
                </span>
                <h4 className="text-2xl md:text-3xl font-black italic tracking-tight mt-1">
                  {t.education.postGrad}
                </h4>
                <p
                  className={`${darkMode ? "text-gray-400" : "text-gray-600"} mt-1 font-medium`}
                >
                  {t.education.postGradInst}
                </p>
              </div>
              <div>
                <span
                  className={`font-mono font-bold ${darkMode ? "text-pink-400" : "text-pink-600"}`}
                >
                  2022 — 2024
                </span>
                <h4 className="text-2xl md:text-3xl font-black italic tracking-tight mt-1">
                  {t.education.ads}
                </h4>
                <p
                  className={`${darkMode ? "text-gray-400" : "text-gray-600"} mt-1 font-medium`}
                >
                  {t.education.adsInst}
                </p>
              </div>
              <div>
                <span
                  className={`font-mono font-bold ${darkMode ? "text-pink-400" : "text-pink-600"}`}
                >
                  2021 — 2022
                </span>
                <h4 className="text-2xl md:text-3xl font-black italic tracking-tight mt-1">
                  {t.education.fullStack}
                </h4>
                <p
                  className={`${darkMode ? "text-gray-400" : "text-gray-600"} mt-1 font-medium`}
                >
                  {t.education.fullStackInst}
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div {...fadeIn} className="md:mt-16 lg:mt-24">
            <h2 className="text-5xl md:text-6xl font-black italic tracking-tighter mb-12 flex items-center gap-4">
              <Globe size={36} className="text-pink-500" />{" "}
              {t.education.languages}
            </h2>
            <div
              className={`${darkMode ? "bg-white/5 border-white/10" : "bg-white border-gray-200"} p-8 border rounded-sm`}
            >
              <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest text-pink-500 mb-3">
                {t.education.english}
              </h4>
              <div className="text-3xl md:text-4xl font-black italic tracking-tight">
                {t.education.level}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FOOTER ─── sem alteração visual ── */}
      <footer
        className={`py-20 md:py-32 ${darkMode ? "bg-black text-white border-pink-600/50" : "bg-white text-gray-900 border-pink-500"} border-t-4`}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-[12vw] md:text-[9vw] lg:text-[7vw] font-black italic tracking-tighter leading-none mb-12 md:mb-16">
            {t.footer.title} <span className="text-pink-500">?</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
            <a
              href="mailto:brunofaria7.dev@gmail.com"
              className={`group p-6 md:p-8 border ${darkMode ? "border-white/10 hover:border-pink-500" : "border-gray-200 hover:border-pink-500"} transition-all ${darkMode ? "bg-white/5" : "bg-gray-50"} rounded-sm`}
            >
              <Mail className="mx-auto mb-4 text-pink-500" size={40} />
              <div className="text-sm font-bold uppercase tracking-widest mb-1">
                {t.footer.email}
              </div>
              <div className="text-base md:text-lg font-black tracking-tighter break-all">
                brunofaria7.dev@gmail.com
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/brunofaria93"
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-6 md:p-8 border ${darkMode ? "border-white/10 hover:border-blue-500" : "border-gray-200 hover:border-blue-500"} transition-all ${darkMode ? "bg-white/5" : "bg-gray-50"} rounded-sm`}
            >
              <Linkedin className="mx-auto mb-4 text-blue-500" size={40} />
              <div className="text-sm font-bold uppercase tracking-widest mb-1">
                LinkedIn
              </div>
              <div className="text-base md:text-lg font-black tracking-tighter">
                /in/brunofaria93
              </div>
            </a>
            <a
              href="https://github.com/BrunoFaria93"
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-6 md:p-8 border ${darkMode ? "border-white/10 hover:border-white" : "border-gray-200 hover:border-gray-900"} transition-all ${darkMode ? "bg-white/5" : "bg-gray-50"} rounded-sm`}
            >
              <Github
                className={`mx-auto mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}
                size={40}
              />
              <div className="text-sm font-bold uppercase tracking-widest mb-1">
                GitHub
              </div>
              <div className="text-base md:text-lg font-black tracking-tighter">
                /BrunoFaria93
              </div>
            </a>
          </div>
          <p
            className={`${darkMode ? "text-gray-500" : "text-gray-600"} font-bold uppercase tracking-[0.4em] text-xs md:text-sm`}
          >
            {t.footer.location} • (85) 99605-6772
          </p>
        </div>
      </footer>
    </div>
  );
}
