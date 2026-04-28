import PDFDocument from "pdfkit";
import { createWriteStream } from "node:fs";
import { resolve } from "node:path";

const OUTPUT = resolve(
  process.cwd(),
  "../artifacts/portfolio/public/cv-douglas-carbonel.pdf",
);

const PRIMARY = "#0e1014";
const MUTED = "#4a5260";
const ACCENT = "#1f6feb";
const RULE = "#d6dbe1";

type Section = () => void;

const doc = new PDFDocument({
  size: "A4",
  margins: { top: 42, bottom: 60, left: 48, right: 48 },
  bufferPages: true,
  info: {
    Title: "Douglas Carbonel - Currículo",
    Author: "Douglas Carbonel",
    Subject: "Currículo - QA Engineer",
  },
});

doc.pipe(createWriteStream(OUTPUT));

const PAGE_WIDTH = doc.page.width;
const LEFT = doc.page.margins.left;
const RIGHT = doc.page.margins.right;
const CONTENT_WIDTH = PAGE_WIDTH - LEFT - RIGHT;
const FOOTER_RESERVE = 28;

let pageNumber = 1;

function ensureSpace(height: number) {
  const limit = doc.page.height - doc.page.margins.bottom - FOOTER_RESERVE;
  if (doc.y + height > limit) {
    doc.addPage();
  }
}

function sectionTitle(title: string) {
  ensureSpace(36);
  doc.moveDown(0.6);
  doc
    .font("Helvetica-Bold")
    .fontSize(11)
    .fillColor(ACCENT)
    .text(title.toUpperCase(), LEFT, doc.y, {
      characterSpacing: 1.2,
    });
  const y = doc.y + 2;
  doc
    .moveTo(LEFT, y)
    .lineTo(LEFT + CONTENT_WIDTH, y)
    .lineWidth(0.6)
    .strokeColor(RULE)
    .stroke();
  doc.moveDown(0.5);
}

function paragraph(text: string, opts: { size?: number; color?: string } = {}) {
  const size = opts.size ?? 9.5;
  const color = opts.color ?? PRIMARY;
  const height = doc.heightOfString(text, {
    width: CONTENT_WIDTH,
    lineGap: 1.5,
  });
  ensureSpace(height + 4);
  doc
    .font("Helvetica")
    .fontSize(size)
    .fillColor(color)
    .text(text, LEFT, doc.y, {
      width: CONTENT_WIDTH,
      lineGap: 1.5,
      align: "justify",
    });
}

function bullet(text: string) {
  const indent = 12;
  const bulletX = LEFT + 2;
  const textX = LEFT + indent;
  const width = CONTENT_WIDTH - indent;
  const size = 9.5;
  const height = doc.heightOfString(text, { width, lineGap: 1.5 });
  ensureSpace(height + 3);
  const y = doc.y;
  doc
    .font("Helvetica")
    .fontSize(size)
    .fillColor(ACCENT)
    .text("•", bulletX, y);
  doc
    .fillColor(PRIMARY)
    .text(text, textX, y, { width, lineGap: 1.5 });
  doc.moveDown(0.05);
}

function jobHeader(role: string, period: string, location: string) {
  ensureSpace(34);
  doc.moveDown(0.3);
  doc
    .font("Helvetica-Bold")
    .fontSize(10.5)
    .fillColor(PRIMARY)
    .text(role, LEFT, doc.y, { width: CONTENT_WIDTH });
  doc
    .font("Helvetica")
    .fontSize(9)
    .fillColor(MUTED)
    .text(`${period}  •  ${location}`, LEFT, doc.y + 1, {
      width: CONTENT_WIDTH,
    });
  doc.moveDown(0.25);
}

