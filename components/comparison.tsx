import { Check, X } from "lucide-react"
import { Reveal } from "@/components/reveal"

const comparisons = [
  {
    feature: "Rastreamento ilimitado de transações",
    monity: true,
    mint: true,
    ynab: true,
    spreadsheet: false
  },
  {
    feature: "Categorização automática com IA",
    monity: true,
    mint: "Básica",
    ynab: false,
    spreadsheet: false
  },
  {
    feature: "Divisão de despesas em grupo integrada",
    monity: true,
    mint: false,
    ynab: false,
    spreadsheet: "Manual"
  },
  {
    feature: "Assistente IA 24/7",
    monity: true,
    mint: false,
    ynab: false,
    spreadsheet: false
  },
  {
    feature: "Calendário de Fluxo de Caixa",
    monity: true,
    mint: false,
    ynab: "Básico",
    spreadsheet: false
  },
  {
    feature: "Interface rápida e moderna",
    monity: true,
    mint: false,
    ynab: "OK",
    spreadsheet: false
  },
  {
    feature: "Simulador de investimentos",
    monity: true,
    mint: false,
    ynab: false,
    spreadsheet: false
  },
  {
    feature: "Preço mensal",
    monity: "R$ 0 - R$ 9,90",
    mint: "Descontinuado",
    ynab: "US$ 14,99",
    spreadsheet: "Grátis"
  }
]

function CheckIcon() {
  return <Check className="h-5 w-5 text-primary" strokeWidth={2.5} />
}

function XIcon() {
  return <X className="h-5 w-5 text-muted-foreground/40" strokeWidth={2} />
}

function Cell({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? <CheckIcon /> : <XIcon />
  }
  return <span className="text-sm text-muted-foreground">{value}</span>
}

export function Comparison() {
  return (
    <section className="py-20 sm:py-28 bg-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(71,160,155,0.05),transparent_70%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Reveal as="h2" className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl" direction="up">
            O Que Torna o Monity{" "}
            <span className="text-primary">Diferente?</span>
          </Reveal>
          <Reveal as="p" className="text-balance text-lg leading-relaxed text-muted-foreground" direction="up" delayMs={75}>
            Mint está morto. YNAB é caro e complicado. Planilhas são trabalho demais.
            <br />
            <span className="font-semibold text-foreground">Monity é o que eles deveriam ter sido.</span>
          </Reveal>
        </div>

        {/* Mobile-friendly comparison */}
        <div className="hidden lg:block">
          <Reveal className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm shadow-2xl" direction="up" delayMs={100}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50 bg-muted/30">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Recurso</th>
                    <th className="px-6 py-4 text-center">
                      <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary via-[#55B8B2] to-[#3A8A85] px-4 py-2 text-sm font-semibold text-white">
                        <span>Monity</span>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-muted-foreground">Mint</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-muted-foreground">YNAB</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-muted-foreground">Planilhas</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((row, index) => (
                    <tr key={index} className="border-b border-border/30 transition-colors hover:bg-muted/20">
                      <td className="px-6 py-4 text-sm text-foreground font-medium">{row.feature}</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex justify-center">
                          <Cell value={row.monity} />
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex justify-center">
                          <Cell value={row.mint} />
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex justify-center">
                          <Cell value={row.ynab} />
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex justify-center">
                          <Cell value={row.spreadsheet} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>

        {/* Mobile cards */}
        <div className="lg:hidden space-y-6">
          <Reveal className="rounded-2xl border-2 border-primary/60 bg-gradient-to-br from-card/90 via-card/70 to-card/90 p-6 shadow-2xl shadow-primary/20 backdrop-blur-sm" direction="up" delayMs={100}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary via-[#55B8B2] to-[#3A8A85] px-4 py-2 text-sm font-semibold text-white">
              Monity
            </div>
            <ul className="space-y-3">
              {comparisons.map((row, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5">
                    {typeof row.monity === "boolean" ? (
                      row.monity ? <CheckIcon /> : <XIcon />
                    ) : (
                      <CheckIcon />
                    )}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">{row.feature}</div>
                    {typeof row.monity === "string" && (
                      <div className="text-xs text-muted-foreground mt-0.5">{row.monity}</div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {["Mint", "YNAB", "Planilhas"].map((competitor, idx) => (
            <Reveal key={competitor} className="rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm" direction="up" delayMs={200 + idx * 50}>
              <div className="mb-4 text-lg font-semibold text-muted-foreground">{competitor}</div>
              <ul className="space-y-3">
                {comparisons.map((row, i) => {
                  const value = competitor === "Mint" ? row.mint : competitor === "YNAB" ? row.ynab : row.spreadsheet
                  return (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-0.5">
                        {typeof value === "boolean" ? (
                          value ? <CheckIcon /> : <XIcon />
                        ) : (
                          value !== "false" && <span className="text-xs text-muted-foreground">•</span>
                        )}
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{row.feature}</div>
                        {typeof value === "string" && value !== "false" && (
                          <div className="text-xs text-muted-foreground/70 mt-0.5">{value}</div>
                        )}
                      </div>
                    </li>
                  )
                })}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}






