import { Smartphone, Globe, BarChart3, ShoppingCart, MessageSquare, Workflow } from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      icon: Globe,
      title: "Machine Learning Customizado",
      description: "Modelos de ML treinados especificamente para resolver os desafios únicos do seu negócio.",
    },
    {
      icon: Smartphone,
      title: "Chatbots Inteligentes",
      description: "Assistentes virtuais com IA generativa que entendem contexto e geram respostas naturais.",
    },
    {
      icon: ShoppingCart,
      title: "Análise Preditiva",
      description: "IA que antecipa tendências, comportamentos e oportunidades para decisões estratégicas.",
    },
    {
      icon: BarChart3,
      title: "Visão Computacional",
      description: "Sistemas de reconhecimento de imagens e vídeos para automação e análise visual.",
    },
    {
      icon: MessageSquare,
      title: "Processamento de Linguagem",
      description: "NLP avançado para análise de sentimentos, classificação e extração de insights de textos.",
    },
    {
      icon: Workflow,
      title: "Automação com IA",
      description: "Workflows inteligentes que aprendem e se adaptam, otimizando processos continuamente.",
    },
  ];

  return (
    <section id="solucoes" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossas <span className="text-transparent bg-clip-text bg-gradient-primary">Soluções</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções de inteligência artificial de ponta que elevam seu negócio 
            a um novo patamar de eficiência, inovação e competitividade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer animate-slide-up hover:shadow-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="inline-block p-4 bg-muted rounded-xl group-hover:bg-gradient-primary transition-all duration-300">
                    <Icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
