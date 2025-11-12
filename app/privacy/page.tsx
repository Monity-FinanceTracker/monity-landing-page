export const metadata = {
  title: "Política de Privacidade | Monity",
  description:
    "Conheça a política de privacidade do Monity e entenda como tratamos seus dados com segurança e transparência.",
}

import Image from "next/image"

export default function PrivacyPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="container mx-auto max-w-4xl px-4 py-28 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mx-auto mb-4 w-fit overflow-hidden rounded-2xl border border-border/40 bg-muted/30 p-2 shadow-sm">
            <Image
              src="/monity-legal-header.png"
              alt="Monity"
              width={1200}
              height={400}
              className="h-16 w-auto object-contain sm:h-20"
              priority
            />
          </div>
          <h1 className="mt-6 text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Política de Privacidade
          </h1>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Transparência total sobre como coletamos, utilizamos e protegemos os seus dados.
          </p>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-primary/40" />
        </div>

        <div className="space-y-8 rounded-3xl border border-border/60 bg-card/60 p-8 shadow-lg backdrop-blur-xl sm:p-10">
          <p className="text-base leading-relaxed text-muted-foreground">
            A sua privacidade é importante para nós. É política do{" "}
            <span className="font-semibold text-foreground">Monity</span> respeitar a sua privacidade em relação a qualquer
            informação sua que possamos coletar no site{" "}
            <a
              href="https://app.monity-finance.com/"
              className="font-medium text-primary underline decoration-primary/30 transition-colors hover:text-primary/80 hover:decoration-primary/60"
            >
              Monity
            </a>
            , e outros sites que possuímos e operamos.
          </p>

          <section className="rounded-2xl border border-border/40 bg-muted/30 p-6">
            <h2 className="mb-4 flex items-center text-lg font-semibold text-foreground">
              <span className="mr-3 inline-block h-2 w-2 rounded-full bg-primary" />
              Coleta de Informações
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por
              meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será
              usado.
            </p>
          </section>

          <section className="rounded-2xl border border-border/40 bg-muted/30 p-6">
            <h2 className="mb-4 flex items-center text-lg font-semibold text-foreground">
              <span className="mr-3 inline-block h-2 w-2 rounded-full bg-primary" />
              Armazenamento e Proteção
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos
              dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação,
              cópia, uso ou modificação não autorizados.
            </p>
          </section>

          <section className="rounded-2xl border border-border/40 bg-muted/30 p-6">
            <h2 className="mb-4 flex items-center text-lg font-semibold text-foreground">
              <span className="mr-3 inline-block h-2 w-2 rounded-full bg-primary" />
              Compartilhamento de Dados
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
            </p>
          </section>

          <section className="border-t border-border/40 pt-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Dúvidas sobre nossa política de privacidade?</p>
              <div className="mt-4 inline-flex items-center rounded-lg border border-primary/30 bg-primary/10 px-4 py-2">
                <span className="text-sm font-medium text-primary">Entre em contato conosco</span>
              </div>
            </div>
          </section>
        </div>

        <footer className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </p>
        </footer>
      </section>
    </main>
  )
}

