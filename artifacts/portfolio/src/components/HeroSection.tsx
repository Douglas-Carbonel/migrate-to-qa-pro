import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

const fullName = "Douglas Carbonel";
const tags = ["SQL", "SAP/HANA", "CRM", "Test Automation", "API Testing"];

const useTypewriter = (text: string, speed = 60, startDelay = 0) => {
  const [out, setOut] = useState("");

  useEffect(() => {
    let i = 0;
    let intervalId: ReturnType<typeof setInterval> | null = null;
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        i += 1;
        setOut(text.slice(0, i));
        if (i >= text.length && intervalId) {
          clearInterval(intervalId);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  return out;
};

const HeroSection = () => {
  const cmd = useTypewriter("whoami", 70, 400);
  const cmdDone = cmd.length === "whoami".length;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating glow orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px]"
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-accent-foreground/10 blur-[110px]"
        animate={{ x: [0, -30, 20, 0], y: [0, 25, -15, 0], scale: [1, 0.9, 1.1, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Scan line */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        initial={{ top: "-2%" }}
        animate={{ top: ["-2%", "102%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Terminal-style intro with typewriter */}
          <div className="font-mono text-sm text-muted-foreground mb-6 flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-primary">~/portfolio</span>
            <span>$ {cmd}</span>
            <span
              className={`inline-block w-2 h-4 bg-primary translate-y-[2px] ${
                cmdDone ? "animate-blink" : ""
              }`}
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground mb-2 font-mono"
          >
            Olá, eu sou
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-2 break-words"
          >
            <span className="text-gradient">{fullName}</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="font-heading text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-muted-foreground"
          >
            Quality Assurance Engineer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mb-4 leading-relaxed"
          >
            <span className="text-primary font-medium">QA Engineer</span> com experiência em
            troubleshooting, validação de sistemas e fluxos{" "}
            <span className="text-foreground font-medium">CRM/SAP</span>, unindo visão de negócio,
            análise técnica e automação de testes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <motion.a
              href="#projetos"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-5 py-2.5 rounded-md hover:glow-box-strong transition-shadow group"
            >
              Ver Projetos
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              href="https://github.com/Douglas-Carbonel"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 glass border border-border hover:border-primary/40 text-foreground font-medium px-5 py-2.5 rounded-md transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/douglascarbonel"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 glass border border-border hover:border-primary/40 text-foreground font-medium px-5 py-2.5 rounded-md transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </motion.a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 1.5 } },
            }}
            className="font-mono text-sm text-muted-foreground mt-8 flex flex-wrap gap-4"
          >
            {tags.map((tag) => (
              <motion.span
                key={tag}
                variants={{
                  hidden: { opacity: 0, y: 12, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                whileHover={{ y: -3, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="glass px-3 py-1.5 rounded-md text-primary cursor-default hover:glow-box"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.8, duration: 0.6 },
          y: { duration: 2, repeat: Infinity, delay: 1.8 },
        }}
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
