import { Reveal } from "@/components/reveal"
import { Sparkles, Zap, Brain, TrendingUp } from "lucide-react"

const features = [
  {
    media: "/novos/IA.png",
    type: "image", // or "video"
    icon: Brain,
    title: "IA que Aprende com Você",
    description: "Categorização automática que melhora a cada uso"
  },
  {
    media: "/novos/Grupos.png",
    type: "image",
    icon: Zap,
    title: "Divisão Instantânea",
    description: "Grupos ilimitados, cálculos automáticos"
  },
  {
    media: "/novos/Calculadora.png",
    type: "image",
    icon: TrendingUp,
    title: "Insights Profundos",
    description: "Veja padrões que você nunca percebeu"
  },
  {
    media: "/novos/Calendario.png",
    type: "image",
    icon: Sparkles,
    title: "Calendário Inteligente",
    description: "Saiba seu saldo futuro dia a dia"
  }
]

export function FeatureShowcase() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-muted/20 via-background to-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(71,160,155,0.06),transparent_60%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Reveal as="h2" className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl" direction="up">
            Cada Detalhe{" "}
            <span className="bg-gradient-to-r from-primary via-[#55B8B2] to-[#3A8A85] bg-clip-text text-transparent">
              Pensado Para Você
            </span>
          </Reveal>
          <Reveal as="p" className="text-balance text-lg leading-relaxed text-muted-foreground" direction="up" delayMs={75}>
            Interface rápida, intuitiva e deliciosamente fácil de usar. Veja como cada feature trabalha para você.
          </Reveal>
        </div>

        {/* Grid of feature cards - works with images or videos */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Reveal
              key={feature.title}
              className="group"
              delayMs={index * 80}
              direction="up"
            >
              {/* Card with better readability */}
              <div className="relative rounded-2xl border border-border/50 bg-card shadow-lg hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1 transition-all overflow-hidden">
                {/* Media container */}
                <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                  {feature.type === "video" ? (
                    <video 
                      className="w-full h-full object-cover" 
                      autoPlay 
                      muted 
                      loop 
                      playsInline
                    >
                      <source src={feature.media} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={feature.media}
                      alt={feature.title}
                      className="w-full h-full object-cover object-top"
                    />
                  )}
                  
                  {/* Icon badge - outside the image for better readability */}
                </div>

                {/* Text content - clean and readable */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary via-[#55B8B2] to-[#3A8A85] text-white">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

