const WHATSAPP_NUMBER = "63992580388";
const WHATSAPP_MESSAGE = "Olá! Gostaria de falar com um técnico de TI.";

export const CONTACT = {
  whatsapp: {
    number: WHATSAPP_NUMBER,
    link: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  },
  phone: {
    number: "+5563991370849",
    link: "tel:+5563991370849",
  },
  email: {
    address: "contato@helptibr.com",
    link: "mailto:contato@helptibr.com",
  },
  instagram: {
    handle: "@helptibr",
    url: "https://instagram.com/helptibr",
  },
} as const;
