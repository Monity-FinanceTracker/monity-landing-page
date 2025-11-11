import { Users, UserPlus, Receipt, DollarSign, Sparkles } from "lucide-react"
import { Reveal } from "@/components/reveal"

const collaborationFeatures = [
  {
    icon: Users,
    title: "30 Segundos e Pronto. Email. Link. Done.",
    description:
      "Crie sua conta grátis e convide amigos por email ou link. Sem complicação, sem planilhas, sem precisar baixar nada.",
  },
  {
    icon: UserPlus,
    title: "Foto da Conta. IA Preenche Tudo. Você Só Aprova.",
    description: "Crie a despesa, escolha quem pagou e como dividir. A IA sugere a divisão automaticamente. Rápido e sem erro.",
  },
  {
    icon: Receipt,
    title: "Todo Mundo Recebe Notificação. Zero Cobranças Constrangedoras.",
    description: "Todos do grupo veem quem deve o quê, instantaneamente. Dashboard transparente, histórico completo e notificações automáticas.",
  },
  {
    icon: DollarSign,
    title: "Pagou? Um Toque. Sistema Atualiza. Todos Sabem.",
    description: "Marque como pago em um clique. O sistema recalcula tudo automaticamente e notifica o grupo. Sem esforço.",
  },
]

export function Collaboration() {
  return (
    <section className="py-20 sm:py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_50%,rgba(71,160,155,0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <Reveal className="order-2 lg:order-1 relative group" direction="right" delayMs={150}>
            {/* Enhanced glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/25 via-[#55B8B2]/15 to-[#3A8A85]/10 blur-3xl opacity-60 group-hover:opacity-80 transition-opacity" />
            <div className="relative rounded-2xl border border-primary/30 bg-gradient-to-br from-card/90 via-card/70 to-card/90 p-2 shadow-2xl shadow-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all ring-1 ring-primary/20 hover:ring-primary/30">
              <img
                src="/Screenshot 2025-10-19 at 23.31.34.png"
                alt="Interface de divisão de despesas em grupo com múltiplos usuários"
                className="h-auto w-full rounded-lg"
              />
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            {/* Enhanced badge */}
            <Reveal as="div" className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm" direction="up">
              <Sparkles className="h-4 w-4" />
              <span>O Único com Divisão de Contas Integrada</span>
            </Reveal>

            <Reveal as="h2" className="mb-6 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl" direction="up" delayMs={50}>
              Nunca Mais Cobre Dinheiro de Amigo.{" "}
              <span className="text-primary">O Monity Cuida Disso.</span>
            </Reveal>
            <Reveal as="p" className="mb-6 text-balance text-lg leading-relaxed text-muted-foreground" direction="up" delayMs={100}>
              Crie grupos, adicione contas e deixe o Monity calcular quem deve o quê.
              Divisões automáticas e transparentes. Chega de planilhas e conversas constrangedoras.
            </Reveal>
            <Reveal as="p" className="mb-10 text-sm text-muted-foreground/80 italic" direction="up" delayMs={120}>
              ✓ Apartamento compartilhado • Viagens em grupo • Jantar com amigos • Presente coletivo • Qualquer gasto compartilhado
            </Reveal>

            <div className="space-y-5">
              {collaborationFeatures.map((feature, i) => (
                <Reveal key={feature.title} className="group flex gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-muted/40 hover:via-primary/5 hover:to-muted/40 transition-all hover:shadow-lg hover:shadow-primary/10" delayMs={i * 80}>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 via-[#55B8B2]/15 to-[#3A8A85]/20 text-primary group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:via-[#55B8B2] group-hover:to-[#3A8A85] group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/30 transition-all">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-1.5 font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
