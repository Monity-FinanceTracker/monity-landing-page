import { Brain, Users, Zap, Target, Calendar, BarChart3, MessageSquare, TrendingUp } from "lucide-react"
import { Reveal } from "@/components/reveal"

const features = [
  {
    icon: Brain,
    title: "Economize 10 Horas Por Mês. Automaticamente.",
    description:
      "Chega de perder seu sábado classificando gastos. A IA categoriza tudo em <10 segundos. Quanto mais você usa, menos trabalho tem.",
    keyPoints: [
      "10+ horas de volta para sua vida todo mês",
      "90%+ de precisão na categorização"
    ]
  },
  {
    icon: Users,
    title: "Zero Conversas Constrangedoras Sobre Dinheiro.",
    description:
      "Jantar com amigos. Aluguel do Airbnb. Conta de luz. Todo mundo vê quem deve o quê em tempo real. Sem planilhas. Sem drama. Só transparência.",
    keyPoints: [
      "Grupos ilimitados e divisões automáticas",
      "Notificações em tempo real para todos"
    ]
  },
  {
    icon: Target,
    title: "Nunca Mais Estoure Seu Orçamento Sem Saber.",
    description:
      "Alertas inteligentes 3 dias antes do limite. Tome decisões conscientes antes que seja tarde demais.",
    keyPoints: [
      "Alertas preventivos inteligentes",
      "2 orçamentos grátis, ilimitados no Premium"
    ]
  },
  {
    icon: Calendar,
    title: "Saiba Seu Saldo de Amanhã. Hoje.",
    description:
      "Calendário com saldo projetado dia a dia. Agende contas recorrentes e nunca mais seja pego de surpresa. Sempre saiba o que vem por aí.",
    keyPoints: [
      "Visualize seu saldo futuro diariamente",
      "Recurso exclusivo Premium"
    ]
  },
  {
    icon: BarChart3,
    title: "A Verdade Sobre Seus Gastos (Pode Ser Chocante).",
    description:
      "IA analisa seus padrões reais e mostra onde você está sangrando dinheiro. Recomendações personalizadas para economizar mais, sem sofrimento.",
    keyPoints: [
      "Análise profunda com insights de IA",
      "Score de saúde financeira de 0 a 100"
    ]
  },
  {
    icon: MessageSquare,
    title: "Pergunte Qualquer Coisa. Respostas em 3 Segundos.",
    description:
      "Consultoria financeira personalizada 24/7 baseada nos SEUS dados reais. Não é conselho genérico. É sobre você.",
    keyPoints: [
      "Respostas instantâneas e personalizadas",
      "3 mensagens/dia grátis, ilimitadas no Premium"
    ]
  },
  {
    icon: TrendingUp,
    title: "Quanto Você Terá em 5 Anos? Descubra Agora.",
    description:
      "Simulador de juros compostos mostra exatamente quanto seu dinheiro pode crescer. Planeje seu futuro com números reais, não esperanças.",
    keyPoints: [
      "Simulações detalhadas de investimento",
      "2 simulações/mês grátis, ilimitadas no Premium"
    ]
  },
  {
    icon: Zap,
    title: "Mais Rápido Que Instagram. Mais Útil Que Qualquer Planilha.",
    description:
      "Interface deliciosamente rápida. Modo escuro. Design que não parece trabalho. Finalmente, um app financeiro que você VAI QUERER abrir.",
    keyPoints: [
      "Design mobile-first e responsivo",
      "Mais rápido que qualquer app que você usa"
    ]
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-background relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_50%,rgba(71,160,155,0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal as="h2" className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl" direction="up">
            Tudo que Você Precisa para{" "}
            <span className="text-primary">Dominar Seu Dinheiro</span>
          </Reveal>
          <Reveal as="p" className="text-balance text-lg leading-relaxed text-muted-foreground" direction="up" delayMs={75}>
            IA inteligente. Divisão de contas. Insights em tempo real. Tudo em um só lugar.
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {features.map((feature, index) => (
            <Reveal
              key={feature.title}
              className="group relative rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 via-card/60 to-card/80 p-8 transition-all hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 backdrop-blur-sm ring-1 ring-border/20 hover:ring-primary/30"
              delayMs={index * 80}
              direction="up"
            >
              {/* Luxurious gradient on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-[#55B8B2]/5 to-[#3A8A85]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 via-[#55B8B2]/15 to-[#3A8A85]/20 text-primary transition-all group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:via-[#55B8B2] group-hover:to-[#3A8A85] group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/40">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="mb-4 leading-relaxed text-muted-foreground text-sm">{feature.description}</p>
                
                {/* Key Points */}
                <ul className="space-y-2">
                  {feature.keyPoints.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
