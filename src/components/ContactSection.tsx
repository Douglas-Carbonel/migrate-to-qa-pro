import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 md:py-32 bg-secondary/30">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="font-mono text-sm text-primary mb-3">// contato</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">Vamos Conversar?</h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            Estou aberto a oportunidades em QA, testes automatizados e garantia de qualidade. 
            Entre em contato para trocarmos uma ideia.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:seuemail@email.com"
              className="glass rounded-xl px-6 py-4 flex items-center gap-3 hover:glow-box transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">E-mail</span>
            </a>
            <a
              href="https://linkedin.com/in/seuperfil"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-xl px-6 py-4 flex items-center gap-3 hover:glow-box transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a
              href="https://github.com/seuperfil"
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
