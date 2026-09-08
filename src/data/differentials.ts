import { Users, Zap, MessageCircle, CheckCircle } from "lucide-react";
import type { IconCardItem } from "@/types/content";

export const differentials: IconCardItem[] = [
  {
    icon: Users,
    title: "Atendimento Direto com Técnicos",
    description: "Fale direto com quem resolve. Sem robôs, sem espera.",
  },
  {
    icon: Zap,
    title: "Resposta Rápida",
    description: "Atendemos em minutos. Seu tempo é precioso.",
  },
  {
    icon: MessageCircle,
    title: "Linguagem Simples",
    description: "Explicamos tudo sem 'tecniquês'. Você vai entender.",
  },
  {
    icon: CheckCircle,
    title: "Suporte Personalizado",
    description: "Cada cliente é único. Entendemos sua necessidade real.",
  },
];