function projectHeader(name: string, subtitle: string) {
  ensureSpace(30);
  doc.moveDown(0.25);
  doc
    .font("Helvetica-Bold")
    .fontSize(10.5)
    .fillColor(PRIMARY)
    .text(name, LEFT, doc.y, { width: CONTENT_WIDTH });
  doc
    .font("Helvetica-Oblique")
    .fontSize(9)
    .fillColor(MUTED)
    .text(subtitle, LEFT, doc.y + 1, { width: CONTENT_WIDTH });
  doc.moveDown(0.2);
}

function competency(label: string, body: string) {
  const labelWidth = 110;
  const gap = 8;
  const bodyWidth = CONTENT_WIDTH - labelWidth - gap;
  const size = 9.5;
  doc.font("Helvetica").fontSize(size);
  const bodyHeight = doc.heightOfString(body, {
    width: bodyWidth,
    lineGap: 1.5,
  });
  ensureSpace(bodyHeight + 4);
  const y = doc.y;
  doc
    .font("Helvetica-Bold")
    .fontSize(size)
    .fillColor(ACCENT)
    .text(label, LEFT, y, { width: labelWidth });
  doc
    .font("Helvetica")
    .fontSize(size)
    .fillColor(PRIMARY)
    .text(body, LEFT + labelWidth + gap, y, {
      width: bodyWidth,
      lineGap: 1.5,
    });
  doc.moveDown(0.15);
}

function header() {
  doc
    .font("Helvetica-Bold")
    .fontSize(22)
    .fillColor(PRIMARY)
    .text("Douglas Carbonel", LEFT, doc.y);
  doc
    .font("Helvetica")
    .fontSize(10.5)
    .fillColor(ACCENT)
    .text(
      "QA Engineer  •  Cypress  •  API Testing  •  SQL  •  SAP Business One  •  ERP & Integrações",
      LEFT,
      doc.y + 2,
      { width: CONTENT_WIDTH },
    );
  doc
    .font("Helvetica")
    .fontSize(9)
    .fillColor(MUTED)
    .text(
      "Cachoeirinha, RS, Brasil  •  douglascarbonell@outlook.com  •  WhatsApp: (51) 98345-3300",
      LEFT,
      doc.y + 4,
      { width: CONTENT_WIDTH },
    );
  doc
    .font("Helvetica")
    .fontSize(9)
    .fillColor(MUTED)
    .text(
      "linkedin.com/in/douglascarbonel  •  github.com/Douglas-Carbonel",
      LEFT,
      doc.y + 1,
      { width: CONTENT_WIDTH },
    );
  const y = doc.y + 6;
  doc
    .moveTo(LEFT, y)
    .lineTo(LEFT + CONTENT_WIDTH, y)
    .lineWidth(0.8)
    .strokeColor(ACCENT)
    .stroke();
  doc.moveDown(0.6);
}

