import { MessageCircle, ImageIcon } from "lucide-react";
import { CustomCursor, useSetCursorVariant } from "@/components/ui/custom-cursor";
import ContactButton from "@/components/common/ContactButton";

const HERO_IMAGE_SRC = "/images/hero-img.webp";

const Hero = () => {
  const { cursorVariant, setCursorVariant, cursorText, setCursorText } = useSetCursorVariant();

  return (
    <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
      <CustomCursor
        variant={cursorVariant}
        text={cursorText}
        className="hidden lg:[@media(hover:hover)_and_(pointer:fine)]:flex"
      />
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Coluna de texto */}
          <div className="text-center lg:text-left animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Palmas - Tocantins
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Está deixando de <span className="text-primary">ganhar dinheiro</span> por problemas técnicos?
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10">
              Fale diretamente com um técnico de TI qualificado.
              <strong className="text-foreground"> Atendimento rápido, humano e sem complicação.</strong>
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
              <ContactButton
                size="lg"
                className="text-lg px-8 py-6 animate-pulse-glow"
                onMouseEnter={() => setCursorVariant("sm")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar com um técnico agora
              </ContactButton>
            </div>
          </div>

          {/* Coluna de imagem */}
          <div
            className="relative aspect-square lg:aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none rounded-2xl border border-border bg-card shadow-elevated overflow-hidden animate-fade-in"
            style={{ animationDelay: "0.15s" }}
            onMouseEnter={() => setCursorText("Suporte HelpTI")}
            onMouseLeave={() => setCursorText("")}
          >
            <img
              src={HERO_IMAGE_SRC}
              alt="Notebook exibindo tela azul de erro, representando um problema de TI"
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextElementSibling?.classList.remove("hidden");
              }}
            />
            <div className="hidden absolute inset-0 flex-col items-center justify-center gap-3 bg-muted text-muted-foreground">
              <ImageIcon className="h-10 w-10" />
              <span className="text-sm font-medium px-6 text-center">
                Imagem: hero-img.webp
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
