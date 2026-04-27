import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Sparkles,
  FileCode2,
  Network,
  PlayCircle,
  Bug,
  FileSpreadsheet,
  Settings2,
  AlertTriangle,
  GitBranch,
  Layers,
  Workflow,
  Database,
  Code2,
  Boxes,
  CheckCircle2,
  Circle,
  Clock,
  Mail,
} from "lucide-react";

import dashboardImg from "@assets/image_1777277800023.png";
import loginImg from "@assets/image_1777277826109.png";
import suitesImg from "@assets/image_1777277890187.png";
import scenariosImg from "@assets/image_1777277905419.png";
import executionImg from "@assets/image_1777277923857.png";
import defectsImg from "@assets/image_1777277938682.png";
import exportImg from "@assets/image_1777277962221.png";
import settingsImg from "@assets/image_1777277979487.png";

const problems = [
  {
    icon: Layers,
    title: "Cenários espalhados em planilhas",
    text: "Casos de teste vivem em Excel, Confluence e Jira separados, sem padronização BDD.",
  },
  {
    icon: GitBranch,
    title: "Falta de rastreabilidade",
    text: "Difícil ligar um cenário ao sprint, ao executor, ao defeito que ele gerou ou à última execução.",
  },
  {
    icon: Workflow,
    title: "Execuções desconectadas",
    text: "Pipelines de Cypress/Playwright rodam, mas os resultados não conversam com a gestão de testes.",
  },
  {
    icon: AlertTriangle,
    title: "Defeitos sem contexto",
    text: "Bugs reportados sem o cenário de origem, dificultando reprodução e análise de regressão.",
  },
];

const solutions = [
  {
    icon: FileCode2,
    title: "BDD como cidadão de primeira classe",
    text: "Cenários escritos em Gherkin (Given/When/Then), versionados e pesquisáveis por feature, tag e responsável.",
  },
  {
    icon: Network,
    title: "Rastreabilidade ponta a ponta",
    text: "Empresa → Projeto → Sprint → Cenário → Execução → Defeito. Tudo conectado em um único grafo.",
  },
  {
    icon: PlayCircle,
    title: "Resultados que voltam para o produto",
    text: "Reporter de Cypress envia execuções para o 4QA, populando histórico, taxa de sucesso e duração.",
  },
  {
    icon: Bug,
    title: "Defeitos vinculados ao cenário",
    text: "Quando uma execução falha, o defeito nasce no contexto do cenário — com severidade, sprint e histórico.",
  },
];

const modules = [
  {
    icon: Layers,
    title: "Dashboard",
    desc: "Visão executiva com total de cenários, taxa de sucesso, falhas e tendência de execuções.",
    img: dashboardImg,
    alt: "4QA — Dashboard com indicadores de cenários, taxa de sucesso e gráficos de tendência",
  },
  {
    icon: FileCode2,
    title: "Cenários BDD",
    desc: "Editor focado em Gherkin com organização por suítes, pastas, tags e tipo de execução (E2E ou Manual).",
    img: scenariosImg,
    alt: "4QA — Cenários BDD escritos em Given/When/Then, organizados por feature",
  },
  {
    icon: Boxes,
    title: "Test Suites",
    desc: "Estruture cenários em pastas e suítes para refletir a arquitetura do produto e da equipe.",
    img: suitesImg,
    alt: "4QA — Organização de Test Suites por pastas (Autenticação, Checkout)",
  },
  {
    icon: PlayCircle,
    title: "Execuções",
    desc: "Histórico completo de cada cenário com status, duração, evidências e taxa de sucesso ao longo do tempo.",
    img: executionImg,
    alt: "4QA — Histórico de execuções de um cenário com taxa de sucesso 100%",
  },
  {
    icon: Bug,
    title: "Defeitos",
    desc: "Bugs ligados ao cenário de origem, com severidade, sprint, status e evidências da execução que falhou.",
    img: defectsImg,
    alt: "4QA — Defeitos vinculados ao cenário com histórico de falhas",
  },
  {
    icon: FileSpreadsheet,
    title: "Relatórios",
    desc: "Exportação em XLSX e CSV de cenários, execuções, bugs e time — com filtros por empresa, sprint e status.",
    img: exportImg,
    alt: "4QA — Tela de exportação de planilhas em XLSX/CSV com filtros",
  },
  {
    icon: Settings2,
    title: "Customização",
    desc: "Tema dark/light, cor de destaque, idioma (PT-BR / EN) e integrações configuráveis por workspace.",
    img: settingsImg,
    alt: "4QA — Tela de configurações de aparência, idioma e integrações",
  },
];

