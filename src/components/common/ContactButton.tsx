import type { ReactNode } from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { CONTACT } from "@/constants/contact";

interface ContactButtonProps extends Omit<ButtonProps, "asChild" | "children"> {
  children: ReactNode;
}

const ContactButton = ({ children, ...props }: ContactButtonProps) => (
  <Button asChild {...props}>
    <a href={CONTACT.whatsapp.link} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  </Button>
);

export default ContactButton;
