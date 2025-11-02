import { BarChart3, PieChart, LineChart, Activity } from "lucide-react"
import { Reveal } from "@/components/reveal"

const analyticsCards = [
  {
    icon: BarChart3,
    title: "Descubra Para Onde Seu Dinheiro Realmente Vai",
    description: "Veja que você gasta R$ 500/mês com delivery sem nem perceber. Breakdown visual por categoria com números que assustam—e motivam mudanças.",
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
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_30%,rgba(1,195,141,0.06),transparent_60%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Reveal as="h2" className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl" direction="up">
            Decisões Financeiras Inteligentes,{" "}
            <span className="text-primary">Baseadas em Dados Reais</span>
          </Reveal>
          <Reveal as="p" className="text-balance text-lg leading-relaxed text-muted-foreground" direction="up" delayMs={75}>
            Descubra que 40% do seu salário vai para delivery e 20% para assinaturas esquecidas. 
            Veja tendências, identifique oportunidades e tome decisões com confiança total. 
            Os dados nunca mentem—agora você tem acesso a eles.
          </Reveal>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {analyticsCards.map((card, index) => (
            <Reveal
              key={card.title}
              className="group relative rounded-2xl border border-border/50 bg-card/50 p-6 hover:border-primary/40 transition-all hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 backdrop-blur-sm"
              delayMs={index * 90}
              direction="up"
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
