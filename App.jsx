import React from 'react'

const WHATSAPP_LINK =
  "https://wa.me/5521936194950?text=Ol%C3%A1%20THEO%2C%20quero%20come%C3%A7ar%20meu%20atendimento";

function THEOLogo({ size = 32, invert = false }) {
  const bg = invert ? "#ECE5DD" : "#075E54";
  const needle = invert ? "#075E54" : "#25D366";
  const dot = invert ? "#25D366" : "#ECE5DD";
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="THEO logo">
      <title>THEO — Consultor de Investimentos por IA</title>
      <circle cx="32" cy="28" r="18" fill={bg} />
      <path d="M26 44 L30 36 L36 44 Z" fill={bg} />
      <path d="M32 28 L46 18 L40 32 Z" fill={needle} />
      <circle cx="32" cy="28" r="2" fill={dot} />
    </svg>
  );
}

function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-transparent bg-[#075E54] text-white backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-3" aria-label="THEO Home">
          <THEOLogo size={32} invert />
          <span className="text-xl font-semibold tracking-tight">THEO</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          <a className="text-sm text-white/90 hover:text-white" href="#beneficios-usuarios">Benefícios</a>
          <a className="text-sm text-white/90 hover:text-white" href="#stakeholders">Quem usa o THEO</a>
          <a className="text-sm text-white/90 hover:text-white" href="#seguranca">Segurança</a>
          <a className="text-sm text-white/90 hover:text-white" href="#integracoes">Integrações</a>
          <a className="text-sm text-white/90 hover:text-white" href="#faq">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
          >
            Experimentar
          </a>
        </div>
      </Container>
    </header>
  );
}

function ChatBubble({ who, text, ai = false }) {
  return (
    <div className={`mb-3 flex ${ai ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[90%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
          ai ? "bg-[#075E54] text-white" : "bg-[#DCF8C6] text-[#075E54]"
        }`}
      >
        <div className="mb-1 text-[11px] uppercase tracking-wide opacity-70">{who}</div>
        <div>{text}</div>
      </div>
    </div>
  );
}

function CredibilityBar() {
  return (
    <Container className="py-10">
      <div className="grid grid-cols-2 items-center gap-6 opacity-90 sm:grid-cols-3 md:grid-cols-6">
        {[
          "LGPD Ready",
          "CVM Rules",
          "ANBIMA",
          "Open Finance",
          "White Label",
          "APIs / Webhooks",
        ].map((label) => (
          <div key={label} className="text-center text-xs font-medium tracking-wide text-[#128C7E]">
            {label}
          </div>
        ))}
      </div>
    </Container>
  );
}

function SectionTitle({ kicker, title, subtitle, id }) {
  return (
    <div className="mb-10" id={id}>
      <div className="text-xs font-semibold uppercase tracking-widest text-[#128C7E]">{kicker}</div>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {subtitle && <p className="mt-3 max-w-2xl text-zinc-700">{subtitle}</p>}
    </div>
  );
}

