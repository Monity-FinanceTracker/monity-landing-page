import { BarChart3, PieChart, LineChart, Activity } from "lucide-react"

const analyticsCards = [
  {
    icon: BarChart3,
    title: "Onde vai seu dinheiro",
    description: "Visualize gastos por categoria com gráficos claros e intuitivos.",
  },
  {
    icon: PieChart,
    title: "Orçamentos que funcionam",
    description: "Acompanhe metas em tempo real com alertas inteligentes.",
  },
  {
    icon: LineChart,
    title: "Tendências reveladas",
    description: "Identifique padrões e preveja despesas antes que aconteçam.",
  },
  {
    icon: Activity,
    title: "Score de saúde",
    description: "Uma métrica simples que mostra como estão suas finanças.",
  },
]

export function Analytics() {
  return (
    <section className="py-20 sm:py-28 bg-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_30%,rgba(1,195,141,0.06),transparent_60%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Dados que <span className="text-primary">realmente importam</span>
          </h2>
          <p className="text-balance text-lg leading-relaxed text-muted-foreground">
            Não são apenas números—são insights acionáveis que ajudam você a tomar decisões financeiras mais
            inteligentes todos os dias.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {analyticsCards.map((card, index) => (
            <div
              key={card.title}
              className="group relative rounded-2xl border border-border/50 bg-card/50 p-6 hover:border-primary/40 transition-all hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Subtle gradient on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  <card.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">{card.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
