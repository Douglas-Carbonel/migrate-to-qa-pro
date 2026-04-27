import { motion } from "framer-motion";
import { Github, ExternalLink, Sparkles } from "lucide-react";

type Project = {
  title: string;
  description: string;
  stack: string[];
  github?: string;
  status?: string;
  inProgress?: boolean;
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
  {
    title: "4QA",
    description:
      "Plataforma SaaS para QA com foco em BDD, rastreabilidade de cenários e integração com execuções automatizadas.",
    stack: ["SaaS", "BDD", "Gestão de Testes", "Integrações"],
    status: "Em desenvolvimento",
    inProgress: true,
  },
];

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
          className="mb-16"
        >
          <p className="font-mono text-sm text-primary mb-3">// projetos</p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold">Projetos em Destaque</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Repositórios públicos e iniciativas pessoais com foco em automação de testes,
            qualidade de software e ferramentas para QA.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
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
              {/* Top row */}
              <div className="flex items-start justify-between mb-4 gap-3">
                <h3 className="font-heading text-xl md:text-2xl font-semibold leading-tight">
                  {project.title}
                </h3>
                {project.inProgress ? (
                  <span className="shrink-0 font-mono text-[11px] px-2 py-1 rounded-full bg-primary/10 text-primary inline-flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    {project.status}
                  </span>
                ) : (
                  <span className="shrink-0 font-mono text-[11px] px-2 py-1 rounded-full bg-muted text-muted-foreground">
                    público
                  </span>
                )}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-5 flex-1">
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

              {project.github ? (
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
              ) : (
                <span className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground self-start">
                  <Sparkles className="w-4 h-4 text-primary" />
                  MVP em desenvolvimento
                </span>
              )}

              {/* Hover gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
