import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Check } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 bg-background">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(71,160,155,0.2),transparent)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(71,160,155,0.08),transparent)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Improved badge with animation */}
          <Reveal as="div" className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-5 py-2 text-sm font-medium text-primary backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-primary/10" direction="up">
            <Sparkles className="h-4 w-4 animate-pulse" />
            <span className="font-semibold">90%+ Precisão IA</span>
            <span className="text-muted-foreground">•</span>
            <span className="font-semibold">Assistente IA Gratuito</span>
            <span className="text-muted-foreground">•</span>
            <span className="font-semibold">Entrada em 10s</span>
          </Reveal>

          {/* Improved headline with better hierarchy */}
          <Reveal as="h1" className="mb-6 text-balance text-5xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-6xl lg:text-7xl" direction="up" delayMs={50}>
            Chega de Surpresas no Fim do Mês.{" "}
            <span className="bg-gradient-to-r from-primary via-[#55B8B2] to-[#3A8A85] bg-clip-text text-transparent drop-shadow-sm">
              Viva com Clareza.
            </span>
          </Reveal>

          {/* Enhanced subheadline */}
          <Reveal as="p" className="mb-12 text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl max-w-3xl mx-auto" direction="up" delayMs={100}>
            IA que aprende com você + divisão de contas automática + clareza total.
            Tudo em menos de 10 segundos por dia.
          </Reveal>

          {/* CTA buttons with improved styling */}
          <Reveal as="div" className="flex flex-col items-center justify-center gap-4 sm:flex-row" direction="up" delayMs={150}>
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-primary via-[#55B8B2] to-[#3A8A85] text-white hover:shadow-2xl hover:shadow-primary/40 transition-all hover:-translate-y-1 before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/0 before:via-white/10 before:to-primary/0 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000"
            >
              <a href="https://app.monity-finance.com/signup">
                <span className="relative z-10 flex items-center">
                  Começar Grátis - 2 Min Para Clareza Total
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </Button>
          </Reveal>

          {/* Enhanced trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm">
            <Reveal as="div" className="flex items-center gap-2 text-muted-foreground" direction="up" delayMs={250}>
              <Check className="h-4 w-4 text-primary" strokeWidth={3} />
              <span>100% Grátis Para Começar</span>
            </Reveal>
            <Reveal as="div" className="flex items-center gap-2 text-muted-foreground" direction="up" delayMs={300}>
              <Check className="h-4 w-4 text-primary" strokeWidth={3} />
              <span>Sem Cartão Necessário</span>
            </Reveal>
            <Reveal as="div" className="flex items-center gap-2 text-muted-foreground" direction="up" delayMs={350}>
              <Check className="h-4 w-4 text-primary" strokeWidth={3} />
              <span>Premium a partir de R$ 9,90/mês</span>
            </Reveal>
          </div>
        </div>

        {/* Enhanced dashboard preview */}
        <Reveal as="div" className="mt-20 relative group" direction="up" delayMs={200}>
          <div className="absolute -inset-2 bg-gradient-to-r from-primary via-[#55B8B2] to-[#3A8A85] rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-[#55B8B2]/10 to-[#3A8A85]/20 rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity" />
          <div className="relative rounded-2xl border border-primary/30 bg-gradient-to-br from-card/90 via-card/70 to-card/90 p-2 shadow-2xl shadow-primary/20 backdrop-blur-sm ring-1 ring-primary/20">
            <img
              src="/WhatsApp Image 2025-10-24 at 00.48.45.jpeg"
              alt="Dashboard Monity - Rastreador de finanças pessoais com IA e interface modo escuro"
              className="h-auto w-full rounded-lg"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
