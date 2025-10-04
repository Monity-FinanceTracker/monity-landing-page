import { Users, UserPlus, Receipt, DollarSign } from "lucide-react"

const collaborationFeatures = [
  {
    icon: Users,
    title: "Grupos Ilimitados",
    description:
      "Viagens, moradia compartilhada, eventos familiares—crie quantos grupos precisar e mantenha tudo organizado.",
  },
  {
    icon: UserPlus,
    title: "Adicione em Segundos",
    description: "Convide amigos por e-mail ou link. Eles recebem notificações automáticas e já entram sincronizados.",
  },
  {
    icon: Receipt,
    title: "Divisão Flexível",
    description: "Divida igualmente, por porcentagem ou valores customizados. Você decide como funciona melhor.",
  },
  {
    icon: DollarSign,
    title: "Acertos Automáticos",
    description: "Veja instantaneamente quem deve para quem. O Monity calcula e simplifica todos os acertos.",
  },
]

export function Collaboration() {
  return (
    <section className="py-20 sm:py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_50%,rgba(1,195,141,0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 relative group">
            {/* Enhanced glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/15 via-primary/10 to-transparent blur-3xl opacity-50 group-hover:opacity-70 transition-opacity" />
            <div className="relative rounded-2xl border border-primary/20 bg-card/50 p-2 shadow-2xl shadow-primary/5 backdrop-blur-sm hover:border-primary/30 transition-colors">
              <img
                src="/group-expense-splitting-interface-with-multiple-us.jpg"
                alt="Interface de divisão de despesas em grupo com múltiplos usuários"
                className="h-auto w-full rounded-lg"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            {/* Enhanced badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 px-4 py-2 text-sm font-medium text-emerald-600 dark:text-emerald-400 backdrop-blur-sm">
              <Users className="h-4 w-4" />
              <span>Colaboração</span>
            </div>

            <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Divida despesas{" "}
              <span className="text-primary">sem complicação</span>
            </h2>
            <p className="mb-10 text-balance text-lg leading-relaxed text-muted-foreground">
              Fim das planilhas confusas e conversas intermináveis. Gerencie despesas compartilhadas de forma
              simples, transparente e em tempo real.
            </p>

            <div className="space-y-5">
              {collaborationFeatures.map((feature) => (
                <div key={feature.title} className="group flex gap-4 p-4 rounded-xl hover:bg-muted/30 transition-colors">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-1.5 font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
