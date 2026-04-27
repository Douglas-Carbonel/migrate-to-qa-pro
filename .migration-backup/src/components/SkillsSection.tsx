import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "QA & Testing",
    icon: "🧪",
    skills: [
      { name: "Testes Funcionais", level: 90 },
      { name: "Testes de API (Postman/REST)", level: 85 },
      { name: "Automação de Testes", level: 75 },
      { name: "Cypress / Selenium", level: 70 },
      { name: "Testes de Regressão", level: 90 },
    ],
  },
  {
    title: "Dados & Banco",
    icon: "🗄️",
    skills: [
      { name: "SQL (avançado)", level: 95 },
      { name: "SAP HANA", level: 85 },
      { name: "Análise de Dados", level: 88 },
      { name: "ETL & Integrações", level: 80 },
      { name: "Modelagem de Dados", level: 75 },
    ],
  },
  {
    title: "Gestão & Processos",
    icon: "📋",
    skills: [
      { name: "Gestão de Incidentes", level: 95 },
      { name: "ITIL / ITSM", level: 85 },
      { name: "Metodologias Ágeis", level: 80 },
      { name: "Documentação Técnica", level: 90 },
      { name: "Liderança de Equipes", level: 88 },
    ],
  },
  {
    title: "Ferramentas",
    icon: "⚙️",
    skills: [
      { name: "SAP CRM", level: 92 },
      { name: "Jira / Azure DevOps", level: 88 },
      { name: "Git / Versionamento", level: 75 },
      { name: "CI/CD Pipelines", level: 65 },
      { name: "Postman / Swagger", level: 82 },
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
                      <span className="font-mono text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent-foreground"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
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
