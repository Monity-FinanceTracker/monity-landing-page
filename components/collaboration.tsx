import { Users, UserPlus, Receipt, DollarSign, Sparkles } from "lucide-react"
import { Reveal } from "@/components/reveal"

const collaborationFeatures = [
  {
    icon: Users,
    title: "Comece em 30 Segundos",
    description:
      "Crie sua conta grátis e escolha sua moeda. Convide amigos para grupos de compartilhamento de despesas. Sem complicação, sem planilhas, sem chat de WhatsApp constrangedor.",
  },
  {
    icon: UserPlus,
    title: "Adicione Despesas em Segundos",
    description: "Almoço com amigos? Farmácia compartilhada? Crie a despesa, escolha quem pagou e como dividir. A IA sugere automaticamente e você aprova com um clique. Simples assim.",
  },
  {
    icon: Receipt,
    title: "Todos Veem Tudo em Tempo Real",
    description: "Chega de ficar calculando no papel. Todos do grupo veem quem deve o quê, instantaneamente. Dashboard transparente, histórico completo e dívidas sempre atualizadas.",
  },
  {
    icon: DollarSign,
    title: "Marque Como Pago e Siga Sua Vida",
    description: "Quando alguém paga o que devia, um clique e pronto. O sistema recalcula tudo automaticamente. Relacionamentos preservados, amizades fortalecidas.",
  },
]

export function Collaboration() {
  return (
    <section className="py-20 sm:py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_50%,rgba(1,195,141,0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <Reveal className="order-2 lg:order-1 relative group" direction="right" delayMs={150}>
            {/* Enhanced glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/15 via-primary/10 to-transparent blur-3xl opacity-50 group-hover:opacity-70 transition-opacity" />
            <div className="relative rounded-2xl border border-primary/20 bg-card/50 p-2 shadow-2xl shadow-primary/5 backdrop-blur-sm hover:border-primary/30 transition-colors">
              <img
                src="/Screenshot 2025-10-19 at 23.31.34.png"
                alt="Interface de divisão de despesas em grupo com múltiplos usuários"
                className="h-auto w-full rounded-lg"
              />
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            {/* Enhanced badge */}
            <Reveal as="div" className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 px-4 py-2 text-sm font-medium text-emerald-600 dark:text-emerald-400 backdrop-blur-sm" direction="up">
              <Sparkles className="h-4 w-4" />
              <span>O Único com Divisão de Contas Integrada</span>
            </Reveal>

            <Reveal as="h2" className="mb-6 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl" direction="up" delayMs={50}>
              Divida Contas Sem Brigas.{" "}
              <span className="text-primary">Sem Planilhas. Sem Drama.</span>
            </Reveal>
            <Reveal as="p" className="mb-10 text-balance text-lg leading-relaxed text-muted-foreground" direction="up" delayMs={100}>
              Ninguém nunca mais vai te chamar de caloteiro. Crie grupos, adicione contas e deixe o Monity calcular quem deve o quê. 
              Divisões automáticas, transparentes e justas. Cancele planilhas do Google e emails constrangedores para sempre.
            </Reveal>

            <div className="space-y-5">
              {collaborationFeatures.map((feature, i) => (
                <Reveal key={feature.title} className="group flex gap-4 p-4 rounded-xl hover:bg-muted/30 transition-colors" delayMs={i * 80}>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
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
