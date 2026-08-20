import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  BadgeCheck,
  Bot,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  Gift,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  TrendingUp,
} from "lucide-react";
const logoUrl = "/logo-ms.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Proposta Comercial | Dra. Suellen Gomes - MS Odontologia" },
      {
        name: "description",
        content:
          "Aceleracao Odontologica & Atendimento Inteligente 24/7: trafego pago, Google Meu Negocio e secretaria virtual de IA no WhatsApp para Cabo Frio e Regiao dos Lagos.",
      },
      { property: "og:title", content: "Proposta Comercial | Dra. Suellen Gomes" },
      {
        property: "og:description",
        content: "Marketing digital e IA 24/7 no WhatsApp para consultorios odontologicos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATSAPP_NUMBER = "5522981107871";

type PlanId = "vip" | "aceleracao" | "essencial";

const plans: {
  id: PlanId;
  name: string;
  tag: string;
  price: string;
  setup: string;
  setupNote?: string;
  features: string[];
  featured?: boolean;
}[] = [
  {
    id: "vip",
    name: "VIP FULL SYSTEM",
    tag: "Ancoragem Máxima / Gestão Total",
    price: "R$ 1.800",
    setup: "Taxa de Setup IA: de R$ 1.500 por R$ 0",
    features: [
      "Gestão Avançada Google & Meta Ads",
      "Otimização Completa do Google Meu Negócio",
      "IA Avançada no WhatsApp",
      "Consultoria Quinzenal de Vendas",
      "Edição Mensal de Vídeos para Anúncios",
      "Relatórios Semanais",
    ],
  },
  {
    id: "aceleracao",
    name: "ACELERAÇÃO + IA",
    tag: "Mais escolhido",
    price: "R$ 1.200",
    setup: "Taxa de Setup IA: de R$ 1.000 por R$ 0",
    setupNote: "Bônus para fechamento esta semana",
    features: [
      "Gestão Focada Google & Meta Ads",
      "Otimização Padrão do Google Meu Negócio",
      "Secretária Virtual de IA no WhatsApp 24/7 (qualificação & triagem)",
      "Treinamento Comercial Inicial",
      "Relatórios Mensais",
    ],
    featured: true,
  },
  {
    id: "essencial",
    name: "ESSENCIAL",
    tag: "Apenas Tráfego",
    price: "R$ 800",
    setup: "Sem implantação de IA",
    features: [
      "Gestão de Anúncios",
      "Sem IA no WhatsApp (atendimento 100% manual pela recepção)",
      "Relatórios Mensais",
    ],
  },
];

const chat = [
  { from: "user" as const, time: "22:47", text: "Oi, boa noite! Vocês fazem clareamento?" },
  {
    from: "ai" as const,
    time: "22:47",
    text: "Boa noite! 😊 Sou a assistente virtual da Dra. Suellen Gomes. Sim, fazemos clareamento estético. Você já fez avaliação com a gente antes?",
  },
  { from: "user" as const, time: "22:48", text: "Nunca fui aí. Queria saber preço e se atende sábado." },
  {
    from: "ai" as const,
    time: "22:48",
    text: "O valor é definido na avaliação, porque depende da sensibilidade e do tom desejado. Temos horário de sábado! Prefere 09h30 ou 11h00?",
  },
  { from: "user" as const, time: "22:49", text: "09h30 fica melhor." },
  {
    from: "ai" as const,
    time: "22:49",
    text: "Perfeito! ✅ Pré-agendei sábado às 09h30 em Cabo Frio. Vou passar seus dados para a recepção confirmar amanhã cedo. Até lá!",
  },
];

function Index() {
  const [selected, setSelected] = useState<PlanId>("aceleracao");
  const plan = plans.find((p) => p.id === selected)!;
  const message = encodeURIComponent(
    `Olá! Sou a Dra. Suellen Gomes. Analisei a proposta e quero aprovar o plano ${plan.name} (${plan.price}/mês). Podemos seguir com a implantação?`,
  );
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <div className="min-h-screen bg-background pb-28 text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:flex sm:justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <img
              src={logoUrl}
              alt="Logo MS Odontologia - Dra. Suellen Gomes"
              className="h-11 w-11 shrink-0 rounded-xl object-cover shadow-soft"
            />
            <div className="min-w-0">
              <p className="truncate font-display text-sm font-bold sm:text-base">Dra. Suellen Gomes</p>
              <p className="truncate text-xs text-muted-foreground">MS Odontologia · Cabo Frio</p>
            </div>
          </div>
          <a
            href={waLink}
            className="hidden items-center gap-2 rounded-full gradient-success px-5 py-2.5 text-sm font-semibold text-success-foreground shadow-soft transition hover:opacity-90 sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden px-4 py-16 text-navy-foreground sm:py-24">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-success/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/25 bg-navy-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" /> Oportunidade de Exclusividade Local
          </span>
          <h1 className="mt-6 text-3xl font-extrabold leading-tight sm:text-5xl">
            Proposta Comercial: Aceleração Odontológica & Atendimento Inteligente 24/7
          </h1>
          <p className="mt-5 text-base text-navy-foreground/80 sm:text-lg">
            Preparado para: Dra. Suellen Gomes | Cabo Frio e Região dos Lagos
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="#planos"
              className="rounded-full bg-navy-foreground px-6 py-3 text-sm font-semibold text-navy transition hover:opacity-90"
            >
              Ver os 3 planos
            </a>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-3">
            {[
              { icon: Bot, label: "IA respondendo em segundos, 24h por dia" },
              { icon: TrendingUp, label: "Tráfego pago focado em alto ticket" },
              { icon: CalendarCheck, label: "Agenda cheia sem perder lead à noite" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-navy-foreground/15 bg-navy-foreground/10 p-4 text-left text-sm"
              >
                <Icon className="mb-2 h-5 w-5" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="px-4 py-8 sm:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Escolha o nível de aceleração</h2>
            <p className="mt-3 text-muted-foreground">
              Selecione um plano abaixo — o botão de aprovação se ajusta automaticamente.
            </p>
          </div>

          <div className="mt-10 grid items-start gap-6 lg:grid-cols-3">
            {plans.map((p) => {
              const active = selected === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setSelected(p.id)}
                  aria-pressed={active}
                  className={`glass-card relative flex h-full w-full flex-col rounded-3xl p-7 text-left transition duration-300 ${
                    p.featured ? "lg:-mt-4 lg:pb-10" : ""
                  } ${
                    active
                      ? "border-primary/70 shadow-elevated ring-2 ring-primary/40"
                      : "hover:-translate-y-1 hover:shadow-elevated"
                  }`}
                >
                  {p.featured && (
                    <span className="absolute -top-3 left-7 rounded-full gradient-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground shadow-soft">
                      Mais escolhido
                    </span>
                  )}
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{p.tag}</p>
                      <h3 className="mt-1 font-display text-xl font-extrabold">{p.name}</h3>
                    </div>
                    <span
                      className={`mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 ${
                        active ? "border-primary bg-primary text-primary-foreground" : "border-border"
                      }`}
                    >
                      {active && <CheckCircle2 className="h-4 w-4" />}
                    </span>
                  </div>

                  <p className="mt-5 font-display text-4xl font-extrabold text-primary-deep">
                    {p.price}
                    <span className="text-base font-semibold text-muted-foreground">/mês</span>
                  </p>

                  <ul className="mt-6 flex-1 space-y-3 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2.5">
                        <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`mt-6 rounded-2xl px-4 py-3 text-sm font-semibold ${
                      p.id === "essencial"
                        ? "bg-muted text-muted-foreground"
                        : "bg-success/10 text-success"
                    }`}
                  >
                    {p.setup}
                    {p.setupNote && <span className="block text-xs font-medium opacity-80">{p.setupNote}</span>}
                  </div>

                  <span
                    className={`mt-5 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition ${
                      p.featured
                        ? "gradient-primary text-primary-foreground shadow-soft"
                        : active
                          ? "bg-navy text-navy-foreground"
                          : "border border-border bg-card text-foreground"
                    }`}
                  >
                    {active ? "Plano selecionado" : "Selecionar este plano"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Secretária IA */}
      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
              <Bot className="h-3.5 w-3.5" /> Secretária Virtual de IA 24/7
            </span>
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">Como funciona na prática</h2>
            <p className="mt-4 text-muted-foreground">
              A maioria dos pacientes de alto ticket pesquisa e chama fora do horário comercial. A IA responde na hora,
              qualifica o procedimento e entrega a agenda pronta para a recepção.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { icon: MessageCircle, t: "Responde em segundos", d: "Nenhum lead fica sem resposta à noite, fim de semana ou feriado." },
                { icon: Stethoscope, t: "Qualifica o procedimento", d: "Identifica se é clareamento, implante, alinhador ou urgência." },
                { icon: CalendarCheck, t: "Pré-agenda o horário", d: "Oferece janelas disponíveis e confirma com a recepção." },
                { icon: ShieldCheck, t: "Tom humano e ético", d: "Sem promessa de preço fechado, sempre direcionando para avaliação." },
              ].map(({ icon: Icon, t, d }) => (
                <div key={t} className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl gradient-primary text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-semibold">{t}</p>
                    <p className="text-sm text-muted-foreground">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mockup WhatsApp */}
          <div className="mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-[2rem] border-8 border-navy bg-navy shadow-elevated">
              <div className="flex items-center gap-3 bg-success px-4 py-3 text-success-foreground">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-success-foreground/20">
                  <Bot className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">MS Odontologia</p>
                  <p className="text-[11px] opacity-90">online · atendimento automático</p>
                </div>
              </div>
              <div className="space-y-2.5 bg-muted px-3 py-4">
                {chat.map((m, i) => (
                  <div key={i} className={`flex ${m.from === "user" ? "justify-start" : "justify-end"}`}>
                    <div
                      className={`max-w-[82%] rounded-2xl px-3.5 py-2 text-sm shadow-soft ${
                        m.from === "user"
                          ? "rounded-tl-sm bg-card text-card-foreground"
                          : "rounded-tr-sm bg-success/15 text-foreground"
                      }`}
                    >
                      {m.text}
                      <span className="mt-1 block text-right text-[10px] text-muted-foreground">{m.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Exemplo real de atendimento às 22h47 — sem ninguém na recepção.
            </p>
          </div>
        </div>
      </section>

      {/* Bônus */}
      <section className="px-4 py-10">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl gradient-success p-8 text-success-foreground shadow-elevated sm:p-10">
            <Gift className="absolute -right-6 -top-6 h-40 w-40 opacity-15" />
            <div className="relative grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
              <div className="min-w-0">
                <span className="inline-flex items-center gap-2 rounded-full bg-success-foreground/20 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  <Clock3 className="h-3.5 w-3.5" /> Condição válida esta semana
                </span>
                <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                  Bônus de Fechamento: isenção de R$ 1.000,00
                </h2>
                <p className="mt-2 text-sm opacity-95">
                  Taxa de implantação da IA zerada para adesões do <strong>Plano Aceleração + IA</strong> confirmadas
                  esta semana.
                </p>
              </div>
              <div className="rounded-2xl bg-success-foreground/15 px-6 py-4 text-center">
                <p className="text-xs uppercase tracking-wide opacity-90">Implantação</p>
                <p className="font-display text-sm line-through opacity-75">R$ 1.000</p>
                <p className="font-display text-3xl font-extrabold">R$ 0</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="mt-8 bg-navy px-4 py-14 text-navy-foreground">
        <div className="mx-auto max-w-4xl text-center">
          <img
            src={logoUrl}
            alt="Logo MS Odontologia"
            className="mx-auto h-14 w-14 rounded-xl object-cover"
          />
          <h2 className="mt-6 text-2xl font-bold sm:text-3xl">Pronta para aprovar a proposta?</h2>
          <p className="mt-3 text-sm text-navy-foreground/75">
            Plano selecionado: <strong className="text-navy-foreground">{plan.name} — {plan.price}/mês</strong>
          </p>
          <a
            href={waLink}
            className="mt-7 inline-flex items-center gap-2 rounded-full gradient-success px-7 py-4 text-sm font-bold text-success-foreground shadow-elevated transition hover:opacity-90"
          >
            <MessageCircle className="h-5 w-5" /> Aprovar Proposta e Escolher Plano via WhatsApp
          </a>
          <p className="mx-auto mt-10 max-w-2xl rounded-2xl border border-navy-foreground/15 bg-navy-foreground/5 p-5 text-left text-xs leading-relaxed text-navy-foreground/70">
            <strong className="text-navy-foreground">Nota importante sobre a verba de mídia:</strong> os valores dos
            planos referem-se exclusivamente à gestão, tecnologia e implantação. A verba de tráfego pago é investida
            diretamente pelo consultório nas plataformas Google e Meta. Recomendação inicial: de R$ 30 a R$ 50 por dia
            (aprox. R$ 900 a R$ 1.500/mês), ajustável conforme a demanda e a sazonalidade da Região dos Lagos.
          </p>
          <p className="mt-8 text-xs text-navy-foreground/50">
            © {new Date().getFullYear()} MS Odontologia · Dra. Suellen Gomes · Cabo Frio / RJ
          </p>
        </div>
      </footer>

      {/* CTA fixo mobile */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border/60 bg-background/90 p-3 backdrop-blur-xl lg:hidden">
        <a
          href={waLink}
          className="flex w-full items-center justify-center gap-2 rounded-full gradient-success px-5 py-3.5 text-sm font-bold text-success-foreground shadow-soft"
        >
          <MessageCircle className="h-5 w-5" /> Aprovar {plan.name}
        </a>
      </div>
    </div>
  );
}
