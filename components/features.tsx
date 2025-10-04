import { Brain, Users, TrendingUp, Globe, Zap, Shield } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "IA que Aprende com Você",
    description:
      "Categorização automática inteligente com mais de 90% de precisão. Quanto mais você usa, mais preciso fica—sem esforço manual.",
  },
  {
    icon: Users,
    title: "Divisão Inteligente de Despesas",
    description:
      "Compartilhe despesas com amigos, família ou colegas. Rastreie quem deve o quê automaticamente e simplifique acertos.",
  },
  {
    icon: TrendingUp,
    title: "Insights que Fazem Sentido",
    description:
      "Veja padrões de gastos, preveja despesas futuras e receba recomendações personalizadas para melhorar sua saúde financeira.",
  },
  {
    icon: Globe,
    title: "Alcance Global",
    description: "Interface totalmente bilíngue (PT/EN) com mais de 500 traduções. Suas finanças, seu idioma.",
  },
  {
    icon: Zap,
    title: "Velocidade Impressionante",
    description:
      "Adicione transações em menos de 10 segundos. Categorização automática, sugestões inteligentes e entrada rápida.",
  },
  {
    icon: Shield,
    title: "Segurança de Banco",
    description:
      "Criptografia de ponta a ponta, autenticação JWT e controle de acesso baseado em funções. Seus dados, 100% protegidos.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-background relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_50%,rgba(1,195,141,0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Tudo que você precisa para{" "}
            <span className="text-primary">dominar suas finanças</span>
          </h2>
          <p className="text-balance text-lg leading-relaxed text-muted-foreground">
            Recursos pensados para tornar a gestão financeira não apenas fácil, mas realmente prazerosa.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl border border-border/50 bg-card/50 p-8 transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Subtle gradient on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="leading-relaxed text-muted-foreground text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
