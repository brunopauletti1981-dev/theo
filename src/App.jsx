import React from "react";
// If your environment supports Framer Motion, you can uncomment the next line for subtle animations
// import { motion } from "framer-motion";

/**
 * THEO — Homepage (single-file React component)
 *
 * Notes:
 * - Styling uses Tailwind CSS utility classes.
 * - Replace WHATSAPP_LINK with your official WhatsApp deep link or phone.
 * - The top-right CTA "Experimentar" mirrors Magie's behaviour (opens WhatsApp).
 * - Sections included: Hero, Benefícios (Usuário), Quem usa o THEO, Como Funciona,
 *   Segurança & Compliance, Integração (APIs), FAQ, Footer.
 * - Copy is in pt-BR and focused on investimentos.
 */

const WHATSAPP_LINK =
  "https://wa.me/5521936194950?text=Ol%C3%A1%20THEO%2C%20quero%20come%C3%A7ar%20meu%20atendimento";

function THEOLogo({ size = 32, invert = false }) {
  // Updated logo: line chart trending up (instead of compass)
  const bg = invert ? "#ECE5DD" : "#075E54"; // background tile
  const line = invert ? "#075E54" : "#25D366"; // growth line
  const axis = invert ? "#128C7E" : "#ECE5DD"; // baseline axis
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="THEO logo" data-logo="chart">
      <title>THEO — Consultor de Investimentos por IA</title>
      {/* Tile background */}
      <rect x="12" y="12" width="40" height="40" rx="12" fill={bg} />
      {/* Baseline axis */}
      <path d="M20 44 H44" stroke={axis} strokeWidth="2" strokeLinecap="round" />
      {/* Upward trend line */}
      <path d="M20 38 L28 34 L36 30 L44 24" stroke={line} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* End dot */}
      <circle cx="44" cy="24" r="2" fill={line} />
    </svg>
  );
}

export default function THEOHomePage() {
  // Executa testes rápidos após montar
  React.useEffect(() => {
    const results = runSelfTests();
    if (results.some((r) => !r.pass)) {
      console.warn("Alguns self-tests do THEO falharam. Veja a tabela acima.");
    }
  }, []);

  // Single root wrapper to avoid adjacent JSX issues
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <SiteHeader />
      <main>
        <Hero />
        <LogosStrip />
        <CredibilityBadges />
        <BenefitsUsers />
        <Stakeholders />
        <MVP />
        <HowItWorks />
        <SecurityCompliance />
        <Integrations />
        <FAQ />
      </main>
      <SiteFooter />
      <FloatingCTA />
    </div>
  );
}

