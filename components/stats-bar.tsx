import { Reveal } from "@/components/reveal"
import { Users, Star, TrendingUp, Zap, Briefcase, Code, GraduationCap, Rocket } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "5,000+",
    label: "Usuários Ativos"
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Avaliação Média"
  },
  {
    icon: TrendingUp,
    value: "R$ 1M+",
    label: "Economizado"
  },
  {
    icon: Zap,
    value: "<10s",
    label: "Por Transação"
  }
]

const userTypes = [
  {
    icon: Rocket,
    label: "Startups"
  },
  {
    icon: Briefcase,
    label: "Freelancers"
  },
  {
    icon: Code,
    label: "Desenvolvedores"
  },
  {
    icon: GraduationCap,
    label: "Estudantes"
  }
]

export function StatsBar() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-primary/5 via-[#55B8B2]/5 to-[#3A8A85]/5 border-y border-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 max-w-5xl mx-auto mb-12">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              className="text-center"
              delayMs={index * 60}
              direction="up"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 via-[#55B8B2]/15 to-[#3A8A85]/20 text-primary">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary via-[#55B8B2] to-[#3A8A85] bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* User types section */}
        <Reveal className="border-t border-primary/10 pt-8" direction="up" delayMs={300}>
          <p className="text-center text-sm text-muted-foreground mb-6 font-medium">
            Usado por profissionais de:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 max-w-4xl mx-auto">
            {userTypes.map((type, index) => (
              <Reveal
                key={type.label}
                className="flex items-center gap-2 text-muted-foreground/80 hover:text-foreground transition-colors"
                delayMs={350 + index * 50}
                direction="up"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted/50">
                  <type.icon className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium">{type.label}</span>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}






