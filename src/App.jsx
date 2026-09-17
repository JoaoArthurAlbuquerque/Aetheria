import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ArrowUpRight, Compass, Layers, Sparkles, Monitor } from "lucide-react";

const PROJECTS = [
  {
    id: "01",
    title: "Monólito de Ressonância Espacial",
    category: "Arquitetura",
    year: "2026",
    location: "Recife, BR",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    colSpan: "xl:col-span-10",
    aspect: "aspect-[16/9]",
  },
  {
    id: "02",
    title: "Interface Háptica V",
    category: "Interação",
    year: "2025",
    location: "Berlim, DE",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    colSpan: "xl:col-span-6",
    aspect: "aspect-[4/5]",
  },
  {
    id: "03",
    title: "Nódulo de Sombras Espaciais",
    category: "Multimídia",
    year: "2026",
    location: "Tóquio, JP",
    image:
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1600&auto=format&fit=crop",
    colSpan: "xl:col-span-7",
    aspect: "aspect-[16/10]",
  },
  {
    id: "04",
    title: "Pavilhão Memória Sintética",
    category: "Arquitetura",
    year: "2025",
    location: "Lisboa, PT",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop",
    colSpan: "xl:col-span-9",
    aspect: "aspect-[16/9]",
  },
];

const CATEGORIES = ["Todos", "Arquitetura", "Interação", "Multimídia"];

