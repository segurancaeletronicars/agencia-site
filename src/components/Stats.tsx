import { TrendingUp, Users, Zap } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "200+",
      label: "Modelos de IA Implementados",
      color: "text-primary",
    },
    {
      icon: Users,
      value: "85%",
      label: "Redução em Custos",
      color: "text-secondary",
    },
    {
      icon: Zap,
      value: "3x",
      label: "Aumento em Produtividade",
      color: "text-primary",
    },
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-gradient-card p-8 rounded-2xl border border-border shadow-card hover:shadow-glow transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`${stat.color} mb-4 p-4 bg-muted rounded-full`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-5xl font-bold text-foreground mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-muted-foreground text-lg">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
