import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Download, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-16 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="font-mono text-sm text-primary mb-3">// contato</p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold mb-6">Vamos Conversar?</h2>

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 border border-primary/30"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="font-mono text-xs md:text-sm text-foreground">
              Disponível para oportunidades em{" "}
              <span className="text-primary">QA</span>,{" "}
              <span className="text-primary">Test Automation</span> e{" "}
              <span className="text-primary">API Testing</span>
            </span>
          </motion.div>

          <p className="text-muted-foreground text-base md:text-lg mb-10 leading-relaxed">
            Estou aberto a oportunidades em QA, testes automatizados e garantia de qualidade.
            Entre em contato para trocarmos uma ideia.
          </p>

          {/* Primary CTA: Download CV */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <a
              href="/cv-douglas-carbonel.pdf"
              download
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-6 py-3 rounded-md hover:glow-box-strong transition-shadow group"
            >
              <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              Baixar CV
            </a>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:douglascarbonell@outlook.com"
              className="glass rounded-xl px-6 py-4 flex items-center gap-3 hover:glow-box transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">E-mail</span>
            </a>
            <a
              href="https://wa.me/5551983453300"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-xl px-6 py-4 flex items-center gap-3 hover:glow-box transition-all duration-300 group"
            >
              <MessageCircle className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">WhatsApp</span>
            </a>
            <a
              href="https://www.linkedin.com/in/douglascarbonel"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-xl px-6 py-4 flex items-center gap-3 hover:glow-box transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a
              href="https://github.com/Douglas-Carbonel"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-xl px-6 py-4 flex items-center gap-3 hover:glow-box transition-all duration-300 group"
            >
              <Github className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
          </div>

          {/* Terminal-style footer */}
          <div className="mt-16 font-mono text-xs text-muted-foreground">
            <span className="text-primary">$</span> echo "Obrigado por visitar!"
            <span className="animate-blink ml-1">▌</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
