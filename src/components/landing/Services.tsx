import SectionHeader from "@/components/common/SectionHeader";
import MobileCarousel from "@/components/landing/MobileCarousel";
import { services } from "@/data/services";

const Services = () => (
  <section id="servicos" className="py-20 px-4 bg-background scroll-mt-24">
    <div className="container mx-auto max-w-6xl">
      <SectionHeader
        title="Nossos Serviços"
        description="Oferecemos soluções completas de TI para você e sua empresa."
        titleClassName="text-foreground"
        descriptionClassName="text-muted-foreground"
      />
      {/* Desktop grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <service.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-2">{service.title}</h3>
            <p className="text-muted-foreground text-sm">{service.description}</p>
          </div>
        ))}
      </div>
      {/* Mobile carousel - left to right */}
      <MobileCarousel items={services} direction="ltr" theme="light" />
    </div>
  </section>
);

export default Services;
