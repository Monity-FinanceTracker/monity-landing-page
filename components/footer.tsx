import { Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-muted/10 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_100%,rgba(71,160,155,0.03),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <img 
                src="/monity-logo.png" 
                alt="Monity Logo" 
                className="h-8 w-8 object-contain"
              />
              <span className="text-xl font-bold text-foreground">Monity</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground mb-6">
              Finanças pessoais com IA. Rastreie despesas, divida contas e domine seu dinheiro.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-muted-foreground transition-all hover:text-primary hover:scale-110"
                aria-label="Twitter/X"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground transition-all hover:text-primary hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground transition-all hover:text-primary hover:scale-110"
                aria-label="TikTok"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
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
                <a href="https://firstmonity.vercel.app/signup?premium=true" className="text-muted-foreground transition-colors hover:text-primary">
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
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  Termos de Serviço
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  Segurança de Dados
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/30 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Monity. Orçamento rápido feito inteligente.
            
          </p>
        </div>
      </div>
    </footer>
  )
}