function Container({ children, className = "" }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

function SiteHeader() {
  const [open, setOpen] = React.useState(false);

  // Fecha o menu ao pressionar ESC
  React.useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      {/* Animação CSS para o drawer (slide-in) */}
      <style data-theo-keyframes>{`
        @keyframes theo-slide-in {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>

      <header className="sticky top-0 z-40 w-full border-b border-transparent bg-[#075E54] text-white backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-3" aria-label="THEO Home">
            <THEOLogo size={32} invert />
            <span className="text-xl font-semibold tracking-tight">THEO</span>
          </a>
          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
            <a className="text-sm text-white/90 hover:text-white" href="#beneficios-usuarios">
              Benefícios
            </a>
            <a className="text-sm text-white/90 hover:text-white" href="#stakeholders">
              Quem usa o THEO
            </a>
            <a className="text-sm text-white/90 hover:text-white" href="#seguranca">
              Segurança
            </a>
            <a className="text-sm text-white/90 hover:text-white" href="#integracoes">
              Integrações
            </a>
            <a className="text-sm text-white/90 hover:text-white" href="#faq">
              FAQ
            </a>
          </nav>
          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
            >
              Experimentar
            </a>
          </div>
          {/* Mobile actions */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#25D366] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
            >
              WhatsApp
            </a>
            <button
              type="button"
              aria-label="Abrir menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="rounded-xl p-2 hover:bg-white/10"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </Container>
        {/* Mobile menu panel */}
        {open && (
          <div className="md:hidden fixed inset-0 z-50">
            <div className="absolute inset-0 bg-white/90" onClick={() => setOpen(false)} />
            <div className="absolute right-0 top-0 h-full w-80 max-w-[80%] border-l border-zinc-200 bg-white text-[#075E54] shadow-xl animate-[theo-slide-in_180ms_ease-out]">
              <div className="flex items-center justify-between border-b border-[#075E54]/10 p-4">
                <div className="flex items-center gap-2">
                  <THEOLogo size={28} />
                  <span className="font-semibold">THEO</span>
                </div>
                <button
                  type="button"
                  aria-label="Fechar menu"
                  onClick={() => setOpen(false)}
                  className="rounded-xl p-2 hover:bg-black/5"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col p-4">
                <a className="py-3 text-[#075E54] hover:text-[#128C7E]" href="#beneficios-usuarios" onClick={() => setOpen(false)}>
                  Benefícios
                </a>
                <a className="py-3 text-[#075E54] hover:text-[#128C7E]" href="#stakeholders" onClick={() => setOpen(false)}>
                  Quem usa o THEO
                </a>
                <a className="py-3 text-[#075E54] hover:text-[#128C7E]" href="#seguranca" onClick={() => setOpen(false)}>
                  Segurança
                </a>
                <a className="py-3 text-[#075E54] hover:text-[#128C7E]" href="#integracoes" onClick={() => setOpen(false)}>
                  Integrações
                </a>
                <a className="py-3 text-[#075E54] hover:text-[#128C7E]" href="#faq" onClick={() => setOpen(false)}>
                  FAQ
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
                  onClick={() => setOpen(false)}
                >
                  Falar no WhatsApp
                </a>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
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
            O THEO conecta-se às suas corretoras e bancos para trazer <strong>dados estruturados da sua carteira</strong> — saldos, posições, rentabilidade vs. benchmarks, proventos e custos — de forma segura e sem conflitos.
            <br />
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

function ChatBubble({ who, text, ai = false }) {
  return (
    <div className={`mb-3 flex ${ai ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[90%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${ai ? "bg-[#075E54] text-white" : "bg-[#DCF8C6] text-[#075E54]"}`}
      >
        <div className="mb-1 text-[11px] uppercase tracking-wide opacity-70">{who}</div>
        <div>{text}</div>
      </div>
    </div>
  );
}

function LogosStrip() {
  const items = ["Banco Atlas", "Nexa Invest", "Aurora Corretora", "PrimeX", "Vértice Capital", "Bluestone"];
  const looped = [...items, ...items]; // duplica para loop contínuo
  return (
    <section id="logos" className="border-t border-b border-zinc-100 bg-white">
      <Container className="py-6 sm:py-8">
        <div className="flex items-center justify-center pb-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Empresas que usam o THEO</span>
        </div>
        <div className="relative overflow-hidden">
          {/* Keyframes locais da faixa animada */}
          <style data-theo-marquee>{`
            @keyframes theo-marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
          {/* Gradientes laterais para leitura */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white to-transparent" aria-hidden="true" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white to-transparent" aria-hidden="true" />
          {/* Trilho animado em baixa velocidade (anti-horário = para a esquerda) */}
          <div className="theo-marquee-track flex w-[200%] items-center gap-10 animate-[theo-marquee_45s_linear_infinite]">
            {looped.map((name, idx) => (
              <div key={name + idx} className="flex-shrink-0">
                <div className="h-8 w-28 rounded bg-zinc-300/70 opacity-90 transition hover:opacity-100" aria-label={`Logo ${name}`} title={name} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function CredibilityBadges() {
  const badges = [
    { label: "LGPD Ready", href: "#seguranca", icon: "shield" },
    { label: "CVM Rules", href: "#seguranca", icon: "scale" },
    { label: "ANBIMA", href: "#seguranca", icon: "building" },
    { label: "Open Finance", href: "#integracoes", icon: "network" },
    { label: "White Label", href: "#integracoes", icon: "sparkles" },
    { label: "APIs / Webhooks", href: "#integracoes", icon: "code" },
  ];
  return (
    <section id="credenciais" className="border-t border-b border-zinc-100 bg-white">
      <Container className="py-10">
        <div className="mb-8 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#128C7E]">Qualificações</div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">Credenciais & diferenciais</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {badges.map((b) => (
            <a key={b.label} href={b.href} className="group flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-2 shadow-sm transition hover:shadow-md" aria-label={b.label}>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ECE5DD] text-[#075E54]">
                <BadgeIcon type={b.icon} />
              </span>
              <span className="text-sm font-medium text-[#075E54]">{b.label}</span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

function BadgeIcon({ type }) {
  const common = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };
  switch (type) {
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "scale":
      return (
        <svg {...common}>
          <path d="M6 7h12" />
          <path d="M12 7v10" />
          <path d="M7 7l-3 6h6l-3-6z" />
          <path d="M17 7l-3 6h6l-3-6z" />
        </svg>
      );
    case "building":
      return (
        <svg {...common}>
          <rect x="5" y="8" width="14" height="10" rx="1" />
          <path d="M3 18h18" />
          <path d="M8 10v6M12 10v6M16 10v6" />
          <path d="M12 6l4 2H8l4-2z" />
        </svg>
      );
    case "network":
      return (
        <svg {...common}>
          <circle cx="6" cy="12" r="2" />
          <circle cx="18" cy="12" r="2" />
          <circle cx="12" cy="6" r="2" />
          <circle cx="12" cy="18" r="2" />
          <path d="M8 12h8M12 8v8M7.4 10.6l3-3M16.6 10.6l-3-3M7.4 13.4l3 3M16.6 13.4l-3 3" />
        </svg>
      );
    case "sparkles":
      return (
        <svg {...common}>
          <path d="M12 5l1.5 3.5L17 10l-3.5 1.5L12 15l-1.5-3.5L7 10l3.5-1.5L12 5z" />
          <path d="M18 5l.8 1.8L20 7l-1.2.2L18 9l-.8-1.8L16 7l1.2-.2L18 5z" />
        </svg>
      );
    case "code":
      return (
        <svg {...common}>
          <path d="M9 8l-4 4 4 4" />
          <path d="M15 16l4-4-4-4" />
          <path d="M13 7l-2 10" />
        </svg>
      );
    default:
      return null;
  }
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
    { title: "Respostas imediatas sobre sua carteira", desc: "Saldos, posições, rentabilidade x benchmarks, proventos e custos — tudo em um só lugar." },
    { title: "Rentabilidade e benchmarks", desc: "Acompanhe o desempenho da sua carteira e compare com CDI, Ibovespa e outros índices." },
    { title: "WhatsApp 24/7", desc: "Atendimento direto no seu app favorito — consultas rápidas e histórico organizado." },
    { title: "Privacidade & consentimento (LGPD)", desc: "Acesso somente com seu consentimento, logs e revogação a qualquer momento." },
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
    { title: "Clientes Investidores", value: "Respostas imediatas sobre carteira: saldos, posições, rentabilidade x benchmark, proventos e custos.", reg: "Sem recomendações; transparência e consentimento (LGPD)." },
    { title: "Agentes Autônomos de Investimentos (AAI)", value: "Co‑piloto operacional para ganhar velocidade no atendimento e focar no relacionamento.", reg: "Compatível com Resolução CVM 178 (atuação multi‑corretora)." },
    { title: "Assessores de Investimento", value: "Automação de consultas e relatórios; o humano foca em estratégia e recomendações.", reg: "Recomendações são sempre do assessor humano." },
    { title: "Escritórios de AAI", value: "Padronização de respostas, métricas por carteira e trilhas de auditoria.", reg: "Suporte à conformidade e governança." },
    { title: "Corretoras", value: "Retenção e NPS, autoatendimento e redução de tickets.", reg: "Refina a transparência já exigida pela regulação." },
    { title: "Fornecedores de Tecnologia (APIs)", value: "Integrações seguras para ampliar o ecossistema.", reg: "OAuth2/TLS, boas práticas de segurança." },
  ];

  return (
    <section id="stakeholders" className="border-t border-zinc-100 bg-white">
      <Container className="py-16">
        <SectionTitle kicker="Para quem é" title="Quem usa o THEO" subtitle="De investidores a escritórios de AAI e corretoras: veja como cada público aproveita o THEO (sem recomendações automáticas)." />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className="rounded-2xl border border-zinc-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-zinc-700">{c.value}</p>
              <p className="mt-3 text-xs text-zinc-500">
                <strong>Regulação:</strong> {c.reg}
              </p>
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
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
              <svg
                data-check-icon
                className="mt-0.5 h-5 w-5 flex-none text-[#25D366]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span className="text-sm text-zinc-700">{f}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs text-zinc-500">
          *Foco regulatório: CVM e LGPD, com consentimento explícito do cliente e trilhas de auditoria.
        </p>
      </Container>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { title: "Conexão e consentimentos (LGPD)", desc: "Autenticação via corretora/banco, OAuth2/TLS e coleta de consentimentos e escopos de acesso." },
    { title: "Coleta & organização de dados", desc: "Posições, rentabilidade, proventos, custos e histórico de ordens via APIs." },
    { title: "Respostas e relatórios no WhatsApp", desc: "Consultas naturais, comparativos com benchmarks e relatórios em PDF/CSV." },
    { title: "Escalada ao assessor humano", desc: "Quando houver necessidade de recomendação, o THEO encaminha para seu assessor credenciado." },
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
    { title: "Sem recomendações automáticas", desc: "O THEO não recomenda produtos. Decisões e sugestões são responsabilidade de assessores humanos credenciados (CVM/ANBIMA)." },
    { title: "Trilhas de auditoria", desc: "Toda interação e recomendação é registrada e versionada para fins regulatórios (CVM/ANBIMA)." },
    { title: "LGPD & Privacidade", desc: "Criptografia em repouso e em trânsito, segregação de dados, retenção controlada e consentimento granular." },
    { title: "Governança de modelos", desc: "Controles humanos, revisão de prompts e filtros de compliance para mitigar riscos de alucinação e viés." },
  ];

  return (
    <section id="seguranca" className="border-t border-zinc-100 bg-[#ECE5DD]">
      <Container className="py-16">
        <SectionTitle kicker="Segurança & Compliance" title="Construído para os padrões do mercado financeiro" subtitle="O THEO nasceu para operar em ambientes regulados, com observância rigorosa às normas da CVM e aos códigos ANBIMA." />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <div key={p.title} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-zinc-700">{p.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-zinc-500">*O THEO não executa ordens nem realiza custódia. As aplicações ocorrem nos sistemas do banco/corretora do cliente.</p>
      </Container>
    </section>
  );
}

function Integrations() {
  const items = [
    { title: "APIs REST & Webhooks", desc: "Integração bidirecional com core bancário, home broker, custodiantes, CRM e data warehouses." },
    { title: "Open Finance", desc: "Consentimentos para leitura de dados financeiros e enriquecimento de perfil (quando habilitado)." },
    { title: "Multi‑corretora (CVM 178)", desc: "Camada unificada para assessores que atuam com múltiplas casas, sem ferir exclusividade do trabalho humano." },
    { title: "White label", desc: "Personalização de cores, logotipo e textos para o seu branding." },
  ];

  return (
    <section id="integracoes" className="border-t border-zinc-100 bg-white">
      <Container className="py-16">
        <SectionTitle kicker="Integrações" title="Plug-and-play no seu ecossistema" subtitle="Do WhatsApp ao core bancário: o THEO conecta ponta a ponta o relacionamento com a execução." />
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
    { q: "O THEO substitui meu assessor humano?", a: "Não. O THEO amplia a capacidade do seu time, cuidando do atendimento 24/7 e preparando recomendações alinhadas ao perfil do cliente para validação quando necessário." },
    { q: "Como funciona o compliance?", a: "Suitability obrigatório antes de recomendações, registro de interações, justificativas de alocação e guarda de evidências conforme melhores práticas da indústria." },
    { q: "É possível usar com a minha marca?", a: "Sim. O THEO opera em modelo white label, com customização de visual, textos e domínios." },
    { q: "Como começo agora?", a: "Clique em ‘Experimentar’ para iniciar o fluxo no WhatsApp. Para parceria, fale com nosso time via WhatsApp e solicite um sandbox de integração." },
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

function FloatingCTA() {
  return (
    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="fixed bottom-5 right-5 z-40 sm:hidden rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-lg">
      Falar no WhatsApp
    </a>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-transparent bg-[#075E54] text-white">
      <Container className="py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Coluna esquerda: marca */}
          <div>
            <div className="flex items-center gap-3">
              <THEOLogo size={32} invert />
              <div>
                <div className="text-sm font-semibold">THEO</div>
                <div className="text-xs text-white/80">© {new Date().getFullYear()} THEO Tecnologia Ltda.</div>
              </div>
            </div>
          </div>

          {/* Coluna direita: termos + contato */}
          <div className="flex items-start justify-start md:justify-end">
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
              <a href="#" className="hover:text-white">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-white">
                Política de Privacidade
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="rounded-full border-white/60 px-4 py-2 font-medium hover:bg-white/10">
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

/**
 * Self-tests (sem dependências externas)
 * - Verifica se o link do WhatsApp está correto
 * - Garante que componentes-chave existem
 * - Checa a presença das seções por id após montagem
 * - Extra: garante a existência de 6 badges de credenciais e do CTA flutuante
 * - Novo: garante que o bloco <style data-theo-keyframes> existe
 */
function runSelfTests() {
  const results = [];
  try {
    const okLink = typeof WHATSAPP_LINK === "string" && WHATSAPP_LINK.includes("wa.me/5521936194950");
    results.push({ name: "WhatsApp link correto", pass: okLink });
  } catch (e) {
    results.push({ name: "WhatsApp link correto", pass: false, error: e.message });
  }

  results.push({ name: "Hero é função", pass: typeof Hero === "function" });
  results.push({ name: "SiteHeader é função", pass: typeof SiteHeader === "function" });
  results.push({ name: "THEOLogo é função", pass: typeof THEOLogo === "function" });

  const ids = ["logos", "credenciais", "beneficios-usuarios", "stakeholders", "seguranca", "integracoes", "faq"];
  ids.forEach((id) => {
    const el = document.getElementById(id);
    results.push({ name: `Seção #${id} presente`, pass: !!el });
  });

  try {
    const badges = document.querySelectorAll("#credenciais a");
    results.push({ name: "Credenciais tem 6 badges", pass: badges.length === 6, value: badges.length });
  } catch (e) {
    results.push({ name: "Credenciais tem 6 badges", pass: false, error: e.message });
  }

  try {
    const cta = document.querySelector(`a[href*="wa.me/5521936194950"]`);
    results.push({ name: "CTA flutuante/links WhatsApp presentes", pass: !!cta });
  } catch (e) {
    results.push({ name: "CTA flutuante/links WhatsApp presentes", pass: false, error: e.message });
  }

  try {
    const styleEl = document.querySelector("style[data-theo-keyframes]");
    results.push({ name: "Keyframes style presente", pass: !!styleEl });
  } catch (e) {
    results.push({ name: "Keyframes style presente", pass: false, error: e.message });
  }

  // New tests for the logo rendering
  try {
    const logos = document.querySelectorAll('svg[aria-label="THEO logo"]');
    results.push({ name: "Logos renderizados", pass: logos.length >= 1, value: logos.length });
  } catch (e) {
    results.push({ name: "Logos renderizados", pass: false, error: e.message });
  }

  try {
    const chartLogo = document.querySelector('svg[aria-label="THEO logo"][data-logo="chart"]');
    results.push({ name: "Logo versão chart presente", pass: !!chartLogo });
  } catch (e) {
    results.push({ name: "Logo versão chart presente", pass: false, error: e.message });
  }

  // Tests for marquee
  try {
    const marquee = document.querySelector("style[data-theo-marquee]");
    results.push({ name: "Marquee keyframes presente", pass: !!marquee });
  } catch (e) {
    results.push({ name: "Marquee keyframes presente", pass: false, error: e.message });
  }

  try {
    const track = document.querySelector("#logos .theo-marquee-track");
    results.push({ name: "Faixa de logos animada presente", pass: !!track });
  } catch (e) {
    results.push({ name: "Faixa de logos animada presente", pass: false, error: e.message });
  }

  try {
    const qtt = document.querySelectorAll('#logos [aria-label^="Logo"]').length;
    results.push({ name: "Quantidade de logos >= 12", pass: qtt >= 12, value: qtt });
  } catch (e) {
    results.push({ name: "Quantidade de logos >= 12", pass: false, error: e.message });
  }

  // NEW: structure sanity checks to avoid adjacent JSX in main layout
  try {
    const heads = document.querySelectorAll('header');
    const mains = document.querySelectorAll('main');
    const foos = document.querySelectorAll('footer');
    results.push({ name: 'Há 1 <header>', pass: heads.length === 1, value: heads.length });
    results.push({ name: 'Há 1 <main>', pass: mains.length === 1, value: mains.length });
    results.push({ name: 'Há 1 <footer>', pass: foos.length === 1, value: foos.length });
  } catch (e) {
    results.push({ name: 'Estrutura de layout', pass: false, error: e.message });
  }

  // NEW: MVP checks should be visible with green check icons
  try {
    const checks = document.querySelectorAll('#mvp [data-check-icon]').length;
    results.push({ name: 'MVP usa ícones de verificado (>=6)', pass: checks >= 6, value: checks });
  } catch (e) {
    results.push({ name: 'MVP usa ícones de verificado', pass: false, error: e.message });
  }

  console.group("THEO self-tests");
  console.table(results);
  console.groupEnd();
  return results;
}
