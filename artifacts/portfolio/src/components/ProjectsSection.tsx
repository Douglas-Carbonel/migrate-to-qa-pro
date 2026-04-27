import { motion } from "framer-motion";
import { useState } from "react";
import {
  Github,
  ExternalLink,
  Sparkles,
  FileCode2,
  Network,
  PlayCircle,
  Bug,
  Star,
} from "lucide-react";

import dashboardImg from "@assets/image_1777277800023.png";
import scenariosImg from "@assets/image_1777277905419.png";
import executionImg from "@assets/image_1777277923857.png";
import defectsImg from "@assets/image_1777277938682.png";
import exportImg from "@assets/image_1777277962221.png";

type Project = {
  title: string;
  description: string;
  stack: string[];
  github: string;
};

const projects: Project[] = [
  {
    title: "QA E2E Cypress",
    description:
      "Automação E2E com Cypress em SauceDemo, The Internet e aplicações SaaS. Cobertura de fluxos de login, checkout e formulários.",
    stack: ["Cypress", "JavaScript", "E2E", "SauceDemo"],
    github: "https://github.com/Douglas-Carbonel/qa-e2e-cypress",
  },
  {
    title: "API Testing Suite",
    description:
      "Testes de API com Jest, Axios e validação de schema. Estrutura modular para cenários positivos, negativos e contratos.",
    stack: ["Jest", "Axios", "Node.js", "Schema Validation"],
    github: "https://github.com/Douglas-Carbonel/api-testing-suite",
  },
  {
    title: "Enterprise Cypress Tests",
    description:
      "Suíte E2E modular organizada por domínio funcional, pensada para escalar em produtos enterprise com múltiplas áreas.",
    stack: ["Cypress", "Page Objects", "CI/CD"],
    github: "https://github.com/Douglas-Carbonel/enterprise-cypress-tests",
  },
];

const fourQaScreenshots = [
  { src: dashboardImg, label: "Dashboard", alt: "4QA — Dashboard com métricas de cenários, taxa de sucesso e falhas" },
  { src: scenariosImg, label: "Cenários BDD", alt: "4QA — Cenários BDD em Gherkin (Given/When/Then) organizados por feature" },
  { src: executionImg, label: "Execuções", alt: "4QA — Histórico de execuções de um cenário com taxa de sucesso" },
  { src: defectsImg, label: "Defeitos", alt: "4QA — Rastreabilidade de defeitos vinculados aos cenários" },
  { src: exportImg, label: "Relatórios", alt: "4QA — Exportação de relatórios em XLSX/CSV" },
];

const fourQaFeatures = [
  {
    icon: FileCode2,
    title: "BDD Gherkin",
    description: "Cenários em Given/When/Then organizados por feature.",
  },
  {
    icon: Network,
    title: "Rastreabilidade",
    description: "Cenários vinculados a sprints, projetos e empresas.",
  },
  {
    icon: PlayCircle,
    title: "Execuções Automatizadas",
    description: "Histórico completo com status, duração e tipo (E2E / Manual).",
  },
  {
    icon: Bug,
    title: "Gestão de Defeitos",
    description: "Bugs ligados ao cenário que falhou, com severidade e sprint.",
  },
];

