import Link from "next/link"

export const metadata = {
  title: "Termos de Serviço | Monity",
  description:
    "Leia os Termos de Serviço do Monity e compreenda as condições para utilização da plataforma.",
}

export default function TermsPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="container mx-auto max-w-4xl px-4 py-28 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="inline-flex items-center rounded-full border border-border/60 bg-muted/40 px-4 py-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Monity
          </span>
          <h1 className="mt-6 text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Termos de Serviço
          </h1>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Ao acessar nosso aplicativo, você concorda com os termos abaixo. Leia atentamente.
          </p>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-primary/40" />
        </div>

        <div className="space-y-8 rounded-3xl border border-border/60 bg-card/60 p-8 shadow-lg backdrop-blur-xl sm:p-10">
          <p className="text-base leading-relaxed text-muted-foreground">
            Bem-vindo ao <span className="font-semibold text-foreground">Monity</span>. Ao acessar e utilizar nosso aplicativo disponível em{" "}
            <a
              href="https://app.monity-finance.com/"
              className="font-medium text-primary underline decoration-primary/30 transition-colors hover:text-primary/80 hover:decoration-primary/60"
            >
              app.monity-finance.com
            </a>
            , você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso.
          </p>

          <section className="rounded-2xl border border-border/40 bg-muted/30 p-6">
            <h2 className="mb-4 flex items-center text-lg font-semibold text-foreground">
              <span className="mr-3 inline-block h-2 w-2 rounded-full bg-primary" />
              Aceitação dos Termos
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Ao criar uma conta e utilizar o Monity, você confirma que leu, compreendeu e concorda em estar vinculado a estes Termos de Serviço. Se você não concordar com qualquer parte destes termos, não deverá utilizar nosso serviço. O uso continuado do aplicativo implica aceitação de quaisquer alterações feitas nestes termos.
            </p>
          </section>

          <section className="rounded-2xl border border-border/40 bg-muted/30 p-6">
            <h2 className="mb-4 flex items-center text-lg font-semibold text-foreground">
              <span className="mr-3 inline-block h-2 w-2 rounded-full bg-primary" />
              Uso do Serviço
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              O Monity é uma plataforma de gerenciamento de finanças pessoais. Você concorda em utilizar o serviço apenas para fins legais e de acordo com estes termos. É proibido:
            </p>
            <ul className="mt-4 space-y-2 text-base leading-relaxed text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                <span>Utilizar o serviço para qualquer finalidade ilegal ou não autorizada</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                <span>Tentar obter acesso não autorizado a qualquer parte do serviço</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                <span>Interferir ou interromper o funcionamento do serviço</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                <span>Transmitir vírus, malware ou qualquer código malicioso</span>
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border border-border/40 bg-muted/30 p-6">
            <h2 className="mb-4 flex items-center text-lg font-semibold text-foreground">
              <span className="mr-3 inline-block h-2 w-2 rounded-full bg-primary" />
              Contas de Usuário
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Para utilizar o Monity, você deve criar uma conta fornecendo informações precisas e completas. Você é responsável por:
            </p>
            <ul className="mt-4 space-y-2 text-base leading-relaxed text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                <span>Manter a confidencialidade de suas credenciais de acesso</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                <span>Todas as atividades realizadas em sua conta</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                <span>Notificar-nos imediatamente sobre qualquer uso não autorizado</span>
              </li>
            </ul>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Reservamo-nos o direito de suspender ou encerrar contas que violem estes termos ou que permaneçam inativas por período prolongado.
            </p>
          </section>

          <section className="rounded-2xl border border-border/40 bg-muted/30 p-6">
            <h2 className="mb-4 flex items-center text-lg font-semibold text-foreground">
              <span className="mr-3 inline-block h-2 w-2 rounded-full bg-primary" />
              Privacidade e Segurança
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              A proteção de seus dados é nossa prioridade. Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações financeiras. Seus dados são criptografados e armazenados com segurança. Para mais detalhes sobre como coletamos, usamos e protegemos suas informações, consulte nossa{" "}
              <Link
                href="/privacy"
                className="font-medium text-primary underline decoration-primary/30 transition-colors hover:text-primary/80 hover:decoration-primary/60"
              >
                Política de Privacidade
              </Link>
              .
            </p>
          </section>

          <section className="rounded-2xl border border-border/40 bg-muted/30 p-6">
            <h2 className="mb-4 flex items-center text-lg font-semibold text-foreground">
              <span className="mr-3 inline-block h-2 w-2 rounded-full bg-primary" />
              Limitação de Responsabilidade
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              O Monity é fornecido "como está" e "conforme disponível". Não garantimos que o serviço será ininterrupto, seguro ou livre de erros. Na extensão máxima permitida por lei:
            </p>
            <ul className="mt-4 space-y-2 text-base leading-relaxed text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                <span>Não nos responsabilizamos por decisões financeiras tomadas com base nas informações fornecidas pelo aplicativo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                <span>Não somos responsáveis por perdas ou danos indiretos, incidentais ou consequentes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                <span>Não garantimos a exatidão das análises e projeções financeiras geradas</span>
              </li>
            </ul>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              O Monity é uma ferramenta de organização financeira pessoal e não constitui assessoria financeira, fiscal ou jurídica profissional.
            </p>
          </section>

          <section className="rounded-2xl border border-border/40 bg-muted/30 p-6">
            <h2 className="mb-4 flex items-center text-lg font-semibold text-foreground">
              <span className="mr-3 inline-block h-2 w-2 rounded-full bg-primary" />
              Modificações dos Termos
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Reservamo-nos o direito de modificar estes Termos de Serviço a qualquer momento. As alterações entrarão em vigor imediatamente após sua publicação no aplicativo. Recomendamos que você revise periodicamente estes termos. O uso continuado do serviço após quaisquer modificações constitui sua aceitação dos novos termos.
            </p>
          </section>

          <section className="rounded-2xl border border-border/40 bg-muted/30 p-6">
            <h2 className="mb-4 flex items-center text-lg font-semibold text-foreground">
              <span className="mr-3 inline-block h-2 w-2 rounded-full bg-primary" />
              Lei Aplicável
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Estes Termos de Serviço são regidos pelas leis da República Federativa do Brasil. Qualquer disputa relacionada a estes termos será resolvida nos tribunais competentes do Brasil.
            </p>
          </section>

          <section className="border-t border-border/40 pt-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Dúvidas sobre nossos termos de serviço?</p>
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

