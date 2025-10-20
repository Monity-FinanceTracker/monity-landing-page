import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Como funciona a categorização por IA?",
    answer: "O Monity usa um classificador Naive Bayes treinado personalizado que aprende com seus padrões de transações. Quando você adiciona uma transação, a IA sugere uma categoria baseada na descrição, valor e seu comportamento passado. Quando você aprova ou corrige a sugestão, a IA se treina para ser mais precisa com SEUS hábitos únicos de gastos. Com o tempo, ela alcança 90%+ de precisão para a maioria dos usuários."
  },
  {
    question: "Meus dados financeiros estão seguros?",
    answer: "Absolutamente. Usamos Supabase com Row Level Security (RLS), significando que seus dados são isolados no nível do banco de dados e acessíveis apenas por você. Todas as conexões são criptografadas via HTTPS. Nunca vendemos seus dados, mostramos anúncios ou compartilhamos suas informações com terceiros. Você pode exportar ou deletar seus dados a qualquer momento."
  },
  {
    question: "Como funciona a divisão de despesas em grupo?",
    answer: "Crie um grupo, convide membros por email e comece a adicionar despesas compartilhadas. Escolha como dividir: valores iguais, percentuais ou divisões personalizadas. O Monity rastreia automaticamente quem deve o quê e envia notificações de dívidas em tempo real. Marque despesas como quitadas quando pagas. Perfeito para colegas de quarto, viagens ou qualquer custo compartilhado."
  },
  {
    question: "O que torna o Monity diferente do Mint ou YNAB?",
    answer: "O Monity é a única plataforma que combina rastreamento completo de finanças pessoais com divisão de despesas em grupo em tempo real. Nossa IA realmente aprende com seu feedback (não apenas correspondência de palavras-chave). Somos construídos com tecnologia moderna (React 19, Vite, Tailwind) para velocidade e beleza que aplicativos legados não conseguem igualar. Além disso, somos open-source e transparentes sobre nosso desenvolvimento."
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
    question: "Posso exportar meus dados?",
    answer: "Usuários Premium podem exportar histórico de transações, orçamentos e relatórios como arquivos CSV ou PDF. Seus dados sempre pertencem a você—nunca vamos prendê-lo. Usuários do nível gratuito podem visualizar e copiar manualmente seus dados a qualquer momento."
  },
  {
    question: "Como funciona o teste gratuito?",
    answer: "Comece com o nível Gratuito (sem cartão de crédito necessário). Quando estiver pronto para experimentar o Premium, você tem 14 dias grátis com acesso completo a todos os recursos Premium. Sem cartão de crédito necessário para o teste. Após 14 dias, você pode se inscrever para continuar no Premium ou permanecer no generoso nível Gratuito."
  }
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(1,195,141,0.05),transparent_70%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-balance text-lg leading-relaxed text-muted-foreground">
            Tudo que você precisa saber sobre o Monity. Não encontrou o que procura? 
            <a href="#" className="text-primary hover:underline">Entre em contato com nossa equipe de suporte</a>.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm hover:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