const stack = [
  {
    title: "Frontend",
    icon: Code2,
    items: [
      "React 18 + TypeScript",
      "Vite",
      "Tailwind CSS + shadcn/ui",
      "React Router v6",
      "React Query",
      "i18next (PT-BR / EN)",
    ],
  },
  {
    title: "Backend & Infra",
    icon: Database,
    items: [
      "Supabase (Auth + Postgres)",
      "PostgreSQL",
      "Row Level Security (RLS)",
      "Supabase Edge Functions",
    ],
  },
  {
    title: "Integrações de QA",
    icon: Workflow,
    items: [
      "Script Node.js (qa4-sync.js)",
      "Reporter Cypress",
      "GitHub Actions pipelines",
    ],
  },
];

const roadmap = [
  {
    phase: "Agora",
    status: "in-progress" as const,
    title: "MVP funcional",
    items: [
      "Cenários BDD com editor Gherkin",
      "Execuções e histórico de status",
      "Defeitos vinculados a cenários",
      "Exportação XLSX/CSV",
      "Multi-empresa + multi-projeto",
    ],
  },
  {
    phase: "Próximo",
    status: "next" as const,
    title: "Integrações & colaboração",
    items: [
      "Reporter Cypress oficial publicado",
      "Webhook para Jira / Linear",
      "Notificações de execuções no Slack",
      "Comentários e revisão de cenários",
    ],
  },
  {
    phase: "Depois",
    status: "later" as const,
    title: "Inteligência & escala",
    items: [
      "Sugestão de cenários por IA a partir de requisitos",
      "Detecção de cenários flaky",
      "API pública e SDK",
      "Plano comercial e onboarding self-service",
    ],
  },
];