const FeaturedFourQa = () => {
  const [activeShot, setActiveShot] = useState(0);
  const current = fourQaScreenshots[activeShot];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="glass rounded-2xl overflow-hidden relative group hover:glow-box transition-shadow duration-500 mb-12"
    >
      {/* Background accent */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative grid lg:grid-cols-[1.1fr_1fr] gap-0">
        {/* LEFT — content */}
        <div className="p-6 sm:p-8 md:p-10 flex flex-col">
          {/* Featured ribbon */}
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary/15 text-primary inline-flex items-center gap-1.5">
              <Star className="w-3 h-3 fill-primary" />
              Projeto autoral em destaque
            </span>
            <span className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 inline-flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              Em desenvolvimento
            </span>
          </div>

          <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-1">
            <span className="text-primary">4</span>
            <span>QA</span>
          </h3>
          <p className="font-mono text-sm text-muted-foreground mb-5">
            Behavior-Driven QA Platform · SaaS
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Plataforma SaaS pensada por um QA, para QAs. O 4QA centraliza a gestão
            de testes em torno de <span className="text-foreground font-medium">cenários BDD</span>,
            com rastreabilidade completa entre cenários, sprints, execuções automatizadas e defeitos —
            cobrindo o ciclo de qualidade de ponta a ponta.
          </p>

          {/* Feature grid */}
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {fourQaFeatures.map((feat) => (
              <div
                key={feat.title}
                className="flex gap-3 p-3 rounded-lg bg-background/40 border border-border/40"
              >
                <div className="shrink-0 w-9 h-9 rounded-md bg-primary/10 text-primary flex items-center justify-center">
                  <feat.icon className="w-4 h-4" strokeWidth={2} />
                </div>
                <div>
                  <p className="font-medium text-sm leading-tight mb-1">{feat.title}</p>
                  <p className="text-xs text-muted-foreground leading-snug">{feat.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {["BDD / Gherkin", "Cypress", "Test Management", "SaaS", "Multi-tenant", "Reports"].map(
              (tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs glass px-2.5 py-1 rounded text-accent-foreground"
                >
                  {tech}
                </span>
              ),
            )}
          </div>

          <div className="mt-auto">
            <span className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground">
              <Sparkles className="w-4 h-4 text-primary" />
              MVP em construção · acesso em breve
            </span>
          </div>
        </div>

        {/* RIGHT — screenshot gallery */}
        <div className="relative bg-background/60 border-t lg:border-t-0 lg:border-l border-border/40 p-6 sm:p-8 md:p-10 flex flex-col">
          {/* Main shot frame */}
          <div className="relative rounded-lg overflow-hidden border border-border/60 bg-background shadow-2xl">
            {/* Window chrome */}
            <div className="flex items-center gap-1.5 px-3 py-2 bg-muted/30 border-b border-border/40">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              <span className="ml-3 font-mono text-[11px] text-muted-foreground truncate">
                4qa.app — {current.label.toLowerCase()}
              </span>
            </div>
            <motion.img
              key={current.src}
              src={current.src}
              alt={current.alt}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              loading="lazy"
              className="w-full h-auto block"
            />
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-5 gap-2 mt-4">
            {fourQaScreenshots.map((shot, i) => (
              <button
                key={shot.label}
                onClick={() => setActiveShot(i)}
                aria-label={`Ver ${shot.label}`}
                aria-pressed={activeShot === i}
                className={`group/thumb relative rounded-md overflow-hidden border transition-all ${
                  activeShot === i
                    ? "border-primary ring-2 ring-primary/40"
                    : "border-border/40 hover:border-border opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={shot.src}
                  alt=""
                  loading="lazy"
                  className="w-full aspect-video object-cover object-top"
                />
              </button>
            ))}
          </div>

          <div className="mt-3 flex items-center justify-between">
            <p className="font-mono text-xs text-muted-foreground">
              {activeShot + 1} / {fourQaScreenshots.length} · {current.label}
            </p>
            <p className="font-mono text-[11px] text-muted-foreground/70">
              clique nas miniaturas
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[140px]" />

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-mono text-sm text-primary mb-3">// projetos</p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold">
            Projetos em Destaque
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Um produto autoral em construção e repositórios públicos com foco em automação de testes,
            qualidade de software e ferramentas para QA.
          </p>
        </motion.div>

        {/* Featured product */}
        <FeaturedFourQa />

        {/* Other GitHub projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="font-heading text-xl md:text-2xl font-semibold">
            Outros repositórios
          </h3>
          <p className="text-muted-foreground text-sm mt-1">
            Projetos open-source de prática e estudo em automação.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="group glass rounded-xl p-6 md:p-7 relative overflow-hidden hover:glow-box transition-shadow duration-500 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4 gap-3">
                <h4 className="font-heading text-lg md:text-xl font-semibold leading-tight">
                  {project.title}
                </h4>
                <span className="shrink-0 font-mono text-[11px] px-2 py-1 rounded-full bg-muted text-muted-foreground">
                  público
                </span>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs glass px-2.5 py-1 rounded text-accent-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-sm text-primary hover:text-primary/80 transition-colors group/link self-start"
              >
                <Github className="w-4 h-4" />
                <span>Ver no GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
              </a>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
