import { Brain, Users, Zap, Target, Calendar, BarChart3, MessageSquare, TrendingUp } from "lucide-react"
import { Reveal } from "@/components/reveal"

const features = [
  {
    icon: Brain,
    title: "IA que Aprende Seus Hábitos",
    description:
      "Cansado de perder horas categorizando cada transação? Nosso assistente de IA aprende com suas decisões e sugere categorias automaticamente. Você economiza tempo e energia enquanto a IA fica mais inteligente a cada uso.",
    keyPoints: [
      "Auto-categorização que aprende com você",
      "Detecção automática de duplicatas", 
      "Identificação inteligente de assinaturas",
      "Economize horas - entrada em <10 segundos"
    ]
  },
  {
    icon: Users,
    title: "Divida Contas Sem Brigas",
    description:
      "Chega de planilhas confusas e conversas constrangedoras sobre dinheiro. Crie grupos, adicione despesas e deixe o Monity calcular quem deve o quê. Divisões justas automáticas, sem drama e sem estresse.",
    keyPoints: [
      "Grupos ilimitados de compartilhamento",
      "Divisões automáticas (igual, %, personalizado)",
      "Acompanhe dívidas em tempo real",
      "Zero conflitos sobre dinheiro"
    ]
  },
  {
    icon: Target,
    title: "Orçamentos que Realmente Funcionam",
    description:
      "Pare de estourar orçamentos e viver de surpresa em surpresa. Defina limites por categoria e receba alertas antes de gastar demais. Veja sua saúde financeira melhorar mês a mês com metas claras e progresso visível.",
    keyPoints: [
      "Alertas inteligentes antes de estourar",
      "2 orçamentos grátis, ilimitados no Premium",
      "Metas de economia com progresso visual",
      "Paz de espírito garantida"
    ]
  },
  {
    icon: Calendar,
    title: "Veja Seu Futuro Financeiro Agora",
    description:
      "Não fique mais se perguntando se vai sobrar dinheiro no final do mês. Veja seu saldo projetado dia a dia em uma interface estilo calendário. Agende transações recorrentes e nunca mais perca um pagamento.",
    keyPoints: [
      "Visualize seu saldo futuro em tempo real",
      "Automático - sem se preocupar",
      "Disponível exclusivamente no Premium",
      "Descubra quanto sobrou antes de gastar"
    ]
  },
  {
    icon: BarChart3,
    title: "Descubra Para Onde Seu Dinheiro Realmente Vai",
    description:
      "Pare de se surpreender no final do mês. Descubra que 40% do seu salário vai para delivery e 20% para assinaturas esquecidas. Veja seus padrões reais de gastos e receba dicas personalizadas para economizar mais.",
    keyPoints: [
      "Análise profunda com IA dos seus gastos",
      "Score de saúde financeira em tempo real",
      "Dicas personalizadas de economia",
      "Controle sobre cada centavo"
    ]
  },
  {
    icon: MessageSquare,
    title: "Seu Consultor Financeiro Pessoal com IA",
    description:
      "Dúvidas sobre suas finanças às 2h da manhã? Nosso assistente de IA está sempre disponível para responder perguntas, dar conselhos personalizados e ajudar você a tomar decisões melhores. É como ter um consultor financeiro no bolso, 24/7.",
    keyPoints: [
      "Respostas instantâneas sobre seus gastos",
      "Conselhos personalizados baseados no seu perfil",
      "3 mensagens/dia grátis, ilimitado no Premium",
      "Aprende com suas finanças para dar dicas melhores"
    ]
  },
  {
    icon: TrendingUp,
    title: "Veja Seu Dinheiro Crescer com o Tempo",
    description:
      "Quanto você terá daqui a 5 anos? E se investir R$ 500 por mês? Nossa calculadora de investimentos mostra exatamente quanto seu dinheiro pode crescer com juros compostos. Planeje seu futuro financeiro com clareza e confiança.",
    keyPoints: [
      "Simulações de investimento com juros compostos",
      "Compare diferentes cenários de investimento",
      "2 simulações/mês grátis, ilimitadas no Premium",
      "Visualize seu crescimento financeiro ao longo do tempo"
    ]
  },
  {
    icon: Zap,
    title: "Controle Financeiro que Você Vai Adorar",
    description:
      "Interface rápida, fluida e agradável de usar no dia a dia. Visual limpo em modo escuro, responsivo desde o primeiro toque, com animações suaves e gráficos claros para decisões melhores em menos tempo.",
    keyPoints: [
      "Design responsivo mobile-first",
      "Otimizado para modo escuro",
      "Carregamento rápido com stack tecnológico moderno",
      "Acessível e internacionalizado"
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
            De insights alimentados por IA ao rastreamento colaborativo de despesas,
            o Monity combina as melhores ferramentas de finanças pessoais em uma plataforma linda.
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
