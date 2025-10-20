import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Check } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 bg-background">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(1,195,141,0.2),transparent)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(1,195,141,0.08),transparent)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Improved badge with animation */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-5 py-2 text-sm font-medium text-primary backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-primary/10">
            <Sparkles className="h-4 w-4 animate-pulse" />
            <span className="font-semibold">90%+ Precisão IA</span>
            <span className="text-muted-foreground">•</span>
            <span className="font-semibold">Entrada em 10s</span>
          </div>

          {/* Improved headline with better hierarchy */}
          <h1 className="mb-6 text-balance text-5xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Orçamento Rápido Feito{" "}
            <span className="bg-gradient-to-r from-primary via-emerald-500 to-primary bg-clip-text text-transparent">
              Inteligente
            </span>
          </h1>

          {/* Enhanced subheadline */}
          <p className="mb-12 text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl max-w-3xl mx-auto">
            Rastreador de finanças pessoais com IA que aprende seus hábitos de gastos,
            categoriza transações automaticamente e até divide despesas com amigos.
            Tenha o panorama financeiro completo em menos de 10 segundos por transação.
          </p>

          {/* CTA buttons with improved styling */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-emerald-600 text-white hover:shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-0.5"
            >
              <a href="https://firstmonity.vercel.app/sign-up">
                <span className="relative z-10 flex items-center">
                  Começar Grátis →
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border/60 text-foreground hover:bg-muted/50 bg-background/50 backdrop-blur-sm transition-all hover:-translate-y-0.5"
            >
              <a href="https://firstmonity.vercel.app">Ver Como Funciona</a>
            </Button>
          </div>

          {/* Enhanced trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Check className="h-4 w-4 text-primary" strokeWidth={3} />
              <span>Sem cartão de crédito</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Check className="h-4 w-4 text-primary" strokeWidth={3} />
              <span>Plano grátis para sempre</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Check className="h-4 w-4 text-primary" strokeWidth={3} />
              <span>Premium a partir de R$ 9,90/mês</span>
            </div>
          </div>
        </div>

        {/* Enhanced dashboard preview */}
        <div className="mt-20 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-emerald-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
          <div className="relative rounded-2xl border border-primary/20 bg-card/50 p-2 shadow-2xl shadow-primary/10 backdrop-blur-sm">
            <img
              src="/Screenshot 2025-10-19 at 23.31.17.png"
              alt="Dashboard Monity - Rastreador de finanças pessoais com IA e interface modo escuro"
              className="h-auto w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
