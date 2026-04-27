import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />
      
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-accent-foreground/5 blur-[100px]" />

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Terminal-style intro */}
          <div className="font-mono text-sm text-muted-foreground mb-6 flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-primary">~/portfolio</span>
            <span>$ whoami</span>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground mb-2 font-mono">Olá, eu sou</p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-2">
            <span className="text-gradient">Douglas Carbonel</span>
          </h1>
          <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-muted-foreground">
            Quality Assurance Engineer
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-4 leading-relaxed">
            <span className="text-primary font-medium">QA Engineer</span> com experiência em troubleshooting, validação de sistemas e fluxos <span className="text-foreground font-medium">CRM/SAP</span>, unindo visão de negócio, análise técnica e automação de testes.
          </p>

          <div className="font-mono text-sm text-muted-foreground mt-8 flex flex-wrap gap-4">
            <span className="glass px-3 py-1.5 rounded-md text-primary">SQL</span>
            <span className="glass px-3 py-1.5 rounded-md text-primary">SAP/HANA</span>
            <span className="glass px-3 py-1.5 rounded-md text-primary">CRM</span>
            <span className="glass px-3 py-1.5 rounded-md text-primary">Test Automation</span>
            <span className="glass px-3 py-1.5 rounded-md text-primary">API Testing</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
