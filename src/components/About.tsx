import { Target, Lightbulb, Rocket } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "IA Sob Medida",
      description: "Desenvolvemos modelos de inteligência artificial personalizados que se adaptam perfeitamente ao seu negócio.",
    },
    {
      icon: Lightbulb,
      title: "Automação Inteligente",
      description: "Implementamos sistemas de IA que automatizam processos complexos, liberando sua equipe para focar no estratégico.",
    },
    {
      icon: Rocket,
      title: "Resultados Exponenciais",
      description: "Nossa expertise em IA gera insights preditivos e decisões data-driven que multiplicam seus resultados.",
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sobre a <span className="text-transparent bg-clip-text bg-gradient-primary">Alfa</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos pioneiros em inteligência artificial aplicada aos negócios. 
            Combinamos expertise técnica em IA com visão estratégica para criar 
            soluções que transformam dados em vantagem competitiva real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="bg-gradient-primary p-4 rounded-xl w-fit mb-6">
                  <Icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
