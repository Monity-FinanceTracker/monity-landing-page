import { Reveal } from "@/components/reveal"
import { Sparkles, Brain, TrendingUp } from "lucide-react"

const steps = [
  {
    number: "1",
    icon: Sparkles,
    title: "Comece Grátis em 2 Minutos",
    description: "Crie sua conta. Sem cartão. Sem configurações complicadas. Apenas seu email e você está dentro."
  },
  {
    number: "2",
    icon: Brain,
    title: "A IA Aprende Seus Padrões",
    description: "Adicione suas primeiras transações. A IA categoriza automaticamente e fica mais inteligente a cada uso. Quanto mais você usa, menos trabalho tem."
  },
  {
    number: "3",
    icon: TrendingUp,
    title: "Domine Suas Finanças",
    description: "Veja exatamente para onde seu dinheiro vai. Tome decisões melhores. Economize mais. Viva sem estresse financeiro."
  }
]

export function HowItWorks() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(71,160,155,0.06),transparent_70%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Reveal as="h2" className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl" direction="up">
            Como{" "}
            <span className="bg-gradient-to-r from-primary via-[#55B8B2] to-[#3A8A85] bg-clip-text text-transparent">
              Funciona
            </span>
          </Reveal>
          <Reveal as="p" className="text-balance text-lg leading-relaxed text-muted-foreground" direction="up" delayMs={75}>
            Três passos simples para transformar sua vida financeira.
          </Reveal>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <Reveal
                key={step.number}
                className="relative text-center"
                delayMs={index * 100}
                direction="up"
              >
                {/* Connector line - hidden on mobile, shown on tablet+ */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-primary/20" />
                )}

                {/* Step number badge */}
                <div className="relative mx-auto mb-6 inline-flex h-24 w-24 items-center justify-center">
                  {/* Glowing background */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-[#55B8B2]/20 to-[#3A8A85]/10 blur-xl" />
                  
                  {/* Circle with gradient border */}
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-card border-2 border-primary/30 shadow-xl shadow-primary/20">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>

                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary via-[#55B8B2] to-[#3A8A85] text-sm font-bold text-white shadow-lg shadow-primary/40">
                    {step.number}
                  </div>
                </div>

                <h3 className="mb-3 text-xl font-bold text-foreground">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <Reveal as="div" className="mt-16 text-center" direction="up" delayMs={300}>
          <p className="text-lg text-muted-foreground mb-4">
            Pronto para começar sua jornada financeira?
          </p>
          <a
            href="https://app.monity-finance.com/signup"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-lg group"
          >
            Criar Conta Grátis
            <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </Reveal>
      </div>
    </section>
  )
}

