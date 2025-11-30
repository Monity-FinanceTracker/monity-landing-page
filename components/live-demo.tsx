"use client"

import { useState } from "react"
import { Reveal } from "@/components/reveal"
import { Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = {
  "almoço": { category: "Alimentação", icon: "🍽️", color: "from-orange-500 to-red-500" },
  "uber": { category: "Transporte", icon: "🚗", color: "from-blue-500 to-cyan-500" },
  "netflix": { category: "Entretenimento", icon: "🎬", color: "from-purple-500 to-pink-500" },
  "academia": { category: "Saúde & Fitness", icon: "💪", color: "from-green-500 to-emerald-500" },
  "spotify": { category: "Entretenimento", icon: "🎵", color: "from-purple-500 to-pink-500" },
  "supermercado": { category: "Compras", icon: "🛒", color: "from-yellow-500 to-orange-500" },
  "café": { category: "Alimentação", icon: "☕", color: "from-orange-500 to-red-500" },
  "livro": { category: "Educação", icon: "📚", color: "from-indigo-500 to-blue-500" },
  "farmácia": { category: "Saúde & Fitness", icon: "💊", color: "from-green-500 to-emerald-500" },
  "cinema": { category: "Entretenimento", icon: "🎬", color: "from-purple-500 to-pink-500" },
  "gasolina": { category: "Transporte", icon: "⛽", color: "from-blue-500 to-cyan-500" },
  "restaurante": { category: "Alimentação", icon: "🍽️", color: "from-orange-500 to-red-500" },
}

const suggestedExpenses = [
  "Almoço no restaurante",
  "Uber para casa",
  "Netflix mensal",
  "Academia",
]

export function LiveDemo() {
  const [expense, setExpense] = useState("")
  const [result, setResult] = useState<{ category: string; icon: string; color: string } | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const categorizeExpense = (text: string) => {
    setIsAnalyzing(true)
    
    // Simulate AI processing
    setTimeout(() => {
      const lowerText = text.toLowerCase()
      let found = null
      
      // Find matching category
      for (const [key, value] of Object.entries(categories)) {
        if (lowerText.includes(key)) {
          found = value
          break
        }
      }
      
      // Default category if no match
      if (!found) {
        found = { category: "Outros", icon: "📝", color: "from-gray-500 to-slate-500" }
      }
      
      setResult(found)
      setIsAnalyzing(false)
    }, 800)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (expense.trim()) {
      categorizeExpense(expense)
    }
  }

  const handleSuggestion = (suggestion: string) => {
    setExpense(suggestion)
    categorizeExpense(suggestion)
  }

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-muted/20 via-background to-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_40%,rgba(71,160,155,0.08),transparent)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <Reveal as="h2" className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl" direction="up">
            Veja a{" "}
            <span className="bg-gradient-to-r from-primary via-[#55B8B2] to-[#3A8A85] bg-clip-text text-transparent">
              IA em Ação
            </span>
          </Reveal>
          <Reveal as="p" className="text-balance text-lg leading-relaxed text-muted-foreground" direction="up" delayMs={75}>
            Digite qualquer despesa e veja como nossa IA categoriza instantaneamente.
          </Reveal>
        </div>

        <Reveal className="mx-auto max-w-2xl" direction="up" delayMs={100}>
          <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-card/90 via-card/70 to-card/90 p-8 backdrop-blur-sm shadow-2xl shadow-primary/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="expense" className="block text-sm font-medium text-foreground mb-3">
                  Descreva sua despesa:
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="expense"
                    value={expense}
                    onChange={(e) => setExpense(e.target.value)}
                    placeholder="Ex: Almoço no restaurante italiano"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                  <Sparkles className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
                </div>
              </div>

              {/* Suggested expenses */}
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-muted-foreground mr-2">Ou tente:</span>
                {suggestedExpenses.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => handleSuggestion(suggestion)}
                    className="text-xs px-3 py-1.5 rounded-full bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>

              <Button
                type="submit"
                disabled={!expense.trim() || isAnalyzing}
                className="w-full bg-gradient-to-r from-primary via-[#55B8B2] to-[#3A8A85] text-white hover:shadow-xl hover:shadow-primary/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                size="lg"
              >
                {isAnalyzing ? (
                  <>
                    <Sparkles className="mr-2 h-5 w-5 animate-spin" />
                    Analisando com IA...
                  </>
                ) : (
                  <>
                    Categorizar com IA
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>

            {/* Result */}
            {result && !isAnalyzing && (
              <div className="mt-8 pt-8 border-t border-border/50 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${result.color} text-3xl shadow-lg`}>
                      {result.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Categorizado como:</p>
                      <p className="text-xl font-bold text-foreground">{result.category}</p>
                    </div>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  ⚡ Categorizado instantaneamente! Com o Monity, isso acontece automaticamente para todas as suas despesas.
                </p>
              </div>
            )}
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal as="div" className="mt-12 text-center" direction="up" delayMs={200}>
          <p className="text-sm text-muted-foreground mb-4">
            Isso é apenas uma amostra. O Monity aprende seus padrões e fica ainda mais preciso.
          </p>
          <a
            href="https://app.monity-finance.com/signup"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
          >
            Experimente grátis agora
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}

