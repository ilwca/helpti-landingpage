import SectionHeader from "@/components/common/SectionHeader";
import MobileCarousel from "@/components/landing/MobileCarousel";
import { differentials } from "@/data/differentials";

const Differentials = () => (
  <section id="diferenciais" className="py-20 px-4 bg-primary text-primary-foreground scroll-mt-24">
    <div className="container mx-auto max-w-6xl">
      <SectionHeader
        title="Por que escolher a HelpTI?"
        description="Somos diferentes porque tratamos você como pessoa, não como número."
        descriptionClassName="opacity-90"
      />
      {/* Desktop grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {differentials.map((diff, index) => (
          <div
            key={diff.title}
            className="p-6 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="w-12 h-12 rounded-lg bg-primary-foreground/20 flex items-center justify-center mb-4">
              <diff.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-display font-semibold mb-2">{diff.title}</h3>
            <p className="text-sm opacity-80">{diff.description}</p>
          </div>
        ))}
      </div>
      {/* Mobile carousel - right to left */}
      <MobileCarousel items={differentials} direction="rtl" theme="dark" />
    </div>
  </section>
);

export default Differentials;
