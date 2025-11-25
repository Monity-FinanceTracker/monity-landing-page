import Link from "next/link"
import { Twitter, Instagram, Users, Star } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-muted/10 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_100%,rgba(71,160,155,0.03),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <img
                src="/monity-logo.png"
                alt="Monity Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="text-3xl font-normal text-foreground font-stratford">
                Monity
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground mb-4">
              Finanças pessoais com IA. Rastreie despesas, divida contas e domine seu dinheiro.
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              📧{" "}
              <a href="mailto:leo.stuart@monity-finance.com" className="text-primary hover:underline font-medium">
                leo.stuart@monity-finance.com
              </a>
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://x.com/firstmonity"
                className="text-muted-foreground transition-all hover:text-primary hover:scale-110"
                aria-label="Twitter/X"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/monity.app"
                className="text-muted-foreground transition-all hover:text-primary hover:scale-110"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@monity.app"
                className="text-muted-foreground transition-all hover:text-primary hover:scale-110"
                aria-label="TikTok"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Produto</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#features" className="text-muted-foreground transition-colors hover:text-primary">
                  Recursos
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground transition-colors hover:text-primary">
                  Preços
                </a>
              </li>
              <li>
                <a href="https://app.monity-finance.com/signup?premium=true" className="text-muted-foreground transition-colors hover:text-primary">
                  Premium
                </a>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground transition-colors hover:text-primary">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Empresa</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  Código Aberto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground transition-colors hover:text-primary">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground transition-colors hover:text-primary">
                  Termos de Serviço
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  Segurança de Dados
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/monity.app"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/30 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Monity. Finanças pessoais feitas com IA.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="font-semibold">4.9/5 de avaliação</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-border/50" />
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <span className="font-semibold">5,000+ usuários ativos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
