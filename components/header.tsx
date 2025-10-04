import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/20 bg-background/70 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-emerald-600 shadow-lg shadow-primary/20">
              <span className="font-mono text-lg font-bold text-white">M</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
              Monity
            </span>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Recursos
            </a>
            <a href="#ai" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              IA
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Preços
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex text-muted-foreground hover:text-foreground">
              <a href="https://firstmonity.vercel.app/">Entrar</a>
            </Button>
            <Button asChild size="sm" className="bg-gradient-to-r from-primary to-emerald-600 text-white hover:shadow-lg hover:shadow-primary/25 transition-all">
              <a href="https://firstmonity.vercel.app/sign-up">Começar Grátis</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
