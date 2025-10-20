import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { AIShowcase } from "@/components/ai-showcase"
import { Collaboration } from "@/components/collaboration"
import { Analytics } from "@/components/analytics"
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <AIShowcase />
      <Collaboration />
      <Analytics />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  )
}
