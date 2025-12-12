import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Check, Users, Star } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 bg-background">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(71,160,155,0.2),transparent)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(71,160,155,0.08),transparent)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Social proof badge */}
          <Reveal as="div" className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-5 py-2 text-sm font-medium text-primary backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-primary/10" direction="up">
            <Users className="h-4 w-4" />
            <span className="font-semibold">Usado por 5,000+ brasileiros</span>
            <span className="text-muted-foreground">•</span>
            <div className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-primary text-primary" />
              <span className="font-semibold">4.9/5</span>
            </div>
          </Reveal>

          {/* Improved headline with better hierarchy */}
          <Reveal as="h1" className="mb-6 text-balance text-5xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-6xl lg:text-7xl" direction="up" delayMs={50}>
            <span className="bg-gradient-to-r from-primary via-[#55B8B2] to-[#3A8A85] bg-clip-text text-transparent drop-shadow-sm">
              Clareza Financeira
            </span>{" "}
            em 10 Segundos.
          </Reveal>

          {/* Enhanced subheadline */}
          <Reveal as="p" className="mb-12 text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl max-w-3xl mx-auto" direction="up" delayMs={100}>
            IA que aprende seus padrões. Divisão de contas sem drama. 
            Clareza financeira em <span className="font-semibold text-foreground">menos de 10 segundos por dia</span>.
            <br />
            <span className="text-primary font-semibold">20x mais rápido que planilhas</span> e mais inteligente que qualquer app.
          </Reveal>

          {/* CTA buttons with improved styling */}
          <Reveal as="div" className="flex flex-col items-center justify-center gap-4 sm:flex-row" direction="up" delayMs={150}>
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-primary via-[#55B8B2] to-[#3A8A85] text-white text-lg px-8 py-6 h-auto hover:shadow-2xl hover:shadow-primary/40 transition-all hover:-translate-y-1 before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/0 before:via-white/10 before:to-primary/0 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000"
            >
              <a href="https://app.monity-finance.com/signup">
                <span className="relative z-10 flex items-center">
                  Começar Grátis Agora
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="group border-2 border-primary/30 text-foreground text-lg px-8 py-6 h-auto hover:bg-primary/5 hover:border-primary/50 transition-all hover:-translate-y-1"
            >
              <a href="#features">
                <span className="flex items-center">
                  <Sparkles className="mr-2 h-5 w-5 text-primary" />
                  Ver Como Funciona
                </span>
              </a>
            </Button>
          </Reveal>
          
          <Reveal as="p" className="mt-4 text-sm text-muted-foreground" direction="up" delayMs={200}>
            Configure em 2 minutos. Sem cartão de crédito necessário.
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

        {/* Dashboard preview - works with image or video */}
        <Reveal as="div" className="mt-20 relative" direction="up" delayMs={200}>
          {/* Glowing background */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary via-[#55B8B2] to-[#3A8A85] rounded-3xl blur-3xl opacity-20" />
          
          {/* Browser-style mockup */}
          <div className="relative rounded-2xl border border-primary/30 bg-card shadow-2xl shadow-primary/30 overflow-hidden">
            {/* Browser header */}
            <div className="flex items-center gap-2 border-b border-border/50 bg-muted/50 px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <div className="ml-4 flex-1 rounded-md bg-background/80 px-3 py-1.5 text-xs text-muted-foreground">
                app.monity-finance.com
              </div>
            </div>
            
            {/* Media container - flexible for image or video */}
            <div className="relative bg-background aspect-video">
              {/* Product demo video with fallback to image */}
              <video 
                className="w-full h-full object-cover object-top" 
                autoPlay 
                muted 
                loop 
                playsInline
                controls
                poster="/novos/IA.png"
              >
                <source src="/Vídeo-Landing-Page.mp4" type="video/mp4" />
                {/* Fallback image if video doesn't load */}
                <img
                  src="/novos/IA.png"
                  alt="Dashboard Monity"
                  className="w-full h-full object-cover object-top"
                />
              </video>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
