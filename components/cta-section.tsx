import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function CTASection() {
  return (
    <section className="py-20 sm:py-32 bg-background relative overflow-hidden">
      {/* Enhanced gradient backgrounds */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(71,160,155,0.15),transparent)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_40%_at_30%_70%,rgba(71,160,155,0.08),transparent)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Reveal 
            className="relative overflow-hidden rounded-3xl border-2 border-primary/40 bg-gradient-to-br from-card/90 via-card/80 to-card/90 p-12 shadow-2xl shadow-primary/30 backdrop-blur-sm ring-2 ring-primary/20"
            direction="up"
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-[#55B8B2]/5 to-[#3A8A85]/10 opacity-50" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(71,160,155,0.2),transparent_50%)]" />

            <div className="relative text-center">
              <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Pronto Para{" "}
                <span className="bg-gradient-to-r from-primary via-[#55B8B2] to-[#3A8A85] bg-clip-text text-transparent">
                  Dominar Suas Finanças?
                </span>
              </h2>
              <p className="mb-8 text-balance text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
                Junte-se a milhares de usuários que já economizaram tempo e dinheiro com o Monity.
                Comece grátis em menos de 2 minutos.
              </p>

              {/* Benefits list */}
              <div className="mb-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Check className="h-5 w-5 text-primary" strokeWidth={3} />
                  <span>100% Grátis Para Começar</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Check className="h-5 w-5 text-primary" strokeWidth={3} />
                  <span>Configuração em 2 Minutos</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Check className="h-5 w-5 text-primary" strokeWidth={3} />
                  <span>Sem Cartão Necessário</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-primary via-[#55B8B2] to-[#3A8A85] text-white text-lg px-8 py-6 h-auto hover:shadow-2xl hover:shadow-primary/50 transition-all hover:-translate-y-1 before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/0 before:via-white/20 before:to-primary/0 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000"
                >
                  <a href="https://app.monity-finance.com/signup">
                    <span className="relative z-10 flex items-center">
                      Começar Grátis Agora
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>
                </Button>
              </div>

              {/* Trust message */}
              <p className="mt-8 text-sm text-muted-foreground">
                🔒 Seus dados são 100% seus. Segurança de nível bancário. Cancele quando quiser.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}






