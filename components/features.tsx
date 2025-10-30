import { Brain, Users, Zap, Target, Calendar, BarChart3 } from "lucide-react"
import { Reveal } from "@/components/reveal"

const features = [
  {
    icon: Brain,
    title: "IA que Aprende Seus Hábitos",
    description:
      "Pare de perder tempo categorizando manualmente. Nossa IA aprende com suas decisões e passa a sugerir categorias do seu jeito. Ganhe velocidade com sugestões inteligentes, detecção de duplicatas e identificação de assinaturas — automaticamente.",
    keyPoints: [
      "Auto-categorização com aprendizado contínuo",
      "Detecção de transações duplicadas", 
      "Identificação de possíveis assinaturas",
      "Entrada rápida (<10 segundos por transação)"
    ]
  },
  {
    icon: Users,
    title: "Divida Contas Como um Profissional",
    description:
      "Compartilhamento de despesas integrado para colegas de quarto, viagens e custos compartilhados. Crie grupos ilimitados, adicione despesas e deixe o Monity fazer os cálculos. Escolha divisões iguais, percentuais ou valores personalizados. Acompanhe quem deve o quê em tempo real com rastreamento automático de acertos.",
    keyPoints: [
      "Rastreamento de despesas em grupo em tempo real",
      "Distribuição justa de divisões (igual, %, personalizado)",
      "Notificações automáticas de dívidas",
      "Rastreamento de acertos e histórico"
    ]
  },
  {
    icon: Target,
    title: "Orçamentos que Realmente Funcionam",
    description:
      "Defina orçamentos por categoria com períodos semanais, mensais, trimestrais ou anuais. Receba alertas ao se aproximar dos limites. Acompanhe múltiplas metas de economia com indicadores visuais de progresso. Aloque fundos, retire quando necessário e veja sua saúde financeira melhorar mês a mês.",
    keyPoints: [
      "Orçamentos ilimitados (Premium) ou 2 orçamentos (Grátis)",
      "Comparação orçamento vs. real",
      "Rastreamento de múltiplas metas de economia",
      "Indicadores visuais de progresso"
    ]
  },
  {
    icon: Calendar,
    title: "Veja Seu Futuro Financeiro",
    description:
      "Interface estilo Google Calendar que visualiza seu saldo ao longo do mês inteiro. Agende transações únicas ou recorrentes com padrões diários, semanais, mensais ou anuais. Veja exatamente qual será seu saldo em qualquer dia. A execução automática de transações mantém você no caminho certo.",
    keyPoints: [
      "Projeção visual do saldo mensal",
      "Transações agendadas e recorrentes",
      "Visualização do saldo diário",
      "Execução automática de pagamentos agendados"
    ]
  },
  {
    icon: BarChart3,
    title: "Seu Analista Financeiro Pessoal",
    description:
      "Análise profunda de padrões de gastos alimentada por IA. Receba recomendações personalizadas, detecção de anomalias para gastos incomuns, pontuação de saúde financeira e projeções inteligentes. Veja seu panorama financeiro completo com análises abrangentes e rastreamento de patrimônio líquido.",
    keyPoints: [
      "Análise de padrões de gastos com IA",
      "Recomendações personalizadas",
      "Pontuação de saúde financeira",
      "Detecção de anomalias e previsões"
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
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_50%,rgba(1,195,141,0.05),transparent_50%)]" />

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
              className="group relative rounded-2xl border border-border/50 bg-card/50 p-8 transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 backdrop-blur-sm"
              delayMs={index * 80}
              direction="up"
            >
              {/* Subtle gradient on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
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
