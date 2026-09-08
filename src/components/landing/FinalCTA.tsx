import { MessageCircle } from "lucide-react";
import ContactButton from "@/components/common/ContactButton";

const FinalCTA = () => (
  <section className="py-24 px-4 bg-gradient-to-br from-accent/10 via-background to-primary/10">
    <div className="container mx-auto max-w-3xl text-center">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
        Não perca mais tempo com problemas de TI
      </h2>
      <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
        Clique no botão abaixo e fale agora mesmo com um técnico.
        <strong className="text-foreground"> Estamos prontos para ajudar!</strong>
      </p>
      <ContactButton size="lg" className="flex flex-auto text-lg px-10 py-7 animate-pulse-glow">
        <MessageCircle className="mr-2 h-6 w-6" />
        Contatar Técnico
      </ContactButton>
    </div>
  </section>
);

export default FinalCTA;
