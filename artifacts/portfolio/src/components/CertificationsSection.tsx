import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "CTFL - Certified Tester Foundation Level",
    issuer: "ISTQB",
    status: "Em andamento",
    active: false,
  },
  {
    title: "Testes Automatizados com Cypress — Avançado",
    issuer: "Talking About Testing (Walmyr Filho)",
    status: "Concluído",
    active: true,
  },
  {
    title: "Testes Automatizados com Cypress — Básico",
    issuer: "Talking About Testing (Walmyr Filho)",
    status: "Concluído",
    active: true,
  },
  {
    title: "Mentoria em QA com foco em Cypress",
    issuer: "Walmyr Filho — Cypress Ambassador",
    status: "Concluído",
    active: true,
  },
  {
    title: "ITIL Foundation v4",
    issuer: "PeopleCert / Axelos",
    status: "Concluído",
    active: true,
  },
  {
    title: "SQL para Análise de Dados",
    issuer: "Plataforma de Ensino",
    status: "Concluído",
    active: true,
  },
];

const CertificationsSection = () => {
  return (
    <section id="certificacoes" className="py-16 md:py-24 lg:py-32">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-primary mb-3">// certificações</p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold">Certificações</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass rounded-xl p-6 group hover:glow-box transition-shadow duration-500 relative overflow-hidden"
            >
              {/* Status indicator */}
              <div className="flex items-center justify-between mb-4">
                <Award className={`w-5 h-5 ${cert.active ? "text-primary" : "text-muted-foreground"}`} />
                <span className={`font-mono text-xs px-2 py-0.5 rounded-full ${
                  cert.active 
                    ? "bg-primary/10 text-primary" 
                    : "bg-muted text-muted-foreground"
                }`}>
                  {cert.status}
                </span>
              </div>

              <h3 className="font-heading font-semibold mb-2 leading-snug">{cert.title}</h3>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>

              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
