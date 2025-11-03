import { CheckCircle2, TrendingUp, AlertCircle, Target, MessageSquare } from "lucide-react"
import { Reveal } from "@/components/reveal"

const aiFeatures = [
  {
    icon: CheckCircle2,
    title: "Categorização Verdadeiramente Inteligente",
    description: "Pare de marcar manualmente cada compra de café. Nossa IA treinada personalizada aprende seus padrões únicos de gastos e categoriza transações automaticamente com 90%+ de precisão. Quanto mais você usa, mais inteligente fica.",
    metric: "Economize 10+ horas por mês em entrada de dados"
  },
  {
    icon: MessageSquare,
    title: "Assistente IA que Responde 24/7",
    description: "Perguntou alguma coisa às 2h da manhã? Nosso assistente IA responde instantaneamente. 'Como posso economizar mais?', 'Vale a pena essa assinatura?', 'Quando vou atingir minha meta?'. Pergunte qualquer coisa sobre suas finanças e receba respostas inteligentes baseadas nos seus dados reais.",
    metric: "3 mensagens grátis/dia, ilimitado no Premium"
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
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_50%,rgba(71,160,155,0.08),transparent_70%)]" />

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
              Chega de Planilhas. Chega de Estresse.{" "}
              <span className="text-primary">Só Clareza.</span>
            </Reveal>
            <Reveal as="p" className="mb-10 text-balance text-lg leading-relaxed text-muted-foreground" direction="up" delayMs={100}>
              Descubra que você gasta R$ 400/mês com delivery sem nem perceber. Saiba exatamente onde cada centavo vai. 
              Tome decisões financeiras baseadas em dados reais, não em suposições. A IA aprende com você e antecipa suas necessidades.
            </Reveal>

            <div className="space-y-5">
              {aiFeatures.map((feature, i) => (
                <Reveal key={feature.title} className="group flex gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-muted/40 hover:via-primary/5 hover:to-muted/40 transition-all hover:shadow-lg hover:shadow-primary/10" delayMs={i * 80}>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 via-[#55B8B2]/15 to-[#3A8A85]/20 text-primary group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:via-[#55B8B2] group-hover:to-[#3A8A85] group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/30 transition-all">
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
                <div className="text-3xl font-bold bg-gradient-to-r from-primary via-[#55B8B2] to-[#3A8A85] bg-clip-text text-transparent drop-shadow-sm">90%+</div>
                <div className="text-xs text-muted-foreground mt-1">Precisão IA</div>
              </div>
              <div className="text-center border-x border-border/50">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary via-[#55B8B2] to-[#3A8A85] bg-clip-text text-transparent drop-shadow-sm">&lt;10s</div>
                <div className="text-xs text-muted-foreground mt-1">Por Transação</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary via-[#55B8B2] to-[#3A8A85] bg-clip-text text-transparent drop-shadow-sm">24/7</div>
                <div className="text-xs text-muted-foreground mt-1">Assistente IA</div>
              </div>
            </div>
          </div>

          <Reveal className="relative group lg:order-last order-first" direction="left" delayMs={150}>
            {/* Enhanced glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-[#55B8B2]/20 to-[#3A8A85]/15 blur-3xl opacity-60 group-hover:opacity-80 transition-opacity" />
            <div className="relative rounded-2xl border border-primary/30 bg-gradient-to-br from-card/90 via-card/70 to-card/90 p-2 shadow-2xl shadow-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all ring-1 ring-primary/20 hover:ring-primary/30">
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