export default function AetheriaWidescreen() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [hoveredProject, setHoveredProject] = useState(null);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 22, stiffness: 180 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const filteredProjects =
    activeCategory === "Todos"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0A0908] text-[#F4F1EA] font-body-variable selection:bg-[#D99B26] selection:text-[#0A0908] relative">
      {/* CURSOR MAGNÉTICO ESTRUTURADO */}
      {/* CURSOR MAGNÉTICO FOCAL (SEM TEXTO) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border pointer-events-none z-50 flex items-center justify-center hidden md:flex backdrop-blur-[2px]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: hoveredProject ? 2.2 : 1,
          borderColor: hoveredProject ? "#D99B26" : "rgba(217, 155, 38, 0.35)",
          backgroundColor: hoveredProject
            ? "rgba(217, 155, 38, 0.12)"
            : "rgba(0,0,0,0)",
        }}
        transition={{ type: "spring", stiffness: 320, damping: 24 }}
      >
        <AnimatePresence mode="wait">
          {hoveredProject ? (
            /* ÍCONE VETORIAL DE ROTAÇÃO E ABERTURA */
            <motion.div
              key="arrow"
              initial={{ scale: 0, rotate: -45, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0, rotate: 45, opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center"
            >
              <ArrowUpRight className="w-4 h-4 text-[#D99B26] stroke-[2.5]" />
            </motion.div>
          ) : (
            /* RETÍCULA DE REPOUSO */
            <motion.div
              key="dot"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.15 }}
              className="w-1.5 h-1.5 rounded-full bg-[#D99B26]"
            />
          )}
        </AnimatePresence>
      </motion.div>

      {/* CABEÇALHO WIDESCREEN (GRID DE 16 COLUNAS) */}
      <header className="fixed top-0 left-0 w-full z-40 px-8 2xl:px-16 py-6 backdrop-blur-md bg-[#0A0908]/75 border-b border-[#262422]">
        <div className="max-w-[1760px] mx-auto grid grid-cols-12 xl:grid-cols-16 items-center gap-4">
          <div className="col-span-3 xl:col-span-4 flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D99B26] animate-pulse" />
            <span className="font-syne-bold tracking-tight text-2xl text-[#F4F1EA]">
              AETHERIA
            </span>
          </div>

          <nav className="hidden xl:flex col-span-8 justify-center items-center gap-12 text-xs font-semibold tracking-widest uppercase text-[#8E8A83]">
            <a
              href="#hero"
              className="hover:text-[#D99B26] transition-colors duration-200"
            >
              Manifesto
            </a>
            <a
              href="#work"
              className="hover:text-[#D99B26] transition-colors duration-200"
            >
              Obras Espaciais
            </a>
            <a
              href="#ethos"
              className="hover:text-[#D99B26] transition-colors duration-200"
            >
              Laboratório
            </a>
          </nav>

          <div className="col-span-9 xl:col-span-4 text-right text-xs font-mono text-[#8E8A83] flex items-center justify-end gap-4">
            <span className="hidden sm:inline">
              RECIFE / 8.0542° S, 34.8813° W
            </span>
            <span className="px-2.5 py-1 rounded bg-[#141312] border border-[#262422] text-[#D99B26] text-[10px]">
              FHD 1080p READY
            </span>
          </div>
        </div>
      </header>

      {/* HERO SECTION REDIMENSIONADA PARA 1080p */}
      <section
        id="hero"
        className="relative min-h-[100vh] pt-32 pb-16 px-8 2xl:px-16 flex flex-col justify-between overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <SpatialCanvas />
        </div>

        <div className="max-w-[1760px] mx-auto w-full my-auto grid grid-cols-12 xl:grid-cols-16 gap-8 items-center">
          {/* TÍTULO PRINCIPAL AMORTECIDO EM 10 COLUNAS */}
          <div className="col-span-12 xl:col-span-11">
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#D99B26] font-mono mb-6">
              <Compass
                className="w-4 h-4 animate-spin"
                style={{ animationDuration: "15s" }}
              />
              <span>
                Estúdio de Arquitetura Especulativa & Computação Espacial
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-syne-bold text-6xl sm:text-7xl lg:text-8xl xl:text-[7rem] 2xl:text-[8.5rem] tracking-tight leading-[0.88] uppercase text-[#F4F1EA]"
            >
              Esculpimos <br />
              <span className="text-transparent [-webkit-text-stroke:1.5px_#F4F1EA] hover:text-[#D99B26] hover:[-webkit-text-stroke:0px] transition-all duration-500">
                Ambientes
              </span>{" "}
              <br />
              Sem Fronteiras.
            </motion.h1>
          </div>

          {/* BLOCO LATERAL DE TELEMETRIA EM 5 COLUNAS (APROVEITANDO A LARGURA DA TELA) */}
          <div className="col-span-12 xl:col-span-5 xl:border-l xl:border-[#262422] xl:pl-10 space-y-8">
            <p className="text-base 2xl:text-lg text-[#8E8A83] leading-relaxed font-normal">
              Projetamos sistemas tangíveis e interfaces espaciais que interagem
              com a física do ambiente. Sem grids SaaS genéricos; apenas
              presença física calculada.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#262422] font-mono text-xs">
              <div>
                <span className="block text-[#F4F1EA] text-xl font-bold">
                  16:9
                </span>
                <span className="text-[#8E8A83]">Proporção Nativa</span>
              </div>
              <div>
                <span className="block text-[#D99B26] text-xl font-bold">
                  120 FPS
                </span>
                <span className="text-[#8E8A83]">Renderização GPU</span>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER DO HERO WIDESCREEN */}
        <div className="max-w-[1760px] mx-auto w-full pt-8 border-t border-[#262422] flex justify-between items-center text-xs font-mono text-[#8E8A83]">
          <div>AETHERIA LABS // REVISÃO DE LAYOUT WIDESCREEN</div>
          <a
            href="#work"
            className="text-[#D99B26] flex items-center gap-2 hover:gap-4 transition-all duration-300"
          >
            <span>EXPLORAR OBRAS</span>
            <span>→</span>
          </a>
        </div>
      </section>

      {/* SHOWCASE COM GRID ASSIMÉTRICO DE 16 COLUNAS */}
      <section
        id="work"
        className="py-24 px-8 2xl:px-16 border-t border-[#262422]"
      >
        <div className="max-w-[1760px] mx-auto">
          <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-16 gap-8">
            <div>
              <span className="text-xs font-mono text-[#D99B26] uppercase tracking-widest block mb-2">
                01 / Catálogo Selecionado
              </span>
              <h2 className="font-syne-bold text-4xl xl:text-6xl uppercase tracking-tight">
                Obras Espaciais
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-[#D99B26] text-[#0A0908] font-bold"
                      : "bg-[#141312] text-[#8E8A83] hover:text-[#F4F1EA] border border-[#262422]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            layout
            className="grid grid-cols-12 xl:grid-cols-16 gap-8 xl:gap-12 items-start"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className={`col-span-12 ${project.colSpan} group cursor-none relative`}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div
                    className={`w-full overflow-hidden rounded-lg bg-[#141312] relative border border-[#262422] group-hover:border-[#D99B26]/60 transition-colors duration-300 ${project.aspect}`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-[0.16,1,0.3,1]"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0A0908]/80 backdrop-blur-md border border-[#262422] text-[10px] font-mono text-[#8E8A83]">
                      {project.location}
                    </div>
                  </div>

                  <div className="mt-4 flex justify-between items-start">
                    <div>
                      <span className="text-[10px] font-mono text-[#D99B26] uppercase tracking-widest block mb-1">
                        [{project.id}] — {project.category}
                      </span>
                      <h3 className="font-syne-bold text-2xl xl:text-3xl text-[#F4F1EA] group-hover:text-[#D99B26] transition-colors duration-200">
                        {project.title}
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-[#262422] group-hover:border-[#D99B26] group-hover:bg-[#D99B26] group-hover:text-[#0A0908] flex items-center justify-center transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* MANIFESTO EDITORIAL EM LARGURA TOTAL */}
      <section
        id="ethos"
        className="py-24 px-8 2xl:px-16 border-t border-[#262422] bg-[#141312]/40"
      >
        <div className="max-w-[1760px] mx-auto grid grid-cols-12 xl:grid-cols-16 gap-12 items-center">
          <div className="col-span-12 xl:col-span-6">
            <span className="text-xs font-mono text-[#D99B26] uppercase tracking-widest block mb-3">
              02 / Nosso Ethos
            </span>
            <h2 className="font-syne-bold text-3xl xl:text-5xl uppercase tracking-tight leading-tight">
              A matéria física é o software do espaço.
            </h2>
          </div>
          <div className="col-span-12 xl:col-span-10 space-y-6 text-[#8E8A83] text-lg leading-relaxed">
            <p>
              Projetar para monitores de alta resolução exige disciplina de
              espaçamento. Em 1080p, o espaço negativo não é vazio; é a
              estrutura que estabelece a autoridade do conteúdo.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-8 2xl:px-16 border-t border-[#262422] text-xs font-mono text-[#8E8A83]">
        <div className="max-w-[1760px] mx-auto flex justify-between items-center">
          <div>© 2026 AETHERIA LABS. OTIMIZADO PARA FULL HD 1920X1080.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#D99B26] transition-colors">
              GITHUB
            </a>
            <a href="#" className="hover:text-[#D99B26] transition-colors">
              ARE.NA
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// CANVAS INTERATIVO
function SpatialCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 1.5 + 1,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 220) {
          p.x += (dx / dist) * 0.2;
          p.y += (dy / dist) * 0.2;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#D99B26";
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const pDist = Math.hypot(p.x - p2.x, p.y - p2.y);

          if (pDist < 180) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(38, 36, 34, ${1 - pDist / 180})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full block" />;
}
