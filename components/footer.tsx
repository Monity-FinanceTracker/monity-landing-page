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
              Controle financeiro inteligente, rápido e transparente com o poder da IA.
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
                <a href="#ai" className="text-muted-foreground transition-colors hover:text-primary">
                  IA Insights
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground transition-colors hover:text-primary">
                  Preços
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  Atualizações
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Desenvolvedores</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  Documentação
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  Blog Técnico
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  Suporte
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Empresa</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  Termos de Uso
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
            © 2025 Monity. Código aberto sob Licença MIT.
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> • </span>
            Construído com dedicação para seu bem-estar financeiro.
          </p>
        </div>
      </div>
    </footer>
  )
}
