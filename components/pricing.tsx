import { Button } from "@/components/ui/button"
import { Check, Sparkles } from "lucide-react"
import { Reveal } from "@/components/reveal"

const plans = [
  {
    name: "Gratuito",
    price: "R$ 0",
    period: "/mês",
    description: "Sim, TUDO isso de graça. Sem cartão. Sem pegadinhas. Sem tempo limite.",
    features: [
      "Rastreamento ilimitado de transações",
      "Categorização alimentada por IA",
      "Divisão de despesas em grupo (grupos ilimitados)",
      "2 orçamentos",
      "2 metas de economia",
      "3 mensagens de IA por dia",
      "2 simulações de investimento por mês",
      "Gráficos de saldo mensal",
      "Breakdown de despesas por categoria",
      "Dashboard responsivo para mobile",
      "Interface modo escuro",
    ],
    cta: "Começar Grátis - Sem Cartão →",
    highlighted: false,
  },
  {
    name: "Premium",
    price: "R$ 9,90",
    period: "/mês",
    description: "Menos que 2 cafés por mês. Economize 100x mais que isso. Desbloqueie poder ilimitado com IA.",
    features: [
      "Tudo do Grátis, mais:",
      "**Orçamentos ilimitados**",
      "**Metas de economia ilimitadas**",
      "**Assistente de IA ilimitado** (mensagens ilimitadas)",
      "**Simulações de investimento ilimitadas**",
      "**Calendário de Fluxo de Caixa**",
      "**Insights avançados de IA**",
      "**Pontuação de saúde financeira**",
      "**Análises profundas e previsões**",
      "**Exportação de dados**",
      "**Relatórios prontos para imposto**",
      "**Suporte premium**",
    ],
    cta: "Testar Premium com 7 Dias Grátis →",
    highlighted: true,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(71,160,155,0.05),transparent_70%)]" />

      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <Reveal as="h2" className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl" direction="up">
            Comece Grátis.{" "}
            <span className="bg-gradient-to-r from-primary via-[#55B8B2] to-[#3A8A85] bg-clip-text text-transparent">
              Upgrade Quando Quiser Mais.
            </span>
          </Reveal>
          <Reveal as="p" className="text-balance text-lg leading-relaxed text-muted-foreground" direction="up" delayMs={75}>
            Experimente todos os recursos principais grátis. Sem cartão. Sem tempo limite.
            <br />
            <span className="font-semibold text-foreground">Premium por menos de 2 cafés por mês</span> — economize 100x mais que isso.
          </Reveal>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 lg:gap-8 lg:grid-cols-2">
          {plans.map((plan, i) => (
            <Reveal
              key={plan.name}
              className={`relative rounded-2xl border p-5 sm:p-6 lg:p-8 transition-all ${
                plan.highlighted
                  ? "border-primary/60 bg-gradient-to-br from-card/90 via-card/70 to-card/90 shadow-2xl shadow-primary/20 lg:scale-105 backdrop-blur-sm ring-2 ring-primary/20"
                  : "border-border/50 bg-gradient-to-br from-card/80 via-card/60 to-card/80 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 backdrop-blur-sm ring-1 ring-border/20 hover:ring-primary/20"
              }`}
              delayMs={i * 100}
              direction="up"
            >
              {plan.highlighted && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary via-[#55B8B2] to-[#3A8A85] px-3 sm:px-5 py-1 sm:py-1.5 text-xs sm:text-sm font-semibold text-white shadow-xl shadow-primary/40 flex items-center gap-1 sm:gap-1.5 ring-2 ring-primary/30">
                  <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  MAIS POPULAR
                </div>
              )}

              <div className="mb-5 sm:mb-6">
                <h3 className="mb-2 text-xl sm:text-2xl font-bold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{plan.description}</p>
              </div>

              <div className="mb-6 sm:mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-bold text-foreground">{plan.price}</span>
                  {plan.period && <span className="text-base sm:text-lg text-muted-foreground">{plan.period}</span>}
                </div>
              </div>

              <Button
                asChild
                className={`mb-6 sm:mb-8 w-full transition-all text-sm sm:text-base h-auto py-3 sm:py-2.5 ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-primary via-[#55B8B2] to-[#3A8A85] text-white hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/0 before:via-white/10 before:to-primary/0 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000"
                    : "border-border/60 text-foreground hover:bg-muted/50 bg-background/50"
                }`}
                variant={plan.highlighted ? "default" : "outline"}
                size="lg"
              >
                <a href={plan.highlighted ? "https://app.monity-finance.com/signup?premium=true" : "https://app.monity-finance.com/signup"} className="whitespace-normal leading-snug">{plan.cta}</a>
              </Button>

              <ul className="space-y-2.5 sm:space-y-3.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 sm:gap-3">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-primary mt-0.5" strokeWidth={2.5} />
                    <span className="text-sm leading-relaxed text-muted-foreground break-words">
                      {feature.includes('**') ? (
                        <span dangerouslySetInnerHTML={{
                          __html: feature.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        }} />
                      ) : (
                        feature
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal as="div" className="mt-12 sm:mt-16 text-center px-3" direction="up" delayMs={150}>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            🔒 Cancele em 1 clique. Sem ligações. Sem emails chatos. Seus dados? Exporte ou delete quando quiser. Segurança de nível bancário.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
