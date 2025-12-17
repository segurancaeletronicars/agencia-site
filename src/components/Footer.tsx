import { Mail, Phone, MapPin } from "lucide-react";
import alfaLogo from "@/assets/alfa-logo.png";

const Footer = () => {
  return (
    <footer id="contato" className="bg-muted/20 border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={alfaLogo} alt="Alfa Logo" className="h-10 w-10" />
              <span className="text-xl font-bold text-foreground">
                Alfa Empreendimentos Digitais
              </span>
            </div>
            <p className="text-muted-foreground">
              Transformando negócios com inteligência artificial de ponta e soluções inovadoras.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#solucoes" className="text-muted-foreground hover:text-primary transition-colors">
                  Soluções
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                contato@alfadigital.com
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                (11) 9999-9999
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                São Paulo, Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Alfa Empreendimentos Digitais. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
