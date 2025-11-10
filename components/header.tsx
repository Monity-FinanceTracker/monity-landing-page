import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/20 bg-background/70 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img 
              src="/monity-logo.png" 
              alt="Monity Logo" 
              className="h-8 w-8 object-contain"
            />
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
              <a href="https://app.monity-finance.com/signup">Entrar</a>
            </Button>
            <Button asChild size="sm" className="bg-gradient-to-r from-primary via-[#55B8B2] to-[#3A8A85] text-white hover:shadow-xl hover:shadow-primary/40 transition-all hover:-translate-y-0.5 before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/0 before:via-white/10 before:to-primary/0 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 relative overflow-hidden">
              <a href="https://app.monity-finance.com/signup">Começar Grátis</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
