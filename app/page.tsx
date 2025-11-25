import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { StatsBar } from "@/components/stats-bar"
import { HowItWorks } from "@/components/how-it-works"
import { FeatureShowcase } from "@/components/feature-showcase"
import { Features } from "@/components/features"
import { AIShowcase } from "@/components/ai-showcase"
import { Collaboration } from "@/components/collaboration"
import { Analytics } from "@/components/analytics"
import { Testimonials } from "@/components/testimonials"
import { Comparison } from "@/components/comparison"
import { Pricing } from "@/components/pricing"
import { CTASection } from "@/components/cta-section"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: 'Monity - Finanças Pessoais com IA | 20x Mais Rápido Que Planilhas',
  description: 'Domine suas finanças em menos de 10 segundos por dia. IA que aprende seus padrões, divisão de contas sem drama, e clareza financeira total. Comece grátis.',
  keywords: 'finanças pessoais, controle financeiro, IA, divisão de contas, orçamento, app financeiro brasil',
  openGraph: {
    title: 'Monity - Pare de Adivinhar Onde Seu Dinheiro Foi',
    description: 'Usado por 5,000+ brasileiros. 20x mais rápido que planilhas. IA que aprende seus padrões financeiros.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <StatsBar />
      <HowItWorks />
      <FeatureShowcase />
      <Features />
      <AIShowcase />
      <Collaboration />
      <Analytics />
      <Testimonials />
      <Comparison />
      <Pricing />
      <CTASection />
      <FAQ />
      <Footer />
    </main>
  )
}
