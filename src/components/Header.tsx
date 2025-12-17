import { Button } from "@/components/ui/button";
import alfaLogo from "@/assets/alfa-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={alfaLogo} alt="Alfa Logo" className="h-10 w-10" />
          <span className="text-xl font-bold text-foreground">
            Alfa Empreendimentos Digitais
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
            Home
          </a>
          <a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">
            Sobre
          </a>
          <a href="#solucoes" className="text-muted-foreground hover:text-primary transition-colors">
            Soluções
          </a>
          <a href="#contato" className="text-muted-foreground hover:text-primary transition-colors">
            Contato
          </a>
        </div>

        <Button className="bg-gradient-primary hover:shadow-glow transition-all">
          Fale Conosco
        </Button>
      </nav>
    </header>
  );
};

export default Header;
