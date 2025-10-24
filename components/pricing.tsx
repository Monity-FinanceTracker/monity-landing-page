import { Button } from "@/components/ui/button"
import { Check, Sparkles } from "lucide-react"

const plans = [
  {
    name: "Grátis Para Sempre",
    price: "R$ 0",
    period: "/mês",
    description: "Tudo que você precisa para começar a controlar suas finanças. Sem cartão de crédito necessário.",
    features: [
      "Rastreamento ilimitado de transações",
      "Categorização alimentada por IA",
      "Divisão de despesas em grupo (grupos ilimitados)",
      "2 orçamentos",
      "2 metas de economia",
      "Gráficos de saldo mensal",
      "Breakdown de despesas por categoria",
      "Dashboard responsivo para mobile",
      "Interface modo escuro",
    ],
    cta: "Começar Grátis →",
    highlighted: false,
  },
  {
    name: "Premium",
    price: "R$ 9,90",
    period: "/mês",
    description: "Desbloqueie todo o poder da inteligência financeira alimentada por IA. Para mestres do orçamento.",
    features: [
      "Tudo do Grátis, mais:",
      "**Orçamentos ilimitados**",
      "**Metas de economia ilimitadas**",
      "**Calendário de Fluxo de Caixa** (agende transações, veja saldo futuro)",
      "**Insights avançados de IA** (padrões de gastos, detecção de anomalias)",
      "**Pontuação de saúde financeira** com recomendações personalizadas",
      "**Análises profundas e previsões**",
      "**Exportação de dados** (CSV, PDF)",
      "**Relatórios prontos para imposto**",
      "**Suporte premium**",
    ],
    cta: "Começar Teste Grátis de 7 Dias →",
    highlighted: true,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(1,195,141,0.05),transparent_70%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Comece Grátis, <span className="text-primary">Evolua Quando Quiser</span>
          </h2>
          <p className="text-balance text-lg leading-relaxed text-muted-foreground">
            Experimente todos os recursos principais grátis. Desbloqueie poder ilimitado com Premium.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 transition-all ${
                plan.highlighted
                  ? "border-primary/50 bg-card/50 shadow-2xl shadow-primary/10 scale-105 backdrop-blur-sm"
                  : "border-border/50 bg-card/50 hover:border-border backdrop-blur-sm"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-emerald-600 px-5 py-1.5 text-sm font-semibold text-white shadow-lg flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5" />
                  MAIS POPULAR
                </div>
              )}

              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                  {plan.period && <span className="text-lg text-muted-foreground">{plan.period}</span>}
                </div>
              </div>

              <Button
                asChild
                className={`mb-8 w-full transition-all ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-primary to-emerald-600 text-white hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
                    : "border-border/60 text-foreground hover:bg-muted/50 bg-background/50"
                }`}
                variant={plan.highlighted ? "default" : "outline"}
                size="lg"
              >
                <a href={plan.highlighted ? "https://firstmonity.vercel.app/signup?premium=true" : "https://firstmonity.vercel.app/signup"}>{plan.cta}</a>
              </Button>

              <ul className="space-y-3.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 shrink-0 text-primary mt-0.5" strokeWidth={2.5} />
                    <span className="text-sm leading-relaxed text-muted-foreground">
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
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Sem cartão de crédito necessário para o teste. Cancele a qualquer momento.
            <br />
            Todos os planos incluem segurança de nível empresarial, garantia de 99,9% de disponibilidade e atualizações automáticas.
          </p>
        </div>
      </div>
    </section>
  )
}
