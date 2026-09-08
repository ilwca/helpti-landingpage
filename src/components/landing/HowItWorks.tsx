import type { CSSProperties } from "react";

interface Step {
  number: number;
  title: string;
  description: string;
  numberWrapperClassName: string;
  numberClassName: string;
  numberStyle?: CSSProperties;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Entre em contato",
    description: "Clique no botão do WhatsApp e descreva seu problema.",
    numberWrapperClassName: "bg-primary/10",
    numberClassName: "text-primary",
  },
  {
    number: 2,
    title: "Receba atendimento",
    description: "Um técnico vai responder rapidamente e entender sua situação.",
    numberWrapperClassName: "bg-accent/10",
    numberClassName: "text-accent-foreground",
    numberStyle: { color: "hsl(var(--accent))" },
  },
  {
    number: 3,
    title: "Problema resolvido",
    description: "Resolveremos remotamente ou agendaremos uma visita técnica em toda a região de Palmas.",
    numberWrapperClassName: "bg-secondary/30",
    numberClassName: "text-secondary-foreground",
  },
];

const HowItWorks = () => (
  <section className="py-20 px-4 bg-card">
    <div className="container mx-auto max-w-4xl text-center">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
        Como funciona?
      </h2>
      <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
        É simples: você nos conta seu problema pelo WhatsApp e um técnico de TI
        <strong className="text-foreground"> real</strong> vai te ajudar imediatamente.
        Sem burocracia, sem formulários intermináveis.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className="p-6 rounded-xl bg-background border border-border animate-fade-in"
            style={{ animationDelay: `${(index + 1) * 0.1}s` }}
          >
            <div className={`w-14 h-14 rounded-full ${step.numberWrapperClassName} flex items-center justify-center mx-auto mb-4`}>
              <span className={`text-2xl font-bold ${step.numberClassName}`} style={step.numberStyle}>
                {step.number}
              </span>
            </div>
            <h3 className="font-display font-semibold text-foreground mb-2">{step.title}</h3>
            <p className="text-muted-foreground text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
