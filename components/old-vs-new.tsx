import { Reveal } from "@/components/reveal"
import { X, Check, ArrowRight } from "lucide-react"

const comparisons = [
  {
    old: "Horas perdidas em planilhas complexas",
    new: "10 segundos por dia com IA",
  },
  {
    old: "Categorização manual e tediosa de cada despesa",
    new: "IA aprende seus padrões e categoriza automaticamente",
  },
  {
    old: "Apps separados para divisão de contas",
    new: "Tudo integrado em um só lugar",
  },
  {
    old: "Adivinhação sobre onde o dinheiro foi",
    new: "Clareza total com insights em tempo real",
  },
  {
    old: "Configuração complicada que leva dias",
    new: "Configure em 2 minutos e comece",
  },
  {
    old: "Relatórios confusos e difíceis de entender",
    new: "Gráficos visuais e intuitivos",
  },
]

export function OldVsNew() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(71,160,155,0.05),transparent_70%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Reveal as="h2" className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl" direction="up">
            A Maneira Antiga{" "}
            <span className="text-muted-foreground line-through">vs</span>{" "}
            <span className="bg-gradient-to-r from-primary via-[#55B8B2] to-[#3A8A85] bg-clip-text text-transparent">
              A Nova Maneira
            </span>
          </Reveal>
          <Reveal as="p" className="text-balance text-lg leading-relaxed text-muted-foreground" direction="up" delayMs={75}>
            Por que continuar fazendo do jeito difícil quando existe uma forma melhor?
          </Reveal>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:gap-8">
            {comparisons.map((comparison, index) => (
              <Reveal
                key={index}
                className="grid md:grid-cols-2 gap-4 md:gap-6"
                delayMs={index * 60}
                direction="up"
              >
                {/* Old Way */}
                <div className="group relative rounded-2xl border border-red-200/50 dark:border-red-900/30 bg-gradient-to-br from-red-50/50 via-background/50 to-red-50/30 dark:from-red-950/20 dark:via-background/50 dark:to-red-950/10 p-6 backdrop-blur-sm transition-all hover:border-red-300/60 dark:hover:border-red-800/40">
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
                      <X className="h-5 w-5 text-red-600 dark:text-red-400" strokeWidth={2.5} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-red-600 dark:text-red-400 mb-2">
                        Maneira Antiga
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {comparison.old}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Arrow indicator (hidden on mobile) */}
                <div className="hidden md:absolute md:flex left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="rounded-full bg-background border-2 border-primary/30 p-2 shadow-lg">
                    <ArrowRight className="h-5 w-5 text-primary" strokeWidth={2.5} />
                  </div>
                </div>

                {/* New Way */}
                <div className="group relative rounded-2xl border border-primary/50 bg-gradient-to-br from-primary/5 via-[#55B8B2]/5 to-[#3A8A85]/5 p-6 backdrop-blur-sm transition-all hover:border-primary/70 hover:shadow-xl hover:shadow-primary/20 ring-1 ring-primary/10">
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 via-[#55B8B2]/15 to-[#3A8A85]/20">
                      <Check className="h-5 w-5 text-primary" strokeWidth={2.5} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                        Com Monity
                      </div>
                      <p className="text-sm font-medium leading-relaxed text-foreground">
                        {comparison.new}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* CTA at bottom */}
        <Reveal as="div" className="mt-16 text-center" direction="up" delayMs={400}>
          <p className="text-lg text-muted-foreground mb-6">
            Pronto para fazer a mudança?
          </p>
          <a 
            href="https://app.monity-finance.com/signup"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary via-[#55B8B2] to-[#3A8A85] px-8 py-4 text-base font-semibold text-white transition-all hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1"
          >
            Começar Grátis Agora
            <ArrowRight className="h-5 w-5" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}

