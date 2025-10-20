import { Github, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-muted/10 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_100%,rgba(1,195,141,0.03),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-emerald-600 shadow-lg shadow-primary/20">
                <span className="font-mono text-lg font-bold text-white">M</span>
              </div>
              <span className="text-xl font-bold text-foreground">Monity</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground mb-6">
              Rastreador de finanças pessoais alimentado por IA construído para indivíduos e grupos
              que valorizam seu tempo. Rastreie despesas, divida contas e domine seu
              dinheiro com automação inteligente.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-muted-foreground transition-all hover:text-primary hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground transition-all hover:text-primary hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground transition-all hover:text-primary hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
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
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
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
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> • </span>
            Construído com ❤️ usando React 19, Node.js e PostgreSQL
            <br />
            Código aberto • Licença MIT • Desenvolvimento Transparente
          </p>
        </div>
      </div>
    </footer>
  )
}
