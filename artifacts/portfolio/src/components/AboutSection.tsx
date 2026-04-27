import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const timeline = [
  {
    period: "Base",
    role: "Experiência em Operações e Suporte",
    description: "Liderança de equipes de suporte técnico, gestão de incidentes e SLAs em ambientes CRM e SAP.",
    tags: ["CRM", "SAP", "Gestão de Equipes", "ITIL"],
  },
  {
    period: "Especialização",
    role: "Domínio em Dados e Integrações",
    description: "SQL/HANA avançado, análise de dados, mapeamento de processos de negócio e integrações entre sistemas.",
    tags: ["SQL", "SAP HANA", "ETL", "Análise de Dados"],
  },
  {
    period: "Foco atual",
    role: "Atuação em QA e Automação",
    description: "Testes funcionais, automatizados e de API. Garantia de qualidade com visão end-to-end do negócio.",
    tags: ["Testes Automatizados", "API Testing", "CI/CD", "Cypress"],
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 lg:py-32">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-primary mb-3">// trajetória</p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold">
            Minha Jornada
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:-translate-x-px"
          />

          <div className="space-y-12 md:space-y-16">
            {timeline.map((item, index) => (
              <motion.div
                key={item.period}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot on timeline */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.2, type: "spring", stiffness: 300 }}
                  className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary glow-box -translate-x-1.5 mt-2 z-10 animate-pulse-glow"
                />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <span className="font-mono text-xs text-primary uppercase tracking-wider">{item.period}</span>
                  <h3 className="font-heading text-xl md:text-2xl font-semibold mt-1 mb-3">{item.role}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{item.description}</p>
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    {item.tags.map((tag) => (
                      <span key={tag} className="font-mono text-xs glass px-2.5 py-1 rounded text-accent-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Arrow between sections */}
        <div className="flex justify-center mt-16">
          <ArrowRight className="w-5 h-5 text-primary rotate-90" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