function BenefitsUsers() {
  const items = [
    {
      title: "Respostas imediatas sobre sua carteira",
      desc: "Saldos, posições, rentabilidade x benchmarks, proventos e custos — tudo em um só lugar.",
    },
    {
      title: "Rentabilidade e benchmarks",
      desc: "Acompanhe o desempenho da sua carteira e compare com CDI, Ibovespa e outros índices.",
    },
    {
      title: "WhatsApp 24/7",
      desc: "Atendimento direto no seu app favorito — consultas rápidas e histórico organizado.",
    },
    {
      title: "Privacidade & consentimento (LGPD)",
      desc: "Acesso somente com seu consentimento, logs e revogação a qualquer momento.",
    },
  ];

  return (
    <section id="beneficios-usuarios" className="border-t border-zinc-100 bg-white">
      <Container className="py-16">
        <SectionTitle
          kicker="Benefícios"
          title="Para investidores de todos os perfis"
          subtitle="Do conservador ao arrojado, o THEO ajuda você a tomar decisões melhores com dados, contexto e clareza."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-zinc-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-zinc-700">{it.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Stakeholders() {
  const cards = [
    {
      title: "Clientes Investidores",
      value: "Respostas imediatas sobre carteira: saldos, posições, rentabilidade x benchmark, proventos e custos.",
      reg: "Sem recomendações; transparência e consentimento (LGPD).",
    },
    {
      title: "Agentes Autônomos de Investimentos (AAI)",
      value: "Co‑piloto operacional para ganhar velocidade no atendimento e focar no relacionamento.",
      reg: "Compatível com Resolução CVM 178 (atuação multi‑corretora).",
    },
    {
      title: "Assessores de Investimento",
      value: "Automação de consultas e relatórios; o humano foca em estratégia e recomendações.",
      reg: "Recomendações são sempre do assessor humano.",
    },
    {
      title: "Escritórios de AAI",
      value: "Padronização de respostas, métricas por carteira e trilhas de auditoria.",
      reg: "Suporte à conformidade e governança.",
    },
    {
      title: "Corretoras",
      value: "Retenção e NPS, autoatendimento e redução de tickets.",
      reg: "Refina a transparência já exigida pela regulação.",
    },
    {
      title: "Fornecedores de Tecnologia (APIs)",
      value: "Integrações seguras para ampliar o ecossistema.",
      reg: "OAuth2/TLS, boas práticas de segurança.",
    },
  ];

  return (
    <section id="stakeholders" className="border-t border-zinc-100 bg-white">
      <Container className="py-16">
        <SectionTitle
          kicker="Para quem é"
          title="Quem usa o THEO"
          subtitle="De investidores a escritórios de AAI e corretoras: veja como cada público aproveita o THEO (sem recomendações automáticas)."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className="rounded-2xl border border-zinc-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-zinc-700">{c.value}</p>
              <p className="mt-3 text-xs text-zinc-500"><strong>Regulação:</strong> {c.reg}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function MVP() {
  const features = [
    "Acesso a dados da carteira (saldos, ativos, posições)",
    "Rentabilidade com comparativos a benchmarks (CDI, Ibovespa etc.)",
    "Histórico de transações (compra e venda)",
    "Saldo disponível para novas aplicações",
    "Informações sobre proventos e rendimentos",
    "Relatórios de custos e taxas da corretora",
  ];
  return (
    <section id="mvp" className="border-t border-zinc-100 bg-[#ECE5DD]">
      <Container className="py-16">
        <SectionTitle
          kicker="MVP"
          title="O que o THEO faz hoje"
          subtitle="Chatbot integrado via APIs de corretoras e bancos para fornecer dados estruturados com segurança e conformidade."
        />
        <ul className="grid list-disc grid-cols-1 gap-2 pl-6 sm:grid-cols-2">
          {features.map((f) => (
            <li key={f} className="text-sm text-zinc-700">{f}</li>
          ))}
        </ul>
        <p className="mt-6 text-xs text-zinc-500">*Foco regulatório: CVM e LGPD, com consentimento explícito do cliente e trilhas de auditoria.</p>
      </Container>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      title: "Conexão e consentimentos (LGPD)",
      desc: "Autenticação via corretora/banco, OAuth2/TLS e coleta de consentimentos e escopos de acesso.",
    },
    {
      title: "Coleta & organização de dados",
      desc: "Posições, rentabilidade, proventos, custos e histórico de ordens via APIs.",
    },
    {
      title: "Respostas e relatórios no WhatsApp",
      desc: "Consultas naturais, comparativos com benchmarks e relatórios em PDF/CSV.",
    },
    {
      title: "Escalada ao assessor humano",
      desc: "Quando houver necessidade de recomendação, o THEO encaminha para seu assessor credenciado.",
    },
  ];

  return (
    <section className="border-t border-zinc-100 bg-white">
      <Container className="py-16">
        <SectionTitle kicker="Como funciona" title="Do onboarding ao rebalanceamento, tudo em um lugar" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl border border-zinc-200 p-6 shadow-sm">
              <div className="absolute -top-3 left-4 rounded-full border border-zinc-200 bg-white px-2 py-1 text-xs font-semibold">{i + 1}</div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-zinc-700">{s.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function SecurityCompliance() {
  const points = [
    {
      title: "Sem recomendações automáticas",
      desc: "O THEO não recomenda produtos. Decisões e sugestões são responsabilidade de assessores humanos credenciados (CVM/ANBIMA).",
    },
    {
      title: "Trilhas de auditoria",
      desc: "Toda interação e recomendação é registrada e versionada para fins regulatórios (CVM/ANBIMA).",
    },
    {
      title: "LGPD & Privacidade",
      desc: "Criptografia em repouso e em trânsito, segregação de dados, retenção controlada e consentimento granular.",
    },
    {
      title: "Governança de modelos",
      desc: "Controles humanos, revisão de prompts e filtros de compliance para mitigar riscos de alucinação e viés.",
    },
  ];

  return (
    <section id="seguranca" className="border-t border-zinc-100 bg-[#ECE5DD]">
      <Container className="py-16">
        <SectionTitle
          kicker="Segurança & Compliance"
          title="Construído para os padrões do mercado financeiro"
          subtitle="O THEO nasceu para operar em ambientes regulados, com observância rigorosa às normas da CVM e aos códigos ANBIMA."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <div key={p.title} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-zinc-700">{p.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-zinc-500">
          *O THEO não executa ordens nem realiza custódia. As aplicações ocorrem nos sistemas do banco/corretora do cliente.
        </p>
      </Container>
    </section>
  );
}

function Integrations() {
  const items = [
    {
      title: "APIs REST & Webhooks",
      desc: "Integração bidirecional com core bancário, home broker, custodiantes, CRM e data warehouses.",
    },
    {
      title: "Open Finance",
      desc: "Consentimentos para leitura de dados financeiros e enriquecimento de perfil (quando habilitado).",
    },
    {
      title: "Multi‑corretora (CVM 178)",
      desc: "Camada unificada para assessores que atuam com múltiplas casas, sem ferir exclusividade do trabalho humano.",
    },
    {
      title: "White label",
      desc: "Personalização de cores, logotipo e textos para o seu branding.",
    },
  ];

  return (
    <section id="integracoes" className="border-t border-zinc-100 bg-white">
      <Container className="py-16">
        <SectionTitle
          kicker="Integrações"
          title="Plug-and-play no seu ecossistema"
          subtitle="Do WhatsApp ao core bancário: o THEO conecta ponta a ponta o relacionamento com a execução."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-zinc-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-zinc-700">{it.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-dashed border-zinc-300 p-6 text-sm text-zinc-700">
          <p className="font-medium">SDK & Documentação de APIs</p>
          <p className="mt-2">Disponibilizamos coleções Postman, exemplos em Node/Python e guias de integração para parceiros.</p>
        </div>
      </Container>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "O THEO substitui meu assessor humano?",
      a: "Não. O THEO amplia a capacidade do seu time, cuidando do atendimento 24/7 e preparando recomendações alinhadas ao perfil do cliente para validação quando necessário.",
    },
    {
      q: "Como funciona o compliance?",
      a: "Suitability obrigatório antes de recomendações, registro de interações, justificativas de alocação e guarda de evidências conforme melhores práticas da indústria.",
    },
    {
      q: "É possível usar com a minha marca?",
      a: "Sim. O THEO opera em modelo white label, com customização de visual, textos e domínios.",
    },
    {
      q: "Como começo agora?",
      a: "Clique em ‘Experimentar’ para iniciar o fluxo no WhatsApp. Para parceria, fale com nosso time via WhatsApp e solicite um sandbox de integração.",
    },
  ];

  return (
    <section id="faq" className="border-t border-zinc-100 bg-[#ECE5DD]">
      <Container className="py-16">
        <SectionTitle kicker="FAQ" title="Perguntas frequentes" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {faqs.map((f) => (
            <details key={f.q} className="rounded-xl border border-zinc-200 bg-white p-5">
              <summary className="cursor-pointer text-sm font-semibold text-zinc-900">{f.q}</summary>
              <p className="mt-2 text-sm text-zinc-700">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-transparent bg-[#075E54] text-white">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <THEOLogo size={32} invert />
          <div>
            <div className="text-sm font-semibold">THEO</div>
            <div className="text-xs text-white/80">© {new Date().getFullYear()} THEO Tecnologia Ltda.</div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
          <a href="#" className="hover:text-white">Termos de Uso</a>
          <a href="#" className="hover:text-white">Política de Privacidade</a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="rounded-full border-white/60 px-4 py-2 font-medium hover:bg-white/10">Falar no WhatsApp</a>
        </div>
      </Container>
    </footer>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-100 bg-gradient-to-b from-[#ECE5DD] to-white">
      <Container className="grid grid-cols-1 gap-10 py-16 md:grid-cols-2 md:py-24 lg:py-28">
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Seu copiloto de investimentos
            <span className="text-[#128C7E]"> powered by IA</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-zinc-700">
            O THEO conecta-se às suas corretoras e bancos para trazer <strong>dados estruturados da sua carteira</strong> — saldos, posições, rentabilidade vs. benchmarks, proventos e custos — de forma segura e sem conflitos.<br/>
            <span className="text-[#128C7E]">Sem recomendações automáticas:</span> quando necessário, o THEO encaminha você ao seu assessor humano credenciado.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
            >
              Falar com o THEO no WhatsApp
            </a>
            <a href="#stakeholders" className="rounded-full border border-[#128C7E] px-6 py-3 text-sm font-medium text-[#075E54] hover:bg-white">
              Solução para Parceiros
            </a>
          </div>
          <div className="mt-6 text-xs text-zinc-500">
            *Conteúdo informativo. O THEO <strong>não realiza recomendações</strong>; quaisquer sugestões de investimento são responsabilidade de um <strong>assessor humano credenciado</strong>. Acesso a dados somente com consentimento (LGPD).
          </div>
        </div>
        <div className="relative">
          <div className="mx-auto w-full max-w-md rounded-3xl border border-zinc-200 bg-white p-4 shadow-sm sm:max-w-lg">
            <div className="rounded-2xl border border-zinc-200 bg-white p-4">
              {/* Simulação de conversa (sem recomendações) */}
              <ChatBubble who="Cliente" text="THEO, quanto rendeu minha carteira nos últimos 12 meses versus CDI e Ibovespa?" />
              <ChatBubble who="THEO" text="Sua carteira rendeu X% no período; CDI Y%, Ibovespa Z%. Quer ver por classe de ativos ou por produto?" ai />
              <ChatBubble who="Cliente" text="Mostre meus proventos dos últimos 3 meses e o saldo disponível para novas aplicações." />
              <ChatBubble who="THEO" text="Proventos no período: R$ …; saldo disponível: R$ …. Posso encaminhar seu pedido ao seu assessor humano para uma orientação alinhada ao seu perfil?" ai />
            </div>
          </div>
          <div className="pointer-events-none absolute -right-10 -top-10 hidden h-48 w-48 rounded-full bg-zinc-200/60 blur-3xl md:block" />
          <div className="pointer-events-none absolute -bottom-12 -left-10 hidden h-48 w-48 rounded-full bg-zinc-200/60 blur-3xl md:block" />
        </div>
      </Container>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <SiteHeader />
      <main>
        <Hero />
        <CredibilityBar />
        <BenefitsUsers />
        <Stakeholders />
        <MVP />
        <HowItWorks />
        <SecurityCompliance />
        <Integrations />
        <FAQ />
      </main>
      <SiteFooter />
    </div>
  );
}
