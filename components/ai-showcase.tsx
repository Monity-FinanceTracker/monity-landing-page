import { CheckCircle2, TrendingUp, AlertCircle, Target } from "lucide-react"
import { Reveal } from "@/components/reveal"

const aiFeatures = [
  {
    icon: CheckCircle2,
    title: "Categorização Verdadeiramente Inteligente",
    description: "Pare de marcar manualmente cada compra de café. Nossa IA treinada personalizada aprende seus padrões únicos de gastos e categoriza transações automaticamente com 90%+ de precisão. Quanto mais você usa, mais inteligente fica.",
    metric: "Economize 10+ horas por mês em entrada de dados"
  },
  {
    icon: TrendingUp,
    title: "Divisão de Despesas em Grupo, Integrada",
    description: "O único rastreador financeiro com divisão de despesas em tempo real. Compartilhe custos com colegas de quarto, amigos ou família. Distribuição justa de divisões, rastreamento automático de dívidas e notificações instantâneas de acertos. Chega de mensagens constrangedoras de 'você me deve'.",
    metric: "Divida despesas em grupos ilimitados"
  },
  {
    icon: AlertCircle,
    title: "Deliciosamente Rápido de Usar",
    description: "Interface moderna em modo escuro feita para ser rápida e simples. Adicione transações em menos de 10 segundos, veja tudo sincronizado em tempo real e aproveite uma experiência suave pensada para o seu dia a dia.",
    metric: "Meta de entrada de transação <10 segundos"
  },
  {
    icon: Target,
    title: "Inteligência Alimentada por IA",
    description: "Análise profunda de padrões de gastos alimentada por IA. Receba recomendações personalizadas, detecção de anomalias para gastos incomuns, pontuação de saúde financeira e projeções inteligentes.",
    metric: "90%+ de precisão com aprendizado contínuo"
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
            <Reveal as="div" className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm" direction="up">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              Alimentado por IA
            </Reveal>

            <Reveal as="h2" className="mb-6 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl" direction="up" delayMs={50}>
              O Único Rastreador Financeiro que{" "}
              <span className="text-primary">Fica Mais Inteligente a Cada Transação</span>
            </Reveal>
            <Reveal as="p" className="mb-10 text-balance text-lg leading-relaxed text-muted-foreground" direction="up" delayMs={100}>
              Nossa IA não apenas categoriza transações—ela aprende seus hábitos, antecipa suas necessidades e
              oferece insights cada vez mais precisos ao longo do tempo.
            </Reveal>

            <div className="space-y-5">
              {aiFeatures.map((feature, i) => (
                <Reveal key={feature.title} className="group flex gap-4 p-4 rounded-xl hover:bg-muted/30 transition-colors" delayMs={i * 80}>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-1.5 font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground mb-2">{feature.description}</p>
                    <p className="text-xs font-medium text-primary">{feature.metric}</p>
                  </div>
                </Reveal>
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
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent">500+</div>
                <div className="text-xs text-muted-foreground mt-1">Traduções</div>
              </div>
            </div>
          </div>

          <Reveal className="relative group lg:order-last order-first" direction="left" delayMs={150}>
            {/* Enhanced glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-emerald-500/10 to-transparent blur-3xl opacity-50 group-hover:opacity-70 transition-opacity" />
            <div className="relative rounded-2xl border border-primary/20 bg-card/50 p-2 shadow-2xl shadow-primary/10 backdrop-blur-sm hover:border-primary/30 transition-colors">
              <img
                src="/Screenshot 2025-10-24 at 00.56.29.png"
                alt="Calendário de Fluxo de Caixa - Visualize seu saldo ao longo do tempo"
                className="h-auto w-full rounded-lg"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
