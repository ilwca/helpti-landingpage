import { MessageCircle, Phone, Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/common/Logo";
import ContactButton from "@/components/common/ContactButton";
import { CONTACT } from "@/constants/contact";

const Footer = () => (
  <footer id="contato" className="py-12 px-4 bg-foreground text-background scroll-mt-24">
    <div className="container mx-auto max-w-6xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-4">
          <Logo className="h-16 w-auto rounded bg-white p-1" />
          <div>
            <a
              className="flex flex-content items-center"
              href={CONTACT.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="mr-2 h-5 w-5 opacity-60" />
              <p className="opacity-80">{CONTACT.instagram.handle}</p>
            </a>
            <a className="flex flex-content items-center" href={CONTACT.email.link}>
              <Mail className="mr-2 h-5 w-5 opacity-60" />
              <p className="opacity-80">{CONTACT.email.address}</p>
            </a>
            <p className="text-sm opacity-80">Soluções de TI em Palmas-TO</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <ContactButton size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            <MessageCircle className="mr-2 h-5 w-5" />
            WhatsApp
          </ContactButton>
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="border-background/30 text-background hover:bg-background/10"
          >
            <a href={CONTACT.phone.link}>
              <Phone className="mr-2 h-5 w-5" />
              Ligar Agora
            </a>
          </Button>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-background/20 text-center">
        <p className="text-sm opacity-70">
          © {new Date().getFullYear()} HelpTI. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