const FourQa = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Mini nav */}
      <header className="sticky top-0 z-50 glass border-b border-border/40">
        <div className="container px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao portfólio</span>
          </Link>
          <span className="font-heading font-bold text-lg">
            <span className="text-primary">4</span>QA
          </span>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden py-16 md:py-24 lg:py-28">
        {/* Background accents */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-primary/10 blur-[140px]" />

        <div className="container px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary/15 text-primary inline-flex items-center gap-1.5">
                Projeto autoral
              </span>
              <span className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 inline-flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                MVP em desenvolvimento
              </span>
              <span className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                SaaS
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-[1.05]">
              <span className="text-primary">4</span>
              <span>QA</span>
              <span className="block text-2xl sm:text-3xl md:text-4xl text-muted-foreground font-semibold mt-3">
                Behavior-Driven QA Platform
              </span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Uma plataforma SaaS pensada por um QA, para QAs. O 4QA centraliza a gestão de
              testes em torno de <span className="text-foreground font-medium">cenários BDD</span>,
              conectando empresas, projetos, sprints, execuções automatizadas e defeitos em um
              único produto.
            </p>
          </motion.div>

          {/* Hero screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7, ease: "easeOut" }}
            className="mt-12 md:mt-16 max-w-5xl mx-auto"
          >
            <div className="rounded-xl overflow-hidden border border-border/60 bg-background shadow-[0_30px_80px_-20px_hsl(var(--primary)/0.25)]">
              <div className="flex items-center gap-1.5 px-3 py-2 bg-muted/30 border-b border-border/40">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <span className="ml-3 font-mono text-[11px] text-muted-foreground truncate">
                  4qa.app — dashboard
                </span>
              </div>
              <img
                src={dashboardImg}
                alt="4QA — Dashboard com indicadores e gráficos de execuções de testes"
                loading="eager"
                className="w-full h-auto block"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="py-16 md:py-24 bg-secondary/20 border-y border-border/40">
        <div className="container px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-12"
          >
            <p className="font-mono text-sm text-primary mb-3">// problema</p>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              QA ainda vive entre planilhas e ferramentas desconectadas
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Times de qualidade lidam diariamente com fragmentação: a documentação fica em um
              lugar, a automação em outro, e os bugs em um terceiro. O custo dessa desconexão é
              alto — e quase invisível.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {problems.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-xl p-5 border border-border/40"
              >
                <div className="w-10 h-10 rounded-md bg-destructive/10 text-destructive flex items-center justify-center mb-4">
                  <p.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold mb-2 leading-tight">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUÇÃO */}
      <section className="py-16 md:py-24">
        <div className="container px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-12"
          >
            <p className="font-mono text-sm text-primary mb-3">// solução</p>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Um produto onde BDD é o centro, não um anexo
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              O 4QA propõe um modelo onde o cenário BDD é a unidade central da qualidade — e
              tudo (execuções, defeitos, métricas) gira em torno dele.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {solutions.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-xl p-6 hover:glow-box transition-shadow duration-500 flex gap-4"
              >
                <div className="shrink-0 w-11 h-11 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
                  <s.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold mb-1.5">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MÓDULOS */}
      <section className="py-16 md:py-24 bg-secondary/20 border-y border-border/40">
        <div className="container px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-12"
          >
            <p className="font-mono text-sm text-primary mb-3">// módulos</p>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Principais módulos do produto
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Cada módulo foi pensado para resolver uma dor real do dia a dia de QA.
            </p>
          </motion.div>

          <div className="space-y-12">
            {modules.map((m, i) => (
              <motion.article
                key={m.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className={`grid lg:grid-cols-2 gap-6 lg:gap-10 items-center ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
                      <m.icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">
                      módulo {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold mb-3">{m.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>

                <div className="rounded-xl overflow-hidden border border-border/60 bg-background shadow-[0_20px_50px_-15px_hsl(var(--primary)/0.2)]">
                  <div className="flex items-center gap-1.5 px-3 py-2 bg-muted/30 border-b border-border/40">
                    <span className="w-2 h-2 rounded-full bg-red-500/70" />
                    <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
                    <span className="w-2 h-2 rounded-full bg-green-500/70" />
                    <span className="ml-3 font-mono text-[10px] text-muted-foreground truncate">
                      4qa.app — {m.title.toLowerCase()}
                    </span>
                  </div>
                  <img
                    src={m.img}
                    alt={m.alt}
                    loading="lazy"
                    className="w-full h-auto block"
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="py-16 md:py-24">
        <div className="container px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-12"
          >
            <p className="font-mono text-sm text-primary mb-3">// stack</p>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Stack principal
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Construído com uma stack moderna focada em performance, escalabilidade e evolução
              rápida de produto.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {stack.map((group, i) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-6 border border-border/40"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
                    <group.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold">{group.title}</h3>
                </div>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="font-mono text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-primary mt-1">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground mt-8 max-w-3xl leading-relaxed"
          >
            <span className="font-mono text-primary">// arquitetura · </span>
            A 4QA opera como uma SPA que consome diretamente os serviços do Supabase via cliente
            JavaScript, permitindo um MVP enxuto, moderno e pronto para evolução comercial.
          </motion.p>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="py-16 md:py-24 bg-secondary/20 border-y border-border/40">
        <div className="container px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-12"
          >
            <p className="font-mono text-sm text-primary mb-3">// roadmap</p>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Roadmap em alto nível
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Onde o 4QA está hoje, o que vem em seguida e a visão de longo prazo do produto.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {roadmap.map((r, i) => {
              const StatusIcon =
                r.status === "in-progress"
                  ? Clock
                  : r.status === "next"
                  ? Circle
                  : CheckCircle2;
              const accent =
                r.status === "in-progress"
                  ? "text-primary border-primary/40 bg-primary/5"
                  : r.status === "next"
                  ? "text-amber-400 border-amber-400/30 bg-amber-400/5"
                  : "text-muted-foreground border-border/40 bg-background/40";

              return (
                <motion.div
                  key={r.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`glass rounded-xl p-6 border ${accent.includes("bg-") ? "" : ""}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full inline-flex items-center gap-1.5 border ${accent}`}
                    >
                      <StatusIcon className="w-3 h-3" />
                      {r.phase}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-4">{r.title}</h3>
                  <ul className="space-y-2.5">
                    {r.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-start gap-2.5 leading-snug">
                        <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STATUS / CTA */}
      <section className="py-16 md:py-24">
        <div className="container px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center glass rounded-2xl p-8 md:p-12 border border-border/40 relative overflow-hidden"
          >
            <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px]" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="relative flex w-2.5 h-2.5">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-amber-400/50 animate-ping" />
                  <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-amber-400" />
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-amber-400">
                  Status: MVP em desenvolvimento
                </span>
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Quer acompanhar a evolução do 4QA?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
                O produto está em construção ativa. Se você é recrutador, líder de QA ou potencial
                parceiro, posso compartilhar uma demo guiada e detalhes técnicos sob NDA.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="mailto:douglascarbonell@outlook.com?subject=Demo%204QA"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Solicitar uma demo
                </a>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium border border-border hover:border-primary hover:text-primary transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Voltar ao portfólio
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8">
        <div className="container px-6 flex flex-wrap items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            <span className="text-primary">4</span>QA · Behavior-Driven QA Platform · 2026
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            Construído por <span className="text-foreground">Douglas Carbonel</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FourQa;
