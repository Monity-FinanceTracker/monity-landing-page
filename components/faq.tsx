import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Reveal } from "@/components/reveal"

const faqs = [
  {
    question: "Como funciona a categorização por IA?",
    answer: "A IA aprende com as suas escolhas. Exemplo real: 'Uber para o centro' → IA sugere 'Transporte'. Você aprova. Na próxima vez que pegar Uber, já sabe. Aprende em 1 tentativa. Ao aprovar ou corrigir sugestões, o sistema se adapta ao seu estilo e fica cada vez mais preciso — sem esforço extra. É como ter um assistente que te conhece melhor a cada dia."
  },
  {
    question: "Meus dados financeiros estão seguros?",
    answer: "Sim. Mesmo padrão de segurança que bancos usam. Seus dados? São SEUS. Não vendemos. Não compartilhamos. Não usamos para anúncios. Você exporta ou deleta quando quiser. Simples assim. Nós levamos privacidade a sério — seus dados financeiros nunca vão aparecer em nenhum lugar além da sua conta."
  },
  {
    question: "Como funciona a divisão de despesas em grupo?",
    answer: "Crie um grupo, convide membros por email ou link compartilhável. Adicione despesas compartilhadas e escolha como dividir: valores iguais, percentuais ou divisões personalizadas. O Monity rastreia automaticamente quem deve o quê e envia notificações em tempo real. Marque despesas como quitadas quando pagas — sistema recalcula tudo instantaneamente. Perfeito para colegas de quarto, viagens em grupo, jantares com amigos ou qualquer custo compartilhado. Zero conversas constrangedoras."
  },
  {
    question: "O que torna o Monity diferente do Mint ou YNAB?",
    answer: "Mint morreu. YNAB é complicado demais e caro (US$ 14.99/mês). Monity? Rápido, inteligente, brasileiro, e com divisão de contas integrada. IA que realmente aprende (não só categoriza). Interface que não parece trabalho. E tem plano grátis generoso de verdade — não uma versão limitada que te frustra até você pagar. Monity é o que esses apps deveriam ter sido."
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
    answer: "É como ter um consultor financeiro pessoal no bolso. Pergunte 'Por que gastei tanto mês passado?' ou 'Posso comprar isso?' e receba respostas baseadas nos SEUS dados reais — não conselhos genéricos da internet. A IA analisa seus hábitos, orçamentos e metas para dar recomendações personalizadas. Usuários gratuitos têm 3 mensagens por dia (suficiente para a maioria). Premium? Pergunte o quanto quiser."
  },
  {
    question: "O que é o Calculador de Investimentos?",
    answer: "Quer saber quanto você terá em 5 anos se investir R$ 500 por mês? Calculador mostra exatamente. Ajuste taxa de juros, período, aportes mensais e veja o gráfico crescer. Juros compostos são mágica — mas só se você VISUALIZAR o impacto. Plano gratuito: 2 simulações/mês (teste suas ideias). Premium: quantas quiser (compare todas as estratégias possíveis)."
  },
  {
    question: "Posso exportar meus dados?",
    answer: "Sim. A qualquer momento. CSV, Excel, PDF — escolha o formato. Históricos completos, orçamentos, relatórios de categoria, tudo. Seus dados são 100% SEUS. Quer sair? Leve tudo com você. Quer backup? Exporte todo mês. Sem burocracia, sem ligações pedindo para ficar. Um clique e pronto."
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
