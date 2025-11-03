import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Reveal } from "@/components/reveal"

const faqs = [
  {
    question: "Como funciona a categorização por IA?",
    answer: "A IA aprende com as suas escolhas. Ao adicionar uma transação, você recebe uma sugestão de categoria baseada no que já fez antes. Ao aprovar ou corrigir, o sistema se adapta ao seu estilo e fica cada vez mais preciso — sem esforço extra."
  },
  {
    question: "Meus dados financeiros estão seguros?",
    answer: "Sim. Seus dados são protegidos com padrões rigorosos de segurança e criptografia. Eles são seus: não vendemos nem compartilhamos suas informações. Você pode exportar ou excluir tudo quando quiser."
  },
  {
    question: "Como funciona a divisão de despesas em grupo?",
    answer: "Crie um grupo, convide membros por email e comece a adicionar despesas compartilhadas. Escolha como dividir: valores iguais, percentuais ou divisões personalizadas. O Monity rastreia automaticamente quem deve o quê e envia notificações de dívidas em tempo real. Marque despesas como quitadas quando pagas. Perfeito para colegas de quarto, viagens ou qualquer custo compartilhado."
  },
  {
    question: "O que torna o Monity diferente do Mint ou YNAB?",
    answer: "O Monity reúne tudo em um só lugar: controle completo das suas finanças pessoais e divisão de despesas em grupo em tempo real. A IA aprende com você para reduzir tarefas repetitivas e acelerar seu dia a dia. Simples, bonito e focado em resultados práticos — não em complexidade."
  },
  {
    question: "Posso usar o Monity no mobile?",
    answer: "Sim! O Monity é construído mobile-first com um design responsivo que funciona lindamente em telefones, tablets e desktop. Embora ainda não tenhamos aplicativos nativos iOS/Android, o aplicativo web é totalmente otimizado para navegadores móveis e pode ser adicionado à sua tela inicial como PWA."
  },
  {
    question: "O que é o recurso Calendário de Fluxo de Caixa?",
    answer: "Exclusivo do Premium, o Calendário de Fluxo de Caixa é uma interface estilo Google Calendar que mostra seu saldo projetado para cada dia do mês. Agende transações únicas ou recorrentes (diárias, semanais, mensais, anuais) e veja exatamente qual será seu saldo em qualquer dia. As transações executam automaticamente, então você nunca perde um pagamento ou entrada de orçamento."
  },
  {
    question: "Como funciona o Assistente de IA Financeiro?",
    answer: "Nosso Assistente de IA oferece conselhos financeiros personalizados baseados nos seus gastos, orçamentos e metas. Faça perguntas sobre suas finanças, receba recomendações sobre como economizar mais e entenda seus padrões de gastos. Usuários gratuitos têm 3 mensagens por dia, enquanto membros Premium têm acesso ilimitado."
  },
  {
    question: "O que é o Calculador de Investimentos?",
    answer: "Calcule quanto seu dinheiro pode crescer ao longo do tempo com diferentes cenários de investimento. Veja projeções de juros compostos, saiba quanto investir mensalmente para atingir metas e compare diferentes estratégias. Usuários gratuitos têm 2 simulações por mês, e Premium oferece simulações ilimitadas."
  },
  {
    question: "Posso exportar meus dados?",
    answer: "Sim. Você pode levar seus dados com você a qualquer momento, exportando históricos, orçamentos e relatórios de forma simples. Seus dados são sempre seus."
  },
  {
    question: "Como funciona o teste gratuito?",
    answer: "Comece com o nível Gratuito. Quando estiver pronto para experimentar o Premium, você tem 7 dias grátis com acesso completo a todos os recursos Premium. Após 7 dias, você pode se inscrever para continuar no Premium ou permanecer no generoso nível Gratuito."
  }
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(71,160,155,0.05),transparent_70%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <Reveal as="h2" className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl" direction="up">
            Perguntas <span className="text-primary">Frequentes</span>
          </Reveal>
          <Reveal as="p" className="text-balance text-lg leading-relaxed text-muted-foreground" direction="up" delayMs={75}>
            Tudo que você precisa saber sobre o Monity. Não encontrou o que procura? 
            <a href="#" className="text-primary hover:underline">Entre em contato com nossa equipe de suporte</a>.
          </Reveal>
        </div>

        <div className="mx-auto max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <Reveal key={index} delayMs={index * 70}>
                <AccordionItem 
                  value={`item-${index}`}
                  className="rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 via-card/60 to-card/80 p-6 backdrop-blur-sm hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all ring-1 ring-border/20 hover:ring-primary/20"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Reveal>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
