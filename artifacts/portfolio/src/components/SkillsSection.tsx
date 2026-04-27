import { motion } from "framer-motion";

type Level = "Avançado" | "Intermediário" | "Em evolução";

const levelToWidth: Record<Level, string> = {
  Avançado: "100%",
  Intermediário: "66%",
  "Em evolução": "33%",
};

const skillCategories: {
  title: string;
  icon: string;
  skills: { name: string; level: Level }[];
}[] = [
  {
    title: "QA & Testing",
    icon: "🧪",
    skills: [
      { name: "Testes Funcionais", level: "Avançado" },
      { name: "Testes de API (Postman/REST)", level: "Avançado" },
      { name: "Automação de Testes", level: "Intermediário" },
      { name: "Cypress / Selenium", level: "Intermediário" },
      { name: "Testes de Regressão", level: "Avançado" },
    ],
  },
  {
    title: "Dados & Banco",
    icon: "🗄️",
    skills: [
      { name: "SQL (avançado)", level: "Avançado" },
      { name: "SAP HANA", level: "Avançado" },
      { name: "Análise de Dados", level: "Avançado" },
      { name: "ETL & Integrações", level: "Intermediário" },
      { name: "Modelagem de Dados", level: "Intermediário" },
    ],
  },
  {
    title: "Gestão & Processos",
    icon: "📋",
    skills: [
      { name: "Gestão de Incidentes", level: "Avançado" },
      { name: "ITIL / ITSM", level: "Avançado" },
      { name: "Metodologias Ágeis", level: "Intermediário" },
      { name: "Documentação Técnica", level: "Avançado" },
      { name: "Liderança de Equipes", level: "Avançado" },
    ],
  },
  {
    title: "Ferramentas",
    icon: "⚙️",
    skills: [
      { name: "SAP CRM", level: "Avançado" },
      { name: "Jira / Azure DevOps", level: "Avançado" },
      { name: "Git / Versionamento", level: "Intermediário" },
      { name: "CI/CD Pipelines", level: "Em evolução" },
      { name: "Postman / Swagger", level: "Intermediário" },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-secondary/30">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-primary mb-3">// competências</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">Skills & Habilidades</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="glass rounded-xl p-6 md:p-8 hover:glow-box transition-shadow duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="font-heading text-lg font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {skill.level}
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent-foreground"
                        initial={{ width: 0 }}
                        whileInView={{ width: levelToWidth[skill.level] }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
