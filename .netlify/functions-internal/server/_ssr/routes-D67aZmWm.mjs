import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as MessageCircle, c as CircleCheck, d as BadgeCheck, i as ShieldCheck, l as CalendarCheck, n as Stethoscope, o as Gift, r as Sparkles, s as Clock3, t as TrendingUp, u as Bot } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D67aZmWm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var logoUrl = "/logo-ms.png";
var WHATSAPP_NUMBER = "5522981107871";
var plans = [
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
			"Relatórios Semanais"
		]
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
			"Relatórios Mensais"
		],
		featured: true
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
			"Relatórios Mensais"
		]
	}
];
var chat = [
	{
		from: "user",
		time: "22:47",
		text: "Oi, boa noite! Vocês fazem clareamento?"
	},
	{
		from: "ai",
		time: "22:47",
		text: "Boa noite! 😊 Sou a assistente virtual da Dra. Suellen Gomes. Sim, fazemos clareamento estético. Você já fez avaliação com a gente antes?"
	},
	{
		from: "user",
		time: "22:48",
		text: "Nunca fui aí. Queria saber preço e se atende sábado."
	},
	{
		from: "ai",
		time: "22:48",
		text: "O valor é definido na avaliação, porque depende da sensibilidade e do tom desejado. Temos horário de sábado! Prefere 09h30 ou 11h00?"
	},
	{
		from: "user",
		time: "22:49",
		text: "09h30 fica melhor."
	},
	{
		from: "ai",
		time: "22:49",
		text: "Perfeito! ✅ Pré-agendei sábado às 09h30 em Cabo Frio. Vou passar seus dados para a recepção confirmar amanhã cedo. Até lá!"
	}
];
function Index() {
	const [selected, setSelected] = (0, import_react.useState)("aceleracao");
	const plan = plans.find((p) => p.id === selected);
	const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Sou a Dra. Suellen Gomes. Analisei a proposta e quero aprovar o plano ${plan.name} (${plan.price}/mês). Podemos seguir com a implantação?`)}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background pb-28 text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:flex sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-w-0 items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logoUrl,
							alt: "Logo MS Odontologia - Dra. Suellen Gomes",
							className: "h-11 w-11 shrink-0 rounded-xl object-cover shadow-soft"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate font-display text-sm font-bold sm:text-base",
								children: "Dra. Suellen Gomes"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-xs text-muted-foreground",
								children: "MS Odontologia · Cabo Frio"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: waLink,
						className: "hidden items-center gap-2 rounded-full gradient-success px-5 py-2.5 text-sm font-semibold text-success-foreground shadow-soft transition hover:opacity-90 sm:inline-flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), " Falar no WhatsApp"]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "gradient-hero relative overflow-hidden px-4 py-16 text-navy-foreground sm:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-success/20 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto max-w-4xl text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2 rounded-full border border-navy-foreground/25 bg-navy-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " Oportunidade de Exclusividade Local"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-6 text-3xl font-extrabold leading-tight sm:text-5xl",
								children: "Proposta Comercial: Aceleração Odontológica & Atendimento Inteligente 24/7"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-base text-navy-foreground/80 sm:text-lg",
								children: "Preparado para: Dra. Suellen Gomes | Cabo Frio e Região dos Lagos"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-9 flex flex-wrap justify-center gap-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#planos",
									className: "rounded-full bg-navy-foreground px-6 py-3 text-sm font-semibold text-navy transition hover:opacity-90",
									children: "Ver os 3 planos"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-12 grid gap-3 sm:grid-cols-3",
								children: [
									{
										icon: Bot,
										label: "IA respondendo em segundos, 24h por dia"
									},
									{
										icon: TrendingUp,
										label: "Tráfego pago focado em alto ticket"
									},
									{
										icon: CalendarCheck,
										label: "Agenda cheia sem perder lead à noite"
									}
								].map(({ icon: Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-navy-foreground/15 bg-navy-foreground/10 p-4 text-left text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "mb-2 h-5 w-5" }), label]
								}, label))
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "planos",
				className: "px-4 py-8 sm:py-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-bold sm:text-4xl",
							children: "Escolha o nível de aceleração"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground",
							children: "Selecione um plano abaixo — o botão de aprovação se ajusta automaticamente."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid items-start gap-6 lg:grid-cols-3",
						children: plans.map((p) => {
							const active = selected === p.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setSelected(p.id),
								"aria-pressed": active,
								className: `glass-card relative flex h-full w-full flex-col rounded-3xl p-7 text-left transition duration-300 ${p.featured ? "lg:-mt-4 lg:pb-10" : ""} ${active ? "border-primary/70 shadow-elevated ring-2 ring-primary/40" : "hover:-translate-y-1 hover:shadow-elevated"}`,
								children: [
									p.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute -top-3 left-7 rounded-full gradient-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground shadow-soft",
										children: "Mais escolhido"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
												children: p.tag
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-1 font-display text-xl font-extrabold",
												children: p.name
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 ${active ? "border-primary bg-primary text-primary-foreground" : "border-border"}`,
											children: active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" })
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-5 font-display text-4xl font-extrabold text-primary-deep",
										children: [p.price, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-base font-semibold text-muted-foreground",
											children: "/mês"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-6 flex-1 space-y-3 text-sm",
										children: p.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-2.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: f })]
										}, f))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `mt-6 rounded-2xl px-4 py-3 text-sm font-semibold ${p.id === "essencial" ? "bg-muted text-muted-foreground" : "bg-success/10 text-success"}`,
										children: [p.setup, p.setupNote && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-xs font-medium opacity-80",
											children: p.setupNote
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `mt-5 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition ${p.featured ? "gradient-primary text-primary-foreground shadow-soft" : active ? "bg-navy text-navy-foreground" : "border border-border bg-card text-foreground"}`,
										children: active ? "Plano selecionado" : "Selecionar este plano"
									})
								]
							}, p.id);
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-4 py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-3.5 w-3.5" }), " Secretária Virtual de IA 24/7"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 text-3xl font-bold sm:text-4xl",
							children: "Como funciona na prática"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground",
							children: "A maioria dos pacientes de alto ticket pesquisa e chama fora do horário comercial. A IA responde na hora, qualifica o procedimento e entrega a agenda pronta para a recepção."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 space-y-4",
							children: [
								{
									icon: MessageCircle,
									t: "Responde em segundos",
									d: "Nenhum lead fica sem resposta à noite, fim de semana ou feriado."
								},
								{
									icon: Stethoscope,
									t: "Qualifica o procedimento",
									d: "Identifica se é clareamento, implante, alinhador ou urgência."
								},
								{
									icon: CalendarCheck,
									t: "Pré-agenda o horário",
									d: "Oferece janelas disponíveis e confirma com a recepção."
								},
								{
									icon: ShieldCheck,
									t: "Tom humano e ético",
									d: "Sem promessa de preço fechado, sempre direcionando para avaliação."
								}
							].map(({ icon: Icon, t, d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl gradient-primary text-primary-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold",
										children: t
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: d
									})]
								})]
							}, t))
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto w-full max-w-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "overflow-hidden rounded-[2rem] border-8 border-navy bg-navy shadow-elevated",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 bg-success px-4 py-3 text-success-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-9 w-9 place-items-center rounded-full bg-success-foreground/20",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-sm font-semibold",
										children: "MS Odontologia"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] opacity-90",
										children: "online · atendimento automático"
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-2.5 bg-muted px-3 py-4",
								children: chat.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `flex ${m.from === "user" ? "justify-start" : "justify-end"}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `max-w-[82%] rounded-2xl px-3.5 py-2 text-sm shadow-soft ${m.from === "user" ? "rounded-tl-sm bg-card text-card-foreground" : "rounded-tr-sm bg-success/15 text-foreground"}`,
										children: [m.text, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block text-right text-[10px] text-muted-foreground",
											children: m.time
										})]
									})
								}, i))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-center text-xs text-muted-foreground",
							children: "Exemplo real de atendimento às 22h47 — sem ninguém na recepção."
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-4 py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-5xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden rounded-3xl gradient-success p-8 text-success-foreground shadow-elevated sm:p-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "absolute -right-6 -top-6 h-40 w-40 opacity-15" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-2 rounded-full bg-success-foreground/20 px-3 py-1 text-xs font-bold uppercase tracking-wider",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { className: "h-3.5 w-3.5" }), " Condição válida esta semana"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-4 text-2xl font-bold sm:text-3xl",
										children: "Bônus de Fechamento: isenção de R$ 1.000,00"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2 text-sm opacity-95",
										children: [
											"Taxa de implantação da IA zerada para adesões do ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Plano Aceleração + IA" }),
											" confirmadas esta semana."
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl bg-success-foreground/15 px-6 py-4 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs uppercase tracking-wide opacity-90",
										children: "Implantação"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-sm line-through opacity-75",
										children: "R$ 1.000"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-3xl font-extrabold",
										children: "R$ 0"
									})
								]
							})]
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "mt-8 bg-navy px-4 py-14 text-navy-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-4xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logoUrl,
							alt: "Logo MS Odontologia",
							className: "mx-auto h-14 w-14 rounded-xl object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-6 text-2xl font-bold sm:text-3xl",
							children: "Pronta para aprovar a proposta?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-sm text-navy-foreground/75",
							children: ["Plano selecionado: ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
								className: "text-navy-foreground",
								children: [
									plan.name,
									" — ",
									plan.price,
									"/mês"
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: waLink,
							className: "mt-7 inline-flex items-center gap-2 rounded-full gradient-success px-7 py-4 text-sm font-bold text-success-foreground shadow-elevated transition hover:opacity-90",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5" }), " Aprovar Proposta e Escolher Plano via WhatsApp"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mx-auto mt-10 max-w-2xl rounded-2xl border border-navy-foreground/15 bg-navy-foreground/5 p-5 text-left text-xs leading-relaxed text-navy-foreground/70",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-navy-foreground",
								children: "Nota importante sobre a verba de mídia:"
							}), " os valores dos planos referem-se exclusivamente à gestão, tecnologia e implantação. A verba de tráfego pago é investida diretamente pelo consultório nas plataformas Google e Meta. Recomendação inicial: de R$ 30 a R$ 50 por dia (aprox. R$ 900 a R$ 1.500/mês), ajustável conforme a demanda e a sazonalidade da Região dos Lagos."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-8 text-xs text-navy-foreground/50",
							children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" MS Odontologia · Dra. Suellen Gomes · Cabo Frio / RJ"
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-x-0 bottom-0 z-50 border-t border-border/60 bg-background/90 p-3 backdrop-blur-xl lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: waLink,
					className: "flex w-full items-center justify-center gap-2 rounded-full gradient-success px-5 py-3.5 text-sm font-bold text-success-foreground shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5" }),
						" Aprovar ",
						plan.name
					]
				})
			})
		]
	});
}
//#endregion
export { Index as component };
