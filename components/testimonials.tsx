import { Reveal } from "@/components/reveal"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Ana Silva",
    role: "Designer de Produto",
    content: "Finalmente entendo para onde meu dinheiro vai. O Monity me economiza horas toda semana e já me ajudou a economizar R$ 2.000+ em 3 meses.",
    rating: 5,
    avatar: "AS"
  },
  {
    name: "Carlos Mendes",
    role: "Empreendedor",
    content: "Tentei Mint, YNAB, e uma dúzia de planilhas. Nada funcionou. Monity é o único que eu realmente uso todos os dias. A IA é absurdamente boa.",
    rating: 5,
    avatar: "CM"
  },
  {
    name: "Julia Santos",
    role: "Estudante Universitária",
    content: "O plano gratuito já tem TUDO que eu preciso. Divisão de contas com meus colegas de quarto = zero confusão. Valeu muito a pena!",
    rating: 5,
    avatar: "JS"
  },
  {
    name: "Rafael Costa",
    role: "Desenvolvedor",
    content: "A interface é RÁPIDA. Mais rápida que qualquer app financeiro que já usei. E a IA realmente aprende — depois de uma semana, categorização é quase 100% automática.",
    rating: 5,
    avatar: "RC"
  },
  {
    name: "Mariana Oliveira",
    role: "Product Manager",
    content: "Economizei mais em 2 meses com Monity do que em anos tentando outros apps. O calendário de fluxo de caixa mudou minha vida.",
    rating: 5,
    avatar: "MO"
  },
  {
    name: "Pedro Lima",
    role: "Freelancer",
    content: "Como freelancer, minha renda varia muito. O Monity me ajuda a prever exatamente quanto vou ter em cada dia. Nunca mais fui pego de surpresa.",
    rating: 5,
    avatar: "PL"
  }
]

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_40%,rgba(71,160,155,0.08),transparent)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Reveal as="h2" className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl" direction="up">
            Junte-se a{" "}
            <span className="bg-gradient-to-r from-primary via-[#55B8B2] to-[#3A8A85] bg-clip-text text-transparent">
              Milhares de Usuários
            </span>
            {" "}Que Já Dominaram Suas Finanças
          </Reveal>
          <Reveal as="p" className="text-balance text-lg leading-relaxed text-muted-foreground" direction="up" delayMs={75}>
            Veja o que nossos usuários estão dizendo sobre como o Monity transformou suas vidas financeiras.
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={testimonial.name}
              className="group relative rounded-2xl border border-border/50 bg-gradient-to-br from-card/90 via-card/70 to-card/90 p-6 transition-all hover:border-primary/60 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1 backdrop-blur-sm ring-1 ring-border/20 hover:ring-primary/30"
              delayMs={index * 60}
              direction="up"
            >
              {/* Gradient on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-[#3A8A85]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-sm leading-relaxed text-muted-foreground mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary via-[#55B8B2] to-[#3A8A85] text-white text-sm font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Trust banner */}
        <Reveal as="div" className="mt-16 text-center" direction="up" delayMs={400}>
          <div className="inline-flex flex-wrap items-center justify-center gap-8 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/5 via-[#55B8B2]/5 to-[#3A8A85]/5 px-8 py-6 backdrop-blur-sm">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">4.9/5</div>
              <div className="text-sm text-muted-foreground mt-1">Avaliação média</div>
            </div>
            <div className="h-12 w-px bg-border/50" />
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">5,000+</div>
              <div className="text-sm text-muted-foreground mt-1">Usuários ativos</div>
            </div>
            <div className="h-12 w-px bg-border/50" />
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">R$ 1M+</div>
              <div className="text-sm text-muted-foreground mt-1">Economizado pelos usuários</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

