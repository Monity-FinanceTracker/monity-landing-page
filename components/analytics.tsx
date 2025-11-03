import { BarChart3, PieChart, LineChart, Activity } from "lucide-react"
import { Reveal } from "@/components/reveal"

const analyticsCards = [
  {
    icon: BarChart3,
    title: "Descubra Para Onde Seu Dinheiro Realmente Vai",
    description: "Breakdown visual por categoria. Veja exatamente onde cada centavo vai.",
  },
  {
    icon: PieChart,
    title: "Alertas Antes de Estourar",
    description: "Saiba 3 dias antes de bater o limite. Alertas inteligentes te salvam de decisões ruins no impulso do momento.",
  },
  {
    icon: LineChart,
    title: "Preveja e Planeje",
    description: "Veja tendências de gastos e saiba exatamente o que vai acontecer financeiramente no próximo mês. Sem surpresas.",
  },
  {
    icon: Activity,
    title: "Score de Saúde Financeira",
    description: "De 0 a 100, saiba se suas finanças estão no caminho certo. Dicas personalizadas para melhorar seu score mês a mês.",
  },
]

export function Analytics() {
  return (
    <section className="py-20 sm:py-28 bg-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_30%,rgba(71,160,155,0.06),transparent_60%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Reveal as="h2" className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl" direction="up">
            Decisões Financeiras Inteligentes,{" "}
            <span className="text-primary">Baseadas em Dados Reais</span>
          </Reveal>
          <Reveal as="p" className="text-balance text-lg leading-relaxed text-muted-foreground" direction="up" delayMs={75}>
            Descubra seus padrões reais de gastos. Veja tendências e tome decisões com confiança total.
          </Reveal>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {analyticsCards.map((card, index) => (
            <Reveal
              key={card.title}
              className="group relative rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 via-card/60 to-card/80 p-6 hover:border-primary/60 transition-all hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 backdrop-blur-sm ring-1 ring-border/20 hover:ring-primary/30"
              delayMs={index * 90}
              direction="up"
            >
              {/* Luxurious gradient on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-[#55B8B2]/5 to-[#3A8A85]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 via-[#55B8B2]/15 to-[#3A8A85]/20 text-primary group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:via-[#55B8B2] group-hover:to-[#3A8A85] group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/40 transition-all">
                  <card.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">{card.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{card.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