const sections: Section[] = [
  function resumo() {
    sectionTitle("Resumo Profissional");
    paragraph(
      "Profissional de Qualidade de Software com experiência em ambientes ERP, testes end-to-end, validação de APIs, análise de logs, troubleshooting, consultas SQL e automação de testes com Cypress. Atua na investigação de falhas complexas, validação de integrações com SAP Business One e garantia da qualidade em fluxos críticos de negócio, como pedidos, faturamento, devoluções, picking, lotes e séries.",
    );
    doc.moveDown(0.25);
    paragraph(
      "Possui vivência colaborando com times de desenvolvimento, infraestrutura, suporte, clientes e stakeholders, combinando visão funcional, análise técnica e foco em estabilidade, confiabilidade e melhoria contínua das entregas. Direciona sua carreira para posições de QA Engineer, QA Analyst e QA Automation.",
    );
  },
  function competencias() {
    sectionTitle("Competências Técnicas");
    competency(
      "Qualidade",
      "Testes manuais, funcionais, exploratórios, regressivos, E2E, análise de bugs, documentação de cenários e validação pós-release.",
    );
    competency(
      "Automação",
      "Cypress, suítes E2E, testes de login, formulários, navegação, checkout e fluxos dinâmicos.",
    );
    competency(
      "API Testing",
      "Postman, payloads, autenticação, status codes, tempo de resposta, Service Layer, DI Server, Jest, Axios e validação de schema.",
    );
    competency(
      "Banco de Dados",
      "SQL, queries, validação de persistência, procedures, transactions e integridade de dados.",
    );
    competency(
      "ERP e Integrações",
      "SAP Business One, ERP, CRM, integrações entre serviços, troubleshooting e fluxos críticos de negócio.",
    );
    competency(
      "Ferramentas",
      "Git, GitHub, análise de logs, Scrum, Kanban, documentação técnica e comunicação com stakeholders.",
    );
  },
  function experiencia() {
    sectionTitle("Experiência Profissional");
    jobHeader(
      "DWU IT Solutions — Líder de Qualidade e Suporte | QA, ERP e SAP Business One",
      "Jun/2022 - Abr/2026",
      "Porto Alegre, RS",
    );
    [
      "Liderou atividades de qualidade e suporte em ambiente ERP integrado ao SAP Business One, garantindo maior estabilidade em fluxos críticos de negócio.",
      "Conduziu a identificação, reprodução e análise de bugs críticos, atuando na investigação de causa raiz e na redução de recorrências em produção.",
      "Executou testes end-to-end em processos complexos, incluindo pedidos, faturamento, devoluções, picking, lotes, séries e integrações entre módulos.",
      "Validou integrações via APIs, incluindo Service Layer e DI Server, utilizando Postman para análise de payloads, autenticação, respostas e comportamento dos serviços.",
      "Desenvolveu e manteve testes automatizados com Cypress, contribuindo para maior confiabilidade das releases e evolução da cobertura de testes.",
      "Analisou logs técnicos de navegador, servidores, integrações e Service Layer para diagnóstico avançado de falhas.",
      "Validou persistência, consistência e integridade de dados por meio de consultas SQL, procedures e transactions.",
      "Facilitou a comunicação entre suporte, desenvolvimento, infraestrutura, clientes, consultores e liderança executiva em temas de qualidade, incidentes críticos e priorização.",
    ].forEach(bullet);

    jobHeader(
      "Talto Gestor Loja — Analista de Suporte Técnico",
      "Jan/2021 - Jun/2022",
      "Porto Alegre, RS",
    );
    [
      "Prestou suporte técnico a clientes via chat, telefone e acesso remoto, garantindo continuidade operacional e resolução de incidentes.",
      "Realizou instalação, configuração e manutenção de softwares, aplicativos, impressoras, balanças, etiquetas e ambientes Windows.",
      "Diagnosticou problemas técnicos por meio de ferramentas como AnyDesk e TeamViewer, acelerando a resolução de chamados.",
      "Apoiou a criação, configuração e implementação de bases de dados e lojas virtuais para clientes do segmento varejista.",
      "Treinou usuários finais em processos financeiros e administrativos, aumentando a autonomia no uso dos sistemas.",
      "Elaborou manuais e documentações de apoio, padronizando orientações e reduzindo dúvidas recorrentes.",
    ].forEach(bullet);
  },
  function projetos() {
    sectionTitle("Projetos em Destaque");

    projectHeader("QA E2E Cypress", "Automação de testes end-to-end com Cypress");
    [
      "Criou suítes de testes automatizados cobrindo fluxos de login, checkout, navegação, formulários e cenários dinâmicos.",
      "Estruturou cenários E2E com foco em comportamento do usuário, validação funcional e confiabilidade da aplicação.",
      "Aplicou boas práticas de organização de testes, reutilização de comandos e clareza na escrita dos cenários.",
    ].forEach(bullet);
    paragraph("Tecnologias e conceitos: Cypress, JavaScript, Git, GitHub", {
      size: 8.5,
      color: MUTED,
    });

    projectHeader(
      "API Testing Suite",
      "Testes automatizados de API com Jest, Axios e validação de schema",
    );
    [
      "Desenvolveu uma estrutura de testes para APIs contemplando cenários positivos, negativos e autenticação.",
      "Validou respostas, contratos, status codes, payloads e schemas para garantir maior confiabilidade dos serviços.",
      "Organizou testes com foco em manutenção, legibilidade e escalabilidade.",
    ].forEach(bullet);
    paragraph(
      "Tecnologias e conceitos: Jest, Axios, JavaScript, API Testing, Git, GitHub",
      { size: 8.5, color: MUTED },
    );

    projectHeader(
      "Enterprise Cypress Tests",
      "Suíte E2E modular inspirada em fluxos reais de negócio",
    );
    [
      "Estruturou uma suíte de testes E2E organizada por domínio funcional, simulando fluxos próximos de sistemas corporativos.",
      "Aplicou conceitos de modularização, reutilização e separação de responsabilidades nos testes.",
      "Construiu cenários voltados para validação de processos críticos e redução de riscos em entregas.",
    ].forEach(bullet);
    paragraph("Tecnologias e conceitos: Cypress, JavaScript, testes E2E, GitHub", {
      size: 8.5,
      color: MUTED,
    });

    projectHeader(
      "4QA",
      "Plataforma SaaS em desenvolvimento voltada para Quality Assurance",
    );
    [
      "Idealizou uma plataforma para apoiar profissionais de QA na criação, organização e rastreabilidade de cenários de teste.",
      "Planejou funcionalidades voltadas para BDD, execução de testes automatizados e gestão de defeitos.",
      "Desenvolve o projeto com foco em produtividade, visibilidade de qualidade e integração entre testes manuais e automatizados.",
    ].forEach(bullet);
    paragraph(
      "Tecnologias e conceitos: QA, BDD, gestão de defeitos, rastreabilidade, SaaS",
      { size: 8.5, color: MUTED },
    );
  },
  function formacao() {
    sectionTitle("Formação Acadêmica");
    [
      ["Análise e Desenvolvimento de Sistemas", "UNIASSELVI — 2024"],
      ["Processos Gerenciais", "UNIASSELVI — 2019"],
      ["Técnico em TI", "QI Faculdade & Escola Técnica — 2016"],
    ].forEach(([course, school]) => {
      ensureSpace(18);
      const y = doc.y;
      doc
        .font("Helvetica-Bold")
        .fontSize(9.5)
        .fillColor(PRIMARY)
        .text(course, LEFT, y, { width: CONTENT_WIDTH * 0.6, continued: false });
      doc
        .font("Helvetica")
        .fontSize(9)
        .fillColor(MUTED)
        .text(school, LEFT, y, {
          width: CONTENT_WIDTH,
          align: "right",
        });
      doc.moveDown(0.15);
    });
  },
  function certificacoes() {
    sectionTitle("Certificações e Cursos Complementares");
    [
      "Testes Automatizados com Cypress — Avançado",
      "Testes Automatizados com Cypress — Básico",
      "Mentoria em QA com foco em Cypress",
      "ITIL Foundation v4",
      "Scrum Foundation Professional",
      "Lógica de Programação: Laços e Listas com JavaScript",
      "Lógica de Programação: Comece em Lógica com o Jogo Pong e JavaScript",
    ].forEach(bullet);
  },
];

header();
sections.forEach((s) => s());

const range = doc.bufferedPageRange();
for (let i = 0; i < range.count; i += 1) {
  doc.switchToPage(range.start + i);
  const y = doc.page.height - doc.page.margins.bottom + 18;
  doc
    .font("Helvetica")
    .fontSize(8)
    .fillColor(MUTED)
    .text(
      `Douglas Carbonel  •  Currículo  •  Página ${i + 1} de ${range.count}`,
      LEFT,
      y,
      { width: CONTENT_WIDTH, align: "right", lineBreak: false, height: 12 },
    );
}

doc.end();
console.log(`Wrote ${OUTPUT}`);
