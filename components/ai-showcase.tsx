import { CheckCircle2, TrendingUp, AlertCircle, Target } from "lucide-react"

const aiFeatures = [
  {
    icon: CheckCircle2,
    title: "Categorização Automática",
    description: "Esqueça a entrada manual. Nossa IA categoriza transações automaticamente e aprende com cada interação.",
  },
  {
    icon: TrendingUp,
    title: "Previsões Inteligentes",
    description: "Antecipe gastos futuros e identifique tendências antes que impactem seu orçamento.",
  },
  {
    icon: AlertCircle,
    title: "Alertas Proativos",
    description: "Seja notificado instantaneamente sobre padrões incomuns, possíveis fraudes ou gastos acima da média.",
  },
  {
    icon: Target,
    title: "Score de Saúde Financeira",
    description: "Acompanhe sua saúde financeira com uma pontuação clara e recomendações personalizadas para melhorar.",
  },
]

export function AIShowcase() {
  return (
    <section id="ai" className="py-20 sm:py-28 bg-muted/20 relative overflow-hidden">
      {/* Enhanced background gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_50%,rgba(1,195,141,0.08),transparent_70%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <div>
            {/* Enhanced badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              Powered by IA
            </div>

            <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Inteligência que{" "}
              <span className="text-primary">evolui com você</span>
            </h2>
            <p className="mb-10 text-balance text-lg leading-relaxed text-muted-foreground">
              Nossa IA não apenas categoriza transações—ela aprende seus hábitos, antecipa suas necessidades e
              oferece insights cada vez mais precisos ao longo do tempo.
            </p>

            <div className="space-y-5">
              {aiFeatures.map((feature) => (
                <div key={feature.title} className="group flex gap-4 p-4 rounded-xl hover:bg-muted/30 transition-colors">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-1.5 font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced stats card */}
            <div className="mt-10 grid grid-cols-3 gap-4 rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent">90%+</div>
                <div className="text-xs text-muted-foreground mt-1">Precisão IA</div>
              </div>
              <div className="text-center border-x border-border/50">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent">&lt;10s</div>
                <div className="text-xs text-muted-foreground mt-1">Por Transação</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent">99.9%</div>
                <div className="text-xs text-muted-foreground mt-1">Disponibilidade</div>
              </div>
            </div>
          </div>

          <div className="relative group lg:order-last order-first">
            {/* Enhanced glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-emerald-500/10 to-transparent blur-3xl opacity-50 group-hover:opacity-70 transition-opacity" />
            <div className="relative rounded-2xl border border-primary/20 bg-card/50 p-2 shadow-2xl shadow-primary/10 backdrop-blur-sm hover:border-primary/30 transition-colors">
              <img
                src="/ai-analytics-dashboard-with-spending-insights-and-.jpg"
                alt="Dashboard de IA - Análises preditivas e insights financeiros"
                className="h-auto w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
